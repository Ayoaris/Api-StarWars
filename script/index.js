// function main() {
const images = [
  "LukeSkywalker.jpg",
  "C-3PO.jpg",
  "R2D2_Droid.jpg",
  "DarthVader.jpg",
  "LeiaOrgana.jpg",
  "OwenLars.jpg",
  "BeruWhitesunlars.jpg",
  "R5-D4.jpg",
  "BiggsDarklighter.jpg",
  "obiwankenobi.jpg",
];

async function main() {
  let data = await fetch("https://swapi.dev/api/people");
  let newData = await data.json();
  let character = newData.results;

  character.forEach((char, i) => {
    // Declare variable
    let newContainer = document.getElementById("starwars-characters");
    let charList = document.createElement("li");
    let pTag = document.createElement("p");
    let charDetails = document.createElement("p");
    let image = document.createElement("img");

    // Add classes
    charList.className = "pTag"; // styling
    charDetails.className = "charDetails";

    // Insert data into element
    pTag.innerText = char.name;
    image.setAttribute("src", `./images/${images[i]}`);

    pTag.addEventListener("click", () => {
      if (
        charDetails.style.display === "none" ||
        charDetails.style.display === ""
      ) {
        charDetails.style.display = "block";
      } else {
        charDetails.style.display = "none";
      }

      charDetails.innerHTML = `
                    <div>
                        <h4>DETAILS</h4>
                        <h5>Name: ${char.name}</h5>
                        <h5>Gender: ${char.gender}</h5>
                        <h5>Height: ${char.height}</h5>
                    </div>
                `;
      charList.append(charDetails);
    });

    // Attach elemt to DOM
    charList.append(pTag);
    charList.append(image);
    newContainer.append(charList);
  });
}
main();
module.exports = { main };
