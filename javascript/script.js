// Moving the title on scroll
// if the window width > 1350px
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let w = window.innerWidth;
  let title = document.getElementById("title");
  let currentScrollPos = window.pageYOffset;
  if (window.pageYOffset > 25 && w > 1349) {
    title.style.left = "10%";
    title.style.fontSize = "2rem";
  } else {
    title.style.left = "50%";
    title.style.fontSize = "4rem";
  }
  prevScrollpos = currentScrollPos;
};
