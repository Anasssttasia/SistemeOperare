document.getElementById("taskForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const status = document.getElementById("status").value;

    const task = {
        title: title,
        description: description,
        status: status
    };

    // Aici ar trebui să trimiti cererea către backend pentru a salva taskul
    fetch("/add-task", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(data => {
        alert("Task added successfully!");
        loadTasks(); // Reîncarcă taskurile
    })
    .catch(error => console.error("Error:", error));
});

function loadTasks() {
    // Aici ar trebui să trimiti cererea către backend pentru a obține taskurile
    fetch("/tasks")
        .then(response => response.json())
        .then(data => {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";
            data.tasks.forEach(task => {
                const listItem = document.createElement("li");
                listItem.textContent = `${task.title} - ${task.status}`;
                taskList.appendChild(listItem);
            });
        });
}

window.onload = loadTasks;
