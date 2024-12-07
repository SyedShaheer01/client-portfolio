const hamburger = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const barIcon = document.getElementById('bar-icon');
const crossIcon = document.getElementById('cross-icon');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('open');
  
  // Toggle the visibility of the icons
  
  if (barIcon.style.display === 'none') {
    barIcon.style.display = 'block';
    crossIcon.style.display = 'none';
  } else {
    barIcon.style.display = 'none';
    crossIcon.style.display = 'block';
  }
});

let currentTestimonial = 1; // Start with the first testimonial

function showTestimonial(index) {
  const slider = document.querySelector('.testimonial-slider');
  const dots = document.querySelectorAll('.dot');

  // Update the transform to slide to the correct testimonial
  slider.style.transform = `translateX(-${(index - 1) * 100}%)`;

  // Update active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index - 1);
  });

  // Update the current testimonial index
  currentTestimonial = index;
}
