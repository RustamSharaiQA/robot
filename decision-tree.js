const age = 20;
const hasPassport = true;

if (age >= 18 && hasPassport) {
  console.log("Access granted");
}

if (age < 18) {
  console.log("You are under 18");
} else if (age >= 18 && hasPassport) {
  console.log("You can travel");
} else {
  console.log("Passport required");
}
