import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = null;

export function createGallery(images) {
  return images
    .map(image => {
      const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = image;
      
      return `
        <li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img 
              class="gallery-image" 
              src="${webformatURL}" 
              alt="${tags}" 
              loading="lazy"
            />
          </a>
          <div class="image-box-statistic">
            <div class="image-box-statistic-item">
              <p class="info-label">Likes</p>
              <p class="info-value">${likes}</p>
            </div>
            <div class="image-box-statistic-item">
              <p class="info-label">Views</p>
              <p class="info-value">${views}</p>
            </div>
            <div class="image-box-statistic-item">
              <p class="info-label">Comments</p>
              <p class="info-value">${comments}</p>
            </div>
            <div class="image-box-statistic-item">
              <p class="info-label">Downloads</p>
              <p class="info-value">${downloads}</p>
            </div>
          </div>
        </li>
      `;
    })
    .join('');
}


export function clearGallery(gallery) {
  if (!gallery) {
    console.error('Gallery element is null or undefined');
    return;
  }
  gallery.innerHTML = '';
}

export function initLightbox() {
  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    overlayOpacity: 0.8,
  });
}

export function refreshLightbox() {
  if (lightbox) {
    lightbox.refresh();
  }
}