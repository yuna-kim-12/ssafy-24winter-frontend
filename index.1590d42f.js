const e=document.getElementById("chat-container"),t=document.getElementById("message-form"),a=document.getElementById("user-input");function s(e,t="user"){let a=document.createElement("div");a.classList.add("mb-6","flex","items-start","space-x-3");let n=document.createElement("div");n.classList.add("w-10","h-10","rounded-full","flex-shrink-0","flex","items-center","justify-center","font-bold","text-white"),"assistant"===t?(n.classList.add("bg-gradient-to-br","from-green-400","to-green-600"),n.textContent="A"):(n.classList.add("bg-gradient-to-br","from-blue-500","to-blue-700"),n.textContent="U");let d=document.createElement("div");return d.classList.add("max-w-full","md:max-w-2xl","p-3","rounded-lg","whitespace-pre-wrap","leading-relaxed","shadow-sm"),"assistant"===t?d.classList.add("bg-gray-200","text-gray-900"):d.classList.add("bg-blue-600","text-white"),d.textContent=e,a.appendChild(n),a.appendChild(d),a}function n(){e.scrollTop=e.scrollHeight}t.addEventListener("submit",async t=>{t.preventDefault();let d=a.value.trim();if(!d)return;e.appendChild(s(d,"user")),a.value="",n();let l=await new Promise(e=>{setTimeout(()=>{e("What I Said.: "+d)},1500)});e.appendChild(s(l,"assistant")),n()});
//# sourceMappingURL=index.1590d42f.js.map