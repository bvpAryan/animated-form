let inputs = document.querySelectorAll("input");
let submitBtn = document.getElementById("submitBtn");
let successMessage = document.getElementById("successMessage");

/* 🔹 Real-time validation while typing */
inputs.forEach(function (input) {

    input.addEventListener("input", function () {

        if (input.value.trim() === "") {

            input.classList.remove("input-success");
            input.classList.add("input-error");

        } else {

            input.classList.remove("input-error");
            input.classList.add("input-success");

        }

    });

});


/* 🔹 Submit validation */
submitBtn.addEventListener("click", function () {

    let hasError = false;

    inputs.forEach(function (input) {

        if (input.value.trim() === "") {

            input.classList.add("input-error");
            hasError = true;

        }

    });

    if (!hasError) {

        successMessage.classList.add("show");

        setTimeout(function () {
            successMessage.classList.remove("show");
        }, 3000);
    }

});