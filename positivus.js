const slider = document.querySelector(".testimonial-slider");
const dots = document.querySelectorAll(".dot");
let index = 0;

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % dots.length;
  updateSlider();
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + dots.length) % dots.length;
  updateSlider();
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
});

function updateSlider() {
  slider.scrollTo({
    left: index * slider.clientWidth,
    behavior: "smooth",
  });

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}


// For work process section

document.querySelectorAll('[id^="workBtn-"]').forEach(buttonl => {
  buttonl.addEventListener("click", function () {

    const index = this.id.split('-')[1];
    const content = document.getElementById(`workContent-${index}`);
    const workCard = document.getElementById(`work-card-${index}`);
    const buttonImage = this.querySelector('img');

    if (content.classList.contains("show")) {
      workCard.style.backgroundColor = "#d3d3d3"; 
      buttonImage.src = "img/Plus icon.png";
    } else {
      workCard.style.backgroundColor = "#b9ff66";
      buttonImage.src = "img/Plus icon (1).png"; 
    }

    new bootstrap.Collapse(content, {
      toggle: true
    });
  });
});




// ==================================================================================


// Scroll animations

const scrollTopBtn = document.getElementById("scrollTopBtn");
        
        window.onscroll = function() {
            if (document.documentElement.scrollTop > 100) {
                scrollTopBtn.classList.remove("d-none");
            } else {
                scrollTopBtn.classList.add("d-none");
            }
        };
        
        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }



  document.addEventListener("DOMContentLoaded", function () {
      const cards = document.querySelectorAll(".card");

      function showCardsOnScroll() {
          cards.forEach(card => {
              const cardPosition = card.getBoundingClientRect().top;
              const screenPosition = window.innerHeight / 1.2;

              if (cardPosition < screenPosition) {
                  card.classList.add("show");
              }
          });
      }

      window.addEventListener("scroll", showCardsOnScroll);
      showCardsOnScroll(); 
  });

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".form-con");

    function showCardsOnScroll() {
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (cardPosition < screenPosition) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showCardsOnScroll);
    showCardsOnScroll(); 
});