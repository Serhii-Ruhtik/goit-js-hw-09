const e=document.querySelector(".form");let t=null;function o(e,o){return new Promise(((n,l)=>{const i=Math.random()>.3;t=setTimeout((()=>{i?n({position:e,delay:o}):l({position:e,delay:o})}),o)}))}e.addEventListener("submit",(function(e){e.preventDefault();const{delay:t,step:n,amount:l}=e.currentTarget.elements;let i=Number(t.value);for(let e=0;e<=l.value;e+=1)o(e,i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),i+=Number(n.value)}));
//# sourceMappingURL=03-promises.3eb4c9b5.js.map
