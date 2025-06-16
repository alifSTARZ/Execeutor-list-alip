function showSection(id) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.classList.remove('active'));

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }
}

// Inisialisasi default ke menu home
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');

  const navButtons = document.querySelectorAll('[data-target]');
  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      showSection(targetId);
    });
  });
});
