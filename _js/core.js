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

  // EMBEDLY //

  var embeds = document.getElementsByClassName('embedly-card');

  // Set default options for Embedly cards.
  for (var i = 0; i < embeds.length; i++) {
    embeds[i].setAttribute('data-card-controls', '0');
    embeds[i].setAttribute('data-card-align', 'left');
    embeds[i].setAttribute('data-card-recommend', '0');
    embeds[i].setAttribute('data-card-chrome', '0');
  }
});
