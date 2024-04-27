let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function inserirDados(dados) {
    document.querySelector(".local").innerHTML = "Tempo em "+dados.name
    console.log(dados)
    document.querySelector(".temperatura").innerHTML =Math.floor(dados.main.temp ) +"ºC"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon +".png"
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity +"%"
}

async function buscarCidade(cidade) {

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade +
    "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then((resposta) => resposta.json())
    inserirDados(dados)
    
}
function cliqueBotão() {
    let cidade = document.querySelector(".cidade").value

    buscarCidade(cidade)
}
