const classroom = {
  students: [],
  className: "Ty's class",
  showStudents() {
    document.getElementById("students").innerHTML = "";

    // this.students.forEach(function (studentName) {
    //   document.getElementById("students").innerHTML += studentName + "<br/>";
    // });

    // Both top^ and bottom v do the same thing

    for (let i = 0; i < this.students.length; i++) {
      const studentName = this.students[i];
      document.getElementById("students").innerHTML += studentName + "<br/>";
    }
  },
  maxStudents: 2,
};

function addNewStudent() {
  const currentStudents = classroom.students.length;
  if (currentStudents >= classroom.maxStudents) {
    console.log("No seats available");
  } else {
    classroom.students.push(document.getElementById("studentName").value);
    classroom.showStudents();
  }
}

document.getElementById("studentName").innerHTML +=