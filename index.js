import{a as g,S as p,i as n}from"./assets/vendor-MgecxatS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="53379433-198b2b18e5117643ffa461def";function y(i){const o=`https://pixabay.com/api/?key=${h}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return g.get(o).then(s=>s.data)}let c=null;function b(i){return i.map(o=>{const{webformatURL:s,largeImageURL:r,tags:e,likes:t,views:l,comments:m,downloads:d}=o;return`
        <li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img 
              class="gallery-image" 
              src="${s}" 
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
      `}).join("")}function v(i){if(!i){console.error("Gallery element is null or undefined");return}i.innerHTML=""}function L(){c=new p(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8})}function C(){c&&c.refresh()}const f=document.querySelector(".form"),u=document.querySelector(".gallery"),a=document.querySelector(".loader");L();f.addEventListener("submit",i=>{i.preventDefault();const o=f.elements["search-text"],s=o.value.trim();if(!s){n.warning({title:"Warning",message:"Please enter a search query!",position:"topRight",backgroundColor:"#ffa500",messageColor:"#fff",titleColor:"#fff"});return}v(u),a&&a.classList.remove("hidden"),y(s).then(r=>{if(a&&a.classList.add("hidden"),r.hits.length===0){n.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff"});return}const e=b(r.hits);u.innerHTML=e,C(),n.success({title:"Success",message:`Found ${r.totalHits} images!`,position:"topRight",backgroundColor:"#59A10D",messageColor:"#fff",titleColor:"#fff",timeout:3e3})}).catch(r=>{a&&a.classList.add("hidden"),n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",titleColor:"#fff"}),console.error("Error:",r)}),o.value=""});
//# sourceMappingURL=index.js.map
