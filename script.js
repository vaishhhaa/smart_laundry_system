// scroll
document.getElementById("bookBtn").addEventListener("click", () => {
    document.querySelector("#services").scrollIntoView({ behavior: "smooth" });
});

// booking
document.querySelector(".book-btn").addEventListener("click", () => {
    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if(!name || !email || !phone){
        document.getElementById("bookingMsg").textContent =
        "Please fill all details!";
        return;
    }

    document.getElementById("bookingMsg").textContent =
    "Thank you For Booking the Service! We will get back to you soon!";
});

// Newsletter
document.getElementById("subscribeBtn").addEventListener("click", () => {
    let name = document.getElementById("subName").value;
    let email = document.getElementById("subEmail").value;

    if(!name || !email){
        document.getElementById("subMsg").textContent =
        "Please enter name and email!";
        return;
    }

    document.getElementById("subMsg").textContent = "Subscribed Successfully!";
});

// Cart System
let cart = [];
let total = 0;

function addItem(name, price){
    cart.push({name, price});
    updateCart();
}

function removeItem(index){
    cart.splice(index, 1);
    updateCart();
}

function updateCart(){
    let table = document.getElementById("cart-table");
    table.innerHTML = `
        <tr>
            <th>No</th>
            <th>Service</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
    `;

    total = 0;

    cart.forEach((item, i) => {
        table.innerHTML += `
            <tr>
                <td>${i+1}</td>
                <td>${item.name}</td>
                <td>₹${item.price}</td>
                <td><button onclick="removeItem(${i})">Remove</button></td>
            </tr>
        `;
        total += item.price;
    });

    document.getElementById("totalAmount").innerText = total;
}

