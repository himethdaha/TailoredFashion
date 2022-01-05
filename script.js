///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

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
      document.querySelector(".logo").classList.add("sticky");
      document.querySelector(".navigation").classList.add("sticky");
      document.querySelector(".home").classList.remove("see");
    }

    if (ent.isIntersecting === false) {
      document.querySelector(".logo").classList.remove("sticky");
      document.querySelector(".navigation").classList.remove("sticky");
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

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
