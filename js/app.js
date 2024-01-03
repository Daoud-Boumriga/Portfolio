// Get the submit button element
const btn = document.getElementById("btn");

// Get all of the input fields
const inputs = document.querySelectorAll("input");

// Add an event listener to the submit button
btn.addEventListener("click", function() {
  // Check if the input fields are empty
  for (const input of inputs) {
    if (input.value === "") {
      // Display an error message to the user
      alert("Please fill out all of the required fields.");
    }else{
        alert("Your information received successfully!");
    }
  }

  // Submit the information
});


$(document).ready(function () {
    //Owl
    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        navText: ['PREV', 'NEXT'],
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                nav: false,
            },
            768: {
                nav: true,
            }
        }
    })

    $('#projects-slider').owlCarousel({
        loop: true,
        nav: false,
        items: 2,
        dots: true,
        smartSpeed: 600,
        center: true,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 8,
            }
        }
    })

    $('.reviews-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        smartSpeed: 900,
        items: 1,
        margin: 24,
        autoplay: true,
        autoplayTimeout: 4000,
    })
});
