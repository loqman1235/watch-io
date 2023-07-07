const heroSlider = document.querySelector(".heroSlider"),
  heroSliderInner = document.querySelector(".heroSliderInner"),
  heroSliderItems = document.querySelectorAll(".heroSliderItem");

let slideTime = 5000;
let currSlide = 0;
// slider inner width
heroSliderInner.style.width = `${100 * heroSliderItems.length}%`;

// Indictors
heroSliderItems.forEach((item, itemIndex) => {
  let indicator = document.createElement("span");
  indicator.classList.add("indicator");
  indicator.dataset.slide = itemIndex;

  heroSlider.lastElementChild.appendChild(indicator);
  indicator.addEventListener("click", () => {
    currSlide = itemIndex;
    document
      .querySelectorAll(".indicator")
      .forEach((indicator) => indicator.classList.remove("active"));
    indicator.classList.add("active");
    heroSliderInner.style.left = `-${100 * itemIndex}%`;
  });
});

// Set default active indicator
heroSlider.lastElementChild.firstChild.classList.add("active");

// Slider move every 5 seconds
function autoSlide() {
  setInterval(() => {
    if (currSlide > heroSliderItems.length - 1) {
      currSlide = 0;
    }

    document
      .querySelectorAll(".indicator")
      .forEach((indicator) => indicator.classList.remove("active"));
    heroSlider.lastElementChild.children[currSlide].classList.add("active");
    heroSliderInner.style.left = `-${100 * currSlide}%`;
    currSlide++;
  }, slideTime);
}

autoSlide();

// let startX;
// let isPressed = false;
// let x;

// heroSlider.addEventListener("mousedown", (e) => {
//   isPressed = true;
//   startX = e.offsetX - heroSliderInner.offsetLeft;
//   heroSlider.style.cursor = "grabbing";
// });

// heroSlider.addEventListener("mouseenter", () => {
//   heroSlider.style.cursor = "grab";
// });

// heroSlider.addEventListener("mouseup", () => {
//   heroSlider.style.cursor = "grab";
//   isPressed = false;
// });

// heroSlider.addEventListener("mousemove", (e) => {
//   if (!isPressed) return;
//   e.preventDefault();
//   x = e.offsetX;
//   heroSlider.scrollLeft = `${x - startX}`;
// });

// Filters
const filterDropdownBtn = document.querySelectorAll(".filterDropdownBtn");

filterDropdownBtn.forEach((filterBtn) => {
  const filterDropdownMenu = filterBtn.nextElementSibling;
  filterBtn.addEventListener("click", () => {
    filterBtn.parentElement.classList.toggle("active");
    filterBtn.classList.toggle("active");
    filterDropdownMenu.classList.toggle("active");
  });

  if (filterDropdownMenu !== null) {
    [...filterDropdownMenu.children].forEach((menuItem) => {
      menuItem.addEventListener("click", () => {
        const selectedItem = menuItem.dataset.value;

        menuItem.parentElement.parentElement.firstElementChild.innerText =
          selectedItem[0].toUpperCase() + selectedItem.slice(1);
        menuItem.parentElement.parentElement.firstElementChild.dataset.value =
          selectedItem;
        filterDropdownMenu.parentElement.classList.remove("active");
        filterDropdownMenu.classList.remove("active");
        menuItem.parentElement.previousElementSibling.classList.remove(
          "active"
        );
      });
    });
  }
});

// Sorting Movies

const movies = document.querySelectorAll(".movie");
const filters = document.querySelectorAll(".filter");

// filters.forEach((filter) => {
//   if (filter.id === "genre2") {
//     filter.addEventListener("change", () => {
//       if (filter.value === "all") {
//         console.log("All Movies");
//       }
//       if (filter.value === "action") {
//         movies.forEach((movie) => {
//           if (movie.parentElement.id === "trendingMovies") {
//             if (filter.value === "action" && movie.dataset.genre !== "action") {
//               movie.style.display = "none";
//             } else {
//               movie.style.display = "block";
//             }
//           }
//         });
//       }
//     });
//   }
// });
