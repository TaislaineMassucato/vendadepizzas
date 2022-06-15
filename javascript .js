'use strict';
//variáveis
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa = 0;
let vendaMussarela = 0.00;
let vendaMista = 0.00;
let vendaCalabresa = 0.00;

let btnVendas = document.getElementById('vendas')
let btnEstorno = document.getElementById('estorno')
let btnPlanilha = document.getElementById('export')

//eventos
btnVendas.addEventListener('click',venda,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',planilha,false);

//funções
function venda(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela + 1
        vendaMussarela = vendaMussarela + 25.00

        document.getElementById('resultadomussarela').innerHTML=somaMussarela

        document.getElementById('vendamussarela').innerHTML = vendaMussarela.toFixed(2)

    }else if(document.getElementById('mista').checked)
    {
        somaMista = somaMista + 1
        vendaMista = vendaMista + 25.00

        document.getElementById('resultadomista').innerHTML=somaMista

        document.getElementById('vendamista').innerHTML = vendaMista.toFixed(2)


    }else if(document.getElementById('calabresa').checked)
    {
        somaCalabresa = somaCalabresa + 1
        vendaCalabresa = vendaCalabresa + 25.00

        document.getElementById('resultadocalabresa').innerHTML=somaCalabresa
        document.getElementById('vendacalabresa').innerHTML = vendaCalabresa.toFixed(2)


    }
}

function estorno(e)
{
    if(document.getElementById('mussarela').checked)
    {
        somaMussarela = somaMussarela - 1
        vendaMussarela = vendaMussarela - 25.00

        if(somaMussarela < 0)
        {
            somaMussarela = somaMussarela = 0;
            vendaMussarela = vendaMussarela = 0.00;
        }

        document.getElementById('resultadomussarela').innerHTML=somaMussarela

        document.getElementById('vendamussarela').innerHTML = vendaMussarela.toFixed(2)

    }else if(document.getElementById('mista').checked)
    {
        somaMista = somaMista - 1
        vendaMista = vendaMista - 25.00

        if(somaMista < 0)
        {
            somaMista = somaMista = 0;
            vendaMista = vendaMista = 0.00;
        }

        document.getElementById('resultadomista').innerHTML=somaMista

        document.getElementById('vendamista').innerHTML = vendaMista.toFixed(2)


    }else if(document.getElementById('calabresa').checked)
    {
        somaCalabresa = somaCalabresa - 1
        vendaCalabresa = vendaCalabresa - 25.00

        if(somaCalabresa < 0)
        {
            somaCalabresa = somaCalabresa = 0;
            vendaCalabresa = vendaCalabresa = 0.00;
        }

        document.getElementById('resultadocalabresa').innerHTML=somaCalabresa

        document.getElementById('vendacalabresa').innerHTML = vendaCalabresa.toFixed(2)


    }
}


function planilha(e)
{
    TableToExcel.convert(document.getElementById('table'));
}