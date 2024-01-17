const validateForm = (event) => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;


}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", validateForm);
