const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    checkbox.type = "checkbox";
    span.textContent = input.value;
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    checkbox.addEventListener("change", function() {
        span.classList.toggle("done");
    });

    deleteBtn.addEventListener("click", function() {
        taskList.removeChild(li);
    });

    input.value = "";
});
