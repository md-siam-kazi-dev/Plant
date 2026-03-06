

const loadinghtml = (bool) => {
    let loading = document.querySelector('.loading');


    if (bool) {
        loading.classList.remove('hidden');

        
        plantContainer.classList.add('hidden');
        

    } else {
        loading.classList.add('hidden');

        plantContainer.classList.remove('hidden')
    }
}


const getId =(evt)=>{
    return evt.split('-')[1];
}