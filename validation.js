// select all elements - Sida aad usoo qortay
let fullname = document.getElementById("name");
let phoneNumber = document.getElementById("phone");
let customerage = document.getElementById("age");
let customerpassword = document.getElementById("password");
let form = document.querySelector('.register-form');


// Full name
fullname.addEventListener("input", (event) => {
    let fullnametext = event.target.value;
    if (fullnametext.length >= 3 && fullnametext.length <= 35) {
        fullname.style.border = "2px solid green";
    } else {
        fullname.style.border = "2px solid red";
    }

    if (/[0-9]/.test(fullnametext)) {
        fullname.style.border = "2px solid red";
    }
});

// Phone number
phoneNumber.addEventListener("input", (event) => {
    let phonetext = event.target.value;
    if (phonetext.length >= 9 && phonetext.length <= 18) {

        if (phonetext >= 610000000 && phonetext <= 619999999) {
            phoneNumber.style.border = "2px solid green";
        } else {
            phoneNumber.style.border = "2px solid red";
        }
    } else {
        phoneNumber.style.border = "2px solid red";
    }

    if (/[a-zA-Z]/.test(phonetext)) {
        phoneNumber.style.border = "2px solid red";
    }
});

// Age number
customerage.addEventListener("input", (event) => {
    let userage = event.target.value;
    let ageNum = parseInt(userage);

    if (ageNum >= 18 && ageNum <= 99) {
        customerage.style.border = "2px solid green";
    } else {
        customerage.style.border = "2px solid red";
    }

    if (/[a-zA-Z]/.test(userage)) {
        customerage.style.border = "2px solid red";
    }
});

// Password validation function
function validatePassword(userpassword) {
    //length
    if (userpassword.length < 8) {
        return "Must at least 8 characters";
    }
    // Upper letter
    if (!/[A-Z]/.test(userpassword)) {
        return "Must Contain at least one upper case letter";
    }
    // Small letter
    if (!/[a-z]/.test(userpassword)) {
        return "Must Contain at least one Small letter";
    }
    // digit
    if (!/[0-9]/.test(userpassword)) {
        return "Must Contain at least one digit number";
    }
    // Special Character
    if (!/[^A-Za-z0-9]/.test(userpassword)) {
        return "Must contain at least one special character";
    }
    return "";
}

// Password input
customerpassword.addEventListener("input", (event) => {
    let userpassword = event.target.value;
    let validate = validatePassword(userpassword);

    if (validate === "") {
        customerpassword.style.border = "2px solid green";
    } else {
        customerpassword.style.border = "2px solid red";
    }
});

// 1. ARRAY
let registeredUsers = [];

// Form submission
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isNameValid = fullname.style.border.includes('green');
        let isPhoneValid = phoneNumber.style.border.includes('green');
        let isAgeValid = customerage.style.border.includes('green');
        let isPasswordValid = customerpassword.style.border.includes('green');

        if (isNameValid && isPhoneValid && isAgeValid && isPasswordValid) {

            // 2. Create USER OBJECT
            const newUser = {
                name: fullname.value,
                age: customerage.value,
                password: customerpassword.value,
                phoneNumber: phoneNumber.value
            };

            // 3. Add to ARRAY
            registeredUsers.push(newUser);

            document.getElementById("disp-name").textContent = newUser.name;
            document.getElementById("disp-phone").textContent = newUser.phoneNumber;
            document.getElementById("disp-age").textContent = newUser.age;
            document.getElementById("disp-pass").textContent = newUser.password;
            document.getElementById("disp-time").textContent = newUser.time;


            //reset form
            form.reset();
            fullname.style.border = "";
            phoneNumber.style.border = "";
            customerage.style.border = "";
            customerpassword.style.border = "";
        } else {
            alert("Fadlan iska sax xogta aad soo gelinayso");
        }
    });
}
