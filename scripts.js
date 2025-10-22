// ***************************
// Parallax Effect for Background Images
// ***************************
const parallaxLayers = document.querySelectorAll(".parallax-bg");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset;

  parallaxLayers.forEach((layer) => {
    const speed = 0.4;
    const offset = layer.parentElement.offsetTop;
    const height = layer.parentElement.offsetHeight;
    const relativeY = scrollTop - offset;

    if (
      scrollTop + window.innerHeight > offset &&
      scrollTop < offset + height
    ) {
      layer.style.transform = `translateY(${relativeY * speed}px)`;
    }
  });
});

// ***************************
// CONTACT FORM SUBMISSION
// ***************************
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    document.getElementById("contact-form").classList.add("hidden");
    document.getElementById("loading").classList.remove("hidden");
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const jsonData = JSON.stringify(Object.fromEntries(formData));

    const API_URL = "https://base-api-ts.herokuapp.com/mail";
    // const API_URL = "http://localhost:4000/mail";
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: jsonData,
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("loading").classList.add("hidden");
          document.getElementById("contact-success").classList.remove("hidden");
        } else {
          alert("Failed to send message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
      });
  });

// ***************************
// Bio toggle functionality
// ***************************
const bioButtonList = document.getElementsByClassName("bio-toggle");
Array.from(bioButtonList).forEach((button) => {
  button.addEventListener("click", function () {
    console.log("Bio button clicked");
    const bioBody = this.nextElementSibling;
    bioBody.classList.toggle("bio-body-active");
    this.textContent === "Read Bio"
      ? (this.textContent = "Hide Bio")
      : (this.textContent = "Read Bio");
  });
});

//   const videoPlayer = document.getElementById("videoPlayer");
//   const watchFilmButtons = document.querySelectorAll(".watchFilm");
//   watchFilmButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       videoPlayer.style.transform = "translate(0, 0)";
//       window.body.classList.add("videoPlayerActive");
//     });
//   });
//   const closeFilmButton = document.getElementById("closeFilm");
//   closeFilmButton.addEventListener("click", () => {
//     videoPlayer.style.transform = "translate(100vw, 0)";
//     window.body.classList.remove("videoPlayerActive");
//   });

//   const sections = document.querySelectorAll("section, #projects");
//   const navLinks = document.querySelectorAll(".nav-links a");

//   function highlightNav() {
//     let scrollPos = window.scrollY || document.documentElement.scrollTop;
//     sections.forEach((section) => {
//       const id = section.getAttribute("id");
//       const offsetTop = section.offsetTop - 80;
//       const offsetBottom = offsetTop + section.offsetHeight;

//       if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
//         navLinks.forEach((link) => {
//           link.classList.remove("active");
//           if (link.getAttribute("href") === `#${id}`) {
//             link.classList.add("active");
//           }
//         });
//       }
//     });
//   }

//   window.addEventListener("scroll", highlightNav);
