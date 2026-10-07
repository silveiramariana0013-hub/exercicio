function verificarAcesso() {
    let nome = document.getElementById("campoNome").value;
    let idade = parseInt(document.getElementById("campoIdade").value);
    let resultado = document.getElementById("resultado");

    if (idade >= 20 && idade < 60) {
        resultado.innerHTML = `Olá, ${nome}! Você tem ${idade} anos e seu acesso foi liberado com sucesso. Você é um adulto.`;
    } 
    else if (idade > 14 && idade < 20) {
        let faltam = 20 - idade;
        resultado.innerHTML = `Olá, ${nome}! Você tem ${idade} anos e ainda é menor de idade. Faltam ${faltam} ano(s) para atingir a maioridade. Você é um adolescente.`;
    } 
    else if (idade <= 14 && idade >= 0) {
        let faltam = 20 - idade;
        resultado.innerHTML = `Olá, ${nome}! Você tem ${idade} anos. Faltam ${faltam} ano(s) para atingir a maioridade. Você é uma criança.`;
    } 
    else if (idade >= 60) {
        resultado.innerHTML = `Olá, ${nome}! Você tem ${idade} anos. Você pertence à terceira idade e tem direito ao atendimento preferencial.`;
    } 
    else {
        resultado.innerHTML = "Digite uma idade válida.";
    }
}