document.getElementById("employee-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value.trim();
  const role = document.getElementById("role").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (!firstName || !lastName || !email || !department || !role) {
    errorMsg.textContent = "All fields are required.";
    errorMsg.style.display = "block";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Invalid email format.";
    errorMsg.style.display = "block";
    return;
  }

  errorMsg.style.display = "none";
  alert("Employee saved successfully!");
});