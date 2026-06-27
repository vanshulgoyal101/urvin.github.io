const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FloatingRocket-BQiG8dOO.js","assets/react-core-CPHnqsFW.js","assets/markdown-DNQhOqsY.js","assets/styled-CHfxRgpd.js","assets/icons-DNJk4BLK.js","assets/framer-DRpzP9-u.js","assets/RandomTelemetry-BOwQKIfY.js","assets/react-vendor-BakkmLcC.js","assets/WorldMap-CUoF2Kkz.js"])))=>i.map(i=>d[i]);
import{r as d,j as e,R as me}from"./react-core-CPHnqsFW.js";import{u as he,a as ge,b as Te,L as Ce,B as Ae,R as Ee,c as U,d as Oe}from"./react-vendor-BakkmLcC.js";import{f as Pe,d as t,m as G}from"./styled-CHfxRgpd.js";import{H as Fe,a as Me,F as Y,b as Re,M as Le,B as We,c as Be,d as X,e as He,f as $e,g as ue,h as _e,i as xe,j as O,k as De,l as qe,m as k,n as Ne,o as Ge,p as Ve,q as Ue,r as Ye,s as L,t as Xe,u as Je,v as Ke,w as Qe,x as Ze,y as et,z as tt}from"./icons-DNJk4BLK.js";import{m as l,u as it,a as at,A as j}from"./framer-DRpzP9-u.js";import{M as ot,g as rt}from"./markdown-DNQhOqsY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();const nt="modulepreload",st=function(i){return"/urvin.github.io/"+i},J={},P=function(o,r,a){let n=Promise.resolve();if(r&&r.length>0){let x=function(p){return Promise.all(p.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),h=c?.nonce||c?.getAttribute("nonce");n=x(r.map(p=>{if(p=st(p),p in J)return;J[p]=!0;const m=p.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${g}`))return;const u=document.createElement("link");if(u.rel=m?"stylesheet":nt,m||(u.as="script"),u.crossOrigin="",u.href=p,h&&u.setAttribute("nonce",h),document.head.appendChild(u),m)return new Promise((f,b)=>{u.addEventListener("load",f),u.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${p}`)))})}))}function s(c){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=c,window.dispatchEvent(h),!h.defaultPrevented)throw c}return n.then(c=>{for(const h of c||[])h.status==="rejected"&&s(h.reason);return o().catch(s)})},lt=Pe`
  :root {
    /* Color Palette - United Airlines Executive Theme (Navy, Slate, Sky Blue & Gold accents) */
    --color-bg-primary: #f4f6f9;
    --color-bg-secondary: #ffffff;
    --color-bg-tertiary: #e9ecef;
    --color-bg-card: #ffffff;
    
    --color-text-primary: #002244;
    --color-text-secondary: #334e68;
    --color-text-muted: #627d98;
    
    --color-accent-primary: #005da6;
    --color-accent-secondary: #00b2ff;
    --color-accent-glow: rgba(0, 93, 166, 0.08);
    
    --color-gradient-1: linear-gradient(135deg, #002244 0%, #005da6 100%);
    --color-gradient-2: linear-gradient(135deg, #f4f6f9 0%, #ffffff 100%);
    
    --color-border: rgba(0, 34, 68, 0.08);
    --color-border-hover: rgba(0, 34, 68, 0.15);
    
    /* Fluid Spacing - scales with viewport */
    --spacing-xs: clamp(0.25rem, 0.5vw, 0.5rem);
    --spacing-sm: clamp(0.5rem, 1vw, 1rem);
    --spacing-md: clamp(1rem, 2vw, 2rem);
    --spacing-lg: clamp(1.5rem, 3vw, 3rem);
    --spacing-xl: clamp(2.5rem, 5vw, 5rem);
    --spacing-2xl: clamp(4rem, 8vw, 8rem);
    
    /* Container widths */
    --container-xs: 100%;
    --container-sm: 640px;
    --container-md: 768px;
    --container-lg: 1024px;
    --container-xl: 1280px;
    --container-2xl: 1536px;
    
    /* Fluid container padding */
    --container-padding: clamp(1rem, 5vw, 3rem);
    
    /* Typography - Fluid font sizes */
    --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-display: 'Space Grotesk', 'Inter', sans-serif;
    --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
    
    --text-xs: clamp(0.75rem, 1.5vw, 0.875rem);
    --text-sm: clamp(0.875rem, 2vw, 1rem);
    --text-base: clamp(1rem, 2.5vw, 1.125rem);
    --text-lg: clamp(1.125rem, 3vw, 1.25rem);
    --text-xl: clamp(1.25rem, 3.5vw, 1.5rem);
    --text-2xl: clamp(1.5rem, 4vw, 1.875rem);
    --text-3xl: clamp(1.875rem, 5vw, 2.25rem);
    --text-4xl: clamp(2.25rem, 6vw, 3rem);
    --text-5xl: clamp(3rem, 8vw, 4rem);
    --text-6xl: clamp(3.75rem, 10vw, 6rem);
    
    /* Animations */
    --transition-base: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --transition-slow: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    
    /* Z-index layers */
    --z-base: 0;
    --z-dropdown: 100;
    --z-sticky: 200;
    --z-fixed: 300;
    --z-modal: 400;
    --z-tooltip: 500;
    
    /* Breakpoints for JS usage */
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
    --breakpoint-2xl: 1536px;
  }

  /* CSS Reset with smooth defaults */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    // cursor: none !important;
  }

  html {
    font-size: 100%; /* Respect user's font size preference */
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--color-bg-primary);
  }

  body {
    font-family: var(--font-primary);
    font-size: var(--text-base);
    background-color: var(--color-bg-primary);
    background-image: 
      linear-gradient(to right, rgba(30, 41, 59, 0.025) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(30, 41, 59, 0.025) 1px, transparent 1px);
    background-size: 80px 80px;
    background-attachment: fixed;
    color: var(--color-text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
    
    /* Noise texture overlay for depth */
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.02;
      z-index: 1;
      pointer-events: none;
      background-image: 
        repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.02) 35px, rgba(255,255,255,.02) 70px);
    }
  }

  /* Fluid Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
  }

  h1 { font-size: var(--text-6xl); }
  h2 { font-size: var(--text-5xl); }
  h3 { font-size: var(--text-4xl); }
  h4 { font-size: var(--text-3xl); }
  h5 { font-size: var(--text-2xl); }
  h6 { font-size: var(--text-xl); }

  p {
    color: var(--color-text-secondary);
    line-height: 1.8;
    font-size: var(--text-base);
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: var(--transition-base);
  }

  /* Selection */
  ::selection {
    background-color: var(--color-accent-primary);
    color: var(--color-bg-primary);
  }

  /* Fluid Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(29, 78, 216, 0.2);
    border-radius: 100px;
    border: 2px solid transparent;
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(29, 78, 216, 0.6);
    background-clip: padding-box;
  }
  
  /* Firefox Scrollbar standards */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(29, 78, 216, 0.2) transparent;
  }

  /* Responsive Container */
  .container {
    width: 100%;
    margin: 0 auto;
    padding: 0 var(--container-padding);
    
    @media (min-width: 640px) {
      max-width: var(--container-sm);
    }
    
    @media (min-width: 768px) {
      max-width: var(--container-md);
    }
    
    @media (min-width: 1024px) {
      max-width: var(--container-lg);
    }
    
    @media (min-width: 1280px) {
      max-width: var(--container-xl);
    }
  }

  section {
    scroll-margin-top: 0px;

    @media (max-width: 768px) {
      scroll-margin-top: 40px;
    }
  }

  /* Fluid Section Spacing */
  .section {
    will-change: auto; /* Only use will-change when needed */
    padding: var(--spacing-2xl) 0;
    overflow: visible !important;
    position: relative !important;
    z-index: 2 !important;
  }

  /* Responsive Grid System */
  .grid {
    display: grid;
    gap: var(--spacing-md);
    
    &.cols-2 {
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
    }
    
    &.cols-3 {
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
    }
    
    &.cols-4 {
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
    }
  }

  /* Glow effect for interactive elements */
  .glow {
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      inset: -2px;
      background: var(--color-gradient-1);
      border-radius: inherit;
      opacity: 0;
      z-index: -1;
      transition: opacity 0.3s ease;
      filter: blur(clamp(0.5rem, 1vw, 1rem));
    }
    
    &:hover::before {
      opacity: 0.6;
    }
  }

  /* Glass morphism effect */
  .glass {
    background: rgba(255, 255, 255, 0.55);
    backdrop-filter: blur(10px);
    border: 1px solid var(--color-border);
  }

  /* Responsive images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }

  /* Responsive button styles */
  .btn {
    padding: clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem);
    font-size: var(--text-sm);
    border-radius: 0.25rem;
    transition: var(--transition-base);
  }

  /* Hide elements accessibly */
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Touch-friendly tap targets */
  button, a, input, textarea, select {
    min-height: 44px; /* iOS recommendation */
    min-width: 44px;
  }

  /* Media query for reduced motion */
 @media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Hide scrollbar for mobile but keep functionality */
  @media (max-width: 768px) {
    ::-webkit-scrollbar {
      display: none;
    }
    
    * {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

      /* Fix sections not showing */
  section {
    min-height: auto;
    padding: var(--spacing-lg) 0;
  }
  
    /* Fix container padding */
    .container {
        padding: 0 1rem !important;
    }
    /* Fix font sizes */
    h1 { font-size: var(--text-4xl) !important; }
    h2 { font-size: var(--text-3xl) !important; }
    h3 { font-size: var(--text-2xl) !important; }
    
    /* Fix grid layouts */
    .grid {
        grid-template-columns: 1fr !important;
    }
  }
`,ct=t(l.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-fixed);
  transition: 
    top 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
    left 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
    right 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
    max-width 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
    margin 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
    background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
    border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
    border-radius 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
    backdrop-filter 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  background: transparent;

  ${({$scrolled:i})=>i&&`
    top: 1rem;
    left: 1.5rem;
    right: 1.5rem;
    max-width: calc(var(--container-xl) - 3rem);
    margin: 0 auto;
    background: rgba(246, 243, 235, 0.75);
    border: 1px solid rgba(30, 41, 59, 0.06);
    border-radius: 100px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0 12px 30px rgba(30, 41, 59, 0.06);
    
    @media (max-width: 768px) {
      top: calc(0.5rem + env(safe-area-inset-top, 0px));
      left: 1rem;
      right: 1rem;
      max-width: calc(100% - 2rem);
    }
  `}
`,dt=t.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: ${({$scrolled:i})=>i?"0.75rem 1.75rem":"clamp(1rem, 3vw, 1.5rem) var(--container-padding)"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: padding 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  
  @media (max-width: 768px) {
    padding: ${({$scrolled:i})=>i?"0.6rem 1.2rem":"calc(1rem + env(safe-area-inset-top, 0px)) var(--container-padding) 1rem var(--container-padding)"};
  }
`,pt=t(l.a)`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  position: relative;
  z-index: var(--z-fixed);
  text-decoration: none;
`,mt=t.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-card);
  border-radius: 50%;
  box-shadow: 0 4px 10px rgba(30, 41, 59, 0.03);
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--color-accent-primary);
  font-family: var(--font-display);
`,ht=t.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  pointer-events: none;
`,gt=t(l.ul)`
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 3vw, 3rem);
  list-style: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: min(75vw, 360px);
    background: rgba(246, 243, 235, 0.85);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    transform: translateX(calc(100% + 40px));
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: -15px 0 40px rgba(30, 41, 59, 0.05);
    border-left: 1px solid rgba(30, 41, 59, 0.08);
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;

    ${({$isOpen:i})=>i&&`
      transform: translateX(0);
    `}
  }
`,ut=t(l.a)`
  color: var(--color-text-secondary);
  font-size: var(--text-sm);
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-text-primary);
  }
  
  &:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 4px;
    border-radius: 4px;
    color: var(--color-text-primary);
  }
  
  @media (max-width: 768px) {
    min-height: 48px;
    display: flex;
    align-items: center;
  }

  @media (min-width: 769px) {
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: var(--color-accent-primary);
      transition: width 0.3s ease;
    }

    &:hover::after,
    &:focus-visible::after {
      width: 100%;
    }

    &.active::after {
      width: 100%;
      background: var(--color-gradient-1);
    }
  }

  @media (max-width: 768px) {
    font-size: var(--text-lg);
    width: 100%;
    padding: 1rem 0;
    
    &.active {
      color: var(--color-accent-primary);
    }
  }
`,xt=t(l.button)`
  display: none;
  background: none;
  border: none;
  color: var(--color-text-primary);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  z-index: var(--z-fixed);
  
  &:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 4px;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`,ft=t(l.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(30, 41, 59, 0.35);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: calc(var(--z-fixed) - 1);
    cursor: pointer;
  }
`;t(l.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--color-gradient-1);
  transform-origin: 0%;
  z-index: var(--z-tooltip); /* Sit above everything, even fixed nav */
