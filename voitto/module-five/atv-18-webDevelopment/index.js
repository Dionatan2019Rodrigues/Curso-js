class Student {
  #finalGrade;

  constructor(name, firstExam, secondExam, project) {
    this.name = name;
    this.firstExam = Number(firstExam);
    this.secondExam = Number(secondExam);
    this.project = Number(project);
  }
  get finalGrade() {
    return ((this.firstExam + this.secondExam + this.project) / 3).toFixed(2);
  }
  addStudentToTable() {
    const studentsTable = document.querySelector("table tbody");

    const newStudent = document.createElement("tr");
    newStudent.innerHTML = `
        <td>${this.name}</td>
        <td>${this.firstExam}</td>
        <td>${this.secondExam}</td>
        <td>${this.project}</td>
        <td>${this.finalGrade}</td>
        <td><img class="deleteButton" src='./assets/delete.svg' style="color: #000000"></td>
    `;

    studentsTable.append(newStudent);
    removeStudent();
  }
}
// inicio:Área que corresponde como uma main do projeto
const students = [
  new Student("Carlos", 100, 50, 60),
  new Student("Marcos", 65, 90, 70),
  new Student("Ana", 100, 80, 90),
  new Student("Luiz", 45, 55, 80),
  new Student("Mariana", 90, 50, 55),
  new Student("Patrick", 94, 83, 72),
  new Student("Talita", 70, 89, 93),
  new Student("Leticia", 70, 56, 34),
];

students.forEach((student) => student.addStudentToTable());

const addNewStudentForm = document.querySelector("form#add-student");
addNewStudentForm.addEventListener("submit", addNewStudent);

const filterStudentForm = document.querySelector("form#filter");
filterStudentForm.addEventListener("submit", filterStudentByName);

// fim: Área da main

function removeStudent() {
  const studentRows = document.querySelectorAll("tr td img.deleteButton");
  studentRows.forEach((row) =>
    row.addEventListener("click", handleRemoveStudent)
  );
}
function handleRemoveStudent(event) {
  event.target.parentNode.parentNode.remove();
}

function getStudentDataByForm() {
  const addStudentForm = document.querySelector("form#add-student");

  return {
    studentName: addStudentForm["student-name"].value,
    firstExam: addStudentForm["first-exam"].value,
    secondExam: addStudentForm["second-exam"].value,
    project: addStudentForm["project"].value,
  };
}

function addNewStudent(event) {
  event.preventDefault();

  const addStudentButton = document.querySelector("form#add-student button");

  const { studentName, firstExam, secondExam, project } =
    getStudentDataByForm();

  const newStudent = new Student(studentName, firstExam, secondExam, project);
  newStudent.addStudentToTable();

  event.target.reset();
  addStudentButton.disabled = true;
}
function filterStudentByName(event) {
  event.preventDefault();
  const inputName = event.target["name-filter"].value;
  const filterExpression = new RegExp(inputName, "i");
  const students = document.querySelectorAll("td:first-child");

  students.forEach((student) => {
    const studentName = student.innerText;

    if (filterExpression.test(studentName)) {
      student.parentNode.classList.remove("hidden");
    } else {
      student.parentNode.classList.add("hidden");
    }
  });
}

function validateStudentData() {
  const addStudentButton = document.querySelector("form#add-student button");
  const studentData = getStudentDataByForm();
  const studentDataValue = Object.values(studentData);

  const hasAllData = studentDataValue.every((value) => !!value);

  addStudentButton.disabled = !hasAllData;
}

function handleInvalidStudentName(element) {
  element.setCustomValidity("O nome é obrigatório");
}
function handleChangeStudentName(element) {
  element.setCustomValidity("");
  validateStudentData();
}
function handleInvalidGrade(element) {
  element.setCustomValidity("A nota deve ser um número entre 0 e 100");
}
function handleChangeGrade(element) {
  element.setCustomValidity("");
  validateStudentData();
}
