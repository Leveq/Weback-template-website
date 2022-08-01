import 'jquery';
import "./styles/main.scss";
import profileImage from "./assets/profileImage.jpeg";
import quickbooksLogo from "./assets/quickbooksLogo.png";
import logo from "./assets/logo.png";

const pfp = document.getElementById("profilePic");
pfp.src = profileImage;

const qb = document.getElementById("quickbooks");
qb.src = quickbooksLogo;

const logoImg = document.getElementById("logoImg");
logoImg.src = logo;

// Navbar transparency
const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-120px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};

// Smooth Scrolling
$('#navbar a, .btn').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        800
      );
    }
  });