`;const N=({scrollToSection:i})=>{const[o,r]=d.useState(!1),[a,n]=d.useState(!1),[s,c]=d.useState("home"),[h,x]=d.useState(!1),p=he(),m=ge();d.useEffect(()=>{const y=()=>x(window.innerWidth<=768);return y(),window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]);const{scrollYProgress:g}=it(),u=at(g,{stiffness:100,damping:30,restDelta:.001}),f=d.useMemo(()=>[{id:"home",label:"Home"},{id:"about",label:"About"},{id:"work",label:"Work"},{id:"projects",label:"Projects"},{id:"blog",label:"Blog"},{id:"contact",label:"Contact"}],[]),b=m.pathname.startsWith("/blog")?"blog":s;d.useEffect(()=>{const y=()=>{r(window.scrollY>50);const z=f.map(S=>document.getElementById(S.id)),C=window.scrollY+window.innerHeight/3;z.forEach((S,Ie)=>{if(S){const{offsetTop:V,offsetHeight:ze}=S;C>=V&&C<V+ze&&c(f[Ie].id)}})};return window.addEventListener("scroll",y),y(),()=>window.removeEventListener("scroll",y)},[f]),d.useEffect(()=>(a?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]);const w=d.useCallback((y,z)=>{y.preventDefault(),n(!1),m.pathname==="/"?setTimeout(()=>{i(z)},300):(p("/"),setTimeout(()=>{const S=document.getElementById(z);S&&S.scrollIntoView({behavior:"smooth"})},500))},[i,p,m.pathname]),F={hidden:{y:-100},visible:{y:0,transition:{duration:.6,ease:"easeOut"}}},M={hidden:{opacity:0,y:-20},visible:y=>({opacity:1,y:0,transition:{delay:y*.1+.3,duration:.5,ease:"easeOut"}})},R={closed:{opacity:0,transition:{duration:.2,ease:"easeOut"}},open:{opacity:1,transition:{duration:.3,ease:"easeIn"}}};return e.jsxs(e.Fragment,{children:[e.jsx(ct,{variants:F,initial:"hidden",animate:"visible",$scrolled:o,children:e.jsxs(dt,{$scrolled:o,children:[e.jsx(pt,{onClick:y=>w(y,"home"),whileHover:{scale:1.03},whileTap:{scale:.95},children:e.jsxs(mt,{children:["UK",e.jsxs(ht,{viewBox:"0 0 40 40",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"progress-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"var(--color-accent-primary)"}),e.jsx("stop",{offset:"100%",stopColor:"var(--color-accent-secondary)"})]})}),e.jsx("circle",{cx:"20",cy:"20",r:"19",fill:"none",stroke:"rgba(30, 41, 59, 0.05)",strokeWidth:"1.2"}),e.jsx(l.circle,{cx:"20",cy:"20",r:"19",fill:"none",stroke:"url(#progress-gradient)",strokeWidth:"1.8",strokeLinecap:"round",pathLength:u})]})]})}),e.jsx(gt,{$isOpen:a,children:f.map((y,z)=>e.jsx(l.li,{variants:M,initial:"hidden",animate:"visible",custom:z,children:e.jsx(ut,{onClick:C=>w(C,y.id),className:b===y.id?"active":"",whileHover:{scale:1.05},whileTap:{scale:.92},children:y.label})},y.id))}),e.jsx(xt,{onClick:()=>n(!a),whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":"Toggle mobile menu",children:e.jsx(j,{mode:"wait",children:a?e.jsx(l.div,{initial:{rotate:-90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:90,opacity:0},transition:{duration:.2},children:e.jsx(Fe,{})},"close"):e.jsx(l.div,{initial:{rotate:90,opacity:0},animate:{rotate:0,opacity:1},exit:{rotate:-90,opacity:0},transition:{duration:.2},children:e.jsx(Me,{})},"menu")})})]})}),e.jsx(j,{children:a&&e.jsx(ft,{variants:R,initial:"closed",animate:"open",exit:"closed",onClick:()=>n(!1)})})]})},vt=`---
id: 3
title: "Health in a Post-AGI World"
slug: "health-post-agi"
summary: "In a post-AGI world of abundance, humanity's focus must shifts from work to the holistic pursuit of health and well-being..."
date: "25 Sep, 2024"
readTime: "3 min read"
category: "AI"
---

For all of human history, our lives have been shaped by a single, powerful force: the need to work. We work for food, for shelter, for a living. Our days, our years, and even our societies are built around this central pillar.

But what if that pillar was removed?

Let's try a thought experiment. Imagine a world a few decades from now, where Artificial General Intelligence (AGI), and perhaps even Superintelligence (ASI), has arrived. Imagine it has solved our biggest logistical challenges—energy, production, resource distribution. True abundance becomes the reality. The need to work for survival simply disappears.

When you no longer have to spend eight hours a day earning a living, how do you spend those eight hours? When the primary question of 'How do I survive?' is answered for everyone, what becomes the next question?

It seems plausible that our focus would shift from the external world of tasks and jobs to the internal world of our own being. If this happens, then the pursuit of **Health** might become one of the most important projects of humanity, if not the most important.

But what does 'health' even mean in a world like this? It would likely expand far beyond just the absence of disease. It would become an active, lifelong pursuit of cultivating human potential. We can probably think about it in a few key layers.

## 1. Physical Health: Mastering the Vessel

Without jobs that break our bodies or keep us sedentary, we would have the time and energy to focus on our physical selves. The goal wouldn't just be to live long, but to live well.

- **Strength:** Not just for manual labor, but as a foundation for vitality and resilience.
- **Mobility:** The freedom to move without pain or restriction.
- **Endurance:** The ability to explore, play, and experience the world for longer without tiring.
- **Longevity:** AGI would surely unlock a longer lifespan, but the real goal would become **healthspan**—the number of years we live in a state of high vitality.

## 2. Mental and Emotional Health: Tending the Garden Within

A lot of our modern anxiety comes from work-related stress, deadlines, and financial pressure. When these pressures fade, what do we do with our minds?

The focus might shift to cultivating a state of inner clarity and stability. It would mean developing emotional regulation not as a way to cope with a stressful job, but as a skill for deeper relationships and personal peace. We would have the time to learn for the sake of pure curiosity and to build genuine resilience against life's inherent uncertainties.

## 3. Spiritual Health: The Search for Why

This might be the most interesting layer. When the 'what' (what we do for a living) is no longer our identity, we are left with the 'why.' Why are we here? What gives us a sense of purpose and connection?

For many, this could become the central pursuit of their lives. Whether through philosophy, community, art, nature, or traditional spiritual paths, the search for meaning would no longer be a luxury squeezed in on weekends. It could become the main event.

In a world where AGI provides all the answers to our external problems, we would be left with the freedom—and the challenge—of asking the most fundamental questions about ourselves. For millennia, humanity's project has been to master the world around us. In a post-AGI world, the only project left might be to master ourselves.
`,bt=`---
id: 5
title: "Meat Without The Animal"
slug: "meat-without-the-animal"
summary: "What if meat wasn't something we harvested, but something we designed? Exploring the world of cultivated meat and how it could change our relationship with food itself."
date: "16 Nov, 2023"
readTime: "3 min read"
category: "Future of Food"
---

I've been thinking about the things we take for granted. We build skyscrapers, we write code that connects billions of people, but when it comes to food, we're still largely running on ancient software. For thousands of years, if you wanted to eat meat, you had one option: raise and kill an animal.

It's a simple, almost primal, equation. But it makes me wonder, is that equation still the right one? What if we re-examined meat from first principles?

What is meat, really? It's a specific collection of proteins, fats, and minerals, arranged in a structure that our bodies find nutritious and our palates find delicious. The animal is just the biological factory that produces it. But what if we could build a better factory?

This is the idea behind cultivated, or lab-grown, meat. It's not a meat *substitute*. It's meat, grown directly from animal cells, without the animal itself. It sounds like science fiction, but it's already happening. And it presents a few fascinating possibilities.

### 1. Designing for Health

An animal's meat is a product of its evolution and its environment. A cow is optimized to be a cow, not to be the perfect food for a human. Its meat has a certain ratio of saturated to unsaturated fats, a certain profile of vitamins and minerals. We can choose the animal, but we can't really change the fundamental product.

Cultivated meat changes this. It turns the product into a design problem. What if we could grow a steak with the fat profile of an avocado? Or increase the concentration of Omega-3s? We could design meat that is perfectly tuned for human nutrition, reducing the risk of heart disease or other health issues associated with conventional meat consumption. The factory becomes a laboratory for ideal food.

### 2. The End of a Moral Compromise

For many people, there's a quiet, internal conflict every time they eat meat. They enjoy it, but they are also aware of the animal welfare and environmental issues tied to industrial farming. It's a compromise we've all implicitly agreed to.

Cultivated meat offers a way out of that compromise. It provides the same end product, but it decouples it from the process of animal suffering and the immense environmental footprint of livestock farming—from land use to methane emissions. It allows us to have what we want without the ethical and ecological cost. It’s a technology that could resolve a global-scale moral tension.

### 3. Food as Software

This might be the most interesting part. When you can grow meat cell by cell, you can control its final form. Why does a steak have to be steak-shaped?

You could, in theory, grow meat in any shape you can imagine. You could create entirely new culinary experiences. Imagine 3D-printing a lattice of muscle and fat cells for a texture that's impossible to find in nature. It sounds strange, but it turns food from something we just *harvest* into something we can *design*. It's the shift from hardware to software.

This isn't to say the path is simple. There are huge challenges in scaling the technology, making it affordable, and navigating regulatory hurdles. But the potential is there.

For all of our history, we've been bound by the limits of the natural world. We found what was edible and figured out how to cook it. Now, we're on the cusp of being able to define what our food is, from the molecule up. It's a new kind of leverage, and it might just change everything.
`,yt=`---
id: 2
title: "Preserving Stories"
slug: "preserving-stories"
summary: "Using AI to preserve personal stories, while also considering immense privacy challenges..."
date: "26 Dec, 2024"
readTime: "3 min read"
category: "AI"
---

I've been thinking about what a life really is. When you strip everything else away, it feels like we are all just a collection of stories.

Some of these stories are small and intensely **personal**. They exist only inside our own minds—a quiet moment of realization, a private joke with ourselves, the memory of a feeling that we've never spoken aloud. These are the stories that make up the core of our individual consciousness.

Then there are the bigger, more complex stories that involve other people. A family holiday, a difficult project at work, a shared laugh with friends. In these stories, we are a character, a co-author. Our narrative thread is woven together with others.

This brings me to what happens when someone passes away. All of their personal stories, the ones only they knew, vanish in an instant. An entire library of a life, gone. The shared stories, however, remain for a while. They live on as echoes in the minds of the people who were also there.

It seems that the depth of someone's impact on us is tied to how many important stories we shared with them. The more threads that are woven between our life and theirs, the more deeply we feel the tear when one of those threads is cut.

For all of history, this fading of stories has been a simple, unchangeable fact of life. But I wonder, does it have to be?

What if we could build a vessel for these stories? A place where they could be held safely, understood, and preserved long after we're gone. This is where I start thinking about the potential of AI, not as a tool for productivity, but as a **gentle archivist of the human experience.**

Imagine an AI that, over a lifetime, learns your stories. Not by just recording video or audio, but by understanding the context, the emotions, and the connections between them. It would learn your perspective, your sense of humour, and the way your voice changed when you told a story that truly mattered to you.

What would this enable? It leads to a profound possibility. What if I could get to know my grandfather from ten generations ago? Not just his name and the dates he lived, but the texture of his daily life. What if I could ask his preserved consciousness, 'What did a normal afternoon feel like for you?' or 'Tell me about a time you felt truly happy.' It would be a bridge of understanding across centuries.

Of course, this idea is not simple. It brings up some of the most important challenges we would ever face:

- **Privacy:** Who would have the right to access these stories? A person shares different parts of themselves with different people. How could a system respect those intricate boundaries?
- **Security:** This collection of stories would be the most personal data imaginable—the library of a soul. How could we ever be sure it was safe from being stolen, manipulated, or misused?
- **Access:** Who holds the keys? Do we decide before we pass on who can listen to our stories? Is it a legacy we pass down like a family heirloom?

These are not easy questions. But the reason for asking them feels important. Perhaps the greatest gift we could leave for future generations isn't money or property, but our story, shared with honesty and preserved with care. It's a way of saying, 'I was here. This is what it felt like to be me.'

And in a world that can often feel disconnected, that might be the most lasting and meaningful connection of all.
`,wt=`---
id: 1
title: "Can we create a silicon valley in India?"
slug: "silicon-valley-india"
summary: "Should India copy America's Silicon Valley model or build a unique tech culture rooted in its own traditions..."
date: "10 Jul, 2025"
readTime: "2 min read"
category: "Tech Industry"
---

Everywhere you look in India's tech industry, you hear the ambition: to build our own **Silicon Valley**. It's a powerful idea. But it makes me wonder, what does that actually mean? Is 'Silicon Valley' a blueprint you can copy and paste, or is it something that grows out of a specific place and time?

