// Let's create a product object containing name, description, price, linkk, and image source
function Product(name, description, price, link, imageSrc){
    this.name=name;
    this.description=description;
    this.price=price;
    this.link=link;
    this.imageSrc=imageSrc;
}

// Let's instantiate some products and add them to our inventory
let product1 = new Product('Nike Tennis Shoes', 'Just do it.', 79.99, '#', 'images/product-1.jpeg');
let product2 = new Product('Polaroid Camera', 'Instant memories that last.', 69.99, '#', 'images/product-2.jpeg');
let product3 = new Product('Pink Adore Sunglasses', 'Enjoy those rose-colored glasses.', 59.99, '#', 'images/product-3.jpeg');
let product4 = new Product('Pink Bose Headphones', 'Noise cancelling heaven.', 99.99, '#', 'images/product-4.jpeg');
let product5 = new Product('Floral Blue Aldo Stilettos', 'Be uniquely you.', 79.99, '#', 'images/product-5.jpeg');

products = [product1, product2, product3, product4, product5];

// Function to load the products
function loadProducts(){
    let productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = "";
    // Iterate over each product and add a card with each field
    products.forEach(function(product) {
        let newProduct = document.createElement('div');
        newProduct.innerHTML = `<div class="col">
                        <div class="card" >
                            <img src="${product.imageSrc}" class="card-img-top" alt="${product.name} Image" >
                            <div class="card-body" name="special">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">${product.description}<br>$${product.price}</p>
                                <a href="${product.link}" class="btn" style="background-color: yellow;">Learn More</a>
                            </div>
                        </div>
                    </div>`
        productGrid.append(newProduct);
    });
}
                    
// User object that we receive from the contact form (name, email and message)
function User(name, email, message){
    this.name=name;
    this.email=email;
    this.message=message;
}
// The list of users
let userList = [];

// When the submit button is clicked
document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault();
    // Retrieve the name, email and message
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    // If one field is empty, send error
    if (name==="" || email==="" || message===""){
        alert("Please fill out all the fields and click 'Submit'.")
    // If email is invalid, send error
    }else if(!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
        alert("Please use a valid email!");
    // Otherwise, we create a new user and add it to the list
    }else{
        let newUser = new User(name, email, message);
        userList.push(newUser);
        // Alert the user and reset the form.
        alert("Message successfully sent!");
        document.getElementById("contactForm").reset();
    }
});

// This function changes the background color of the 'box' h1 from white to lightblue and back on click
function changeColor(){
    if (document.getElementById("box").style.backgroundColor === "lightblue"){
        document.getElementById("box").style.backgroundColor = "white";
        document.getElementById("box").style.textTransform = "lowercase";
    } else{
        document.getElementById("box").style.backgroundColor = "lightblue";
        document.getElementById("box").style.textTransform = "uppercase";
    }}

// This function changes the background color of the 'products' section from gray to lightblue and back on click
document.getElementById("products").addEventListener("click", function(event){
    event.preventDefault();
    if (document.getElementById("products").style.backgroundColor === "lightblue"){
        document.getElementById("products").style.backgroundColor = "#ccc";
    } else{
        document.getElementById("products").style.backgroundColor = "lightblue";
    }
});

// This function changes the background color of the 'contactForm' from gray to lightblue and back on click
document.getElementById("contactForm").addEventListener("click", function(event){
    event.preventDefault();
    if (document.getElementById("contactForm").style.backgroundColor === "lightblue"){
        document.getElementById("contactForm").style.backgroundColor = "#ccc";
    } else{
        document.getElementById("contactForm").style.backgroundColor = "lightblue";
}});

// Once everything is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Load the products
    loadProducts();

    // Retrieve all the buttons
    let buttons = document.getElementsByClassName("btn");
    // For each button, add event listeners for hover
    for (let button of buttons) {
        // When hovering, changes background to black and text to white
        button.addEventListener("mouseover", function () {
            button.style.backgroundColor = "black";
            button.style.color = "white";
        });
        // When it stops hovering, changes background to yellow and text to black
        button.addEventListener("mouseout", function () {
            button.style.backgroundColor = "yellow";
            button.style.color = "black";
        });
    }
});
