const renderCatagory =async ()=>{
    let html = "";

    let response = await fetch('https://openapi.programming-hero.com/api/categories');
    let data = await response.json();
   
    data.categories.forEach(category => {
       console.log(category.id)
        let x = `<div id="cat-${category.id}" class ="w-full cat-btn text-center font-bold p-4 rounded border border-1">${category.category_name}</div>`
        html += x;
    });
    category.innerHTML = html;
}