I've been spending time in places like **Gurgaon**, and I've noticed something interesting. The new office buildings, the cafes, the language used in meetings—they all feel very familiar. They look and sound a lot like the images we see of tech hubs in the United States. This makes sense. A lot of the initial investment and many of the big companies that set up shop here were American. When you have a successful formula, you tend to reuse it.

A walk through a place like Cyberhub is a full immersion in this formula. You see a high density of restaurants, pubs, and coffee shops. The environment is fast-paced, and after work, these places are full of people unwinding. This lifestyle is a core part of the package.

At the same time, I observe the results of this rapid development. The daily commute involves navigating heavy traffic. The air quality is often a topic of conversation. The soundscape is loud and constant. It's a high-energy, high-pressure environment. It makes me curious about the experience of living and working here day-to-day.

This leads to another question. The work culture we've adopted was largely developed in the West, in societies that are highly individualistic. But our society in India is built very differently, with strong ties to family and community. I wonder how these two systems interact. When a work culture from one part of the world is placed in a society with a completely different social structure, what happens? How does it affect how people work, how they collaborate, and how they feel?

I started looking at other countries. **Japan, China and South Korea**, for instance, are major global players in technology. Yet, their work cultures are deeply rooted in their own traditions and social norms. They don't look or feel exactly like Silicon Valley. This suggests that there might be more than one successful path to building a world-class tech industry. They found a way to blend global ambition with their local identity. All these observations circle back to a single, fascinating question.

To build something truly big and sustainable, is it better to adopt a successful global template, or is it necessary to create a new one from local materials? Should the foundation of our tech hubs be based on a model that has worked elsewhere, or should it be built upon the unique social and cultural bricks of India itself?

I don't have the answer, but it feels like an important question to be asking as we build the future.
`,kt=`---
id: 4
title: "The New Leverage"
slug: "the-new-leverage"
summary: "Work feels meaningful when we create value. Historically, this required leverage like capital or labor. Today, Agentic AI and Robotics offer new, exponential leverage to everyone."
date: "27 Aug, 2025"
readTime: "4 min read"
category: "Future of Work"
---

What's the point of all this work we do? If you really sit with that question, past the need for a paycheck, you often land on a simple truth: the most satisfying work comes from creating real value for other people. It's the feeling of making a small dent in the universe.

If you're interested in diving deep on this, the folks at [**80,000 Hours**](https://80000hours.org/) do incredible research on how to build a career around meaningful impact.

Historically, making a big impact has always required one thing: **leverage**. Leverage is the secret sauce that lets one person multiply their effort to achieve something massive. The classic forms of leverage are pretty straightforward:

- **Capital:** Money. The ability to fund big projects and tools.
- **Labor:** People. The ability to coordinate a team to get more done.
- **Code & Media:** Things with no cost to copy. This is the one [**Naval Ravikant**](https://nav.al) famously explained. You write code once or record a podcast once, and it can serve millions of people without extra effort.

But something new is happening. We're in the early days of two new forms of leverage so powerful they're going to completely reshape our world.

## 1. Agentic AI: Your Self-Improving Thought Partner

This isn't just another app. Think of an AI that's not a tool you command, but a collaborator you give a goal to. It can plan, use other software, and even fix its own mistakes to get the job done. This is **Agentic AI**. For a great technical breakdown, check out Lilian Weng's post on [**LLM-powered Autonomous Agents**](https://lilianweng.github.io/posts/2023-06-23-agent/).

What makes this a game-changer is the positive feedback loop. An agent can learn, get better, and even rewrite its own code to be more effective. The more you use it, the more powerful your leverage becomes, almost like it's compounding on its own. It's like having a brilliant partner who costs nothing to replicate and gets smarter every day.

## 2. Robotics: Labor Without Limits

For centuries, 'labor' meant humans. If you wanted to build a thousand houses, you needed thousands of people. That's changing.

When we talk about robotics now, don't picture a simple factory arm. Picture the agile, learning robots from a company like [**Boston Dynamics**](https://bostondynamics.com/). They can handle complex, physical tasks in the real world, not just a controlled assembly line.

The implication is huge. If robots can handle the repetitive, dangerous, and physically draining work, what does that leave for us? It leaves the interesting stuff: the creative, strategic, and deeply human problems. Every person is freed up to focus on high-impact work. Instead of managing people doing simple tasks, you're directing a fleet of tireless robots, giving you near-infinite physical leverage.

## A New Era of Work

When you combine these two, you get a world where any individual with a good idea has access to unprecedented intellectual and physical leverage. The bottleneck is no longer about who has the capital or who can hire the most people. It's about who can ask the most interesting questions.

This doesn't mean we'll stop working. It means the *kind* of work we do will change. It will shift from being a necessity for survival to being a primary source of creativity and fulfillment. We'll get to spend our time making the dents we've always wanted to make.
`,jt=`---
id: 4
title: "The Two Worlds"
slug: "the-two-worlds"
summary: "Developing nations are fighting for clean water and reliable roads. Developed nations are building AI and racing to Mars. Are we living in two different worlds?"
date: "12 Oct, 2025"
readTime: "3 min read"
category: "Infrastructure"
---

We don't live in one world. We live in two.

In one world, the primary struggle is with the basics. The problems are tangible, immediate. How do we get clean water to this village? How do we build a road that doesn't wash away every monsoon? How do we ensure the lights stay on, the food is safe, and there's a roof over everyone's head?

This is a world wrestling with gravity, with entropy. It's a battle to establish order, to build a foundation. The heroes here are not coders or venture capitalists. They are civil engineers, doctors, and farmers. Their work is a grind against the fundamental forces of nature and scarcity.

Then there is the other world.

In this world, the basics are assumed. The water is clean. The lights are on. The roads are paved. The struggle here is not with scarcity, but with possibility.

The problems are abstract, aimed at the future. How do we build artificial general intelligence? How do we become a multi-planetary species? How do we make transportation autonomous? How do we cure aging?

This is a world wrestling with imagination. It's a battle to transcend limits, to build on top of a stable foundation that is so reliable it has become invisible. The heroes here are scientists, programmers, and thinkers. Their work is a push against the boundaries of what we believe is possible.

The first world is playing on defense. The second is playing on offense.

Technology was supposed to be the bridge. The great equalizer. And in some ways, it has been. A farmer in a developing nation can check crop prices on a cheap smartphone. A student can access the world's library.

But technology also amplifies the divergence. While one world uses AI to optimize crop yields, the other uses it to build autonomous weapons and digital realities. The tools are the same, but the games are different. The gap in outcomes widens.

We are not on the same path. We are not even in the same race. One group is running a marathon just to get to the starting line. The other is already in a spaceship, arguing about the destination.

Understanding this is not about blame or pity. It's about seeing the world clearly. The challenges are different. The mindset is different. The definition of "progress" itself is different.

Until the foundation is built everywhere, we will continue to live in these two separate worlds, operating on two completely different timelines. One looking at the ground, the other at the stars.
`,K=Object.assign({"../blogs/health-post-agi.md":vt,"../blogs/meat-without-the-animal.md":bt,"../blogs/preserving-stories.md":yt,"../blogs/silicon-valley-india.md":wt,"../blogs/the-new-leverage.md":kt,"../blogs/the-two-worlds.md":jt}),St=i=>{const o=/^---\n([\s\S]*?)\n---\n([\s\S]*)$/,r=i.match(o);if(!r)return{data:{},content:i};const a=r[1],n=r[2],s={};return a.split(`
`).forEach(h=>{const x=h.indexOf(":");if(x>0){const p=h.substring(0,x).trim();let m=h.substring(x+1).trim();(m.startsWith('"')&&m.endsWith('"')||m.startsWith("'")&&m.endsWith("'"))&&(m=m.slice(1,-1)),!isNaN(m)&&m!==""?s[p]=Number(m):s[p]=m}}),{data:s,content:n.trim()}},fe=()=>{const i=[];for(const o in K){const r=o.split("/").pop().replace(".md","");try{const a=K[o],{data:n,content:s}=St(a);i.push({...n,content:s,filename:r})}catch(a){console.error(`Error loading blog post ${r}:`,a)}}return i},It=i=>fe().find(r=>r.slug===i)||null,Q=t.div`
  min-height: 100vh;
  background: transparent;
  position: relative;
  overflow-x: hidden;
`,Z=t.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, var(--color-accent-primary) 0%, transparent 70%);
    opacity: 0.05;
    filter: blur(100px);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, var(--color-accent-secondary) 0%, transparent 70%);
    opacity: 0.05;
    filter: blur(100px);
  }
`,ee=t.div`
  position: relative;
  z-index: 10;
  padding-top: 100px;
  
  @media (max-width: 768px) {
    padding-top: 90px;
  }
`,te=t.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl) var(--spacing-xl);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 0 var(--spacing-md) var(--spacing-lg);
  }
`,ie=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-sm);
  }
`,ae=t(l.button)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  font-size: var(--text-sm);
  cursor: pointer;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 8px;
  transition: all 0.3s ease;
  min-height: 44px;
  
  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: var(--color-accent-primary);
    transform: translateX(-3px);
  }
  
  svg {
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    min-height: 48px;
    padding: var(--spacing-sm) var(--spacing-lg);
  }
`,zt=t(l.button)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  font-size: var(--text-sm);
  cursor: pointer;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 8px;
  transition: all 0.3s ease;
  min-height: 44px;
  
  &:hover {
    background: rgba(99, 102, 241, 0.2);
    border-color: var(--color-accent-primary);
  }
  
  svg {
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    min-height: 48px;
    padding: var(--spacing-sm) var(--spacing-lg);
  }
`,Tt=t(l.article)`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`,Ct=t.div`
  padding: var(--spacing-lg) var(--spacing-xl) var(--spacing-md);
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, transparent 100%);
  border-bottom: 1px solid var(--color-border);
  
  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`,At=t.span`
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: rgba(99, 102, 241, 0.15);
  color: var(--color-accent-primary);
  border-radius: 20px;
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--spacing-md);
`,Et=t.h1`
  font-size: var(--text-4xl);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);
  line-height: 1.2;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: var(--text-2xl);
  }
`,Ot=t.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-top: var(--spacing-sm);

  span {
    display: flex;
    align-items: center;
    gap: var(--spacing-xs);
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    color: var(--color-accent-primary);
  }
