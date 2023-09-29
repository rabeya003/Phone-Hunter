const loadPhone=async(search)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${search}`
    fetch(url)
    const res=await fetch(url);
    const data=await res.json();
    displayPhone(data.data);
}
const displayPhone=phones=>{
    const phoneContainer=document.getElementById('phone-container');
    phoneContainer.innerHTML=``;
    phones=phones.slice(0,20)
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
}
const search=()=>{
  const inputField=document.getElementById('input')
  const inputFieldValue=inputField.value;
  loadPhone(inputFieldValue)
  inputField.value='';
}
// loadPhone();