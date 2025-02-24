 
let selectedImages = [];
const searchInput = document.getElementById('searchInput');
let searchInputText = searchInput.querySelector('input[type="text"]');
const popupImagesContainer = document.getElementById('popupImages');
const popup = document.getElementById('myPopup');


function playSound() {
    const sound = new Audio('assets/clicksound.mp3'); // Replace 'sound.mp3' with your sound file
    sound.play();
  }
  



function addImageToInput(img) {
    if (selectedImages.length >= 7) {
        alert("You can only select up to 7 images.");
        return;
    }

    const imgElement = document.createElement('img');
    imgElement.src = img.src;
    imgElement.style.marginRight = '5px';
    imgElement.style.cursor = 'pointer';

    imgElement.addEventListener('click', () => {
        removeImageFromInput(imgElement);
    });

    searchInput.insertBefore(imgElement, searchInputText);
    selectedImages.push(img.src);

    // Hide the placeholder text
    searchInputText.style.display = 'none';
    playSound(); 
}

function removeImageFromInput(imgElement) {
    searchInput.removeChild(imgElement);
    const imgIndex = selectedImages.indexOf(imgElement.src);
    if (imgIndex > -1) {
        selectedImages.splice(imgIndex, 1);
    }

    // Show placeholder if no images are left
    if (selectedImages.length === 0) {
        searchInputText.style.display = 'inline';
    }
    playSound(); 
}

function showPopup() {
    if (selectedImages.length < 7) {
        alert("Please select at least 7 images before proceeding.");
        return; // Stop function execution
    }

    const popupImagesContainer = document.getElementById("popupImageContainer");
    const popup = document.getElementById("myPopup");

    // Define the two image options
    const imageOptions = ["bigpopup.png", "smallpopup.png"];

    // Select one image randomly
    const randomImageSrc = imageOptions[Math.floor(Math.random() * imageOptions.length)];

    // Clear any existing content in the popup
    popupImagesContainer.innerHTML = "";

    // Create the new image element
    const img = document.createElement('img');
    img.src = randomImageSrc;
    img.alt = "Popup Image";
    img.style.width = "100%"; // Ensure it fills the container
    img.style.height = "auto";
    img.style.borderRadius = "10px";

    // Append the selected image to the popup
    popupImagesContainer.appendChild(img);

    // Display the popup
    popup.style.display = "block";
    playSound(); 
}


function closePopup() {
    popup.style.display = "none";
    playSound(); 
}

function clearInput() {
    if (selectedImages.length < 1) {
        alert("Select at least one image to clear the input.");
        return;
        playSound(); 
    }

    searchInput.innerHTML = "<input type='text'>";
    searchInputText = searchInput.querySelector('input[type=\"text\"]'); // Re-query the input element
    selectedImages = [];
}
