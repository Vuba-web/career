// Get the modal
var modal = document.getElementById("enrollModal");

// Get the button that opens the modal
var btn = document.querySelector(".cta");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the "Enroll me" button, open the modal
function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const faqQuestions = document.querySelectorAll('.faq-question');
    
faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        faqItem.classList.toggle('active');
    });
});

// Toggles the main menu visibility
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('visible');
    closeAllDropdowns(); // Close all dropdowns when toggling the menu
}

// Toggles specific dropdown visibility while ensuring others close
function toggleDropdown(id) {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    
    dropdowns.forEach(menu => {
        if (menu.id === `${id}-dropdown`) {
            menu.classList.toggle('visible'); // Toggle the current dropdown
        } else {
            menu.classList.remove('visible'); // Close all other dropdowns
        }
    });
}

// Closes all dropdowns when not in use
function closeAllDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    dropdowns.forEach(menu => {
        menu.classList.remove('visible'); // Hide all dropdowns
    });
}

// Click outside to close dropdowns and menu
document.addEventListener('click', function(event) {
    const header = document.querySelector('header');
    const navbar = document.getElementById('navbar');
    const isClickInsideHeader = header.contains(event.target);

    if (!isClickInsideHeader) {
        navbar.classList.remove('visible'); // Close the navbar
        closeAllDropdowns(); // Close all dropdowns
    }
});
