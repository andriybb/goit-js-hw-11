import{a as g,S as p,i as n}from"./assets/vendor-MgecxatS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="53379433-198b2b18e5117643ffa461def",y="https://pixabay.com/api/";function b(s){const o={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return g.get(y,{params:o}).then(i=>i.data)}let c=null;function v(s){return s.map(o=>{const{webformatURL:i,largeImageURL:r,tags:e,likes:t,views:l,comments:m,downloads:d}=o;return`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img 
              class="gallery-image" 
              src="${i}" 
              alt="${e}" 
              loading="lazy"
            />
          </a>
          <div class="image-box-statistic">
            <div class="image-box-statistic-item">
              <p class="info-label">Likes</p>
              <p class="info-value">${t}</p>
            </div>
            <div class="image-box-statistic-item">
              <p class="info-label">Views</p>
              <p class="info-value">${l}</p>
            </div>
            <div class="image-box-statistic-item">
              <p class="info-label">Comments</p>
              <p class="info-value">${m}</p>
            </div>
            <div class="image-box-statistic-item">
              <p class="info-label">Downloads</p>
              <p class="info-value">${d}</p>
            </div>
          </div>
        </li>
      `}).join("")}function L(s){if(!s){console.error("Gallery element is null or undefined");return}s.innerHTML=""}function C(){c=new p(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})}function x(){c&&c.refresh()}const f=document.querySelector(".form"),u=document.querySelector(".gallery"),a=document.querySelector(".loader");C();f.addEventListener("submit",s=>{s.preventDefault();const o=f.elements["search-text"],i=o.value.trim();if(!i){n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight",backgroundColor:"#ffa500",messageColor:"#fff",titleColor:"#fff"});return}L(u),a&&a.classList.remove("hidden"),b(i).then(r=>{if(a&&a.classList.add("hidden"),r.hits.length===0){n.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff"});return}const e=v(r.hits);u.innerHTML=e,x(),n.success({title:"Success",message:`Found ${r.totalHits} images!`,position:"topRight",backgroundColor:"#59A10D",messageColor:"#fff",titleColor:"#fff",timeout:3e3})}).catch(r=>{a&&a.classList.add("hidden"),n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff"}),console.error("Error:",r)}),o.value=""});
//# sourceMappingURL=index.js.map
