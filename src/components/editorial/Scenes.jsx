import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const floatTransition = { duration: 3.6, ease: 'easeInOut', repeat: Infinity };
const restTransition = { duration: 0 };

const signalPositions = [14, 70, 39, 89, 25, 56, 78, 17, 47, 92, 31, 62];

export function CircuitGrid() {
  return <div className="circuit-grid" aria-hidden="true" />;
}

export function SignalParticles() {
  return (
    <div className="signal-particles" aria-hidden="true">
      {['left', 'right'].map((edge, edgeIndex) => (
        <div className={`signal-rail signal-rail-${edge}`} key={edge}>
          {signalPositions.map((position, index) => {
            const duration = 15 + index % 5 * 2;
            const phase = ((index * 7 + edgeIndex * 11) % 29) / 29;

            return (
              <span
                key={position}
                className="signal-particle"
                style={{
                  '--signal-position': `${position}%`,
                  '--signal-duration': `${duration}s`,
                  '--signal-delay': `${-phase * duration}s`,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export function DeskScene({ motionPaused }) {
  const scene = useRef(null);
  const stage = useRef(null);
  const isInView = useInView(stage, { amount: 0.15 });
  const isFloating = isInView && !motionPaused;
  const move = event => {
    if (motionPaused || event.pointerType !== 'mouse') return;
    const box = event.currentTarget.getBoundingClientRect();
    scene.current.style.setProperty('--tilt-x', `${(event.clientY - box.top - box.height / 2) / box.height * -6}deg`);
    scene.current.style.setProperty('--tilt-y', `${(event.clientX - box.left - box.width / 2) / box.width * 8}deg`);
  };
  const reset = () => {
    scene.current?.style.setProperty('--tilt-x', '0deg');
    scene.current?.style.setProperty('--tilt-y', '0deg');
  };
  return <div className="desk-stage" ref={stage} onPointerMove={move} onPointerLeave={reset} aria-hidden="true">
        <div className="desk-orbit" />
        <div className="desk-floor" />
        <div className="desk-assembly" ref={scene}>
            <motion.div
              className="desk-sphere-layer"
              initial={false}
              animate={isFloating ? { y: [0, -20, 0], x: [0, 8, 0] } : { y: 0, x: 0 }}
              transition={isFloating ? floatTransition : restTransition}
            >
            <div className="wire-sphere">{Array.from({
          length: 5
        }, (_, i) => <i key={i} style={{
          transform: `rotateY(${i * 36}deg)`
        }} />)}<b /><b /></div>
            </motion.div>
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

export function SkillBlocks({ motionPaused }) {
  const stack = useRef(null);
  const isInView = useInView(stack, { amount: 0.2 });
  const isFloating = isInView && !motionPaused;

  return (
    <div className="skill-blocks" ref={stack} aria-hidden="true">
      {[0, 1, 2].map((level) => (
        <motion.div
          key={level}
          className={`skill-block skill-block-${level}`}
          initial={false}
          animate={isFloating ? { y: [0, -6 - level * 12, 0] } : { y: 0 }}
          transition={isFloating ? floatTransition : restTransition}
        >
          <span />
        </motion.div>
      ))}
    </div>
  );
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
