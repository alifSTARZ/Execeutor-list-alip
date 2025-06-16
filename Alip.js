// script.js

// Navigasi antar halaman (Executor dan Menu Utama)
document.addEventListener("DOMContentLoaded", () => {
  const executorBtn = document.getElementById("btn-executor");
  const homeSection = document.getElementById("home-section");
  const executorSection = document.getElementById("executor-section");
  const backBtn = document.getElementById("btn-back");

  executorBtn.addEventListener("click", () => {
    homeSection.style.display = "none";
    executorSection.style.display = "block";
  });

  backBtn.addEventListener("click", () => {
    executorSection.style.display = "none";
    homeSection.style.display = "block";
  });
});