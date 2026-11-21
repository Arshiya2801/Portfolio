import { useEffect, useRef } from 'react';

export default function ThemeLens({ sourceRef, theme, disabled }) {
  const lensRef = useRef(null);

  useEffect(() => {
    if (disabled || !CSS.supports('clip-path', 'circle(60px at 0 0)')) return;

    const source = sourceRef.current;
    const lens = lensRef.current;
    const canHover = window.matchMedia('(any-hover: hover) and (any-pointer: fine)');
    if (!canHover.matches) return;

    let mirrors;
    let content;
    let refreshPending = true;

    function syncValues() {
      source.querySelectorAll('input, textarea').forEach((field) => {
        const copy = mirrors.get(field);
        if (copy) copy.value = field.value;
      });
    }

    function syncScroll() {
      lens.scrollTop = window.scrollY;
    }

    function refresh() {
      // Mirror the rendered markup so the lens cannot mount a second form or navigation.
      mirrors = new WeakMap();
      content = source.cloneNode(true);
      const originals = source.querySelectorAll('*');
      const copies = content.querySelectorAll('*');
      originals.forEach((element, index) => {
        const copy = copies[index];
        copy.removeAttribute('id');
        mirrors.set(element, copy);
      });
      content.dataset.theme = theme === 'dark' ? 'light' : 'dark';
      lens.replaceChildren(content);
      syncValues();
      syncScroll();
      refreshPending = false;
    }

    function hide() {
      lens.removeAttribute('data-visible');
    }

    function move(event) {
      if (event.pointerType !== 'mouse' || event.target.closest('input, textarea, select, [contenteditable]')) {
        hide();
        return;
      }
      if (refreshPending) refresh();
      lens.style.setProperty('--lens-x', `${event.clientX}px`);
      lens.style.setProperty('--lens-y', `${event.clientY}px`);
      lens.dataset.visible = '';
    }

    function resize() {
      lens.style.width = `${document.documentElement.clientWidth}px`;
      syncScroll();
    }

    const observer = new MutationObserver((records) => {
      if (!content) return;
      if (records.some(({ type }) => type !== 'attributes')) {
        if (lens.hasAttribute('data-visible')) refresh();
        else refreshPending = true;
        return;
      }
      records.forEach(({ target, attributeName }) => {
        const copy = mirrors.get(target);
        if (!copy || attributeName === 'id') return;
        const value = target.getAttribute(attributeName);
        if (value === null) copy.removeAttribute(attributeName);
        else copy.setAttribute(attributeName, value);
      });
    });
    observer.observe(source, { subtree: true, attributes: true, childList: true, characterData: true });

    resize();
    document.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    document.addEventListener('keydown', hide);
    source.addEventListener('input', syncInput);
    window.addEventListener('blur', hide);
    window.addEventListener('resize', resize);
    window.addEventListener('scroll', syncScroll, { passive: true });

    function syncInput() {
      if (content) syncValues();
    }

    return () => {
      observer.disconnect();
      document.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
      document.removeEventListener('keydown', hide);
      source.removeEventListener('input', syncInput);
      window.removeEventListener('blur', hide);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', syncScroll);
      hide();
      lens.replaceChildren();
    };
  }, [disabled, sourceRef, theme]);

  return <div ref={lensRef} className="theme-lens" aria-hidden="true" inert />;
}
