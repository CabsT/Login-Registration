// Change background color when typing
const inputs = document.querySelectorAll(".container input");

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
            input.classList.add("typing");
        } else {
            input.classList.remove("typing");
        }
    });
});

function togglePasswordVisibility(passwordFieldId, toggleIconId) {
    const passwordField = document.getElementById(passwordFieldId);
    const toggleIcon = document.getElementById(toggleIconId);

    toggleIcon.addEventListener('click', () => {
        const isPassword = passwordField.type === 'password';
        passwordField.type = isPassword ? 'text' : 'password';
        toggleIcon.textContent = isPassword ? '🙈' : '👁';
    });
}

// Attach toggle functionality to password fields
togglePasswordVisibility('password', 'togglePassword');
togglePasswordVisibility('confirmPassword', 'toggleConfirmPassword');
togglePasswordVisibility('loginPassword', 'toggleLoginPassword');

// Registration form
document.getElementById("registerForm").addEventListener("submit", async (e) => {
	e.preventDefault();

	const name = document.getElementById("name").value.trim();
	const surname = document.getElementById("surname").value.trim();
	const phone = document.getElementById("phone").value.trim();
	const email = document.getElementById("email").value.trim();
	const password = document.getElementById("password").value;
	const confirmPassword = document.getElementById("confirmPassword").value;

	if (!name || !surname || !phone || !email || !password || !confirmPassword) {
			alert("Please fill out all fields.");
			return;
	}

	if (password !== confirmPassword) {
			alert("Passwords do not match.");
			return;
	}

	const data = { name, surname, phone, email, password };

	try {
			const response = await axios.post("http://127.0.0.1:5000/register", data, {
				headers: {
						"Content-Type": "application/json"
				}
		});
			if (response.status === 200) {
					alert("Successfully registered");
					document.getElementById("registerForm").reset();
			} else {
					alert("Registration failed. Please try again");
			}
	} catch (error) {
			console.error("Error during registration:", error);
			alert("An error occurred. Please try again later.");
	}
});