// STORAGE
const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []

console.log(itemsArray)

// ENTER 
document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    createItem(item)
})

// DATE
function displayDate(){
    let date = new Date()
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3]
}

function displayItems(){
    let items = ""
    for(let i = 0 ; i < itemsArray.length; i++){
        items += `<div class="item">
                        <div class="input-controller">
                            <textarea disabled>${itemsArray[i]}</textarea>
                        </div>
                        <div class="edit-controller">
                            <i class="fa-solid fa-check deleteBtn"></i>
                            <i class="fa-solid fa-pen-to-square editBtn"></i>
                        </div>
                        <div class="update-controller">
                            <button class="saveBtn">Save</button>
                            <button class="cancelBtn">Cancel</button>
                        </div>
                    </div>`
    }
    document.querySelector(".todolist").innerHTML = items
    activateDeleteListeners()
    activateEditListeners()
    activateSaveListeners()
    activateCancelListeners()
}

// DELETE BTN
function activateDeleteListeners(){
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((db, i) => {
        db.addEventListener("click", () => { deleteItem(i) })
    })
}

function deleteItem(i){
    itemsArray.splice(i, 1)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

// EDIT BTN
function activateEditListeners(){
    const editBtn = document.querySelectorAll(".editBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    editBtn.forEach((eb, i) => {
        eb.addEventListener("click", () => {
            updateController[i].style.display = "block"
            inputs[i].disabled = false
        })
    })
}

// SAVE
function activateSaveListeners(){
    const saveBtn = document.querySelectorAll(".saveBtn")
    const inputs = document.querySelectorAll(".input-controller textarea")
    saveBtn.forEach((sb, i) => {
        sb.addEventListener("click", () => {
            updateItem(inputs[i].value, i)
        })
    })
}

function updateItem(text, i){
    itemsArray[i] = text
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

// CANCEL
function activateCancelListeners(){
    const cancelBtn = document.querySelectorAll(".cancelBtn")
    const updateController = document.querySelectorAll(".update-controller")
    const inputs = document.querySelectorAll(".input-controller textarea")
    cancelBtn.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            updateController[i].style.display = "none"
            inputs[i].disabled = true
        })
    })
}

// CREATE ITEM
function createItem(item){
    itemsArray.push(item.value)
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload()
}

window.onload = function(){
    displayDate()
    displayItems()
}

// Get the h2 element by its tag name
let h2 = document.getElementsByTagName("h2")[0];

// Define an array of colors for the animation
let colors = ["#00b894", "#00cec9", "#0984e3", "#6c5ce7", "#fd79a8", "#e17055", "#fab1a0"];

// Define a variable to keep track of the current color index
let colorIndex = 0;

// Define a function to change the color of the h2 element
function changeColor() {
  // Set the color of the h2 element to the current color in the array
  h2.style.color = colors[colorIndex];

  // Increment the color index by one
  colorIndex++;

  // If the color index reaches the end of the array, reset it to zero
  if (colorIndex == colors.length) {
    colorIndex = 0;
  }
}

// Define a function to scale the h2 element
function scale() {
  // Get the current scale factor of the h2 element
  let scale = h2.style.transform.replace("scale(", "").replace(")", "");

  // If the scale is not defined, set it to one
  if (!scale) {
    scale = 1;
  }

  // Convert the scale to a number
  scale = Number(scale);

  // Toggle the scale between 1 and 1.2
  if (scale == 1) {
    scale = 1.2;
  } else {
    scale = 1;
  }

  // Set the scale of the h2 element to the new factor
  h2.style.transform = "scale(" + scale + ")";
}

// Define a function to animate the h2 element
function animate() {
  // Call the changeColor and scale functions
  changeColor();
  scale();
}

// Set an interval to call the animate function every 500 milliseconds
setInterval(animate, 500);





// get the date element
let date = document.getElementById("date");

// define the keyframes
let keyframes = [
  { opacity: 0 }, // start from transparent
  { opacity: 1 }, // fade in to opaque
  { opacity: 0 } // fade out to transparent
];

// define the options
let options = {
  duration: 1600, // 3 seconds
  iterations: Infinity, // repeat forever
  easing: "ease-in-out" // use a smooth easing function
};

// create and play the animation
let animation = date.animate(keyframes, options);
