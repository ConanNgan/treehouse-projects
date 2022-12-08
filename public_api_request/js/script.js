//https://randomuser.me/api/
//fetchData
//console.log(fetch('https://randomuser.me/api/'));
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}
let city;
let state;
let name;
let photo;
let email;
let dataset;
let phoneNumber;
let address;
let birthday;

let data = fetch("https://randomuser.me/api/?results=12")
  .then((e) => checkStatus(e))
  .then((e) => e.json())
  .then((e) => {
   dataset= e.results;
    for (let i = 0; i < 12; i++) {

      data = e.results[i];
      console.log(e.results);
      city = data.location.city;
      state = data.location.state;
      name = data.name.first + " " + data.name.last;
      photo = data.picture.large;
      email = data.email;

      const gallery = document.getElementById("gallery");
      let html = ` <div class="card">
                        <div class="card-img-container">
                            <img class="card-img" src="${photo}" alt="profile picture">
                        </div>
                        <div class="card-info-container">
                            <h3 id="name" class="card-name cap">${name}</h3>
                            <p class="card-text">${email}</p>
                            <p class="card-text cap">${city}, ${state}</p>
                        </div>
                    </div>`;

      gallery.insertAdjacentHTML("beforeend", html);
    }
  }).then(e=>{

    let beans = dataset[0].picture.large;
    console.log(e);
    document.getElementById('gallery').addEventListener('click', e=>{
        console.log(e.target.className);
        let element = e.target;
        //find the name of the clicked element
        if(element.className.includes('card')){
            while(element.className != 'card'){
                element = element.parentElement;
            }
            let name = element.querySelector('#name').textContent;
            
            
            let firstName = name.split(' ',2)[0];
            
            //find the dataset of element clicked
           for(let element of dataset){
            console.log(element.name);
            if(element.name.first === firstName){
                photo = element.picture.large;
                name = element.name.first + ' ' + element.name.last;
                email = element.email;
                city = element.location.city;
                phoneNumber = element.cell;
                address = element.location.street.number + ' ' + element.location.street.name +  ', ' + element.nat + ' ' + element.location.postcode; 
                birthday = element.dob.date;

            }
           }
           // dataset[];
            const gallery = document.getElementById('gallery');
            gallery.insertAdjacentHTML('beforebegin',
            `<div class="modal-container">
            <div class="modal">
                <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                <div class="modal-info-container">
                    <img class="modal-img" src="${photo}" alt="profile picture">
                    <h3 id="name" class="modal-name cap">${name}</h3>
                    <p class="modal-text">${email}</p>
                    <p class="modal-text cap">${city}</p>
                    <hr>
                    <p class="modal-text">${phoneNumber}</p>
                    <p class="modal-text">${address}</p>
                    <p class="modal-text">Birthday: ${birthday.substring(0,10)}</p>
                </div>
            </div>`
            );
           const btn = document.querySelector('button');
           btn.addEventListener('click', e =>{
            let element = e.target;
            while(element.className != 'modal-container'){
                element = element.parentElement;
            }
            element.remove();
           });


        }
    });

  });


