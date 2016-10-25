/* jshint -W117 */
/* jshint -W098 */
/* jshint -W070 */

document.addEventListener('turbolinks:load', function () {

  // SMOOTHSCROLL //

  smoothScroll.init({

    // Easing pattern to use.
    easing: 'easeInOutCubic',

    // How far to offset the scrolling anchor location in pixels.
    offset: 64,
  });
});