`,Pt=t.div`
  padding: var(--spacing-lg) var(--spacing-xl);
  
  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: var(--color-text-primary);
    margin-top: var(--spacing-lg);
    margin-bottom: var(--spacing-sm);
    font-weight: 600;
    line-height: 1.3;
  }
  
  h1 { font-size: var(--text-3xl); }
  h2 { 
    font-size: var(--text-2xl);
    padding-bottom: var(--spacing-xs);
    border-bottom: 2px solid var(--color-border);
  }
  h3 { font-size: var(--text-xl); }
  h4 { font-size: var(--text-lg); }
  h5 { font-size: var(--text-base); }
  h6 { font-size: var(--text-sm); }
  
  p {
    color: var(--color-text-secondary);
    line-height: 1.7;
    margin-bottom: var(--spacing-md);
    font-size: var(--text-base);
  }
  
  ul, ol {
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin-bottom: var(--spacing-md);
    padding-left: var(--spacing-lg);
  }
  
  li {
    margin-bottom: var(--spacing-xs);
  }
  
  a {
    color: var(--color-accent-primary);
    text-decoration: underline;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 0.8;
    }
  }
  
  blockquote {
    border-left: 4px solid var(--color-accent-primary);
    padding-left: var(--spacing-md);
    margin: var(--spacing-lg) 0;
    color: var(--color-text-secondary);
    font-style: italic;
  }
  
  code {
    background: rgba(99, 102, 241, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    color: var(--color-accent-primary);
  }
  
  pre {
    background: rgba(0, 0, 0, 0.3);
    padding: var(--spacing-md);
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: var(--spacing-md);
    
    code {
      background: none;
      padding: 0;
      color: var(--color-text-primary);
    }
  }
  
  img {
    max-width: 100%;
    border-radius: 8px;
    margin: var(--spacing-lg) 0;
  }
  
  hr {
    border: none;
    border-top: 1px solid var(--color-border);
    margin: var(--spacing-xl) 0;
  }
`,Ft=t.div`
  text-align: center;
  padding: var(--spacing-2xl);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  
  h2 {
    font-size: var(--text-3xl);
    margin-bottom: var(--spacing-md);
    color: var(--color-text-primary);
  }
  
  p {
    color: var(--color-text-secondary);
    margin-bottom: var(--spacing-xl);
  }
`,Mt=()=>{const{slug:i}=Te(),o=he(),r=It(i);d.useEffect(()=>{window.scrollTo(0,0)},[i]);const a=()=>{o("/#blog")},n=async()=>{const c=window.location.href;if(navigator.share)try{await navigator.share({title:r?.title||"Blog Post",text:r?.summary||"",url:c})}catch(h){console.log("Error sharing:",h)}else navigator.clipboard.writeText(c),alert("Link copied to clipboard!")},s=c=>{o(`/#${c}`)};return r?e.jsxs(Q,{children:[e.jsx(Z,{}),e.jsx(N,{scrollToSection:s}),e.jsx(ee,{children:e.jsxs(te,{children:[e.jsxs(ie,{children:[e.jsxs(ae,{onClick:a,whileHover:{scale:1.05},children:[e.jsx(Y,{})," Back to Blog"]}),e.jsxs(zt,{onClick:n,whileHover:{scale:1.05},children:[e.jsx(Re,{})," Share"]})]}),e.jsxs(Tt,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6,ease:"easeOut"},children:[e.jsxs(Ct,{children:[r.category&&e.jsx(At,{children:r.category}),e.jsx(Et,{children:r.title}),e.jsxs(Ot,{children:[e.jsxs("span",{children:[e.jsx(Le,{})," ",r.date]}),e.jsxs("span",{children:[e.jsx(We,{})," ",r.readTime]})]})]}),e.jsx(Pt,{children:e.jsx(ot,{components:{a:({node:c,...h})=>e.jsx("a",{...h,target:"_blank",rel:"noopener noreferrer"})},children:r.content})})]})]})})]}):e.jsxs(Q,{children:[e.jsx(Z,{}),e.jsx(N,{scrollToSection:s}),e.jsx(ee,{children:e.jsxs(te,{children:[e.jsx(ie,{children:e.jsxs(ae,{onClick:a,whileHover:{scale:1.05},children:[e.jsx(Y,{})," Back to Blog"]})}),e.jsxs(Ft,{children:[e.jsx("h2",{children:"Blog Post Not Found"}),e.jsx("p",{children:"The blog post you're looking for doesn't exist."})]})]})})]})};var W={exports:{}},B,oe;function Rt(){if(oe)return B;oe=1;var i="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return B=i,B}var H,re;function Lt(){if(re)return H;re=1;var i=Rt();function o(){}function r(){}return r.resetWarningCache=o,H=function(){function a(c,h,x,p,m,g){if(g!==i){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}a.isRequired=a;function n(){return a}var s={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:n,element:a,elementType:a,instanceOf:n,node:a,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:r,resetWarningCache:o};return s.PropTypes=s,s},H}var ne;function Wt(){return ne||(ne=1,W.exports=Lt()()),W.exports}var Bt=Wt();const v=rt(Bt),ve=d.createContext(),Ht=()=>{const i=d.useContext(ve);if(!i)throw new Error("useToast must be used within ToastProvider");return i},$t=G`
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,_t=t.div`
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  max-width: 400px;
  
  @media (max-width: 768px) {
    top: 80px;
    right: 16px;
    left: 16px;
    max-width: none;
  }
`,Dt=t(l.div)`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: var(--spacing-md);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  min-width: 300px;
  backdrop-filter: blur(10px);
  animation: ${$t} 0.3s ease-out;
  
  ${i=>{switch(i.$type){case"success":return"border-left: 4px solid #22c55e;";case"error":return"border-left: 4px solid #ef4444;";case"info":return"border-left: 4px solid #3b82f6;";default:return"border-left: 4px solid var(--color-accent-primary);"}}}
  
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
  }
`,qt=t.div`
  flex-shrink: 0;
  font-size: 20px;
  margin-top: 2px;
  
  ${i=>{switch(i.$type){case"success":return"color: #22c55e;";case"error":return"color: #ef4444;";case"info":return"color: #3b82f6;";default:return"color: var(--color-accent-primary);"}}}
`,Nt=t.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`,Gt=t.h4`
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0;
`,Vt=t.p`
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
`,Ut=t.button`
  background: none;
  border: none;
  color: var(--color-text-secondary);
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: all 0.2s ease;
  flex-shrink: 0;
  
  &:hover {
    background: rgba(99, 102, 241, 0.1);
    color: var(--color-text-primary);
  }
`,be=({id:i,type:o,title:r,message:a,onClose:n})=>{const s=()=>{switch(o){case"success":return e.jsx($e,{});case"error":return e.jsx(He,{});case"info":return e.jsx(X,{});default:return e.jsx(X,{})}};return e.jsxs(Dt,{$type:o,initial:{opacity:0,x:400},animate:{opacity:1,x:0},exit:{opacity:0,x:400},transition:{duration:.3},children:[e.jsx(qt,{$type:o,children:s()}),e.jsxs(Nt,{children:[r&&e.jsx(Gt,{children:r}),a&&e.jsx(Vt,{children:a})]}),e.jsx(Ut,{onClick:()=>n(i),"aria-label":"Close notification",children:e.jsx(Be,{})})]})};be.propTypes={id:v.string.isRequired,type:v.oneOf(["success","error","info"]).isRequired,title:v.string,message:v.string,onClose:v.func.isRequired};const ye=({children:i})=>{const[o,r]=d.useState([]),a=d.useCallback(p=>{r(m=>m.filter(g=>g.id!==p))},[]),n=d.useCallback(({type:p="info",title:m,message:g,duration:u=5e3})=>{const f=`toast-${Date.now()}-${Math.random()}`,b={id:f,type:p,title:m,message:g};return r(w=>[...w,b]),u>0&&setTimeout(()=>{a(f)},u),f},[a]),s=d.useCallback((p,m,g)=>n({type:"success",title:p,message:m,duration:g}),[n]),c=d.useCallback((p,m,g)=>n({type:"error",title:p,message:m,duration:g}),[n]),h=d.useCallback((p,m,g)=>n({type:"info",title:p,message:m,duration:g}),[n]),x={showSuccess:s,showError:c,showInfo:h,removeToast:a};return e.jsxs(ve.Provider,{value:x,children:[i,e.jsx(_t,{children:e.jsx(j,{children:o.map(p=>e.jsx(be,{...p,onClose:a},p.id))})})]})};ye.propTypes={children:v.node.isRequired};const Yt=t(l.div)`
  position: fixed;
  inset: 0;
  background-color: var(--color-bg-primary);
  background-image:
    linear-gradient(to right, rgba(30, 41, 59, 0.025) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(30, 41, 59, 0.025) 1px, transparent 1px);
  background-size: 80px 80px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,Xt=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* Fixed height prevents layout shift as words change */
  height: 180px;
`,Jt=t(l.h1)`
  font-family: var(--font-display);
  font-size: clamp(3rem, 10vw, 6rem);
  font-weight: 800;
  color: var(--color-accent-primary);
  letter-spacing: -0.03em;
  line-height: 1;
  /* Reserve space so height never jumps */
  margin: 0;
`,Kt=t(l.p)`
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--color-text-muted);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-top: 1.5rem;
  height: 1.2em; /* fixed height — prevents layout shift */
  display: flex;
  align-items: center;
  gap: 10px;
`,se=t(l.span)`
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: var(--color-accent-secondary);
  flex-shrink: 0;
`,Qt=[{word:"Hello",lang:"English"},{word:"Hola",lang:"Spanish"},{word:"Bonjour",lang:"French"},{word:"नमस्ते",lang:"Hindi"},{word:"こんにちは",lang:"Japanese"},{word:"Ciao",lang:"Italian"},{word:"你好",lang:"Chinese"},{word:"Hallo",lang:"German"},{word:"Olá",lang:"Portuguese"},{word:"안녕하세요",lang:"Korean"},{word:"Merhaba",lang:"Turkish"},{word:"Shalom",lang:"Hebrew"},{word:"Sawatdee",lang:"Thai"},{word:"Hej",lang:"Swedish"},{word:"Ahoj",lang:"Czech"},{word:"Привет",lang:"Russian"}],le=220,Zt=8,ei={word:"Welcome",lang:"English"},ti=i=>{const o=[...i];for(let r=o.length-1;r>0;r--){const a=Math.floor(Math.random()*(r+1));[o[r],o[a]]=[o[a],o[r]]}return o},ii=()=>[...ti(Qt).slice(0,Zt),ei],ai=({onComplete:i})=>{const o=d.useRef(ii()),[r,a]=d.useState(0),[n,s]=d.useState(!1),c=d.useRef(i);d.useEffect(()=>{c.current=i},[i]),d.useEffect(()=>{const x=o.current,m=setInterval(()=>{a(g=>{const u=g+1;return u>=x.length?(setTimeout(()=>s(!0),le),g):u})},le);return()=>clearInterval(m)},[]),d.useEffect(()=>{if(!n)return;const x=setTimeout(()=>c.current?.(),500);return()=>clearTimeout(x)},[n]);const h=o.current[r];return e.jsx(j,{children:!n&&e.jsx(Yt,{initial:{opacity:1},exit:{opacity:0,scale:.985},transition:{duration:.5,ease:"easeInOut"},children:e.jsx(Xt,{children:e.jsx(j,{mode:"wait",children:e.jsxs(l.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},exit:{opacity:0,y:-12},transition:{duration:.13,ease:"easeOut"},style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[e.jsx(Jt,{children:h.word}),e.jsxs(Kt,{children:[e.jsx(se,{animate:{scale:[1,1.6,1],opacity:[.4,1,.4]},transition:{duration:1.1,repeat:1/0,ease:"easeInOut"}}),h.lang,e.jsx(se,{animate:{scale:[1,1.6,1],opacity:[.4,1,.4]},transition:{duration:1.1,repeat:1/0,ease:"easeInOut",delay:.55}})]})]},h?h.word:r)})})},"bootloader")})},oi=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2xl) var(--container-padding);
  text-align: center;
  background: var(--color-bg-primary);
  border: 1px dashed var(--color-border);
  border-radius: 16px;
  margin: var(--spacing-lg) auto;
  max-width: 600px;
`,ri=t.h3`
  font-size: var(--text-lg);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
`,ni=t.p`
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
`,si=t.button`
  padding: 8px 16px;
  background: var(--color-accent-primary);
  color: var(--color-bg-primary);
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;class I extends me.Component{constructor(o){super(o),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(o,r){console.error("ErrorBoundary caught an error:",o,r)}handleRetry=()=>{this.setState({hasError:!1}),window.location.reload()};render(){return this.state.hasError?e.jsxs(oi,{children:[e.jsx(ri,{children:"Something went wrong here"}),e.jsx(ni,{children:"This section failed to load. Please try reloading the page."}),e.jsx(si,{onClick:this.handleRetry,children:"Reload Page"})]}):this.props.children}}I.propTypes={children:v.node.isRequired};const li=()=>null,A=({children:i,range:o=60})=>{const r=d.useRef(null),[a,n]=d.useState({x:0,y:0}),[s,c]=d.useState(!1);d.useEffect(()=>{const p=window.matchMedia("(hover: hover) and (pointer: fine)");c(p.matches)},[]);const h=p=>{if(!s||!r.current)return;const{clientX:m,clientY:g}=p,{left:u,top:f,width:b,height:w}=r.current.getBoundingClientRect(),F=u+b/2,M=f+w/2,R=m-F,y=g-M;n({x:R*.35,y:y*.35})},x=()=>{n({x:0,y:0})};return s?e.jsx(l.div,{ref:r,onMouseMove:h,onMouseLeave:x,animate:{x:a.x,y:a.y},transition:{type:"spring",stiffness:150,damping:15,mass:.1},style:{display:"inline-block"},children:i}):e.jsx(e.Fragment,{children:i})};A.propTypes={children:v.node.isRequired,range:v.number};const ci=d.lazy(()=>P(()=>import("./FloatingRocket-BQiG8dOO.js"),__vite__mapDeps([0,1,2,3,4,5]))),di=t.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: var(--spacing-2xl) var(--container-padding);
  
  @media (max-width: 768px) {
    min-height: 100svh;
    padding: 40px var(--container-padding) 40px var(--container-padding);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`,pi=t.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    gap: var(--spacing-lg);
  }
