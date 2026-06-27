import{r as e,j as r}from"./react-core-CPHnqsFW.js";import{d as i}from"./styled-CHfxRgpd.js";import{m as E}from"./icons-DNJk4BLK.js";import{b as R,m as p}from"./framer-DRpzP9-u.js";import"./markdown-DNQhOqsY.js";const j=i.div`
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 100;
  
  ${({$isMobileOnly:n})=>n&&`
    display: none;
  `}
  
  @media (max-width: 768px) {
    ${({$isDesktopOnly:n})=>n&&`
      display: none !important;
    `}
    
    ${({$isMobileOnly:n})=>n&&`
      display: flex !important;
    `}
    
    position: relative;
    bottom: auto;
    left: auto;
    right: auto;
    transform: none;
    margin: 60px auto 0 auto;
    display: flex;
    justify-content: center;
    pointer-events: none;
    z-index: 10;
    width: fit-content;
  }
`,T=i(p.div)`
  cursor: pointer;
  pointer-events: auto;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  will-change: transform;
`,H=i(p.div)`
  font-size: 3rem;
  color: var(--color-accent-primary);
  filter: drop-shadow(0 0 10px rgba(0, 93, 166, 0.4));
  will-change: transform;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;i(p.div)`
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 30px;
  background: linear-gradient(180deg, #ff6b6b 0%, #ffd93d 50%, transparent 100%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  filter: blur(2px);
  opacity: 0;
  transform-origin: top center;
  will-change: transform, opacity;
`;const I=i(p.div)`
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  background: radial-gradient(circle, rgba(0, 178, 255, 0.5) 0%, rgba(0, 93, 166, 0.2) 50%, transparent 100%);
  border-radius: 50%;
  filter: blur(4px);
  will-change: transform, opacity;
`,S=i(p.div)`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) !important;
  background: var(--color-bg-card);
  color: var(--color-text-primary);
  padding: 8px 14px;
  border-radius: 12px;
  font-size: 0.825rem;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--color-border);
  pointer-events: none;
  z-index: 10;
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: var(--color-bg-card);
  }
  &::before {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 7px solid transparent;
    border-top-color: var(--color-border);
    z-index: -1;
  }
`,B=({isMobileOnly:n=!1,isDesktopOnly:y=!1})=>{const[x,b]=e.useState(!1),[h,s]=e.useState(!1),[o,g]=e.useState(!1),[d,u]=e.useState(0),t=R(),f=e.useRef(null),l=e.useRef(null);e.useEffect(()=>{if(o)return;const c=setInterval(()=>{t.start({scale:[1,1.12,1],transition:{duration:.8,ease:"easeInOut"}})},4500);return()=>clearInterval(c)},[o,t]);const v=async()=>{if(o)return;l.current&&clearTimeout(l.current);const c=d+1;if(u(c),s(!0),c>=3){g(!0),window.dispatchEvent(new CustomEvent("rocket-launch")),await t.start({x:[0,-5,5,-5,5,0],transition:{duration:.25}});let a;const w=()=>{if(f.current){const m=f.current.getBoundingClientRect(),C=m.left+m.width/2,z=m.bottom;window.dispatchEvent(new CustomEvent("rocket-emit-smoke",{detail:{x:C,y:z}}))}a=requestAnimationFrame(w)};w(),await t.start({y:-window.innerHeight-200,transition:{duration:1.2,ease:[.25,.46,.45,.94]}}),cancelAnimationFrame(a),setTimeout(()=>{t.set({y:0,x:0}),g(!1),u(0),s(!1)},700)}else t.start({y:[0,-20,0],transition:{duration:.3}}),l.current=setTimeout(()=>{u(0),s(!1)},3e3)};e.useEffect(()=>()=>{l.current&&clearTimeout(l.current)},[]),e.useEffect(()=>{o||t.start({y:[0,-10,0],transition:{duration:3.5,repeat:1/0,ease:"easeInOut"}})},[o,t]);const k=d===0?"Requesting flight clearance... ✈️":d===1?"Engines spooling up... Tap again! ⚡️":"Cleared for takeoff! 🛫";return r.jsx(j,{$isMobileOnly:n,$isDesktopOnly:y,children:r.jsxs(T,{ref:f,animate:t,onHoverStart:()=>{b(!0),s(!0)},onHoverEnd:()=>{b(!1),d===0&&s(!1)},onClick:v,whileHover:{scale:1.15},whileTap:{scale:.95},children:[r.jsx(H,{animate:{rotate:-90},transition:{duration:.3},children:r.jsx(E,{})}),o&&r.jsx(r.Fragment,{children:[...Array(3)].map((c,a)=>r.jsx(I,{initial:{opacity:.6,scale:0},animate:{y:[0,60],x:[0,(a-1)*12],opacity:[.6,0],scale:[1,2.5]},transition:{duration:.6,delay:a*.08,repeat:1/0,ease:"easeOut"}},a))}),r.jsx(S,{initial:{opacity:0,y:10,x:"-50%"},animate:{opacity:(h||x)&&!o?1:0,y:(h||x)&&!o?0:10,x:"-50%"},children:k})]})})};export{B as default};
