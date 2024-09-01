class Student {
  #finalGrade;

  constructor(name, firstExam, secondExam, project) {
    this.name = name;
    this.firstExam = firstExam;
    this.secondExam = secondExam;
    this.project = project;
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