`,mi=t(l.div)`
  max-width: 600px;

  @media (max-width: 1024px) {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`,hi=t(l.span)`
  display: inline-flex;
  align-items: center;
  background: rgba(0, 93, 166, 0.06);
  color: var(--color-accent-primary);
  padding: 6px 16px;
  border-radius: 30px;
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-family: var(--font-mono);
  margin-bottom: var(--spacing-md);
`,gi=t(l.h1)`
  font-size: clamp(2.5rem, 8vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  margin-bottom: var(--spacing-sm);
  background: linear-gradient(135deg, var(--color-text-primary) 0%, var(--color-accent-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,ui=t(l.p)`
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  font-weight: 500;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-md);
  line-height: 1.4;

  a {
    color: var(--color-accent-primary);
    font-weight: 600;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--color-accent-secondary);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
    
    &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: var(--spacing-sm);
  }
`,xi=t(l.p)`
  font-size: clamp(0.9rem, 2.5vw, 1.05rem);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
  line-height: 1.7;
  max-width: 540px;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    margin-bottom: var(--spacing-lg);
  }
`,fi=t(l.div)`
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
  margin-bottom: var(--spacing-lg);
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 0.75rem;
    margin-bottom: var(--spacing-md);
    
    a {
      width: 280px;
      max-width: 100%;
    }
  }
`,vi=t(l.a)`
  padding: clamp(0.875rem, 2vw, 1rem) clamp(1.75rem, 4vw, 2.5rem);
  background: var(--color-gradient-1);
  color: var(--color-bg-primary);
  font-weight: 600;
  border-radius: 50px;
  font-size: var(--text-base);
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: translateX(0);
  }
  
  &:focus-visible {
    outline: 3px solid #fff;
    outline-offset: 4px;
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: var(--text-sm);
  }
`,bi=t(l.a)`
  padding: clamp(0.875rem, 2vw, 1rem) clamp(1.75rem, 4vw, 2.5rem);
  border: 2px solid var(--color-border);
  color: var(--color-text-primary);
  font-weight: 600;
  border-radius: 50px;
  font-size: var(--text-base);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: var(--text-sm);
  }
  
  &:hover {
    border-color: var(--color-accent-primary);
    color: var(--color-accent-primary);
  }
  
  &:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 4px;
    border-color: var(--color-accent-primary);
    color: var(--color-accent-primary);
  }
`,yi=t(l.div)`
  display: flex;
  gap: var(--spacing-md);

  @media (max-width: 1024px) {
    justify-content: center;
  }
`,wi=t(l.a)`
  width: 48px;
  height: 48px;
  border: 1px solid var(--color-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: 1.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--color-accent-primary);
    border-color: var(--color-accent-primary);
    transform: translateY(-3px);
  }
  
  &:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 4px;
    color: var(--color-accent-primary);
    border-color: var(--color-accent-primary);
  }
`;t.div`
  width: 100%;
  height: 600px;
  position: relative;

  @media (max-width: 1024px) {
    height: 400px;
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.3;
    z-index: -1;
  }
`;const ki=t(l.div)`
  width: 100%;
  max-width: 380px;
  margin: 0 auto;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--color-bg-card);
  box-shadow: 0 20px 45px rgba(0, 34, 68, 0.15);
  background: var(--color-gradient-1);
  padding: 3px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--color-gradient-1);
    opacity: 0.35;
    filter: blur(15px);
    transform: scale(1.05);
    z-index: -1;
  }

  @media (max-width: 1024px) {
    max-width: 220px;
    margin-bottom: var(--spacing-md);
  }
`,ji=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
`;t.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;const Si=t(l.button)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-text-muted);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0.5rem;
  z-index: 3;

  &:hover {
    color: var(--color-accent-primary);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`,Ii=t.span`
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-family: var(--font-mono);
`,zi=()=>{const i={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},o={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}};return e.jsxs(di,{children:[e.jsxs(pi,{children:[e.jsxs(mi,{variants:i,initial:"hidden",animate:"visible",children:[e.jsx(hi,{variants:o,children:"Hello, I'm"}),e.jsx(gi,{variants:o,children:"Urvin Kapadia"}),e.jsxs(ui,{variants:o,children:["Senior Manager - Airport Operations Performance & Execution at ",e.jsx("a",{href:"https://www.united.com",target:"_blank",rel:"noopener noreferrer",children:"United Airlines"})]}),e.jsx(xi,{variants:o,children:"Over 18 years of dedicated leadership in aviation operations, deploying advanced analytics, predictive decision-support models, and strategic backlogs to optimize airport execution and customer recovery."}),e.jsxs(fi,{variants:o,children:[e.jsx(A,{range:80,children:e.jsx(vi,{href:"#work",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Experience Timeline"})}),e.jsx(A,{range:80,children:e.jsx(bi,{href:"#contact",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Get In Touch"})})]}),e.jsx(yi,{variants:o,children:e.jsx(A,{range:35,children:e.jsx(wi,{href:"https://www.linkedin.com/in/kapadia-urvin-848a97a1/",target:"_blank",rel:"noopener noreferrer",whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":"LinkedIn",children:e.jsx(ue,{})})})}),e.jsx(d.Suspense,{fallback:null,children:e.jsx(ci,{isMobileOnly:!0})})]}),e.jsx(ki,{initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1},transition:{duration:.8,ease:"easeOut",delay:.4},children:e.jsx(ji,{src:"/urvin.github.io/images/urvin_profile.jpeg",alt:"Urvin Kapadia — Senior Manager, United Airlines"})})]}),e.jsxs(Si,{onClick:()=>{const r=document.getElementById("about");r&&r.scrollIntoView({behavior:"smooth"})},initial:{opacity:0,y:-10},animate:{opacity:1,y:0},transition:{delay:1.2,duration:.5},whileHover:{scale:1.1},"aria-label":"Scroll to About",children:[e.jsx(Ii,{children:"Scroll"}),e.jsx(l.div,{animate:{y:[0,6,0]},transition:{duration:1.4,repeat:1/0,ease:"easeInOut"},children:e.jsx(_e,{size:20})})]})]})},Ti=t.section`
  padding: var(--spacing-2xl) 0;
  position: relative;
  background: transparent;

  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`,Ci=t.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--container-padding);
  position: relative;
  z-index: 2;
`,Ai=t.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,Ei=t.h2`
  font-size: var(--text-5xl);
  margin-bottom: var(--spacing-md);
  background: var(--color-gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: var(--text-3xl);
  }
`,Oi=t.p`
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: var(--text-base);
  }
`,Pi=t.div`
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: var(--spacing-2xl);
  align-items: center;
  margin-bottom: var(--spacing-2xl);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }
`,Fi=t.div``,Mi=t.div`
  color: var(--color-text-secondary);
  font-size: var(--text-lg);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);

  p {
    margin-bottom: var(--spacing-md);
  }

  @media (max-width: 768px) {
    font-size: var(--text-base);
  }
`,Ri=t.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,Li=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`,Wi=t(l.div)`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  padding: var(--spacing-lg);
  border-radius: 16px;
  text-align: center;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(0, 93, 166, 0.3);
    box-shadow: 0 10px 25px rgba(0, 93, 166, 0.04);
  }
`,Bi=t.div`
  font-size: 2rem;
  color: var(--color-accent-primary);
  margin-bottom: var(--spacing-xs);
  display: flex;
  justify-content: center;
`,Hi=t.h3`
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
`,$i=t.p`
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
`,_i=t.div`
  margin-top: var(--spacing-2xl);
  margin-bottom: var(--spacing-2xl);
`,Di=t.h3`
  font-size: var(--text-2xl);
  text-align: center;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text-primary);
`,qi=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-md);
`,Ni=t(l.div)`
  background: var(--color-bg-card);
  padding: var(--spacing-lg);
  border-radius: 16px;
  border: 1px solid var(--color-border);
  position: relative;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(0, 93, 166, 0.3);
    box-shadow: 0 10px 25px rgba(0, 93, 166, 0.04);
  }
`,Gi=t.h4`
  font-size: var(--text-lg);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
`,Vi=t.p`
  font-size: var(--text-sm);
  color: var(--color-accent-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-xs);
`,Ui=t.p`
  font-size: var(--text-xs);
  color: var(--color-text-secondary);
  margin-bottom: 2px;
`,Yi=t.span`
  display: inline-block;
  background: rgba(0, 93, 166, 0.06);
  color: var(--color-accent-primary);
  padding: 2px 8px;
  border-radius: 4px;
  font-size: var(--text-xs);
  font-weight: 600;
  margin-top: var(--spacing-xs);
`,Xi=t.div`
  margin-top: var(--spacing-2xl);
`,Ji=t.h3`
  font-size: var(--text-2xl);
  text-align: center;
  margin-bottom: var(--spacing-lg);
  color: var(--color-text-primary);
`,Ki=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-md);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Qi=t(l.div)`
  background: var(--color-bg-card);
  padding: var(--spacing-lg);
  border-radius: 16px;
  border: 1px solid var(--color-border);
`,Zi=t.h4`
  font-size: var(--text-lg);
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  color: var(--color-accent-primary);
`,ea=t.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`,ta=t.li`
  background: rgba(0, 93, 166, 0.05);
  color: var(--color-text-primary);
  padding: 5px 14px;
  border-radius: 20px;
  font-size: var(--text-sm);
  border: 1px solid rgba(0, 93, 166, 0.1);
  transition: all 0.25s ease;

  &:hover {
    background: rgba(0, 93, 166, 0.12);
    border-color: var(--color-accent-primary);
    transform: translateY(-2px);
  }
`,ia=[{icon:e.jsx(xe,{}),number:"SJSU",label:"B.S. in Aviation Management & Operations"},{icon:e.jsx(O,{}),number:"18+ Yrs",label:"Career progression at United Airlines"},{icon:e.jsx(De,{}),number:"NOC/SOC",label:"Platform Governance & Network Operations Center Liaison"},{icon:e.jsx(qe,{}),number:"APIs",label:"Enterprise API management & predictive tools"}],aa=[{school:"San Jose State University",degree:"Bachelor's in Aviation Management, Aviation/Airway Management and Operations",years:"2007 – 2009",grade:"Grade: 3.67",location:"San Jose, CA"},{school:"St. Petersburg Community College",degree:"Associate's in Science (Pharmacy)",years:"2004 – 2006",grade:"Grade: 3.76",location:"St. Petersburg, FL"},{school:"South Gujarat University",degree:"Bachelor's in Mathematics",years:"2001 – 2004",grade:"Grade: 3.79",location:"Surat, Gujarat, India"}],oa=[{category:"Strategic Leadership",icon:e.jsx(O,{}),list:["Product Strategy","Roadmapping","Operational Analytics","NOC Liaison"]},{category:"Airport Operations",icon:e.jsx(k,{}),list:["Performance & Execution","Gate Control","Zone Supervision","Ramp Operations"]},{category:"Technical & Data",icon:e.jsx(Ne,{}),list:["Spotfire Analytics","Enterprise APIs","Predictive Modeling","System Scaling"]},{category:"Team & Governance",icon:e.jsx(xe,{}),list:["Cross-functional Leadership","Vendor Management","Release Reliability","Executive Narratives"]}],$={hidden:{opacity:0,y:24},visible:i=>({opacity:1,y:0,transition:{duration:.5,delay:i*.08,ease:"easeOut"}})},ra=()=>e.jsx(Ti,{id:"about",children:e.jsxs(Ci,{children:[e.jsx(Ai,{children:e.jsxs(l.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.15},transition:{duration:.6},children:[e.jsx(Ei,{children:"About Me"}),e.jsx(Oi,{children:"Over 18 years of airport performance, systems engineering, and technology strategy in airline operations."})]})}),e.jsxs(Pi,{children:[e.jsx(Fi,{children:e.jsxs(Mi,{children:[e.jsx("p",{children:"My professional career spans over 18 years within airport hub operations at United Airlines, moving from front-line execution on the ramp to leading analytical performance product strategy at the corporate level."}),e.jsx("p",{children:"I specialize in developing predictive decision‑support products, enterprise API backlogs, and real‑time operations data governance. Bridging the gap between frontline operations, data analytics, and digital technology platforms, I ensure every platform release drives network dependability and airport execution reliability."})]})}),e.jsx(Ri,{children:e.jsx("img",{src:"/urvin.github.io/images/urvin IKC team.jpg",alt:"URVIN IKC Team",style:{maxWidth:"100%",borderRadius:"50px"}})})]}),e.jsx("div",{children:e.jsx(Li,{children:ia.map((i,o)=>e.jsxs(Wi,{custom:o,variants:$,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},whileHover:{y:-4},children:[e.jsx(Bi,{children:i.icon}),e.jsx(Hi,{children:i.number}),e.jsx($i,{children:i.label})]},o))})}),e.jsxs(_i,{children:[e.jsx(Di,{children:"Education"}),e.jsx(qi,{children:aa.map((i,o)=>e.jsxs(Ni,{custom:o,variants:$,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.15},children:[e.jsx(Gi,{children:i.school}),e.jsx(Vi,{children:i.degree}),e.jsxs(Ui,{children:[i.years," • ",i.location]}),e.jsx(Yi,{children:i.grade})]},o))})]}),e.jsxs(Xi,{children:[e.jsx(Ji,{children:"Technical Skills"}),e.jsx(Ki,{children:oa.map(({category:i,icon:o,list:r},a)=>e.jsxs(Qi,{custom:a,variants:$,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:[e.jsxs(Zi,{children:[o,i]}),e.jsx(ea,{children:r.map(n=>e.jsx(ta,{children:n},n))})]},i))})]})]})}),na=t.section`
  padding: var(--spacing-2xl) 0;
  position: relative;
  background: transparent;

  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`,sa=t.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`,la=t(l.div)`
  text-align: center;
  margin-bottom: var(--spacing-md);
`,ca=t.h2`
  font-size: var(--text-5xl);
  margin-bottom: var(--spacing-md);
  padding-top: var(--spacing-md);
  background: var(--color-gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: var(--text-2xl);
  }
`,da=t.p`
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
`,pa=t.div`
  display: grid;
  gap: var(--spacing-md);
  max-width: 900px;
  margin: 0 auto;
`,we=t(l.div)`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-left: 3px solid transparent;
  border-radius: 16px;
  padding: var(--spacing-lg);
  position: relative;
  cursor: pointer;
  transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              border-left-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgba(0, 93, 166, 0.4);
    border-left-color: var(--color-accent-primary);
    box-shadow: 0 15px 30px rgba(0, 93, 166, 0.06);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`,ma=t.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  flex-wrap: wrap;
`,ha=t.div`
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 12px;
  background: rgba(0, 93, 166, 0.08);
  border: 1px solid rgba(0, 93, 166, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent-primary);
  font-size: 1.1rem;
  transition: background 0.3s ease;

  ${we}:hover & {
    background: rgba(0, 93, 166, 0.15);
  }
`,ga=t.div`
  flex: 1;
`,ua=t.h3`
  font-size: var(--text-xl);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
`,xa=t.h4`
  font-size: var(--text-lg);
  color: var(--color-accent-primary);
  font-weight: 500;
  margin-bottom: var(--spacing-xs);
`,fa=t.div`
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  align-items: center;

  svg {
    font-size: 0.75rem;
    opacity: 0.7;
  }
`,ce=t.span`
  display: flex;
  align-items: center;
  gap: 4px;
`,va=t.p`
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
`,ba=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
`,ya=t.span`
  background: rgba(0, 93, 166, 0.05);
  color: var(--color-accent-primary);
  padding: 4px 12px;
  border-radius: 16px;
  font-size: var(--text-xs);
  border: 1px solid rgba(0, 93, 166, 0.1);
`,wa=t.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--color-accent-primary);
  font-size: var(--text-sm);
  font-weight: 600;
  margin-top: var(--spacing-md);
  
  svg {
    font-size: 0.8rem;
  }
`,ka=t(l.div)`
  overflow: hidden;
  margin-top: var(--spacing-md);
`,ja=t.ul`
  list-style-type: disc;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--color-text-secondary);
  font-size: var(--text-base);
  line-height: 1.7;
`,Sa=t.li`
  color: var(--color-text-secondary);
`,Ia=[{id:1,icon:e.jsx(k,{}),title:"Senior Manager - Airport Operations Performance and Execution",company:"United Airlines",department:"Airport Operations",duration:"May 2023 – Present",location:"Chicago, IL (Hybrid)",description:"Owns strategy, roadmap, and requirements for operational analytics products supporting airport and network operations at United Airlines.",tech:["Product Strategy","Roadmapping","Operational Analytics","Executive Communication"],bullets:["Own strategy, roadmap, and requirements for operational analytics products supporting airport and network operations, ensuring every capability delivers measurable operational value.","Direct product direction for the integrated operational data foundation: set availability, quality, and governance standards; prioritize data integration across airline systems; and drive adoption via embedded tools and interfaces.","Partner with Digital Technology to scope, build, test, and launch capabilities; define performance SLAs, quality gates, and ongoing measurement for continuous improvement.","Lead decision‑support and optimization strategy for NOC/SOC—embedding rules engines, optimization logic, and recommendation frameworks into operational workflows while maintaining ownership of business logic.","Develop and coach a high‑performing analytics team (on‑shore/off‑shore) to be product‑minded, technically fluent, and delivery‑oriented.","Modernized operational visibility by designing intuitive reliability, staffing, and real time tools used by Senior Hub Leadership, SOC, and frontline supervisors.","Led cross functional initiatives with Inflight, AO, SOC, NOC, Crew, and IT to ensure performance insights drive customer reliability and efficient service delivery.","Developed multi year analytics and application development strategy aligned with corporate customer experience and dependability goals.","Established governance for tool deployment, change control, pressure testing, and end user training to ensure consistent experience across hubs."]},{id:2,icon:e.jsx(k,{}),title:"Operations Manager - Performance & Execution",company:"United Airlines",department:"Airport Operations",duration:"Aug 2021 – May 2023",location:"Chicago, IL",description:"Developed and prioritized product backlogs and multi-year roadmaps for integration platforms and predictive tools that align with operational goals.",tech:["Spotfire Analytics","Predictive Modeling","API Integration","Platform Engineering"],bullets:["Developed and prioritized product backlogs and multi-year roadmaps for integration platforms and predictive tools that effectively align with and support operational goals.","Established clear success criteria and validation protocols for models, collaborating with platform engineering, architecture, and security teams to enhance the scalability of data and analytics capabilities.","Created robust deployment and post-deployment support practices, while actively identifying automation opportunities across various environments to enhance release reliability.","Designed multiple predictive models that serve as essential decision-support tools for stations, the Network Operations Center (NOC), and cross-functional stakeholders, leading to significant improvements in on-time performance, customer recovery, and service reliability.","Formulated and managed strategic roadmaps for enterprise API management and messaging platforms, ensuring that technology capabilities meet and respond to the evolving operational business needs.","Facilitated product backlog management and prioritized system enhancements based on feedback from frontline users and executive leadership to enhance usability and overall user experience.","Engaged and influenced MD, VP, and SVP-level leaders by translating complex technical and operational information into accessible narratives that clearly connect to customer impacts.","Oversaw enterprise-level deployments, automation strategies, and post-launch support, ensuring continuity and minimal disruption to frontline operations.","Provided governance for Spotfire analytics platforms, expanding their utilization to enhance operational transparency and insight."]},{id:3,icon:e.jsx(k,{}),title:"Airport Operations Manager - Analytical Performance",company:"United Airlines",department:"Analytical Performance",duration:"Dec 2017 – Aug 2021",location:"Chicago, IL",description:"Facilitated station performance reviews and predictive analyses, enhancing operational tools as the SOC IT liaison to drive improvements.",tech:["Data Analysis","SOC Liaison","Performance Optimization"],bullets:["Facilitated station performance reviews and predictive analyses, enhancing operational tools as the SOC IT liaison to drive improvements.","Spearheaded tactical planning for irregular operations and collaborated across departments (Flight Ops, Inflight, Maintenance, Airport Authorities) to boost reliability and achieve better D0/A14 outcomes.","Managed gate expansion and re-banking initiatives at ORD, focusing on financial optimization and strategic workforce planning within SOC.","Acted as the station operational champion for On-Time performance, MBR, Customer Satisfaction, Dependability, and service consistency, fostering close partnerships with Inflight, AO, and customer-recovery teams.","Developed customer-reliability dashboards to support misconnect recovery, advance booking analysis, and informed real-time customer support decision-making.","Led emergency planning and business continuity initiatives, ensuring full adherence to airport, government, and WHQ requirements.","Promoted cross-divisional collaboration with Flight Ops, Inflight, Maintenance, Government Agencies, Airport Authorities, and UAX partners to enhance customer experience and operational dependability.","Directed Gate Expansion and aligned Future Flight Schedules for ORD, focusing on optimizing customer flow and ensuring minimum connection time protection.","Supervised SOC staffing, annual bids, scheduling, and budget optimization to enhance productivity and service reliability."]},{id:4,icon:e.jsx(k,{}),title:"Airport Operations Manager - Gate Control",company:"United Airlines",department:"Gate Control",duration:"Dec 2015 – Dec 2017",location:"San Francisco, CA",description:"Managed station flight schedules, gate allocations, and flight departures, ensuring seamless daily operations and coordinating with SOC teams.",tech:["Gate Management","Operations Coordination","Flight Scheduling"],bullets:["Facilitated station performance reviews and predictive analyses, enhancing operational tools as the SOC IT liaison to drive improvements.","Spearheaded tactical planning for irregular operations and collaborated across departments (Flight Ops, Inflight, Maintenance, Airport Authorities) to boost reliability and achieve better D0/A14 outcomes.","Managed gate expansion and re-banking initiatives at ORD, focusing on financial optimization and strategic workforce planning within SOC.","Acted as the station operational champion for On-Time performance, MBR, Customer Satisfaction, Dependability, and service consistency, fostering close partnerships with Inflight, AO, and customer-recovery teams.","Developed customer-reliability dashboards to support misconnect recovery, advance booking analysis, and informed real-time customer support decision-making.","Led emergency planning and business continuity initiatives, ensuring full adherence to airport, government, and WHQ requirements.","Promoted cross-divisional collaboration with Flight Ops, Inflight, Maintenance, Government Agencies, Airport Authorities, and UAX partners to enhance customer experience and operational dependability.","Directed Gate Expansion and aligned Future Flight Schedules for ORD, focusing on optimizing customer flow and ensuring minimum connection time protection.","Supervised SOC staffing, annual bids, scheduling, and budget optimization to enhance productivity and service reliability."]},{id:5,icon:e.jsx(k,{}),title:"Zone Control Supervisor",company:"United Airlines",department:"Zone Control",duration:"Mar 2013 – Dec 2015",location:"San Francisco, CA",description:"Supervised real-time zone operations, aircraft ground handling, and turnaround performance to minimize ground delays.",tech:["Turnaround Optimization","Ramp Operations","Zone Supervision"],bullets:["Supervised real-time zone operations, aircraft ground handling, and turnaround performance under tight scheduling constraints.","Coordinated ramp movements, baggage handling flows, and fueling operations to minimize ground delays.","Managed immediate recovery protocols during irregular operations (IROPS) at the hub."]},{id:6,icon:e.jsx(k,{}),title:"Customer Service Supervisor",company:"United Airlines",department:"Customer Service",duration:"Feb 2011 – Mar 2013",location:"San Francisco Bay Area",description:"Led passenger service teams, resolved customer recovery challenges, and supervised ticketing lobbies and gates.",tech:["Customer Recovery","Lobby Operations","Team Leadership"],bullets:["Led passenger service representatives across ticketing lobbies, gate areas, and baggage service counters.","Resolved passenger disruptions, facilitated flight connections, and implemented customer recovery initiatives.","Ensured compliance with corporate customer experience standards and airport safety regulations."]},{id:7,icon:e.jsx(k,{}),title:"Ramp Agent",company:"United Airlines",department:"Ramp Operations",duration:"Nov 2007 – Feb 2011",location:"San Francisco Bay Area",description:"Gained foundational hands-on operational experience executing aircraft loading and ground operations.",tech:["Ramp Management","Aircraft Loading","Safety Operations"],bullets:["Executed safe and efficient aircraft loading, unloading, and baggage routing operations on the ramp.","Operated heavy ground support equipment in accordance with safety standards.","Collaborated with flight crews and gate agents to protect on-time departure metrics."]},{id:8,icon:e.jsx(k,{}),title:"Airport Operations Personnel",company:"Sacramento International Airport",department:"Airport Operations",duration:"Jun 2011 – Jul 2012",location:"Greater Sacramento Area",description:"Assisted in managing airport landside and airside activities, ensuring safety and compliance.",tech:["Airport Operations","Security Compliance","Passenger Coordination"],bullets:["Monitored airside and landside security compliance at Sacramento International Airport.","Facilitated passenger coordination and queue management during peak traffic flows.","Collaborated with airport authorities to maintain regulatory compliance."]}],za={hidden:{opacity:0,x:-24},visible:i=>({opacity:1,x:0,transition:{duration:.5,delay:i*.08,ease:"easeOut"}})},Ta=()=>{const[i,o]=d.useState({}),r=(a,n)=>{n.stopPropagation(),o(s=>({...s,[a]:!s[a]}))};return e.jsx(na,{id:"work",children:e.jsxs(sa,{children:[e.jsxs(la,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.6},children:[e.jsx(ca,{children:"Work Experience"}),e.jsx(da,{children:"Building high-performance airport operations and analytical decision tools at scale"})]}),e.jsx(pa,{children:Ia.map((a,n)=>{const s=!!i[a.id];return e.jsxs(we,{custom:n,variants:za,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.1},onClick:c=>r(a.id,c),whileHover:{x:4},children:[e.jsxs(ma,{children:[e.jsx(ha,{children:a.icon}),e.jsxs(ga,{children:[e.jsx(ua,{children:a.title}),e.jsxs(xa,{children:[a.company,a.department&&` • ${a.department}`]}),e.jsxs(fa,{children:[e.jsx(ce,{children:a.duration}),e.jsxs(ce,{children:[e.jsx(Ge,{}),a.location]})]})]})]}),e.jsx(va,{children:a.description}),e.jsx(ba,{children:a.tech.map(c=>e.jsx(ya,{children:c},c))}),e.jsx(wa,{children:s?e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Hide Details"}),e.jsx(Ve,{})]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"View Details"}),e.jsx(Ue,{})]})}),e.jsx(j,{initial:!1,children:s&&e.jsx(ka,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},children:e.jsx(ja,{children:a.bullets.map((c,h)=>e.jsx(Sa,{children:c},h))})})})]},a.id)})})]})})},Ca=t.section`
  position: relative;
  background: transparent;
  padding: var(--spacing-2xl) 0;

  @media (max-width: 768px) {
    padding: var(--spacing-xl) 0;
  }
`,Aa=t.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`,Ea=t(l.div)`
  text-align: center;
  margin-bottom: var(--spacing-lg);

  @media (max-width: 768px) {
    margin-bottom: var(--spacing-md);
  }
`,Oa=t.h2`
  font-size: var(--text-5xl);
  margin-bottom: var(--spacing-md);
  padding-top: var(--spacing-md);
  background: var(--color-gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: var(--text-2xl);
  }
`,Pa=t.p`
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: var(--text-base);
  }
`,Fa=t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }
`,ke=t(l.div)`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgba(29, 78, 216, 0.4);
    box-shadow: 0 20px 40px rgba(29, 78, 216, 0.08), 
                0 0 0 1px rgba(29, 78, 216, 0.05);
    transform: translateY(-6px);
  }
`,Ma=t.div`
  height: 200px;
  overflow: hidden;
  background: var(--color-bg-secondary);
  position: relative;

  @media (max-width: 768px) {
    height: 160px;
  }
`,Ra=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.4s ease;

  ${ke}:hover & {
    transform: scale(1.04);
  }
`,La=t.div`
  width: 100%;
  height: 100%;
  background: var(--color-gradient-1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
  opacity: 0.7;
`,Wa=t.div`
  padding: var(--spacing-lg);

  @media (max-width: 768px) {
    padding: var(--spacing-md);
  }
`,Ba=t.h3`
  font-size: var(--text-xl);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);

  @media (max-width: 768px) {
    font-size: var(--text-lg);
  }
`,Ha=t.p`
  font-size: var(--text-sm);
  color: var(--color-accent-primary);
  margin-bottom: var(--spacing-md);
  font-weight: 500;
`,$a=t.p`
  color: var(--color-text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
  font-size: var(--text-base);

  @media (max-width: 768px) {
    font-size: var(--text-sm);
    margin-bottom: var(--spacing-sm);
  }
`,_a=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);

  @media (max-width: 768px) {
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-sm);
  }
`,Da=t.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-text-secondary);
  font-size: var(--text-sm);

  svg {
    color: var(--color-accent-primary);
    flex-shrink: 0;
  }

  @media (max-width: 768px) {
    font-size: var(--text-xs);
  }
`,qa=t.a`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  color: var(--color-accent-primary);
  font-size: var(--text-sm);
  font-weight: 500;
  padding: var(--spacing-xs) 0;
  min-height: 44px;
  transition: gap 0.2s ease;

  svg {
    transition: transform 0.2s ease;
  }

  &:hover {
    text-decoration: underline;
    
    svg {
      transform: translateX(4px);
    }
  }

  @media (max-width: 768px) {
    min-height: 48px;
  }
`,Na=[{id:1,title:"Predictive Decision-Support Models",role:"Product Lead",description:"Designed multiple predictive models serving as essential decision-support tools for airport stations, the Network Operations Center (NOC), and stakeholders. Led to significant improvements in on-time performance and service reliability.",image:"/images/projects/predictive.webp",fallbackIcon:"📊",stats:[{icon:e.jsx(L,{}),text:"NOC & stations alignment"},{icon:e.jsx(O,{}),text:"Real-time predictive forecasting"}],link:"https://www.united.com"},{id:2,title:"Enterprise API & Messaging Platform Integration",role:"Operations Platform Manager",description:"Formulated and managed multi-year strategic roadmaps for enterprise API management and messaging platforms. Ensured tech capabilities scale dynamically with evolving airline operations and high-volume data streams.",image:"/images/projects/api-platform.webp",fallbackIcon:"🌐",stats:[{icon:e.jsx(L,{}),text:"Cross-functional engineering alignment"},{icon:e.jsx(O,{}),text:"Enterprise scale API scaling"}],link:"https://www.united.com"},{id:3,title:"Spotfire Analytics Platform Governance",role:"Analytics Governance Lead",description:"Provided governance for Spotfire analytics platforms across airports. Expanded utilization to enhance operational transparency, providing dashboards for executive decision support.",image:"/images/projects/spotfire.webp",fallbackIcon:"📈",stats:[{icon:e.jsx(L,{}),text:"Used by MD, VP, and SVP-level leaders"},{icon:e.jsx(Xe,{}),text:"Substantial resource & cost optimization"}],link:"https://www.united.com"}],Ga={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},Va={hidden:{opacity:0,y:30},visible:i=>({opacity:1,y:0,transition:{duration:.55,delay:i*.12,ease:"easeOut"}})},Ua=({src:i,alt:o,fallback:r})=>{const[a,n]=d.useState(!1);return e.jsx(Ma,{children:a?e.jsx(La,{children:r}):e.jsx(Ra,{src:i,alt:o,loading:"lazy",onError:()=>n(!0)})})},Ya=()=>e.jsx(Ca,{id:"projects",children:e.jsxs(Aa,{children:[e.jsxs(Ea,{variants:Ga,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.15},children:[e.jsx(Oa,{children:"Featured Projects"}),e.jsx(Pa,{children:"From space exploration to software development — projects that define my journey"})]}),e.jsx(Fa,{children:Na.map((i,o)=>e.jsxs(ke,{custom:o,variants:Va,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.15},whileHover:{y:-5},children:[e.jsx(Ua,{src:i.image,alt:i.title,fallback:i.fallbackIcon}),e.jsxs(Wa,{children:[e.jsx(Ba,{children:i.title}),e.jsx(Ha,{children:i.role}),e.jsx($a,{children:i.description}),e.jsx(_a,{children:i.stats.map((r,a)=>e.jsxs(Da,{children:[r.icon,e.jsx("span",{children:r.text})]},a))}),i.link&&i.link!=="#"&&e.jsxs(qa,{href:i.link,target:"_blank",rel:"noopener noreferrer",children:["Visit Website",e.jsx(Ye,{size:12})]})]})]},i.id))})]})}),je=t(l.article)`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: var(--spacing-lg);
  cursor: pointer;
  transition: border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
              transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  min-height: 320px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    border-color: rgba(29, 78, 216, 0.4);
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(29, 78, 216, 0.08);
  }
  
  @media (max-width: 768px) {
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;t(Ce)`
  text-decoration: none;
  color: inherit;
  display: block;
  border-radius: 16px;
  
  &:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 4px;
  }
  
  &:focus-visible ${je} {
    border-color: rgba(29, 78, 216, 0.4);
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(29, 78, 216, 0.08);
  }
`;t.div`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);

  svg {
    display: inline-block;
    vertical-align: middle;
  }

  @media (max-width: 480px) {
    flex-wrap: wrap;
    gap: var(--spacing-sm);
  }
`;t.h3`
  font-size: var(--text-xl);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 2.8em;
`;t.p`
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  min-height: 4.8em;
`;t.span`
  color: var(--color-accent-primary);
  font-size: var(--text-sm);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  
  svg {
    transition: transform 0.3s ease;
  }
  
  ${je}:hover & svg {
    transform: translateX(5px);
  }
`;v.shape({id:v.number.isRequired,title:v.string.isRequired,summary:v.string.isRequired,date:v.string.isRequired,readTime:v.string.isRequired,slug:v.string.isRequired,category:v.string}).isRequired,v.number.isRequired,v.object.isRequired;const Xa=G`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;t.div`
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  min-height: ${i=>i.$minHeight||"300px"};
  
  @media (max-width: 768px) {
    min-height: ${i=>i.$mobileMinHeight||"250px"};
  }
`;t.div`
  background: linear-gradient(
    90deg,
    rgba(99, 102, 241, 0.05) 0%,
    rgba(99, 102, 241, 0.1) 50%,
    rgba(99, 102, 241, 0.05) 100%
  );
  background-size: 1000px 100%;
  animation: ${Xa} 2s infinite linear;
  border-radius: ${i=>i.$radius||"8px"};
  height: ${i=>i.$height||"20px"};
  width: ${i=>i.$width||"100%"};
`;t.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
`;t.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  flex: 1;
`;t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--color-border);
`;v.string,v.string,v.node;const Ja=i=>Array.isArray(i)?[...i].sort((o,r)=>{const a=new Date(o.date);return new Date(r.date)-a}):[],_={container:{hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},item:{hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}}},E={sectionTitle:"Writings",sectionSubtitle:"A collection of thoughts and insights",quote:{text:"As for the future, your task is not to foresee it, but to enable it.",author:"Antoine de Saint-Exupéry"}},Ka=t.section`
  padding: var(--spacing-2xl) 0;
  position: relative;
  background: transparent;
  overflow: hidden;
`,Qa=t.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`,Za=t(l.div)`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,eo=t.h2`
  font-size: var(--text-5xl);
  margin-bottom: var(--spacing-md);
  background: var(--color-gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: var(--text-2xl);
  }
`,to=t.p`
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: var(--text-base);
  }
`;t.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
`;const io=t.div`
  text-align: center;
  padding: var(--spacing-xl);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  max-width: 600px;
  margin: 0 auto var(--spacing-xl) auto;
  box-shadow: 0 10px 30px rgba(0, 93, 166, 0.02);
  
  svg {
    font-size: 3rem;
    color: var(--color-accent-primary);
    opacity: 0.4;
    margin: 0 auto var(--spacing-md) auto;
    display: block;
  }
  
  h3 {
    font-size: var(--text-xl);
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-primary);
    font-weight: 600;
  }
  
  p {
    color: var(--color-text-secondary);
    font-size: var(--text-base);
    line-height: 1.6;
    max-width: 480px;
    margin: 0 auto;
  }
`,ao=t(l.div)`
  max-width: 700px;
  margin: var(--spacing-2xl) auto;
  text-align: center;
  position: relative;
  padding: var(--spacing-xl);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 20px;
`,oo=t.div`
  font-size: 3rem;
  color: var(--color-accent-primary);
  opacity: 0.2;
  margin-bottom: var(--spacing-md);
`,ro=t.blockquote`
  font-size: var(--text-xl);
  color: var(--color-text-secondary);
  font-style: italic;
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
`,no=t.cite`
  font-size: var(--text-base);
  color: var(--color-accent-primary);
  font-style: normal;
  
  &::before {
    content: '— ';
  }
`,so=()=>{const i=d.useMemo(()=>{try{return fe()}catch(r){return console.error("Error loading blog posts:",r),[]}},[]);d.useMemo(()=>Ja(i),[i]);const[o]=d.useState(!1);return e.jsx(Ka,{id:"blog",children:e.jsxs(Qa,{children:[e.jsx(Za,{variants:_.container,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:e.jsxs(l.div,{variants:_.item,children:[e.jsx(eo,{children:E.sectionTitle}),e.jsx(to,{children:E.sectionSubtitle})]})}),e.jsxs(io,{children:[e.jsx(Je,{}),e.jsx("h3",{children:"Aviation Insights & Leadership Thoughts"}),e.jsx("p",{children:"Coming Soon. A collection of operational analyses, platform integration strategies, and leadership articles will be published here shortly."})]}),e.jsxs(ao,{variants:_.item,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:[e.jsx(oo,{children:e.jsx(Ke,{})}),e.jsx(ro,{children:E.quote.text}),e.jsx(no,{children:E.quote.author})]})]})})},lo=(i={name:"",email:"",message:""})=>{const{showSuccess:o,showError:r}=Ht(),[a,n]=d.useState(i),[s,c]=d.useState(!1),[h,x]=d.useState("");return{formState:a,isSubmitting:s,emailError:h,handleChange:g=>{const{name:u,value:f}=g.target;if(n(b=>({...b,[u]:f})),u==="email"){const b=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f);x(f&&!b?"Please enter a valid email address.":"")}},handleSubmit:async g=>{if(g.preventDefault(),!h){c(!0);try{(await fetch("https://formspree.io/f/xgvzkqob",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...a,_replyto:a.email,_subject:`Portfolio Contact: ${a.name}`})})).ok?(o("Message Sent!","Thank you for reaching out. I'll get back to you soon!"),n(i)):r("Oops! Something went wrong","Failed to send your message. Please try again or email me directly.")}catch{r("Network Error","Unable to send message. Please check your connection and try again.")}finally{c(!1)}}}}},co=t.section`
  padding: var(--spacing-2xl) 0;
  position: relative;
  background: transparent;
  overflow: hidden;
  min-height: 80vh;
`,po=t.div`
  max-width: var(--container-xl);
  margin: 0 auto;
  padding: 0 var(--container-padding);
`,mo=t(l.div)`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,ho=t.h2`
  font-size: var(--text-5xl);
  margin-bottom: var(--spacing-md);
  background: var(--color-gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: var(--text-2xl);
  }
`,go=t.p`
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
`,uo=t.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: start;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`,xo=t(l.div)`
  padding: var(--spacing-lg);
`,fo=t.h3`
  font-size: var(--text-2xl);
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
`,de=t.p`
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
`,vo=t(l.div)`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--color-bg-card);
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: var(--color-accent-primary);
    transform: translateX(10px);
  }
`,bo=t.div`
  width: 48px;
  height: 48px;
  background: rgba(99, 102, 241, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent-primary);
  font-size: 1.25rem;
`,yo=t.div`
  flex: 1;
`,wo=t.p`
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-bottom: 2px;
`,ko=t.p`
  font-size: var(--text-base);
  color: var(--color-text-primary);
  font-weight: 500;
`,jo=t(l.div)`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`,So=t(l.a)`
  width: 48px;
  height: 48px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  font-size: 1.25rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--color-accent-primary);
    border-color: var(--color-accent-primary);
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
  }
  
  &:focus-visible {
    outline: 3px solid var(--color-accent-primary);
    outline-offset: 4px;
    color: var(--color-accent-primary);
    border-color: var(--color-accent-primary);
  }
`,Io=G`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,zo=t.div`
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: ${Io} 0.8s linear infinite;
`,To=t(l.div)`
  background: var(--color-bg-card);
  padding: var(--spacing-xl);
  border-radius: 20px;
  border: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background: var(--color-gradient-1);
    opacity: 0.05;
    border-radius: 50%;
    transform: translate(50%, -50%);
  }
