//DYNAMICALLY SETTING THE YEAR IN THE FOOTER
let year = document.querySelector(".year");
let currYear = new Date().getFullYear();
year.textContent = currYear;

//MOBILE NAVIGATION BUTTON
let headerEl = document.querySelector(".header");
let heroEl = document.querySelector("main");
let mobileBtn = document.querySelector(".mobile-nav");

mobileBtn.addEventListener("click", function () {
  headerEl.classList.toggle("mobile-nav-open");
  heroEl.classList.toggle("mobile-nav-open");
});

//FOR SAFARI SMOOTH SCROLLING
//Get all the link
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
//Loop through all the links providing them with eventlisteners
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    //Get the href attribute from the links
    const href = link.getAttribute("href");

    //Scroll to the top when clicking the logo text or footer icon
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (href === "about.html") {
      window.location.href = "about.html";
    }
    if (href === "Testimonials.html") {
      window.location.href = "Testimonials.html";
    }
    //Scroll to sections when clicking links
    if (href !== "#" && href.startsWith("#")) {
      //Get the ID of the section which is also the href attribute in the links
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    //Closing navbar when a main-link is clicked, in hamburger mode
    if (link.classList.contains("main-link")) {
      //Removing mobile navigation from the header
      headerEl.classList.toggle("mobile-nav-open");
      //Removing movile navigation from the hero section
      heroEl.classList.toggle("mobile-nav-open");
    }
  });
});

//STICKY NAVIGATION
const sectionHeroEl = document.querySelector(".Features");

//1st parameter - what we want to happen
//2nd parameter - options
const obs = new IntersectionObserver(
  function (entries) {
    //entries = number of thresholds
    //Since i have only 1 threshold that means the number of entries are 1
    const ent = entries[0];
    console.log(ent);

    //Once the hero-section is not in the viewport
    if (ent.isIntersecting === true) {
      document.querySelector(".navigation").classList.add("sticky");
      //removing visibily:hidden from the home link making it visible
      document.querySelector(".home").classList.remove("see");
    }

    if (ent.isIntersecting === false) {
      document.querySelector(".navigation").classList.remove("sticky");
      //adding visibily:hidden to the home link making it hidden again
      document.querySelector(".home").classList.add("see");
    }
  },
  {
    //root is basically the bounding area of the element
    //root = null means in the viewport
    //so whats happening here is as soon as the navigation passes the hero-section it becomes sticky
    root: null,
    //threshold = 0 means as soon as the hero-section is out of the viewport
    threshold: 0.4,
  }
);
obs.observe(sectionHeroEl);

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
