/* Scroll button script */

/* Display only when image is larger than vw */
document.addEventListener("DOMContentLoaded", function () {
  var headerImageHeight = document.querySelector('.headerImage').clientHeight;
  var viewportHeight = window.innerHeight;

  if (viewportHeight < headerImageHeight) {
    document.querySelector('.scroll-arrow').style.display = 'block'; // Show arrow
  } else {
    document.querySelector('.scroll-arrow').style.display = 'none'; // Hide arrow
  }
});

window.addEventListener('resize', function () {
  // Repeat the logic on window resize
  var headerImageHeight = document.querySelector('.headerImage').clientHeight;
  var viewportHeight = window.innerHeight;

  if (viewportHeight < headerImageHeight) {
    document.querySelector('.scroll-arrow').style.display = 'block';
  } else {
    document.querySelector('.scroll-arrow').style.display = 'none';
  }
});


/* Arrow scroll with image */
window.addEventListener('scroll', function () {
  var arrow = document.querySelector('.scroll-arrow');
  var imageBottom = document.querySelector('.headerImage').getBoundingClientRect().bottom;
  var arrowOffsetFromBottom = 30; // Distance from bottom of image to arrow

  // Calculate the position at which the arrow should start moving with the page
  var scrollPositionToChange = window.scrollY + window.innerHeight - arrowOffsetFromBottom;

  if (scrollPositionToChange >= imageBottom) {
    arrow.style.position = 'absolute'; // Change to absolute
    arrow.style.bottom = '30px';
  } else {
    arrow.style.position = 'fixed'; // Keep it fixed
    arrow.style.bottom = '5vh'; // Original position
  }
});

/* Arrow scroll transition */
document.querySelector('.scroll-arrow').addEventListener('click', function (e) {
  e.preventDefault(); // Prevent the default anchor link behavior
  var targetId = this.getAttribute('href'); // Get the target section ID
  var targetPosition = document.querySelector(targetId).offsetTop; // Calculate the position of the target section

  window.scrollTo({
    top: targetPosition, // Scroll to the target position
    behavior: 'smooth'  // Enable smooth scrolling
  });
});

/* go to top Arrow transition */
function topFunction() {
  window.scrollTo({
    top: 0, // Scroll to top of the page
    behavior: 'smooth' // Smooth scroll
  });
}

function topFunction() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*slideshow functions*/


  /* hamburger transition Java Script */
  function myFunction(x) {
    x.classList.toggle("change");
  }

