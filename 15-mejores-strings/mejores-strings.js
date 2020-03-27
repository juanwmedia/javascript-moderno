const hi = "Hello world";
const from = "from Spain";
//const final = hi + from;

function day() {
  return "friday";
}

// Usando template strings
const final = `${hi} ${from} on ${day()}`;

const multiline = `Hello
 World`;

// Includes
const email = "hola@wmedia.es";
// if (email.includes("@")) console.log("Valid email");

// StartsWith / EndsWith
// if (email.endsWith("wmedia.es")) console.log("Valid email");

const validEmail = email => email.includes("@") && email.endsWith("wmedia.es");
if (validEmail(email)) console.log("Valid email");

// Tagged templates
const cat = {
  name: "Guizmo",
  color: "black",
  image:
    "https://www.guideposts.org/sites/guideposts.org/files/styles/bynder_webimage/public/story/blackcat_marquee_0.jpg",
  city: "Valencia"
};

function makeTemplate(strings, ...keys) {
  console.log(strings, keys);
  return function(data) {
    console.log(data);
    let slices = strings.slice();
    keys.forEach(function(key, index) {
      slices[index] += data[key];
    });
    return slices.join("");
  };
}

const catTemplate = makeTemplate`
	<div class="cat">
		<h1>${"name"}</h1>
		<h3>${"color"} from ${"city"}</h3>
		<img src="${"image"}">
	</div>
`(cat);

const catElement = document.createElement("div");
catElement.innerHTML = catTemplate;
document.body.appendChild(catElement);
