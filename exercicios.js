// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaRetangulo = prompt("Coloque a altura")
  const larguraRetangulo = prompt("Coloque a largura")
  const area = alturaRetangulo*larguraRetangulo;
  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Coloque o ano atual aqui:")
  const anoDeNascimento = prompt("Coloque o seu ano de nascimento aqui")
  const idade = anoAtual-anoDeNascimento;
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemnte sua lógica aqui
  const IMC = peso / (altura*altura)
  return IMC
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Coloque seu nome aqui")
  const idade = prompt("Coloque sua idade aqui")
  const email = prompt("Coloque seu e-mail aqui")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt("Coloque uma cor")
  let cor2 = prompt("Coloque outra cor")
  let cor3 = prompt("Coloque a última cor")
  const listCores = [cor1,cor2,cor3]
  console.log(listCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const upperCase = string.toUpperCase()
  return upperCase
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const totalDeIngressos = custo / valorIngresso
  return totalDeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = array[0];
  const ultimo = array[array.length - 1];
  array[0] = ultimo;
  array[array.length - 1] = primeiro;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase().trim() === string2.toLowerCase().trim()
    
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const pergAnoAtual = prompt("Qual seu ano atual?")
  const pergAnoNascimento = prompt("Qual seu ano de nascimento?")
  const pergAnoEmissao = prompt("Qual o ano de emissão do seu RG?")

  const idade = pergAnoAtual - pergAnoNascimento
  const renovacao = pergAnoAtual - pergAnoEmissao


  const dataRenovacao20 = idade <= 20 && renovacao >= 5
  const dataRenovacao20e50 = idade > 20 && idade <= 50 && renovacao >= 10
  const dataRenovacao50 = idade > 50 && renovacao >= 15


console.log(dataRenovacao20 || dataRenovacao20e50 || dataRenovacao50)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const multi4 = ano % 4 == 0
  const multi4ENao100 = (multi4 && (ano % 100 != 0))
  const multi400E100 = (multi4 && (ano % 100 == 0) && (ano % 400 == 0))

  return multi4ENao100 || multi400E100
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const pergIdade = prompt("Você tem mais de 18 anos?");
  const pergEnsinoMedio = prompt("Você possui ensino médio completo?");
  const pergDisponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");
 
  console.log((pergIdade === "sim") && (pergEnsinoMedio === "sim") && (pergDisponibilidade === "sim"));
}
