// BUSCAR OS ITENS DA TELA
const itensPerguntasERespostas = document.querySelectorAll('.item');

// ENTENDER QUE O ITEM FOI CLICADO
itensPerguntasERespostas.forEach(function(item) {
    item.addEventListener('click', function() {
/*        console.log('Clicoooooou') */
/*        console.log(item.classList) */

        // VERIFICAR SE A PERGUTA CLICADA ESTA ATIVA
        const estaAtiva = item.classList.contains('ativo')
/*        console.log('estaAtiva?', estaAtiva) */
        
        // SE A PERGUNTA NÃO ESTÁ ATIVA
        if(!estaAtiva) { // igual a (estaAtiva == false)
            // EU PRESICO FECHAR TODAS        
            itensPerguntasERespostas.forEach(function(item) {
                item.classList.remove('ativo')
            })
        // ABRIR A RESPOSTA ATUAL
            item.classList.add('ativo') // testar no console se vai botar a classe ativo naquela que clicou
            // SE A PERGUNTA ESTIVER ATIVA
        } else {
                // DESATIVAR (REMOVER A CLASSE ATIVA)
            item.classList.remove('ativo')
        }

    })
})
