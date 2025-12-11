// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].
function highlightListItems() {
    const items = document.querySelectorAll("li");
    // Iterate through each list item and set color to blue
    items.forEach((item) => {
        item.style.color = "blue";
    });
}
highlightListItems();

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].

// Helper function to create and append a timestamp
function createTimestamp() {
    const span = document.createElement("span");
    span.innerHTML = new Date().toLocaleTimeString();
    statusOutput.appendChild(span);
}

function toggleStatus(e) {
    // Task 6: Prevent default behavior (page jump/reload)
    e.preventDefault();

    // Task 5: Toggle visibility
    statusOutput.classList.toggle("hidden");

    // Task 7: Change background color if visible
    if (!statusOutput.classList.contains("hidden")) {
        mainTitle.style.backgroundColor = "yellow";
        // Task 8: Add timestamp when shown
        createTimestamp();
    } else {
        // Reset background if hidden
        mainTitle.style.backgroundColor = "";
    }
}

// Add event listener to the toggle button
toggleButton.addEventListener("click", toggleStatus);

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].

function startFlashing() {
    // Check if an interval is already running to prevent multiple from stacking
    if (!intervalId) {
        // Use setInterval to toggle hidden class every 500ms
        intervalId = setInterval(() => {
            controlPanel.classList.toggle("hidden");
        }, 500);
    }
}

function stopFlashing() {
    // Stop the flashing
    clearInterval(intervalId);
    // Reset intervalId so it can be started again
    intervalId = null;
    // (Optional) Ensure panel is visible when stopped, for better UX
    controlPanel.classList.remove("hidden");
}

// Bind events to the timer button
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);

