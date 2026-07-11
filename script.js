(function () {
  "use strict";

  // --- WhatsApp buttons: set the pre-filled reservation message ---
  var WA_NUMBER = "96176540195";
  var MESSAGE = [
    "Hello Abdulhamid, I\u2019m interested in the Introduction to Python Programming course for kids.",
    "",
    "Student name:",
    "Student age:",
    "Preferred schedule:",
    "Any questions:",
    "",
    "Please send me the full details and how to reserve a seat."
  ].join("\n");
  var waHref = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(MESSAGE);
  document.querySelectorAll(".wa-btn").forEach(function (a) {
    a.href = waHref;
  });

  // --- Mobile menu ---
  var burger = document.getElementById("hamburger");
  var links = document.getElementById("navLinks");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // --- FAQ: keep only one answer open at a time ---
  var faqs = document.querySelectorAll(".faq details");
  faqs.forEach(function (d) {
    d.addEventListener("toggle", function () {
      if (d.open) {
        faqs.forEach(function (other) {
          if (other !== d) other.open = false;
        });
      }
    });
  });

  // --- Reveal on scroll ---
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }
})();
