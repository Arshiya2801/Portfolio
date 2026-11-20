import { useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
export function DeskScene() {
  const scene = useRef(null);
  const reduceMotion = useReducedMotion();
  const move = event => {
    if (reduceMotion || scene.current?.closest('[data-motion="reduced"]') || event.pointerType !== 'mouse') return;
    const box = event.currentTarget.getBoundingClientRect();
    scene.current.style.setProperty('--tilt-x', `${(event.clientY - box.top - box.height / 2) / box.height * -6}deg`);
    scene.current.style.setProperty('--tilt-y', `${(event.clientX - box.left - box.width / 2) / box.width * 8}deg`);
  };
  const reset = () => {
    scene.current?.style.setProperty('--tilt-x', '0deg');
    scene.current?.style.setProperty('--tilt-y', '0deg');
  };
  return <div className="desk-stage" onPointerMove={move} onPointerLeave={reset} aria-hidden="true">
        <div className="desk-orbit" />
        <div className="desk-floor" />
        <div className="desk-assembly" ref={scene}>
            <div className="wire-sphere">{Array.from({
          length: 5
        }, (_, i) => <i key={i} style={{
          transform: `rotateY(${i * 36}deg)`
        }} />)}<b /><b /></div>
            <div className="desk-monitor">
                <div className="monitor-bezel">
                    <div className="monitor-title"><span>ARSHIYA / WORKSPACE</span><span>● ● ●</span></div>
                    <div className="monitor-code"><span className="code-comment">// ideas into interfaces</span><br /><span>const</span> developer = {'{'}<br />&nbsp; name: <em>'Arshiya'</em>,<br />&nbsp; stack: <em>'full-stack + AI'</em>,<br />&nbsp; curiosity: <em>true</em><br />{'}'};<br /><br /><strong>&gt; build something good<span className="terminal-cursor" /></strong></div>
                </div>
                <div className="monitor-neck" /><div className="monitor-foot" />
            </div>
            <div className="keycap keycap-braces"><span>{'{ }'}</span></div>
            <div className="keycap keycap-terminal"><span>&gt;_</span></div>
            <div className="desk-sticker">CODE.<br />CREATE.<br />REPEAT.</div>
        </div>
        <span className="scene-caption">A LITTLE PLAY. A LOT OF PURPOSE.</span>
    </div>;
}
export function ApolloScene() {
  return <div className="project-scene apollo-scene" aria-hidden="true">
        <div className="scene-grid" />
        <div className="apollo-graph"><span className="graph-node node-a" /><span className="graph-node node-b" /><span className="graph-node node-c" /><span className="graph-node node-d" /><i /><i /><b>CONTEXT CONNECTED</b></div>
        <div className="apollo-terminal"><span>APOLLO / RUNTIME</span><p>&gt; tests passed<br />&gt; ready to run <b>▌</b></p></div>
        <div className="apollo-editor"><div className="pane-bar"><span>● ● ●</span><span>workspace.js</span></div><div className="editor-body"><small>01<br />02<br />03<br />04<br />05</small><code><b>const</b> idea = {'{'}<br />&nbsp; explain: <em>true</em>,<br />&nbsp; debug: <em>true</em>,<br />&nbsp; build: <em>'together'</em><br />{'}'};</code></div></div>
        <span className="scene-label">YOUR NEXT IDEA, IN LAYERS.</span>
    </div>;
}
export function MindClashScene() {
  return <div className="project-scene debate-scene" aria-hidden="true">
        <div className="scene-grid" />
        <div className="debate-platform"><span>THE DEBATE FLOOR</span></div>
        <div className="debate-bubble bubble-red"><span>MAKE<br />YOUR<br />POINT.</span></div>
        <div className="debate-bubble bubble-lime"><span>MAKE<br />IT<br />COUNT.</span></div>
        <div className="referee-tile"><span>AI</span><small>REFEREE</small></div>
        <span className="scene-label">TWO SIDES. ONE LIVE CONVERSATION.</span>
    </div>;
}
export function MiniScene({
  type
}) {
  if (type === 'MediQueue') return <div className="mini-scene queue-scene" aria-hidden="true"><div className="queue-ticket"><span>MEDIQUEUE</span><b>+</b><i /><i /><strong>YOUR TURN.</strong></div><div className="queue-cross">+</div></div>;
  const symbols = {
    'Streamly Backend API': '▶',
    'Currency Converter': '⇄',
    'Background Changer': '◒',
    'To-Do List': '✓',
    'Customer Segmentation': '◔'
  };
  return <div className={`mini-scene mini-${type.split(' ')[0].toLowerCase()}`} aria-hidden="true"><div className="mini-disc" /><div className="mini-tile">{symbols[type] || '{ }'}</div><div className="mini-track" /></div>;
}
export function EnvelopeScene() {
  return <span className="envelope-scene" aria-hidden="true"><span className="envelope-letter">LET’S TALK.</span><span className="envelope-body" /><span className="envelope-flap" /></span>;
}