`,Co=t.form`
  position: relative;
  z-index: 2;
`,D=t.div`
  margin-bottom: var(--spacing-md);
`,q=t.label`
  display: block;
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
  font-weight: 500;
`,pe=t.input`
  width: 100%;
  padding: 12px 20px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-text-primary);
  font-size: var(--text-base);
  transition: all 0.3s ease;
  
  &::placeholder {
    color: var(--color-text-muted);
  }
  
  &:focus {
    outline: none;
    border-color: var(--color-accent-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: var(--color-bg-primary);
  }
`,Ao=t.textarea`
  width: 100%;
  padding: 12px 20px;
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  color: var(--color-text-primary);
  font-size: var(--text-base);
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: var(--color-text-muted);
  }
  
  &:focus {
    outline: none;
    border-color: var(--color-accent-primary);
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: var(--color-bg-primary);
  }
`,Eo=t(l.button)`
  width: 100%;
  padding: 14px 28px;
  background: var(--color-gradient-1);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: var(--text-base);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  transition: all 0.3s ease;
  min-height: 48px;
  position: relative;
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.6) 0%, rgba(168, 85, 247, 0.6) 100%);
  }
  
  @media (max-width: 768px) {
    min-height: 52px;
  }
`,Oo=t.p`
  font-size: var(--text-xs);
  color: #ef4444;
  margin-top: 4px;
