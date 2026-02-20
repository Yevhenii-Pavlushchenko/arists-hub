import"./assets/styles-1m9JF8WR.js";import{a as p,b as R,i as r}from"./assets/vendor-BYtaHlT3.js";const y="https://pixabay.com/api",M="54685682-80977b0b5ca1319a1902ced87",v=15;p.defaults.baseURL=y;async function w(t,e){return(await p({url:y,method:"get",params:{key:M,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:v}})).data}const L=document.querySelector(".gallery"),m=document.querySelector(".gallery-btn"),b=document.querySelector(".loader");let c=null;function C(t){const e=t.map(({webformatURL:s,largeImageURL:$,tags:q,likes:T,views:x,comments:B,downloads:E})=>`
            <li class="list-item shadow-drop-center">
                <a href="${$}"><img src="${s}" alt="${q}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${T}</p>
                    </div>
                    <div>
                        <h2 class="views">Views</h2>
                        <p class="count-views">${x}</p>
                    </div>
                    <div>
                        <h2 class="comments">Comments</h2>
                        <p class="count-comments">${B}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${E}</p>
                    </div>
                </div>
            </li>
        `).join("");L.insertAdjacentHTML("beforeend",e),c?c.refresh():c=new R(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function g(){L.innerHTML=""}function k(){b.classList.remove("is-hidden")}function n(){b.classList.add("is-hidden")}function S(){m.classList.remove("is-hidden")}function i(){m.classList.add("is-hidden")}const d=document.querySelector(".form"),u=document.querySelector(".output-total"),f=document.querySelector("#scrollToTop");d.addEventListener("submit",P);m.addEventListener("click",D);let l="",a=1,h=0,o=0;n();async function P(t){t.preventDefault(),o=0,a=1,i(),g(),l=d.elements["search-text"].value.trim();try{if(l===""){r.warning({title:"warning",position:"topRight",message:"Please enter a search query!"}),u.textContent="",i(),n(),g();return}k();const{hits:e,totalHits:s}=await w(l,a);if(h=Math.ceil(s/v),o+=e.length,o>s&&(o=s),u.textContent=`Total images: ${o}/${s}`,!e||e.length===0){console.log(e),r.show({message:" Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#4e75ff",messageColor:"#ffffff",position:"topRight"}),n();return}C(e),a<h&&S()}catch(e){i(),console.log(e.message)}finally{d.elements["search-text"].value="",n()}}async function D(){k(),i();try{a+=1;const{hits:t,totalHits:e}=await w(l,a);o+=t.length,o>e&&(o=e),u.textContent=`Total images: ${o}/${e}`,a<h?S():(r.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#4e75ff",messageColor:"#ffffff",position:"topRight"}),i()),C(t),H()}catch(t){console.log(t),r.error({message:t.message,backgroundColor:"#4e75ff",messageColor:"#ffffff",position:"topRight"})}finally{n()}}function H(){const t=document.querySelector(".gallery");if(!t.firstElementChild)return;const{height:e}=t.firstElementChild.getBoundingClientRect();scrollBy({top:e*2,behavior:"smooth"})}f.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.addEventListener("scroll",()=>{window.scrollY>500?f.classList.add("is-visible"):f.classList.remove("is-visible")});
//# sourceMappingURL=index.js.map
