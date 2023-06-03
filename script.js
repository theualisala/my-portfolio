  //greeting code
  document.addEventListener("DOMContentLoaded", function() {
    var greetingElement = document.getElementById("greeting");
    var currentTime = new Date();
    var currentHour = currentTime.getHours();
  
    var greeting;
  
    if (currentHour < 12) {
      greeting = "GOON MORNING!!";
    } 
    else if (currentHour < 18) {
      greeting = "GOOD AFTERNOON!!";
    } 
    else {
      greeting = "GOOD EVENING!!";
    }
    greetingElement.textContent = greeting;
  });
  

// Get references to DOM elements
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let slideInterval;
// Function to show the current slide
function showSlide() {
  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  }); 
  // Show the current slide
  slides[currentSlide].style.display = 'block';
}
// Function to change the slide (next/previous)
function changeSlide(n) {
  currentSlide += n;
  // Wrap around to the first slide if at the end
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  // Wrap around to the last slide if at the beginning
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  } 
  showSlide();
}
// Function to start the auto slide show
function startSlideShow() {
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 3000); // Change slide every 3 seconds
}
// Function to stop the auto slide show
function stopSlideShow() {
  clearInterval(slideInterval);
}
// Show the initial slide
showSlide();
// Start the auto slide show
startSlideShow();



//search code
function searchSections() {
    // Get the user input from the search input field
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();
    // Get all the sections in the document
    var sections = document.getElementsByTagName("section");
    // Loop through each section and check if the search query matches the section's content
    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var sectionContent = section.innerText.toLowerCase();
      // If the section's content contains the search query, display the section; otherwise, hide it
      if (sectionContent.includes(searchQuery)) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    }
  }
  
