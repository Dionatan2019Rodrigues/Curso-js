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
        <td>${this.finalGrade}</
    `;

    studentsTable.append(newStudent);
  }
}

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

const addNewStudentForm = document.querySelector("#add-student");
addNewStudentForm.addEventListener("submit", addNewStudent);

function addNewStudent(event) {
  event.preventDefault();

  const { studentName, firstExam, secondExam, project } =
    getStudentDataByForm();

  const newStudent = new Student(studentName, firstExam, secondExam, project);

  newStudent.addStudentToTable();

  clearForm(event.target);
}

function getInputValueById(inputId) {
  return document.getElementById(inputId).value;
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

function clearForm(formElement) {
  const inputElement = formElement.querySelectorAll("input");
  inputElement.forEach((input) => (input.value = null));
}



function handleInvalidStudentName(element) {
  element.setCustomValidity("O nome é obrigatório");
}
function handleChangeStudentName(element) {
  element.setCustomValidity("");
}

function handleInvalidGrade(element) {
  element.setCustomValidity("A nota deve ser um número entre 0 e 100");
}
function handleChangeGrade(element) {
  element.setCustomValidity("");
}
