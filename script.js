

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    const currentBackground =
        document.body.style.background;

    if (document.body.classList.contains("light")) {

        document.body.classList.remove("light");

        themeBtn.textContent = "☀";

    } else {

        document.body.classList.add("light");

        themeBtn.textContent = "🌙";

    }

});


const form = document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    const email =
        document.getElementById("email").value.trim();


    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    formMessage.textContent =
        "Message sent successfully! 🚀";


    form.reset();

});