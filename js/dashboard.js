document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const card = e.target.closest(".employee-card");
    card.remove(); 
  }
});


document.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-btn")) {
    const card = e.target.closest(".employee-card");

    const employeeData = {
      firstName: card.querySelector(".name").textContent.replace("Name:", "").trim(),
      email: card.querySelector("p:nth-child(3)").textContent.replace("Email:", "").trim(),
      department: card.querySelector(".dept").textContent.replace("Department:", "").trim(),
      role: card.querySelector("p:nth-child(5)").textContent.replace("Role:", "").trim()
    };

    // Save to localStorage
    localStorage.setItem("editEmployee", JSON.stringify(employeeData));

    // Redirect to form
    window.location.href = "form.html";
  }
});

