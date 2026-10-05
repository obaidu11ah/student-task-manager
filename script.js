const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

// Add New Task Logic
taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = taskTitle.value.trim();
    const description = taskDescription.value.trim();

    if (title === "" || description === "") {
        message.textContent = "Please enter both task title and description.";
        message.style.color = "red";
        return;
    }

    const taskCard = document.createElement("article");
    taskCard.className = "task-card";

    // Build the task content including the new status feature
    taskCard.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p class="task-status">Status: <span class="status pending">Pending</span></p>
        <button class="toggle-status-btn">Mark as Completed</button>
    `;

    taskList.appendChild(taskCard);

    taskForm.reset();

    message.textContent = "Task added successfully.";
    message.style.color = "green";
});

// Toggle Status Logic using Event Delegation
taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("toggle-status-btn")) {
        const button = event.target;
        const taskCard = button.closest(".task-card");
        const statusSpan = taskCard.querySelector(".status");

        if (statusSpan.classList.contains("pending")) {
            // Change to Completed
            statusSpan.classList.remove("pending");
            statusSpan.classList.add("completed");
            statusSpan.textContent = "Completed";
            button.textContent = "Mark as Pending";
        } else {
            // Change to Pending
            statusSpan.classList.remove("completed");
            statusSpan.classList.add("pending");
            statusSpan.textContent = "Pending";
            button.textContent = "Mark as Completed";
        }
    }
});