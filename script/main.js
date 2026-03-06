let category = document.getElementById("category");
let cartArray = [];

let plantContainer = document.getElementById("plant-container");

let cartContainer = document.getElementById('cart-container')

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
    let id = getId(evt.target.id);
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
    renderCart();
    console.log(cartArray);


  }else if(evt.target.classList.contains('plant-img')){
    let id = getId(evt.target.id);
    let response = await fetch(
      `https://openapi.programming-hero.com/api/plant/${id}`,
    );
    let data = await response.json();

    let plant = data.plants;
     document.getElementById("modal-title").textContent = plant.name;
  document.getElementById("modal-image").src = plant.image;
  document.getElementById("modal-category").textContent = plant.category;
  document.getElementById("modal-description").textContent = plant.description;
  document.getElementById("modal-price").textContent = `$${plant.price}`;

  document.getElementById("plant_modal").showModal();
  }
});

cartContainer.addEventListener('click',(evt)=>{
    if(evt.target.classList.contains('cart-delete')){
        let id = getId(evt.target.id);
        cartArray = cartArray.filter(cart => cart.id != id);
    }
    renderCart();
})


const firstHTML =async()=>{
    let response = await fetch(`https://openapi.programming-hero.com/api/plants`);
    let data = await response.json();
    let plants = data.plants;
    renderPlant(plants)
}

firstHTML();
renderCart();

