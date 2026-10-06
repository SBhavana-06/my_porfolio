/* ==============================
   WELCOME MESSAGE
============================== */

window.onload = function () {
    alert("Welcome to S Bhavana's Portfolio! 😊");
};


/* ==============================
   SCROLL ANIMATION
============================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);


/* Observe every section */

sections.forEach(function (section) {

    section.classList.add("hidden");

    observer.observe(section);

});