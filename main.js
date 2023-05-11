// add to cart
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

const addToCart = (itemId) => {
  const dishElement = document.getElementById(`dish-${itemId}`);
  const dishTitle = dishElement.querySelector(".dish-title h3").innerText;
  const dishPrice = parseFloat(
    dishElement
      .querySelector(".dist-bottom-row b")
      .innerText.replace("Rs. ", "")
  );

  const existingItemIndex = cartItems.findIndex((item) => item.id === itemId);

  if (existingItemIndex > -1) {
    cartItems[existingItemIndex].quantity += 1;
    cartItems[existingItemIndex].totalPrice += dishPrice;
  } else {
    const item = {
      id: itemId,
      title: dishTitle,
      price: dishPrice,
      quantity: 1,
      totalPrice: dishPrice,
    };

    cartItems.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cartItems));
};

// add to cart ends

document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  // cart code
  const cartNumber = document.getElementById("cart-number");
  const addButtons = document.querySelectorAll(".dish-add-btn");
  let cartCount = parseInt(cartNumber.textContent);

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      cartCount++;
      cartNumber.textContent = cartCount;
    });
  });

  // menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNavigation = document.querySelector(".main-navigation");
  const headerMenuLinks = document.querySelectorAll(".header-menu ul li a");

  menuToggle.addEventListener("click", () => {
    mainNavigation.classList.toggle("toggled");
  });

  headerMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNavigation.classList.remove("toggled");
    });
  });

  // sticky header
  const siteHeader = document.querySelector(".site-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 30) {
      siteHeader.classList.add("sticky_head");
    } else {
      siteHeader.classList.remove("sticky_head");
    }
  });
  // second
  var scene = $(".js-parallax-scene").get(0);
  var parallaxInstance = new Parallax(scene);

  // menu
  jQuery(".filters").on("click", function () {
    jQuery("#menu-dish").removeClass("bydefault_show");
  });
  $(function () {
    var filterList = {
      init: function () {
        $("#menu-dish").mixItUp({
          selectors: {
            target: ".dish-box-wp",
            filter: ".filter",
          },
          animation: {
            effects: "fade",
            easing: "ease-in-out",
          },
          load: {
            filter: ".all, .breakfast, .lunch, .dinner",
          },
        });
      },
    };
    filterList.init();
  });

  //   menu table
  var book_table = new Swiper(".book-table-img-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 2000,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 3,
      stretch: 2,
      depth: 100,
      modifier: 5,
      slideShadows: false,
    },
    loopAdditionSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   team section
var team_slider = new Swiper(".team-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    speed: 2000,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 3,
        },
    },
});

});

// activating tab of filter
window.addEventListener("load", function () {
  document.body.classList.remove("body-fixed");

  const targets = document.querySelectorAll(".filter");
  let activeTab = 0;
  let old = 0;
  let dur = 0.4;
  let animation;

  for (let i = 0; i < targets.length; i++) {
    targets[i].index = i;
    targets[i].addEventListener("click", moveBar);
  }

  gsap.set(".filter-active", {
    x: targets[0].offsetLeft,
    width: targets[0].offsetWidth,
  });

  function moveBar() {
    if (this.index != activeTab) {
      if (animation && animation.isActive()) {
        animation.progress(1);
      }
      animation = gsap.timeline({
        defaults: {
          duration: 0.4,
        },
      });
      old = activeTab;
      activeTab = this.index;
      animation.to(".filter-active", {
        x: targets[activeTab].offsetLeft,
        width: targets[activeTab].offsetWidth,
      });

      animation.to(
        targets[old],
        {
          color: "#0d0d25",
          ease: "none",
        },
        0
      );
      animation.to(
        targets[activeTab],
        {
          color: "#fff",
          ease: "none",
        },
        0
      );
    }
  }
});


//   $("body").removeClass("body-fixed");

//   //activating tab of filter
//   let targets = document.querySelectorAll(".filter");
//   let activeTab = 0;
//   let old = 0;
//   let dur = 0.4;
//   let animation;

//   for (let i = 0; i < targets.length; i++) {
//     targets[i].index = i;
//     targets[i].addEventListener("click", moveBar);
//   }

//   // initial position on first === All
//   gsap.set(".filter-active", {
//     x: targets[0].offsetLeft,
//     width: targets[0].offsetWidth,
//   });

//   function moveBar() {
//     if (this.index != activeTab) {
//       if (animation && animation.isActive()) {
//         animation.progress(1);
//       }
//       animation = gsap.timeline({
//         defaults: {
//           duration: 0.4,
//         },
//       });
//       old = activeTab;
//       activeTab = this.index;
//       animation.to(".filter-active", {
//         x: targets[activeTab].offsetLeft,
//         width: targets[activeTab].offsetWidth,
//       });

//       animation.to(
//         targets[old],
//         {
//           color: "#0d0d25",
//           ease: "none",
//         },
//         0
//       );
//       animation.to(
//         targets[activeTab],
//         {
//           color: "#fff",
//           ease: "none",
//         },
//         0
//       );
//     }
//   }
// });
