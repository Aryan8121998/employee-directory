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

    
    localStorage.setItem("editEmployee", JSON.stringify(employeeData));

   
    window.location.href = "form.html";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const employeeList = document.getElementById("employee-list");

 
  const allCards = Array.from(document.querySelectorAll(".employee-card"));

  let currentPage = 1;
  const cardsPerPage = 2; 

  function renderPage(page) {
    
    employeeList.innerHTML = "";

    
    const start = (page - 1) * cardsPerPage;
    const end = page * cardsPerPage;

    const paginatedCards = allCards.slice(start, end);
    paginatedCards.forEach(card => employeeList.appendChild(card));

    
    prevBtn.disabled = page === 1;
    nextBtn.disabled = end >= allCards.length;
  }

  
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Previous";
  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage(currentPage);
    }
  });

  nextBtn.addEventListener("click", () => {
    if ((currentPage * cardsPerPage) < allCards.length) {
      currentPage++;
      renderPage(currentPage);
    }
  });

  const paginationWrapper = document.createElement("div");
  paginationWrapper.id = "pagination-controls";
  paginationWrapper.style.textAlign = "center";
  paginationWrapper.appendChild(prevBtn);
  paginationWrapper.appendChild(nextBtn);

  employeeList.parentElement.appendChild(paginationWrapper);

  renderPage(currentPage);
});

