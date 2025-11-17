let buttonNEXT = document.querySelector('.next');
let buttonBACK = document.querySelector('.back');

let container = document.querySelector('.container');
let list = document.querySelector('.container .list');
let thumb = document.querySelector('.container .thumb');

buttonNEXT.onclick = () => moveItemsOnclick('next');
buttonBACK.onclick = () => moveItemsOnclick('back');

function moveItemsOnclick(type){
    let listItems = document.querySelectorAll('.list .list-item');
    let thumbItems = document.querySelectorAll('.thumb .thumb-item');

  

    if(type === 'next'){
        list.appendChild(listItems[0]);
        thumb.appendChild(thumbItems[0]);
        container.classList.add('next');
    } else {
        list.prepend(listItems[listItems.length - 1]);
        thumb.prepend(thumbItems[thumbItems.length - 1]);
        container.classList.add('back');
    }

    setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('back');
    }, 3000);

}

const divMain = document.createElement('div');
divMain.classList.add('contact-page');
const h1 = document.createElement('h1');
h1.textContent = 'Contato';
const nameInput = document.createElement('input');
nameInput.placeholder = 'Nome';
nameInput.type = 'text';
const emailInput = document.createElement('input');
emailInput.placeholder = 'Email';
emailInput.type = 'email';
const messageTextarea = document.createElement('textarea');
messageTextarea.placeholder = 'Mensagem';
const submitButton = document.createElement('button');
submitButton.textContent = 'Enviar';
const closeButton = document.createElement('button');
closeButton.textContent = 'Fechar';
closeButton.onclick = closeContactPage;
divMain.appendChild(closeButton);
divMain.appendChild(h1);
divMain.appendChild(nameInput);
divMain.appendChild(emailInput);
divMain.appendChild(messageTextarea);
divMain.appendChild(submitButton);
divMain.style.display = 'none';
divMain.style.left = '50%';
divMain.style.top = '50%';
divMain.style.width = "50dvw";
divMain.style.height = "50dvh";
divMain.style.transform = 'translate(-50%, -50%)';
divMain.style.backgroundColor = 'white';
divMain.style.padding = '20px';
divMain.style.borderRadius = '8px';
divMain.style.zIndex = '1000';
divMain.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
divMain.style.position = 'absolute';
document.body.appendChild(divMain);
const contactPage = document.querySelector('.contactPage');
contactPage.addEventListener('click', openContactPage);

function openContactPage(){
    divMain.style.display = 'block';
}
function closeContactPage(){
    divMain.style.display = 'none';
}