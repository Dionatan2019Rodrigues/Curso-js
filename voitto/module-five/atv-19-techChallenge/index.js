class Project {
  constructor(name, responsible, date, status) {
    this.name = name;
    this.responsible = responsible;
    this.date = date;
    this.status = status;
  }
  AddProjectToTable() {
    const projectsTable = document.querySelector(
      "#section-projects table tbody"
    );

    const newProject = document.createElement("tr");
    newProject.innerHTML = `
        <td>${this.name}</td>
        <td>${this.responsible}</td>
        <td>${this.date}</td>
        <td>
            <span class="tag ${this.status.toLowerCase()}">${this.status}</span>
        </td>
    `;
    projectsTable.append(newProject);
  }
}
class Task {
  constructor(description) {
    this.description = description;
  }
  AddTaskToForm() {
    const tasksForm = document.querySelector("#section-tasks form ");

    const newTask = document.createElement("div");
    newTask.innerHTML = `
        <input type="checkbox" name="task" />
        <label>${this.description}</label>
    `;
    tasksForm.prepend(newTask);
  }
}

// Início da área que corresponde a main
const projects = [
  new Project("Brasilia", "Marcos", "2024-09-12", "Congelado"),
  new Project("Bagé", "Dionatan", "2025-01-23", "Desenvolvendo"),
  new Project("Maringá", "Ana", "2024-11-26", "Desenvolvendo"),
  new Project("Camobi", "Diogo", "2024-08-31", "Atrasado"),
];

const tasks = [
  new Task("Trabalhar 4h"),
  new Task("Acordar cedo"),
  new Task("Estudar javaScript"),
  new Task("Alimentação saudável"),
  new Task("Treinar pesado"),
];

projects.forEach((project) => project.AddProjectToTable());
tasks.forEach((task) => task.AddTaskToForm());

// Fim da área que corresponde a main
