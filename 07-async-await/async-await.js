// Async keyword
async function myFunction() {
  //return "Hello World";
  return Promise.resolve("Hello World");
}

myFunction().then(data => console.log(data));

// Await keyword
function getWeather() {
  return new Promise((resolve, reject) => {
    //setTimeout(() => reject("Can't connect 🙀"), 2000);
    setTimeout(() => resolve("Mostly cloudy: 13C"), 2000);
  });
}

function getTraffic() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Traffic fluid"), 2000);
  });
}

async function travelPlan() {
  //   getWeather()
  //     .then(data => {
  //       console.log(data);
  //       return getTraffic();
  //     })
  //     .then(data => console.log(data));
  // }

  //   const weather = await getWeather();
  //   const traffic = await getTraffic();
  //   return [weather, traffic];

  try {
    const weather = getWeather();
    const traffic = getTraffic();
    const plan = await Promise.all([weather, traffic]);
    throw "Error";
    return plan;
  } catch (error) {
    throw error;
  }
}

travelPlan()
  .then(data => console.log(data))
  .catch(error => console.error(error));
