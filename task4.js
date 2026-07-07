// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        });

    });

});


// Contact Form

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been sent successfully.");

    form.reset();

});


// ----------------------------
// To-Do List with Local Storage
// ----------------------------

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


// Load Saved Tasks

window.onload = function(){

    loadTasks();

};


// Add Task

function addTask(){

    const task = taskInput.value.trim();

    if(task === ""){

        alert("Please enter a task.");

        return;

    }

    createTask(task);

    saveTask(task);

    taskInput.value="";

}


// Create Task

function createTask(task){

    const li = document.createElement("li");

    li.innerHTML = `

        <span>${task}</span>

        <button class="delete-btn">Delete</button>

    `;

    li.querySelector(".delete-btn").addEventListener("click",function(){

        removeTask(task);

        li.remove();

    });

    taskList.appendChild(li);

}


// Save Task

function saveTask(task){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.push(task);

    localStorage.setItem("tasks",JSON.stringify(tasks));

}


// Load Tasks

function loadTasks(){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task=>{

        createTask(task);

    });

}


// Remove Task

function removeTask(task){

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks = tasks.filter(t=>t!==task);

    localStorage.setItem("tasks",JSON.stringify(tasks));

}


// Press Enter to Add Task

taskInput.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        addTask();

    }

});
// ============================
// PRODUCT FILTER
// ============================

function filterProducts() {

    const category = document.getElementById("categoryFilter").value;

    const products = document.querySelectorAll(".product-card");

    products.forEach(product => {

        if (category === "all" || product.dataset.category === category) {

            product.style.display = "block";

        } else {

            product.style.display = "none";

        }

    });

}

// ============================
// PRODUCT SORTING
// ============================

function sortProducts() {

    const container = document.getElementById("productContainer");

    const cards = Array.from(container.getElementsByClassName("product-card"));

    const sortValue = document.getElementById("sortPrice").value;

    if (sortValue === "low") {

        cards.sort((a, b) => {

            return Number(a.dataset.price) - Number(b.dataset.price);

        });

    }

    else if (sortValue === "high") {

        cards.sort((a, b) => {

            return Number(b.dataset.price) - Number(a.dataset.price);

        });

    }

    else {

        cards.sort((a, b) => {

            return 0;

        });

    }

    cards.forEach(card => {

        container.appendChild(card);

    });

}

// ============================
// BUY NOW BUTTON
// ============================

const buyButtons = document.querySelectorAll(".product-card button");

buyButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert("Thank you for your interest! This is a demo product.");

    });

});