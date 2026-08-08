/* =====================================================
   NAVBAR
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu when clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight =
        document.body.classList.contains("light-mode");

    localStorage.setItem(
        "portfolio-theme",
        isLight ? "light" : "dark"
    );

    if (isLight) {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   BACK TO TOP
===================================================== */

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section, .learning-section"
    );

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        alert("Please fill all the fields.");

        return;

    }


    /*
       This is a frontend-only form.

       It opens the user's email application
       with the entered information.
    */

    const subject =
        encodeURIComponent(
            `Portfolio Contact from ${name}`
        );

    const body =
        encodeURIComponent(
            `Name: ${name}\n\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );

    window.location.href =
        `mailto:heersavaliya84@gmail.com?subject=${subject}&body=${body}`;


    contactForm.reset();

});


/* =====================================================
   BUTTON RIPPLE EFFECT
===================================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(event) {

        const ripple =
            document.createElement("span");

        const rect =
            this.getBoundingClientRect();

        const size =
            Math.max(
                rect.width,
                rect.height
            );

        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;

        ripple.style.position = "absolute";

        ripple.style.left =
            `${event.clientX - rect.left - size / 2}px`;

        ripple.style.top =
            `${event.clientY - rect.top - size / 2}px`;

        ripple.style.borderRadius = "50%";

        ripple.style.background =
            "rgba(255,255,255,0.2)";

        ripple.style.transform = "scale(0)";

        ripple.style.animation =
            "ripple 0.6s linear";

        ripple.style.pointerEvents = "none";

        this.style.position = "relative";
        this.style.overflow = "hidden";

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


/* =====================================================
   TYPING EFFECT
===================================================== */

const heroTitle =
    document.querySelector(".hero h2");

const originalText =
    heroTitle.textContent.trim();

heroTitle.textContent = "";

let textIndex = 0;

function typeText() {

    if (textIndex < originalText.length) {

        heroTitle.textContent +=
            originalText.charAt(textIndex);

        textIndex++;

        setTimeout(typeText, 45);

    }

}

setTimeout(typeText, 500);


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "%cHello 👋 Welcome to Heer Savaliya's Portfolio!",
    "font-size:16px;font-weight:bold;color:#7c5cff;"
);

console.log(
    "Built with HTML, CSS & JavaScript."
);