import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery,  initLightbox, refreshLightbox } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

initLightbox();

form.addEventListener('submit', event => {
  event.preventDefault();

  const searchInput = form.elements['search-text'];
  const query = searchInput.value.trim();


  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
      backgroundColor: '#ffa500',
      messageColor: '#fff',
      titleColor: '#fff',
    });
    return;
  }


  clearGallery(gallery);


  if (loader) {
    loader.classList.remove('hidden');
  }


  getImagesByQuery(query)
    .then(data => {

      if (loader) {
        loader.classList.add('hidden');
      }

      if (data.hits.length === 0) {
        iziToast.error({
          title: 'No Results',
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          backgroundColor: '#EF4040',
          messageColor: '#fff',
          titleColor: '#fff',
        });
        return;
      }


      const markup = createGallery(data.hits);
      gallery.innerHTML = markup;
refreshLightbox();

      iziToast.success({
        title: 'Success',
        message: `Found ${data.totalHits} images!`,
        position: 'topRight',
        backgroundColor: '#59A10D',
        messageColor: '#fff',
        titleColor: '#fff',
        timeout: 3000,
      });
    })
    .catch(error => {

      if (loader) {
        loader.classList.add('hidden');
      }

      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#fff',
        titleColor: '#fff',
      });

      console.error('Error:', error);
    });


  searchInput.value = '';
});