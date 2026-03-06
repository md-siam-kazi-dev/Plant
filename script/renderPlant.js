const renderPlant = (plants)=>{
    
    console.log(plants);
    let html = "";
    plants.forEach(plant => {
        //console.log(plant)
        x = `<!-- Card (Tailwind only) -->
<div class="w-full overflow-hidden rounded-2xl border border-emerald-300 bg-white shadow-sm">
  <!-- Image -->
  <div class="p-4">
    <img
      src="${plant.image}"
      alt="${plant.name}"
      class="h-36 w-full plant-img  rounded-xl object-cover"
     id="img-${plant.id}"/>
  </div>

  <!-- Content -->
  <div class="px-4 pb-4">
    <h3 class="text-lg font-bold text-slate-900">${plant.name}</h3>

    <p class="mt-1 line-clamp-2 text-sm text-slate-600">
      ${plant.description}
    </p>

    <!-- Tag -->
    <span
      class="mt-3 inline-flex items-center rounded-full border border-emerald-300 px-3 py-1 text-xs font-semibold text-emerald-600"
    >
      ${plant.name}
    </span>

    <!-- Price + Button -->
    <div class="mt-4 flex items-center justify-between">
      <span class="text-2xl font-extrabold text-emerald-500">$${plant.price}</span>

      <button id="plantid-${plant.id}"
        class=" cart-btn rounded-lg bg-emerald-500 px-6 py-2 font-semibold text-white shadow-md transition hover:bg-emerald-600 active:scale-95"
      >
        Cart
      </button>
    </div>
  </div>

  <!-- Bottom accent line -->
  <div class="h-1 w-full bg-emerald-500"></div>
</div>`;
html += x;
    });
    loadinghtml(false);
    plantContainer.innerHTML = html;
}


