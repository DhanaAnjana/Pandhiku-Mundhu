const reserveBtn = document.getElementById("reserveBtn");
const reservationPanel = document.getElementById("reservationPanel");
const closePanel = document.getElementById("closePanel");

// Open the panel when clicking the button
reserveBtn.addEventListener("click", () => {
    reservationPanel.classList.add("active");
});

// Close the panel when clicking the close button
closePanel.addEventListener("click", () => {
    reservationPanel.classList.remove("active");
});
