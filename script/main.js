let category = document.getElementById("category");
let cartArray = [];

let plantContainer = document.getElementById("plant-container");

renderCatagory()

category.addEventListener("click", async (evt) => {
  if (evt.target.classList.contains("cat-btn")) {
    loadinghtml(true);
    let id = getId(evt.target.id);
    let response = await fetch(
      `https://openapi.programming-hero.com/api/category/${id}`,
    );
    let data = await response.json();
    let plants = data.plants;

    renderPlant(plants);
  }
});

plantContainer.addEventListener("click", async (evt) => {
  if (evt.target.classList.contains("cart-btn")) {
    let id = evt.target.id[evt.target.id.length - 1];
    console.log(id);
    let response = await fetch(
      `https://openapi.programming-hero.com/api/plant/${id}`,
    );
    let data = await response.json();

    let plantInfo = data.plants;

    let matchPlant = cartArray.find((plant) => plant.id == plantInfo.id);

    if (matchPlant) {
      matchPlant.quantity++;
    } else {
      plantInfo.quantity = 1;
      cartArray.push(plantInfo);
    }

    console.log(cartArray);
  }
});


const firstHTML =async()=>{
    let response = await fetch(`https://openapi.programming-hero.com/api/plants`);
    let data = await response.json();
    let plants = data.plants;
    renderPlant(plants)
}

firstHTML();

