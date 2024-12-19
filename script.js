let id = 1;
function agendarPet() {
    const nomePet = document.getElementById('nomePet').value.trim();
    const raca = document.getElementById('raca').value.trim();
    const donoPet = document.getElementById('donoPet').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
   
    if (!nomePet || !raca || !donoPet || !telefone) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    const tabela = document.getElementById('tabelaPets');
    const linha = document.createElement('tr');
    linha.innerHTML = `
        <td>${id}</td>
        <td>${nomePet}</td>
        <td>${raca}</td>
        <td>${donoPet}</td>
        <td>${telefone}</td>
        <td><span class="remover-btn" onclick="removerLinha(this)">❌</span></td>
    `;
    tabela.appendChild(linha);
    id++;
    limparCampos();
}
function limparCampos() {
    document.getElementById('nomePet').value = '';
    document.getElementById('raca').value = '';
    document.getElementById('donoPet').value = '';
    document.getElementById('telefone').value = '';
}
function removerLinha(botao) {
    botao.parentElement.parentElement.remove();
}