const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const btn = document.getElementById('button');
const container = document.querySelector('.container');
const para = document.createElement('p');
para.classList.add('para')

btn.addEventListener('mouseover', (button) => {
    let name = nameInput.value;
    let password = passwordInput.value;
    if(name === '' || password === '') {
        move();
        nameInput.style.border = '1px solid red';
        passwordInput.style.border = '1px solid red';
    } else {
        nameInput.style.border = '1px solid green';
        passwordInput.style.border = '1px solid green';
        btn.addEventListener('click', () => {
            
            para.innerText = 'Done!!';
            container.append(para);
        })
    }


})

let flag = 1;

function move() {
    if(flag === 1) {

    btn.style.transform = 'translateX(250%)'
    flag = 2;
    } else if(flag === 2) {
        btn.style.transform = 'translateX(0%)';
        flag = 1;
    }
}