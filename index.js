import{a as p,S as y,i as l}from"./assets/vendor-MgecxatS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const h="53379433-198b2b18e5117643ffa461def",b="https://pixabay.com/api/";function v(t){const r={key:h,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(b,{params:r}).then(i=>i.data)}let n=null;function L(){const t=document.querySelector(".loader");t&&t.classList.remove("hidden")}function c(){const t=document.querySelector(".loader");t&&t.classList.add("hidden")}function C(){const t=document.querySelector(".gallery");t&&(t.innerHTML="")}function w(t){const r=document.querySelector(".gallery");if(!r){console.error("Element .gallery not found in HTML");return}const i=t.map(s=>{const{webformatURL:e,largeImageURL:o,tags:a,likes:u,views:m,comments:d,downloads:g}=s;return`
        <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img 
              class="gallery-image" 
              src="${e}" 
              alt="${a}" 
              loading="lazy"
            />
          </a>
          <div class="image-box-statistic">
            <div class="image-box-statistic-item">
              <p class="info-label">Likes</p>
              <p class="info-value">${u}</p>
            </div>
            <div class="image-box-statistic-item">
              <p class="info-label">Views</p>
              <p class="info-value">${m}</p>
            </div>
            <div class="image-box-statistic-item">
              <p class="info-label">Comments</p>
              <p class="info-value">${d}</p>
            </div>
            <div class="image-box-statistic-item">
              <p class="info-label">Downloads</p>
              <p class="info-value">${g}</p>
            </div>
          </div>
        </li>
      `}).join("");r.insertAdjacentHTML("beforeend",i),n?n.refresh():n=new y(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})}const f=document.querySelector(".form");f.addEventListener("submit",t=>{t.preventDefault();const r=f.elements["search-text"],i=r.value.trim();if(!i){l.warning({title:"Warning",message:"Please enter a search query!",position:"topRight",backgroundColor:"#ffa500",messageColor:"#fff",titleColor:"#fff"});return}C(),L(),v(i).then(s=>{if(c(),s.hits.length===0){l.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff"});return}w(s.hits),l.success({title:"Success",message:`Found ${s.totalHits} images!`,position:"topRight",backgroundColor:"#59A10D",messageColor:"#fff",titleColor:"#fff",timeout:3e3})}).catch(s=>{c(),l.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff"}),console.error("Error:",s)}),r.value=""});
//# sourceMappingURL=index.js.map
