// Optional: smooth scrolling navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Optional: handle contact form submission
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Message sent! Thank you, ' + e.target.name.value + '.');
  e.target.reset();
});
