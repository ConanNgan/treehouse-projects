/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function page(page){
   const itemsPerPage = 9
   var startIndex = (page - 1) * itemsPerPage ;
   var endIndex = startIndex + itemsPerPage;
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   for(let currentIndex = startIndex; currentIndex < endIndex; currentIndex++){
      const li = document.createElement('li');
      li.className = 'student-item cf';

      const div1 = document.createElement('div');
      div1.className = 'student-details';

      const img = document.createElement('img');
      img.className = 'avatar';
      img.src = data[currentIndex].picture.large;
      img.alt = 'Profile Picture'

      div1.appendChild(img);

      const h3 = document.createElement('h3');
      h3.textContent = data[currentIndex].name.first + ' ' + data[currentIndex].name.last;

      div1.appendChild(h3);

      const span = document.createElement('span');
      span.className = 'email';
      span.textContent = data[currentIndex].email;

      div1.appendChild(span);

      const div2 = document.createElement('div');
      div2.className = 'joined-details';

      const span2 =  document.createElement('span');
      span2.className = 'date';
      span2.textContent = "Joined " + data[currentIndex].registered.date

      li.appendChild(div1);
      li.appendChild(div2);

      studentList.appendChild(li);
   }

}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addpagination(){
   const numberOfPages = Math.ceil(data.length / 9);
   const linkList = document.querySelector('.link-list');
   for(let i = 1 ; i <= numberOfPages ; i++){
      let html = 
      `<li>
      <button type="button">${i}</button>
      </li>`;
      linkList.insertAdjacentHTML("beforeend", html);
   }
   linkList.firstElementChild.firstElementChild.className = 'active';




}

page(1);
addpagination();

const linkList = document.querySelector('.link-list');
linkList.addEventListener('click', (e)=> {

   if(e.target.tagName != 'UL'){
    for(let element of linkList.children){
      const button = element.querySelector('button');
       if (button.className === 'active'){
         button.className = '';
       }
    }
    e.target.className = 'active';
   page(e.target.textContent);
   }
   
});

// Call functions
