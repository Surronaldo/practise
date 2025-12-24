const tasks = document.querySelectorAll(".task");
const columns = document.querySelectorAll(".column");

let draggedTask = null;

tasks.forEach(task => {
  task.addEventListener("dragstart", () => {
    draggedTask = task;
    setTimeout(() => task.style.display = "none", 0);
  });

  task.addEventListener("dragend", () => {
    draggedTask.style.display = "block";
    draggedTask = null;
  });
});

columns.forEach(column => {
  column.addEventListener("dragover", e => {
    e.preventDefault();
  });

  column.addEventListener("drop", () => {
    column.appendChild(draggedTask);
  });
});
