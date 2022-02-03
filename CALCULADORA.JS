function calculadora() {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira(%)\n 6 - Potencciação(**)'));

    if (!operacao || operacao >= 7) {
        alert('Operção invalida!!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;
        if (!n1 || !n2) {
            alert('ERRO!! Parãmetros inválidos!')
            calculadora();
        } else {
                function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`)
                novaoperacao();
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaoperacao();
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaoperacao();
            }
            function divisaoreal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaoperacao();
            }
            function divisaointeira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a  ${resultado}`)
                novaoperacao();
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
                novaoperacao();
            }
            function novaoperacao() {
                let opcao = prompt('deseja fazer outra operação? \n 1 - sim \n 2 - não');
                
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('ATE MAIS!!')
                } else {
                    alert('Digite uma opção válida!!')
                    novaoperacao();
                }
            }
        }        
        if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divisaoreal();
        } else if (operacao == 5) {
            divisaointeira();
        } else if (operacao == 6) {
            potenciacao();
        } 
    }

   
}
calculadora();