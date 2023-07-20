document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("myForm").addEventListener("submit", function(event) {
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            mobile: document.getElementById("mobile").value,
            date: document.getElementById("date").value,
            date_birth: document.getElementById("date-of-birth").value,
            experience: document.getElementById("experience").value,
            country: document.getElementById("country").value,
            file: document.getElementById("file").value,
            radioOption1: document.getElementById("radioOption1").value,
            radioOption2: document.getElementById("radioOption2").value,
            checkbox: document.getElementById("checkbox").value
        };

        localStorage.setItem("formData", JSON.stringify(formData));

        alert("Form data saved locally!");
        });
    });