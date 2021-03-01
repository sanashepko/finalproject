const body = document.body;

window.addEventListener("load", loadBackground);

function loadBackground(){
  body.style.backgroundColor = 'white';
};


const btn = document.getElementById('html-button');

btn.addEventListener("click", changeBackground);

function changeBackground(){

      console.log ('button clicked')

if (body.style.backgroundColor === 'white') {
      console.log ('should be blue')
body.style.backgroundColor = 'lightblue';
}

else {
      console.log ('should be white')
  body.style.backgroundColor = 'white';
}

};
