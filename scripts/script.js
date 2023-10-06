
//toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};




//scroll section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      //active sections for animation on scroll
      sec.classList.add("show-animate");

    } else {
      sec.classList.remove("show-animate");
    }
  });
  //sticky header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //remove toggle icon and navbar when click navbar links (scroll)

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};






// typed.js

let options = {
  strings: ['Developer', 'Mentor'],
  typeSpeed: 80,
  startDelay: 400,
  backSpeed: 80,
  backDelay: 1200,
  loop: true,
  loopCount: Infinity,
  showCursor: true,




};
let typed = new Typed(`.element`, options);








// AOS.js

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 70, // offset (in px) from the original trigger point
  delay: 50, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease-in-out', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});




// like onclick

let likes = document.querySelectorAll(".like");

likes.forEach((like) => {
  like.onclick = () => {
    like.classList.toggle("bxs-heart");
  };
})





// filter bar 

$(".filter-item li").click(function () {
  $(".filter-item li").removeClass('filter-active');
  $(this).addClass('filter-active');

  var selectedFilter = $(this).data("filter");
  $("portfolio-wrapper").fadeTo(100, 0);

  $(".card-item").fadeOut().css('transform', 'scale(0)');

  setTimeout(function () {
    $(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
    $("portfolio-wrapper").fadeTo(300, 1);
  }, 300);
});






// Sending emails

sendEmailBtn.addEventListener('click', function() {
  var username = document.getElementById('Name').value;
  var email = document.getElementById('email').value;
  var phoneNumber = document.getElementById('phoneNumber').value;
  var emailSubject = document.getElementById('emailSubject').value;
  var message = document.getElementById('message').value;

  // Check if any input is empty
  if (username.trim() === "" || email.trim() === "" || phoneNumber.trim() === "" || emailSubject.trim() === "" || message.trim() === "") {
    var alertBox = document.createElement("div");
    alertBox.classList.add("alert-box");
    alertBox.textContent = "Please fill in all fields.";

    var contactSection = document.getElementById("contact");
    contactSection.appendChild(alertBox);

    setTimeout(function() {
      alertBox.remove();
    }, 3000);

    return; 
  }

  var messageContent = `Sender's Name: ${username}\nSender's Email: ${email}\nPhone Number: ${phoneNumber}\nEmail Subject: ${emailSubject}\n\n${message}`;

  var data = {
    service_id: 'javoxir',
    template_id: '937021783',
    user_id: 'emWDZ_S6BDM2Ho7Nr',
    template_params: {
      'message': messageContent,
      'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
  };

  axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(function() {
    var alertBox = document.createElement("div");
    alertBox.classList.add("alert-box");

    var messageText = document.createElement("span");
    messageText.textContent = " Message sent! ";

    var icon = document.createElement("i");
    icon.classList.add("bx", "bx-message-square-check");

    messageText.appendChild(icon);
    alertBox.appendChild(messageText);

    var contactSection = document.getElementById("contact");
    contactSection.appendChild(alertBox);

    setTimeout(function() {
      alertBox.remove();
    }, 2500);
  }).catch(function(error) {
    alert('Oops... ' + JSON.stringify(error));
  });
});

const formReset = document.getElementById('form');
formReset.addEventListener('submit', (e) => {
e.preventDefault();
formReset.reset();});

