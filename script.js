
  let prevScrollPos = window.scrollY;
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;

    window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


    prevScrollPos = currentScrollPos;
  });


// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});
const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('day-mode');

    if (document.body.classList.contains('day-mode')) {
        modeToggle.textContent = '☾'; // moon icon for night mode toggle
    } else {
        modeToggle.textContent = '☼'; // sun icon for day mode toggle
    }
});


// Close nav menu on link click (mobile)
navLinks.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        }
    })
);

// Simple form submit handler (demo only)
function handleSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert(`Thanks, ${name}! Your message has been sent.`);
        e.target.reset();
    } else {
        alert('Please fill in all fields.');
    }
}

// Scroll animation (fade in on scroll)
const sections = document.querySelectorAll('section, header');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'translateY(20px)';
        }
    });
}, { threshold: 0.1 });


  window.addEventListener('scroll', () => {
    const skillsSection = document.getElementById('skills');
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if (sectionPos < screenPos - 100) {
      document.getElementById('html-bar').style.width = '100%';
      document.getElementById('css-bar').style.width = '80%';
      document.getElementById('js-bar').style.width = '70%';
    }
  });




 




