window.addEventListener("scroll", function () {
    var links = document.querySelectorAll('#header-sticky a');
    var header = document.getElementById("header-sticky");
    var scrollPosition = document.documentElement.scrollTop;

    if (scrollPosition > 0) {
        header.classList.add("active");
        header.style.opacity = "0.7";
        header.style.zIndex = "1";
    } else {
        header.classList.remove("active");
        header.style.opacity = "1";
    }

    if (header.style.opacity === "0.7") {
        links.forEach(function (link) {
            link.addEventListener('mouseover', function () {
                header.style.opacity = "1";
            });

            link.addEventListener('mouseout', function () {
                header.style.opacity = "0.7";
            });
        });
    } else if (header.style.opacity === "1") {
        links.forEach(function (link) {
            link.addEventListener('mouseover', function () {
                header.style.opacity = "1";
            });

            link.addEventListener('mouseout', function () {
                header.style.opacity = "1";
            });
        });
    }
});



var progressBar = document.querySelector(".progress-bar");

function updateProgressBar() {
    var windowHeight = window.innerHeight;
    var fullHeight = document.documentElement.scrollHeight - windowHeight;
    var scrolled = (window.scrollY / fullHeight) * 100;
    progressBar.style.width = scrolled + "%";
}

window.addEventListener("scroll", updateProgressBar);
window.addEventListener("resize", updateProgressBar);

window.onscroll = function () {
    var listContainer = document.getElementById("list-container");
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var view = document.getElementById("view");

    if (scrollPosition >= 50) {
        listContainer.style.position = "fixed";
        view.style.marginLeft = "15%";
        listContainer.style.bottom = "0";
    } else {
        listContainer.style.position = "relative";
        view.style.marginLeft = "0%";
    }
};


document.addEventListener('DOMContentLoaded', function () {
    var introLinks = document.getElementsByClassName('intro-link');
    var introSections = document.getElementsByClassName('intro-section');

    window.addEventListener('scroll', function () {
        for (var i = 0; i < introSections.length; i++) {
            var introSection = introSections[i];
            var introLink = introLinks[i];

            var bounding = introSection.getBoundingClientRect();

            if (bounding.top >= 0 && bounding.top <= window.innerHeight) {
                for (var j = 0; j < introLinks.length; j++) {
                    introLinks[j].classList.remove('active');
                }

                introLink.classList.add('active');
            } else {
                introLink.classList.remove('active');
            }
        }
    });
});

var slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
    var slides = document.getElementsByClassName("slide");
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = n;
    }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

var prevButton = document.querySelector(".prev-button");
var nextButton = document.querySelector(".next-button");

prevButton.addEventListener("click", function () {
    showSlide(slideIndex - 1);
});

nextButton.addEventListener("click", function () {
    showSlide(slideIndex + 1);
});

var toggleButton = document.querySelector(".toggle-button");
var links = document.querySelector("header a")

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    //   toggleButton.classList.toggle("dark");

    if (document.body.classList.contains("dark-mode")) {
        document.body.style.backgroundColor = "#000000";
        toggleButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        document.body.style.backgroundColor = "#ffffff";
        toggleButton.innerHTML = '<i class="fa-solid fa-lightbulb"></i>';
    }
});

function toggleColor() {
    var elementIDs = ['element1', 'element2', 'element3', 'element4', 'element5', 'element6', 'intro1', 'intro2', 'intro3', 'intro4', 'intro5', 'intro6', 'element10', 'element11', 'element12', 'element13', 'element15', 'element16', 'element17', 'element14']; // Danh sách các ID của các phần tử
    var toggleClass = 'light-mode'; // Lớp để thay đổi màu sắc

    elementIDs.forEach(function (elementID) {
        var element = document.getElementById(elementID);

        if (element.classList.contains(toggleClass)) {
            element.classList.remove(toggleClass);
            element.style.color = '#000';
        } else {
            element.classList.add(toggleClass);
            element.style.color = '#fff';
        }
    });
}