`,Po=()=>{const{formState:i,isSubmitting:o,emailError:r,handleChange:a,handleSubmit:n}=lo(),s={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},c={hidden:{opacity:0,y:30},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},h=[{icon:e.jsx(Ze,{}),label:"Location",value:"Cary, Illinois, USA"},{icon:e.jsx(et,{}),label:"Current Position",value:"Senior Manager, United Airlines"},{icon:e.jsx(tt,{}),label:"Languages",value:"English"}],x=[{icon:e.jsx(ue,{}),url:"https://www.linkedin.com/in/kapadia-urvin-848a97a1/",label:"LinkedIn"}];return e.jsx(co,{children:e.jsxs(po,{children:[e.jsx(mo,{variants:s,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:e.jsxs(l.div,{variants:c,children:[e.jsx(ho,{children:"Get In Touch"}),e.jsx(go,{children:"Let's connect and build something amazing together"})]})}),e.jsxs(uo,{children:[e.jsxs(xo,{variants:s,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:[e.jsxs(l.div,{variants:c,children:[e.jsx(fo,{children:"Let's Connect"}),e.jsx(de,{children:"Whether you want to discuss technology, engineering, or just say hello, I'd love to hear from you. Feel free to reach out through the form or connect on social media."})]}),h.map((p,m)=>e.jsxs(vo,{variants:c,whileHover:{scale:1.02},children:[e.jsx(bo,{children:p.icon}),e.jsxs(yo,{children:[e.jsx(wo,{children:p.label}),e.jsx(ko,{children:p.value})]})]},m)),e.jsxs(l.div,{variants:c,children:[e.jsx(de,{children:"Connect with me on social media:"}),e.jsx(jo,{children:x.map((p,m)=>e.jsx(A,{range:35,children:e.jsx(So,{href:p.url,target:"_blank",rel:"noopener noreferrer","aria-label":p.label,whileHover:{scale:1.1},whileTap:{scale:.9},children:p.icon})},m))})]})]}),e.jsx(To,{variants:c,initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},children:e.jsxs(Co,{onSubmit:n,children:[e.jsxs(D,{children:[e.jsx(q,{htmlFor:"name",children:"Your Name"}),e.jsx(pe,{type:"text",id:"name",name:"name",value:i.name,onChange:a,placeholder:"John Doe",required:!0,disabled:o})]}),e.jsxs(D,{children:[e.jsx(q,{htmlFor:"email",children:"Email Address"}),e.jsx(pe,{type:"email",id:"email",name:"email",value:i.email,onChange:a,placeholder:"john@example.com",required:!0,disabled:o,style:r?{borderColor:"#ef4444"}:{}}),r&&e.jsx(Oo,{children:r})]}),e.jsxs(D,{children:[e.jsx(q,{htmlFor:"message",children:"Message"}),e.jsx(Ao,{id:"message",name:"message",value:i.message,onChange:a,placeholder:"Tell me about yourself or just say hi!",rows:"5",required:!0,disabled:o})]}),e.jsx(Eo,{type:"submit",disabled:o,whileHover:o?{}:{scale:1.02},whileTap:o?{}:{scale:.98},children:o?e.jsxs(e.Fragment,{children:[e.jsx(zo,{}),"Sending..."]}):e.jsxs(e.Fragment,{children:[e.jsx(Qe,{}),"Send Message"]})})]})})]})]})})},Fo=t.canvas`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  pointer-events: none;
`;class Mo{constructor(){this.pool=[],this.active=[]}obtain(o,r){let a;return this.pool.length>0?(a=this.pool.pop(),a.reset(o,r)):a=new Bo(o,r),this.active.push(a),a}recycle(o){const r=this.active[o];this.active.splice(o,1),this.pool.push(r)}clear(){this.active=[]}}const Se=(i,o,r)=>{const n=document.createElement("canvas");n.width=128,n.height=128;const s=n.getContext("2d"),c=128/2,h=s.createRadialGradient(c,c,1,c,c,c);return h.addColorStop(0,`rgba(${i}, ${o}, ${r}, 1)`),h.addColorStop(.25,`rgba(${i}, ${o}, ${r}, 0.4)`),h.addColorStop(1,`rgba(${i}, ${o}, ${r}, 0)`),s.fillStyle=h,s.beginPath(),s.arc(c,c,c,0,Math.PI*2),s.fill(),n},Ro=[{r:6,g:182,b:212},{r:236,g:72,b:153},{r:139,g:92,b:246},{r:148,g:163,b:184}],Lo=Ro.map(i=>Se(i.r,i.g,i.b)),Wo=Se(246,243,235);class Bo{constructor(o,r){this.reset(o,r),this.maxSize=Math.max(window.innerWidth,window.innerHeight)*.95}reset(o,r){this.x=o,this.y=r,this.size=Math.random()*6+3,this.speedX=(Math.random()-.5)*6,this.speedY=Math.random()*3+1.5,this.opacity=.95,this.growth=Math.random()*5+4;const a=Math.random();a<.25?this.colorIndex=0:a<.5?this.colorIndex=1:a<.75?this.colorIndex=2:this.colorIndex=3}update(){this.x+=this.speedX,this.y+=this.speedY,this.size+=this.growth,this.speedX*=.96,this.speedY*=.96,this.opacity-=.015}draw(o){if(this.opacity<=0)return;o.save();const r=Math.min(1,(.95-this.opacity)/.7),a=Lo[this.colorIndex];o.globalAlpha=this.opacity*(1-r*.65),o.drawImage(a,this.x-this.size,this.y-this.size,this.size*2,this.size*2),o.globalAlpha=this.opacity*r*.65,o.drawImage(Wo,this.x-this.size,this.y-this.size,this.size*2,this.size*2),o.restore()}}const Ho=()=>{const i=d.useRef(null),[o,r]=d.useState(!1),a=d.useRef(new Mo);return d.useEffect(()=>{const n=()=>{r(!0),a.current.clear()};return window.addEventListener("rocket-launch",n),()=>{window.removeEventListener("rocket-launch",n)}},[]),d.useEffect(()=>{if(!o)return;const n=i.current;if(!n)return;const s=n.getContext("2d",{alpha:!0});if(!s)return;(()=>{n.width=window.innerWidth,n.height=window.innerHeight})();const h=u=>{const{x:f,y:b}=u.detail;for(let w=0;w<2;w++)a.current.obtain(f+(Math.random()-.5)*10,b+(Math.random()-.5)*6)};window.addEventListener("rocket-emit-smoke",h);let x,p=Date.now(),m=!1;const g=()=>{s.clearRect(0,0,n.width,n.height);const u=Date.now()-p,f=a.current;for(let b=f.active.length-1;b>=0;b--){const w=f.active[b];w.update(),w.draw(s),(w.opacity<=0||w.size>w.maxSize)&&f.recycle(b)}if(u>550&&!m){m=!0;const b=document.getElementById("about");b&&b.scrollIntoView({behavior:"smooth"})}u>800&&f.active.length===0?(r(!1),s.clearRect(0,0,n.width,n.height)):x=requestAnimationFrame(g)};return x=requestAnimationFrame(g),()=>{cancelAnimationFrame(x),window.removeEventListener("rocket-emit-smoke",h)}},[o]),e.jsx(Fo,{ref:i})},$o=(i=1500)=>{const[o,r]=d.useState(!1);return d.useEffect(()=>{let a;return"requestIdleCallback"in window?a=requestIdleCallback(()=>r(!0),{timeout:i}):a=setTimeout(()=>r(!0),i),()=>{"cancelIdleCallback"in window?cancelIdleCallback(a):clearTimeout(a)}},[i]),o},_o=t.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`,Do=t.main`
  position: relative;
  z-index: 2;
`,qo=t.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  
  /* Gradient orbs for ambience */
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, var(--color-accent-primary) 0%, transparent 70%);
    filter: blur(100px);
    animation: float 25s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -50%;
    left: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, var(--color-accent-secondary) 0%, transparent 70%);
    filter: blur(100px);
    animation: float 30s ease-in-out infinite reverse;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.02;
    }
    33% {
      transform: translate(80px, -80px) scale(1.15);
      opacity: 0.06;
    }
    66% {
      transform: translate(-50px, 50px) scale(0.9);
      opacity: 0.015;
    }
  }
