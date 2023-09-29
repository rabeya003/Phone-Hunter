const loadPhone=async(search,dataLimit)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${search}`
    fetch(url)
    const res=await fetch(url);
    const data=await res.json();
    displayPhone(data.data, dataLimit);
}
const displayPhone=(phones,dataLimit)=>{
    const phoneContainer=document.getElementById('phone-container');
    phoneContainer.innerHTML=``;
    // display 10 phones only
    const showAll=document.getElementById('showAll');
      if(dataLimit && phones.length>10){
          phones=phones.slice(0,10);
          showAll.classList.remove('d-none')
      }
      else{
        showAll.classList.add('d-none')
      }

  // display no phones found:
    const notFound=document.getElementById('no-found-message');
        if(phones.length==0){
          notFound.classList.remove('d-none')
        }
        else{
          notFound.classList.add('d-none')
        }

// display all phones
    phones.forEach(phone => {
        const div=document.createElement('div')
        div.classList.add('col');
        div.innerHTML=` 
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
      </div>
        `
      phoneContainer.appendChild(div)
    });

// stop loader
      toggleSpinner(false);
      }

      
const processSearch=(dataLimit)=>{
  toggleSpinner(true);
  const inputField=document.getElementById('input')
  const inputFieldValue=inputField.value;
  loadPhone(inputFieldValue,dataLimit)
  // inputField.value='';
}



// search button click
    const search=()=>{
      processSearch(10);

}


// loader condition
  const toggleSpinner=isLoading=>{
  const loaderSection=document.getElementById('loader')
    if(isLoading){
      loaderSection.classList.remove('d-none')
    }
    else{
      loaderSection.classList.add('d-none')
    }
}


// there is no data limit->SHOW-ALL
  document.getElementById('btn-showAll').addEventListener('click',function(){
    processSearch();
})

// loadPhone();