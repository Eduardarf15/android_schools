document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const matricula = document.getElementById('matricula').value.trim();
    const senha = document.getElementById('senha').value.trim();

    if (matricula === '12345' && senha === '12345') {
        window.location.href = '../dashboard/index.html';
    } else {
        alert('Matrícula ou senha incorretos. Tente novamente.');
    }
});
