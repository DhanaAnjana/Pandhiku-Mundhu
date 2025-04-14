async function submitReservation() {
    const restaurant = document.getElementById("restaurant").value;
    const date = document.querySelector(".date-btn.active")?.innerText;
    const slot = document.querySelector(".slot-btn.active")?.innerText;
    const guests = document.getElementById("guests").value;
    const foodPreference = document.getElementById("food-preference").value;

    if (!date || !slot) {
        alert("Please select a date and slot.");
        return;
    }

    const reservationData = {
        restaurant,
        date,
        slot,
        guests,
        foodPreference
    };

    const response = await fetch("http://localhost:5001/api/reservations", {
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

document.querySelectorAll(".date-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        document.querySelectorAll(".date-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    });
});

document.querySelectorAll(".slot-btn").forEach(btn => {
    btn.addEventListener("click", function() {
        document.querySelectorAll(".slot-btn").forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    });
});

//////********** */
async function fetchReservations() {
    const response = await fetch('http://localhost:5000/api/reservations');
    const reservations = await response.json();
    const list = document.getElementById('reservationList');
    list.innerHTML = '';

    reservations.forEach(res => {
        const li = document.createElement('li');
        li.textContent = `${res.name} - ${res.date} at ${res.time} for ${res.guests} guests (${res.preference})`;
        list.appendChild(li);
    });
}

fetchReservations();