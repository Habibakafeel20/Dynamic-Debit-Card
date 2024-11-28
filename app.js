// Select the card element
const card = document.querySelector('.card');

// Add an event listener for the click event
card.addEventListener('click', () => {
    // Toggle the 'flipped' class on the card
    card.classList.toggle('flipped');
});

console.log(card)