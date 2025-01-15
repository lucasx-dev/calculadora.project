    let exib =  document.querySelector('textarea#exibicao')
    let exibir = exib.value
function adicionar(num) {
    document.querySelector('textarea#exibicao').innerHTML+= num
}
    function calcular(){
        let res= document.querySelector('textarea#exibicao').innerHTML
    if (res){
        document.querySelector('textarea#exibicao').innerHTML = eval(res)
}
    else {
        alert('Adicione uma equação antes de calcular')
}
}
function divisao() {
    document.querySelector('textarea#exibicao').innerHTML += '/'
}

function adicao() {
    document.querySelector('textarea#exibicao').innerHTML += '+'
    
}
function multiplicacao() {
    document.querySelector('textarea#exibicao').innerHTML += '*'
    if ('*'){
        innerHTML = 'x'
    }
}
function subtracao() {
    document.querySelector('textarea#exibicao').innerHTML += '-'
}
function abrecol() {
    document.querySelector('textarea#exibicao').innerHTML += '('
}
function fechacol() {
    document.querySelector('textarea#exibicao').innerHTML += ')'
}
function del() {
    document.querySelector('textarea#exibicao').innerHTML = ''
}
function ponto() {
   var ponto = document.querySelector('textarea#exibicao').innerHTML += '.'
}
function apagar() {
    let res= document.querySelector('textarea#exibicao').innerHTML
        document.querySelector('textarea#exibicao').innerHTML =  res.substring(0, res.length -1)
}