import{j as e,s,f as a,a as c,b as n,N as m,F as o,c as p,R as f}from"./index-f45a659b.js";import{C as h}from"./Countdown-155768b9.js";const j=()=>e.jsx("section",{id:"home",className:`flex flex-1 md:flex-row flex-col ${s.paddingY} `,children:e.jsx("div",{className:`flex-1 ${s.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[100px] text-center relative ${s.flexCenter}`,children:e.jsxs("div",{className:"flex flex-row justify-between items-center w-full",children:[e.jsxs("h1",{className:"flex-1 font-formal font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]",children:["Our Committees & Agendas",e.jsx("br",{className:"sm:block hidden"})," "]}),e.jsx("div",{className:"absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"}),e.jsx("div",{className:"absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40"}),e.jsx("div",{className:"absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"})]})})}),t=({link:l,icon:x,title:i,content:d,index:r})=>e.jsx("a",{href:l,children:e.jsxs("div",{className:`flex flex-col p-6 rounded-[20px] ${r!==a.length-1?"mb-6":"mb-0"} feature-card w-auto h-auto md:w-[335px] md:h-[240px] items-center`,children:[e.jsx("div",{className:`w-[120px] h-[120px] rounded-full ${s.flexCenter} bg-dimBlue `,children:e.jsx("img",{src:x,alt:"icon",className:"w-[90%] h-[90%] object-contain "})}),e.jsxs("div",{className:"flex-1 flex flex-col ml-3",children:[e.jsx("h4",{className:"font-formal font-semibold text-white text-[18px] leading -[23.4px] mb-1 text-center",children:i}),e.jsx("p",{className:"font-formal font-normal text-dimWhite text-[16px] leading-[24px]",children:d})]})]})}),N=()=>e.jsx("section",{id:"committee",children:e.jsxs("div",{className:`flex md:flex-row flex-col ${s.paddingY} items-center`,children:[e.jsx("div",{className:`flex-1 ${s.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] grid-row-3 items-center`,children:a.map((l,x)=>e.jsx(t,{...l,index:x},l.id))}),e.jsx("div",{className:`flex-1 ${s.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] grid-row-3 items-center`,children:c.map((l,x)=>e.jsx(t,{...l,index:x},l.id))}),e.jsx("div",{className:`flex-1 ${s.flexStart} flex-col xl:px-0 sm:px-16 px-6 py-[80px] sm:py-[40px] grid-row-3 items-center`,children:n.map((l,x)=>e.jsx(t,{...l,index:x},l.id))})]})}),b=()=>e.jsxs("div",{className:"bg-primary w-full overflow-hidden",children:[e.jsx("div",{className:`${s.paddingX} ${s.flexCenter}`,children:e.jsx("div",{className:`${s.boxWidth}`,children:e.jsx(m,{})})}),e.jsx("div",{className:`bg-primary ${s.flexStart}`,children:e.jsx("div",{className:`${s.boxWidth}`,children:e.jsx(j,{})})}),e.jsx("div",{className:`bg-primary ${s.paddingX} ${s.flexStart}`,children:e.jsx("div",{className:`${s.boxWidth}`,children:e.jsx(N,{})})}),e.jsx("div",{className:`${s.flexStart}`,children:e.jsx("div",{className:`${s.boxWidth}`,children:e.jsx(h,{})})}),e.jsx("div",{className:`bg-primary ${s.paddingX} ${s.flexStart}`,children:e.jsx("div",{className:`${s.boxWidth}`,children:e.jsx(o,{})})})]});p.createRoot(document.getElementById("root")).render(e.jsx(f.StrictMode,{children:e.jsx(b,{})}));