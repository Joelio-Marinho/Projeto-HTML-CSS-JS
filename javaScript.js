'use strict';
//variaveis
let somaMussarela = 0;
let somaMista = 0;
let somaQuatroQueijos = 0;

let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaQuatroQueijos = 0.00;

//botões
let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
//btnPlanilha.addEventListener('click', Planilha, false);

//funções
function venda() {
    if (document.getElementById('mussarela').checked) {
        somaMussarela = somaMussarela + 1;
        vendaMussarela = vendaMussarela + 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    }
    else if (document.getElementById('mista').checked) {
        somaMista = somaMista + 1;
        vendaMista = vendaMista + 20.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);

    } else if (document.getElementById('quatro queijos').checked) {
        somaQuatroQueijos = somaQuatroQueijos + 1;
        vendaQuatroQueijos = vendaQuatroQueijos + 25.00;
        document.getElementById('resultadoQueijo').innerHTML = somaQuatroQueijos;
        document.getElementById('vendaQueijo').innerHTML = vendaQuatroQueijos.toFixed(2);
    }
}
function estorno() {
    if (document.getElementById('mussarela').checked && somaMussarela > 0) {
        somaMussarela = somaMussarela - 1;
        vendaMussarela = vendaMussarela - 25.00;
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    }
    else if (document.getElementById('mista').checked && somaMista > 0) {
        somaMista = somaMista - 1;
        vendaMista = vendaMista - 20.00;
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);

    } else if (document.getElementById('quatro queijos').checked && somaQuatroQueijos > 0) {
        somaQuatroQueijos = somaQuatroQueijos - 1;
        vendaQuatroQueijos = vendaQuatroQueijos - 25.00;
        document.getElementById('resultadoQueijo').innerHTML = somaQuatroQueijos;
        document.getElementById('vendaQueijo').innerHTML = vendaQuatroQueijos.toFixed(2);
    }
}

