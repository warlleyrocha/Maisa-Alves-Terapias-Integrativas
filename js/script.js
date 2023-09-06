document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('agendamentoForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Coletar os dados do formulário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const local = document.getElementById('local').value;
        const data = document.getElementById('data').value;
        const horario = document.getElementById('horario').value;

        // Envie os dados para o servidor ou faça qualquer ação desejada aqui
        console.log('Nome:', nome);
        console.log('E-mail:', email);
        console.log('Local:', local);
        console.log('Data:', data);
        console.log('Horário:', horario);

        // Redefina o formulário após o envio (opcional)
        form.reset();
    });
});