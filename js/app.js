

function alterarStatus(id){

    let idJogo = document.getElementById(`game-${id}`);
    let imagem = idJogo.querySelector('.dashboard__item__img');
    let botao = idJogo.querySelector('.dashboard__item__button');
    let contagemJogo;


    if (botao.classList.contains('dashboard__item__button--return')){

        if (confirm('Deseja mesmo devolver o jogo ?')){
            botao.classList.remove('dashboard__item__button--return');
            botao.classList.add('dashboard__item__button');
            botao.innerHTML = "Alugar";
            imagem.classList.remove('dashboard__item__img--rented');
            contagemJogo--;
            console.log(contagemJogo);

        }else{
            return;
        }

        
    } else{

        if (confirm('Deseja mesmo alugar o Jogo ?')){
            botao.classList.add('dashboard__item__button--return');
            imagem.classList.add('dashboard__item__img--rented');
            botao.innerHTML = "Devolver";
            contagemJogo++;
            console.log(contagemJogo)
        } else{
            return;
        }
        
        
    }
    
}