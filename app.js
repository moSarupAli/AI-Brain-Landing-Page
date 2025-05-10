document.addEventListener("mousemove", (event) => {
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;

  document.querySelectorAll(".parallax").forEach((element) => {
    const speed = element.getAttribute("data-speed");
    element.style.transform = `translate(${x * speed * 20}px, ${y * speed * 20}px)`;
  })
})


// * SIGNIN PAGE OPEN AND CLOSE ANIMATION

const signinButton = document.getElementById("signinButton");
const signinPage = document.getElementById("signinPage");
const closeIcon = document.getElementById("closeIcon");

signinButton.addEventListener('click', function(){
  signinPage.classList.remove("closeSignin");
  signinPage.classList.add("openSignin");
})

closeIcon.addEventListener('click', function(){
  signinPage.classList.remove("openSignin");
  signinPage.classList.add("closeSignin");
})


// * SIDEBAR ELEMENTS
const sideBar = document.querySelector('.sidebar');
const menuButton = document.querySelector('.menu-icon');
const closeButton = document.querySelector('.close-icon');

// * OPEN SIDEBAR
menuButton.addEventListener("click", function(){
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
})

// * CLOSE SIDEBAR
closeButton.addEventListener("click", function(){
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
})


function openSidebar() {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.addd("open-sidebar");
}

function closeSidebar() {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.addd("close-sidebar");
}



const copyrightYear = document.querySelector('.copyright-year');
copyrightYear.innerHTML = `${(new Date()).getFullYear()}`


// * Go to Top Functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const goToTopButton = document.querySelector(".go-to-top-container");
goToTopButton.addEventListener("click", scrollToTop);

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 200) {
    goToTopButton.style.display = "block";
  } else {
    goToTopButton.style.display = "none";
  }
})