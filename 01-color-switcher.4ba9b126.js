!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]"),"bodyСolor":document.querySelector("body")},e=t.startBtn,o=t.stopBtn,r=t.bodyСolor,n=null,a=!1;t.startBtn.addEventListener("click",(function(){a||(n=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));r.style.backgroundColor=t}),1e3),e.setAttribute("disabled","true"),o.removeAttribute("disabled"),a=!0)})),t.stopBtn.addEventListener("click",(function(){a&&(clearInterval(n),a=!1);o.setAttribute("disabled","true"),e.removeAttribute("disabled")})),console.log(10)}();
//# sourceMappingURL=01-color-switcher.4ba9b126.js.map
