const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;

    if (nome === '' || email === '') {
        alert('Por favor, preencha o nome e o e-mail para ganhar a sua energia! ☕')
    } else {
        alert('Obrigado, ${nome}! Cadastro enviado com sucesso.');
        formulario.reset();
    }
});