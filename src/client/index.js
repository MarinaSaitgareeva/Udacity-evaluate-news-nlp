// Import js files
import { checkUrl } from './js/urlChecker'
import { handleSubmit } from './js/formHandler'

// Import style sass files
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

// Add logo in App
import logo from './assets/logo.png'
const logoImg = document.querySelector('#logo-img');
logoImg.src = logo;

// //Add Service Workers - https://developers.google.com/web/tools/workbox/guides/generate-service-worker/webpack
// // Check that service workers are supported
// if ('serviceWorker' in navigator) {
//   // Use the window load event to keep the page load performant
//   window.addEventListener('load', () => {
//       navigator.serviceWorker.register('/service-worker.js');
//   });
// }

// Export js files
export {
  checkUrl,
  handleSubmit
}