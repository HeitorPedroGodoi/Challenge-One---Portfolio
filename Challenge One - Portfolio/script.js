//A validação do formulário com javascript é considerado um desafio extra, não é preciso fazer esta validação para realizar sua entrega
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coletando os dados do formulário
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    // Validação simples
    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação de email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    // Se todas as validações passaram, podemos enviar os dados
    alert("Formulário enviado com sucesso!");
    document.getElementById('contact-form').reset(); // Limpa o formulário após envio
});