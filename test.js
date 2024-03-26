document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
var link = document.querySelectorAll(".header_list_item a");
var currentPath = window.location.hash;
document.addEventListener("DOMContentLoaded", function () {
  link.forEach(function (link) {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active_link");
    } else {
      link.classList.remove("active_link");
    }
  });
});

link.forEach(function (link) {
  link.addEventListener("click", () => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active_link");
    } else {
      link.classList.remove("active_link");
    }
  });
});
const hamburger = document.querySelector(".hamburger");
const headerList = document.querySelector(".header_list");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  headerList.classList.toggle("active");
});
