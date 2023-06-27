const nameInput = document.getElementById('name');
const passwordInput = document.getElementById('password');
const btn = document.getElementById('button');

btn.addEventListener('mouseover', (button) => {
    let name = nameInput.value;
    let password = passwordInput.value;

    if(name === '' || password === '') {
        button.target.classList.toggle('move')
    } else {
        button.target.classList.remove('move');
        button.target.addEventListener('click', () => {
            alert('Submitted')
        })
    }
})