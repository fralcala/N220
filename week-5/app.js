const course = {
  courseNum: "N220",
  courseTitle: "Introduction to Media Application Development",
  totalSeats: 20,
  enrolled: 18,

  getAvailability: function () {
    // could be used but otherway is better
    // return (this.totalSeats - this.enrolled) !==0;
    return this.enrolled < this.totalSeats;
  },
};

// 1. are seats available
console.log(`${course.courseNum} Open: ${course.getAvailability()}`);

// 2. Two more peeps
course.enrolled += 2;
console.log(`Total Students ${course.enrolled}`);

// 3. check availablitiy
console.log(`${course.courseNum} Open: ${course.getAvailability()}`);

// BUILT-IN OBJECTS!!!!!!!!
var tacocat = "wednesday";
function IUPUIWebsite() {
  console.log(window.tacocat);
  console.log(`Inner Width: ${window.innerWidth}`);
  console.log(`Outer Width: ${window.outerWidth}`);

  console.log(window.location);
}

function printPage() {
  window.print();
}

document.getElementById("dpDetails").innerHTML += course.courseTitle;

document.querySelector("#domain").innerHTML += "hi";

console.log(document);

const updatePTag = document.getElementById("update");

console.log(updatePTag.querySelector("#delete"));

console.log(String(100).length, 100);
console.log(String(100).includes("2"), 100);
console.log(String(100).replace("0", "2"), 100);
console.log(String(100).replaceAll("0", "2"), 100);
console.log("1,2,3,4".split(","));
console.log("  123  ");
console.log("  123  ".trim());
