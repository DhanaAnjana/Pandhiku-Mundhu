async function submitReservation() {
    const restaurant = document.getElementById("restaurant").value;
    const date = document.querySelector(".date-btn.active")?.innerText;
    const slot = document.querySelector(".slot-btn.active")?.innerText;
    const guests = document.getElementById("guests").value;
    const foodPreference = document.getElementById("food-preference").value; // "vegetarian" or "non-vegetarian"

    if (!date || !slot) {
        alert("Please select a date and slot.");
        return;
    }

    // Convert slot time to a 24-hour format if needed (if it's in a string like '12:00 PM')
    const formattedTime = new Date(`${date} ${slot}`).toISOString(); // Format date-time as ISO string

    // Create the reservation object
    const reservationData = {
        restaurant,
        date: formattedTime,
        time: slot,
        numOfGuests: guests,
        isVegetarian: foodPreference === "vegetarian" // Assuming foodPreference is a string
    };

    // Sending the reservation data to your server (on port 5000)
    const response = await fetch("http://localhost:5000/api/reservations", { // Correct port is 5000
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(reservationData)
    });

    const result = await response.json();
    if (response.ok) {
        alert("Reservation confirmed!");
    } else {
        alert("Error: " + result.message);
    }
}

async function fetchReservations() {
    const response = await fetch('http://localhost:5000/api/reservations'); // Correct port is 5000
    const reservations = await response.json();
    const list = document.getElementById('reservationList');
    list.innerHTML = '';  // Clear existing list before appending new data

    reservations.forEach(res => {
        const li = document.createElement('li');
        // Format the date properly (you may want to use a library like moment.js for better date formatting)
        const formattedDate = new Date(res.reservationDate).toLocaleString();
        li.textContent = `${res.name} - ${formattedDate} at ${res.time} for ${res.numOfGuests} guests (${res.isVegetarian ? 'Vegetarian' : 'Non-Vegetarian'})`;
        list.appendChild(li);
    });
}

fetchReservations();