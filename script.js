const taskForm = document.getElementById("taskForm");
const taskTitle = document.getElementById("taskTitle");
const taskDescription = document.getElementById("taskDescription");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");

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

    const heading = document.createElement("h3");
    heading.textContent = title;

    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    taskCard.appendChild(heading);
    taskCard.appendChild(paragraph);
    taskList.appendChild(taskCard);

    taskForm.reset();

    message.textContent = "Task added successfully.";
    message.style.color = "green";
});