const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  const sliderContainer = slider.querySelector(".slider-container");
  const slideButton = slider.querySelector(".slide-button");

  let slidePosition = 0;
  const slideWidth = 239.9; // Adjust this value based on the width of each slide item
  const slidesToShow = 5; // Adjust this value to the desired number of slides to display

  slideButton.addEventListener("click", () => {
    const slides = sliderContainer.querySelectorAll("li");
    const slidesCount = slides.length;
    const maxSlidePosition = (slidesCount - slidesToShow) * slideWidth;

    slidePosition -= slideWidth * slidesToShow;
    if (slidePosition < -maxSlidePosition) {
      slidePosition = 0;
    }

    sliderContainer.style.transform = `translateX(${slidePosition}px)`;
  });
});

import service from "./services.js"; // Import your service for fetching movie data
import { filmTmpl, singleFilmTmpl } from "./template.js";

// Fetch the movie data
service.getMovies().then((movies) => {
  // Select all slider elements
  const sliders = document.querySelectorAll(".slider");

  // Iterate over each slider
  sliders.forEach((slider) => {
    // Get the category from the slider ID
    const category = slider.querySelector(".slider-list").id;

    // Select the slider list element
    const sliderList = slider.querySelector(".slider-list");

    // Filter movies that belong to the category
    const categoryMovies = movies.filter((movie) =>
      movie.Category.includes(category)
    );

    // Shuffle the movies randomly within the category
    const shuffledCategoryMovies = shuffleArray(categoryMovies);

    // Generate the HTML for each movie in the category
    shuffledCategoryMovies.forEach((movie) => {
      const movieHTML = filmTmpl(movie);
      // Insert the movie HTML into the slider list element
      sliderList.innerHTML += movieHTML;
    });
  });
});

// Function to shuffle an array randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/* SCROLL EFFECT */

function scrollValue() {
  var navbar = document.getElementById("navbar");
  var scroll = window.scrollY;
  if (scroll < 20) {
    navbar.classList.remove("BgColour");
  } else {
    navbar.classList.add("BgColour");
  }
}

window.addEventListener("scroll", scrollValue);

/*  */

// Fetch the movie data
service.getMovies().then((movies) => {
  // Get the product ID from the URL
  let search = location.search;
  let productID = new URLSearchParams(search).get("id");

  // Find the matching movie in the data
  const foundMovie = movies.find((movie) => movie.Id == productID);

  // Generate the HTML for the single movie
  const movieHTML = singleFilmTmpl(foundMovie);

  // Insert the movie HTML into the product container
  const productContainer = document.querySelector(".product-container");
  productContainer.insertAdjacentHTML("beforeend", movieHTML);
});

/* list add */
