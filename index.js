import{a as l,S as u,i as a}from"./assets/vendor-dNBuWDsd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d="ТВОЙ_API_KEY",f="https://pixabay.com/api/";function m(n){return l.get(f,{params:{key:d,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data).catch(t=>{console.error(t)})}const c=document.querySelector(".gallery"),p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(n){const t=n.map(r=>`

<li class="gallery-item">

<a href="${r.largeImageURL}">

<img
src="${r.webformatURL}"
alt="${r.tags}"
/>

</a>

<div class="info">

<p>Likes: ${r.likes}</p>
<p>Views: ${r.views}</p>
<p>Comments: ${r.comments}</p>
<p>Downloads: ${r.downloads}</p>

</div>

</li>

`).join("");c.insertAdjacentHTML("beforeend",t),p.refresh()}function y(){c.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}const w=document.querySelector(".form");w.addEventListener("submit",S);function S(n){n.preventDefault();const t=n.target.elements["search-text"].value.trim();if(!t){a.error({message:"Please enter a search query!"});return}y(),g(),m(t).then(r=>{if(r.hits.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(r.hits)}).catch(r=>{a.error({message:"Something went wrong!"})}).finally(()=>{L()})}
//# sourceMappingURL=index.js.map