`,T=t(l.section)`
  width: 100%;
  position: relative;
`;t.div`
  min-height: 200px;
`;const No=d.lazy(()=>P(()=>import("./FloatingRocket-BQiG8dOO.js"),__vite__mapDeps([0,1,2,3,4,5]))),Go=d.lazy(()=>P(()=>import("./RandomTelemetry-BOwQKIfY.js"),__vite__mapDeps([6,1,2,3,5,7,4]))),Vo=d.lazy(()=>P(()=>import("./WorldMap-CUoF2Kkz.js"),__vite__mapDeps([8,1,2,3]))),Uo=({isBooting:i})=>{const o=ge();return d.useEffect(()=>{if(!i&&o.hash){const r=o.hash.replace("#",""),a=document.getElementById(r);if(a){const n=setTimeout(()=>{a.scrollIntoView({behavior:"smooth"})},100);return()=>clearTimeout(n)}}},[o,i]),null},Yo=()=>$o(1200)?e.jsxs(d.Suspense,{fallback:null,children:[e.jsx(No,{isDesktopOnly:!0}),e.jsx(Go,{}),e.jsx(Vo,{})]}):null;function Xo(){const[i,o]=d.useState(!0),r=n=>{const s=document.getElementById(n);s&&s.scrollIntoView({behavior:"smooth"})},a={initial:{opacity:0},animate:{opacity:1,transition:{duration:.6,ease:"easeOut"}},exit:{opacity:0,transition:{duration:.3}}};return e.jsxs(Ae,{basename:"/urvin.github.io/",children:[e.jsx(Uo,{isBooting:i}),e.jsxs(ye,{children:[e.jsx(lt,{}),e.jsx(j,{mode:"wait",children:i&&e.jsx(ai,{onComplete:()=>o(!1)})}),e.jsxs(_o,{children:[e.jsx(li,{}),e.jsx(qo,{}),e.jsx(Yo,{}),e.jsx(Ho,{}),e.jsxs(Ee,{children:[e.jsx(U,{path:"/",element:e.jsxs(e.Fragment,{children:[e.jsx(N,{scrollToSection:r}),e.jsx(j,{mode:"wait",children:e.jsxs(Do,{children:[e.jsx(I,{children:e.jsx(T,{id:"home",children:e.jsx(zi,{})})}),e.jsx(I,{children:e.jsx(T,{id:"about",variants:a,initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.1},children:e.jsx(ra,{})})}),e.jsx(I,{children:e.jsx(T,{id:"work",variants:a,initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.1},children:e.jsx(Ta,{})})}),e.jsx(I,{children:e.jsx(T,{id:"projects",variants:a,initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.1},children:e.jsx(Ya,{})})}),e.jsx(I,{children:e.jsx(T,{id:"blog",variants:a,initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.1},children:e.jsx(so,{})})}),e.jsx(I,{children:e.jsx(T,{id:"contact",variants:a,initial:"initial",whileInView:"animate",viewport:{once:!0,amount:.1},children:e.jsx(Po,{})})})]})})]})}),e.jsx(U,{path:"/blog/:slug",element:e.jsx(Mt,{})})]})]})]})]})}Oe.createRoot(document.getElementById("root")).render(e.jsx(me.StrictMode,{children:e.jsx(Xo,{})}));export{v as P};
