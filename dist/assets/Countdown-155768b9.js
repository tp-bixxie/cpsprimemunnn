import{r as t,j as e,l,s as a}from"./index-f45a659b.js";const j=()=>{const[r,x]=t.useState(0),[n,d]=t.useState(0),[m,o]=t.useState(0),[c,i]=t.useState(0),h="July, 08, 2023",p=()=>{const s=Date.parse(h)-Date.now();x(Math.floor(s/(1e3*60*60*24))),d(Math.floor(s/(1e3*60*60)%24)),o(Math.floor(s/(1e3*60)%60)),i(Math.floor(s/1e3%60))};return t.useEffect(()=>{const s=setInterval(()=>p(),1e3);return()=>clearInterval(s)},[]),e.jsx("section",{id:"letter",className:`${l.section} bg-white`,children:e.jsxs("div",{className:`mr-[20px] ml-[20px] md:mr-[300px] md:ml-[300px] ${l.sectionInfo} items-center`,children:[e.jsx("h2",{className:`${a.heading2}  text-black text-center`,children:"Get Ready: The Countdown Starts Now!"}),e.jsx("div",{className:"flex flex-row text-center items-center",children:e.jsxs("div",{className:"flex p-6 rounded-[20px] feature-card1 items-center ",children:[e.jsxs("h2",{className:`${a.heading2} text-center ml-[10px]  mr-[20px] md:mr-[20px] md:ml-[20px] text-white`,children:[r<10?"0"+r:r," ",e.jsx("br",{className:"sm:block hidden"})," ","Day"]}),e.jsxs("h2",{className:`${a.heading2} text-center ml-[10px] mr-[10px] md:mr-[20px] md:ml-[20px] text-white`,children:[n<10?"0"+n:n," ",e.jsx("br",{className:"sm:block hidden"})," ","Hour"]}),e.jsxs("h2",{className:`${a.heading2} text-center ml-[10px]  mr-[10px] md:mr-[20px] md:ml-[20px] text-white`,children:[m<10?"0"+m:m," ",e.jsx("br",{className:"sm:block hidden"})," ","Min"]}),e.jsxs("h2",{className:`${a.heading2}  text-center ml-[10px]  mr-[10px] md:mr-[20px] md:ml-[20px] text-white`,children:[c<10?"0"+c:c," ",e.jsx("br",{className:"sm:block hidden"})," "," Sec"]})]})})]})})};export{j as C};
