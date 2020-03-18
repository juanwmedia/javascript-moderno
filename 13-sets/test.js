// Mini ejercicio
const users = ["Juan", "Alberto", "Raúl", "María", "Laura", "Elena", "Guizmo"];
const userVisits = new Set();

function visit() {
  const userIndex = Math.floor(Math.random() * users.length);
  const user = users[userIndex];
  userVisits.has(user) &&
    console.warn(`User ${user} already visited the page!`);
  userVisits.add(user);
  console.log(userVisits);

  if (userVisits.size === users.length) {
    console.info("All users have visited the page!");
    clearInterval(interval);
    userVisits.clear();
  }
}

const interval = setInterval(visit, 300);
