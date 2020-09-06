import './scss/main.scss';
const debounce = require('lodash/debounce');
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/BrightTheme.css';
import cardTemplate from './templates/gallery.hbs';
import { defaultModules } from '@pnotify/core/dist/PNotify.js';
import { alert, notice, info, success, error } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import * as PNotifyCountdown from '@pnotify/countdown';
import * as PNotifyAnimate from '@pnotify/animate';
import './js/fetch';

// const myNotice = notice({
//   text: "I'm a notice.",
//   modules: new Map([
//     ...defaultModules,
//     [
//       PNotifyMobile,
//       {
//         // Mobile Module Options
//       },
//       PNotifyCountdown,
//       {
//         // Countdown Module Options
//       },
//       PNotifyAnimate,
//       {
//         // Animate Module Options
//       }
//     ]
//   ])
// });
// PNotifyMobile.defaults = {
//   swipeDismiss: true
// };
defaultModules.set(PNotifyMobile, {});
alert('Notice me, senpai!');
const inputConsole = (e) => {
  console.log(e.target.value);
};
document
  .querySelector('.search')
  .addEventListener('input', debounce(inputConsole, 500));
