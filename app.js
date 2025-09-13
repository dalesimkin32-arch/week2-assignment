const thumbnails = document.getElementById("thumbnails");
const displayContainer = document.getElementById("displayContainer");

const rButton = document.getElementById("rightButton");

const lButton = document.getElementById("leftButton");

let shownImageIndex = 0;

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

  {
    src: "./images/BroadwayTower.webp",
    alt: "Broadway Tower & Country Park, Broadway, United Kingdom",
  },

  {
    src: "./images/Castleonthelake.webp",
    alt: "Castle on the Lake",
  },

  {
    src: "./images/CastleVaduz.webp",
    alt: "Castle Vaduz, Vaduz, Liechtenstein",
  },

  {
    src: "./images/CardiffCastle.webp",
    alt: "Castle, Cardiff, UK",
  },

  {
    src: "./images/ChâteaudeChambord.webp",
    alt: "Château de Chambord, Chambord, France",
  },

  {
    src: "./images/EileanDonanCastle.webp",
    alt: "Eilean Donan Castle, Dornie, United Kingdom",
  },

  {
    src: "./images/Joyceville.webp",
    alt: "Joyceville, ON K0H 1Y0, Canada",
  },

  {
    src: "./images/lamontsaintmichel.webp",
    alt: "la mont saint michel, France",
  },

  {
    src: "./images/NeuschwansteinCastle.webp",
    alt: "Neuschwanstein Castle, Schwangau, Germany",
  },
];

function createThumbnails() {
  // loop through images array and for each object create an image tag and set it's content to the information in the image object

  images.forEach(function (image, index) {
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
      shownImageIndex = index;
      console.log(`current image index is ${shownImageIndex}`);
    });

    // append image element to DOM
    thumbnails.appendChild(imageElement);
  });
}

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

console.log(`current image index is ${shownImageIndex}`);
createThumbnails();
createBigImage(images[shownImageIndex]);

/* made go R and L functions as invoking code more than once even though only twice! */
function goRight() {
  if (shownImageIndex === images.length - 1) {
    shownImageIndex = 0;
  } else {
    shownImageIndex++;
  }
  console.log(`current image index is ${shownImageIndex}`);
  createBigImage(images[shownImageIndex]);
}

function goLeft() {
  if (shownImageIndex === 0) {
    shownImageIndex = images.length - 1;
  } else {
    shownImageIndex--;
  }
  console.log(`current image index is ${shownImageIndex}`);
  createBigImage(images[shownImageIndex]);
}

/* R and Left html button controls */
rButton.addEventListener("click", function () {
  goRight();
});

lButton.addEventListener("click", function () {
  goLeft();
});

/* L and R arrow key controls  */
/* using goLeft and goRight functions */

window.addEventListener(
  "keydown",
  function (event) {
    if (event.defaultPrevented) {
      return;
    }
    switch (event.key) {
      case "ArrowRight":
        goRight();
        break;
      case "ArrowLeft":
        goLeft();
        break;
      default:
        return;
    }
    // cancel default even to avoid it being handled twice
    event.preventDefault();
  },
  true
);
