const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
    e.preventDefault();
    const emailVal = email.value;

    // Verificar se é um e-mail válido

    if (!validateEmail(emailVal)){
        form.classList.add('error');
    } else{
        form.classList.remove('error');
        document.body.innerHTML = '<div style="display:flex; align-items: center; justify-content: center;"><div>Obrigado por testar meu projeto by: Cleison Silva</div>';
    }
    
});

function validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}