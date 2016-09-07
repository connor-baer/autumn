// HEADROOM //

// Grab an element.
var hrBody = document.body;

// Construct an instance of Headroom, passing the element.
var headroom  = new Headroom( hrBody, {

    // Vertical offset in px before element is first unpinned.
    offset: 64,

    // Scroll tolerance in px before state changes for up/down scroll.
    tolerance: {
        up: 10,
        down: 5
    }
});

// Initialise.
headroom.init();

// SMOOTHSCROLL //

smoothScroll.init({

	// Easing pattern to use.
	easing: 'easeInOutCubic',

	// How far to offset the scrolling anchor location in pixels.
	offset: 70
});
