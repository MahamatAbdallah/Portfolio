document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("cookie-banner");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    // Vérifie si l'utilisateur a déjà fait un choix
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
        banner.style.display = "block";
    }

    acceptBtn.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "accepted");
        banner.style.display = "none";
    });

    declineBtn.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "declined");
        banner.style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".section-title");

  function revealTitles() {
    titles.forEach(title => {
      const rect = title.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        title.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealTitles);
  revealTitles(); // Vérifie dès le chargement
});
