function showName() {
  let username = document.getElementById("name-text").value;
  console.log(`Hi, ${username}`);
}

let child = "Ruth";

if (child === "Wolfgang") {
  console.log("Wolfgang is a child");
} else if (child === "Koko") {
  console.log("Koko is the second best.");
} else {
  console.log("The child is not Wolfgang or Koko.");
}
