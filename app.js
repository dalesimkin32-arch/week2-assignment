const thumbnails = document.getElementById("thumbnails");
const displayContainer = document.getElementById("displayContainer");

// create an array of images
const images = [
  {
    src: "./images/Leeds-Castle-Kent.webp",
    alt: "Leeds Castle in Kent from the water",
  },

  {
    src: "./images/TowerofLondon.webp",
    alt: "Tower of London, from Thames, showing Traitor's Gate",
  },

  {
    src: "./images/WindsorCastle_RoundTower.webp",
    alt: "Windsor Castle, centered on the Round Tower",
  },
];

function createThumbnails() {
  // loop through images array and for each object create an image tag and set it's content to the information in the image object

  images.forEach(function (image) {
    // image is the image object from above array, index (in parameters above) is the index of that element
    let imageElement = document.createElement("img");
    // console.log(`current image is`, image);
    // imageElement is actual <img /> tag
    imageElement.src = image.src;

    // click on thumbnail trigger big picture display
    imageElement.addEventListener("click", function () {
      // console.log(image)
      // call this function and pass it the image clicked on
      createBigImage(image);
    });

    // append image element to DOM
    thumbnails.appendChild(imageElement);
  });
}

createThumbnails();

// createBigImage is expecting to get an object as an argument
//
/*
{
    src: 'something',
    alt: 'something,
}
*/

function createBigImage(imgDetails) {
  /* reset  displayContainer to have nothing in it b4 displaying image*/
  displayContainer.innerHTML = ``;
  const bigImage = document.createElement("img");

  bigImage.src = imgDetails.src;
  bigImage.alt = imgDetails.alt;

  displayContainer.appendChild(bigImage);
}
