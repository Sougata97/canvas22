// Nav Script
// --------------
// active
const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active-nav"));
  this.classList.add("active-nav");
}
list.forEach((item) => item.addEventListener("click", activeLink));

// ---------------

// Modal Script
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("mymodalbtn", "mymodalbtnsec");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// --------------------

// Responsive Modal Script

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("mymodalbtnsec");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


// ------------

// Swiper Slider Script

      var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 10,
          stretch: 0,
          depth: 900,
          modifier: 1,
          slideShadows: true,
        },
        autoplay: {
          delay: 1700,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      $(".swiper-container").hover(
        function () {
          this.swiper.autoplay.stop();
        },
        function () {
          this.swiper.autoplay.start();
        }
      );


    //   -------------------

    // Hover BTN Script

    $(document).ready(function (e) {
        $(".bx-btm-link").on("mouseenter", function (e) {
          x = e.pageX - $(this).offset().left;
          y = e.pageY - $(this).offset().top;
          $(this).find("span").css({ top: y, left: x });
        });
        $(".bx-btm-link").on("mouseout", function (e) {
          x = e.pageX - $(this).offset().left;
          y = e.pageY - $(this).offset().top;
          $(this).find("span").css({ top: y, left: x });
        });
      });

    //   -----------------
