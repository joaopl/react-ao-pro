function enviarFormulario(event) {
    event.preventDefault();
    const form = document.getElementById("meuForm");
    if (form.checkValidity()) {
        document.querySelector("button").innerText = "Enviando...";

        // Usar Promise para simular um atraso de 2 segundos
        const fakeLoading = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
        };

        fakeLoading().then(() => {
            // Recuperar os valores do formulário
            const nome = document.getElementById("nome").value;
            const sexo = document.getElementById("sexo").value;
            const estadoCivil = document.querySelector('input[name="status"]:checked').value;
            const interesses = [];
            const checkboxes = document.querySelectorAll('input[name="interesses"]:checked');
            checkboxes.forEach(function(checkbox) {
                interesses.push(checkbox.value);
            });

            // Adicionar os valores à tabela de respostas
            const tabela = document.getElementById("tabelaRespostas");
            const novaLinha = tabela.insertRow(-1);
            const colunaNome = novaLinha.insertCell(0);
            const colunaSexo = novaLinha.insertCell(1);
            const colunaEstadoCivil = novaLinha.insertCell(2);
            const colunaInteresses = novaLinha.insertCell(3);
            colunaNome.innerHTML = nome;
            colunaSexo.innerHTML = sexo;
            colunaEstadoCivil.innerHTML = estadoCivil;
            colunaInteresses.innerHTML = interesses.join(', ');

            // Limpar o formulário
            form.reset();

            // Restaurar o texto do botão
            document.querySelector("button").innerText = "Enviar";
        });
    } else {
        // Se o formulário não for válido, exibir mensagens de erro padrão
        form.reportValidity();
    }
}