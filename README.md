# fixed-menu-effect-bullmacss

Efeito criado com bulma css para adicionar o menu fixo após o scroll

# O código encontra-se no arquivo script.js

O bulma tem uma classe css chamada is-fixed-top, porém quando adicionada manualmente o menu ja desce logo no primeiro momento o que não acho legal.

Assim criei um código para adicionar o menu após scrollY > 200;


# Segue Código JS

Criei uma função e essa função capta um evento de SCROLL e armazena numa variável o valor de scrollY que muda a cada etapa do scroll.
Após isso temos uma condicional para que a classe is-fixed-top seja adicionada após 200 de scroll. E um else para excluir a classe quando for menor que 200 de scroll.

```
function navBarFixed() {

    window.addEventListener('scroll', (event) => {
        let scrollY = this.scrollY;
        if(scrollY > 200) {
            document.querySelector('.navbar').classList.add('is-fixed-top');
        } else {
            document.querySelector('.navbar').classList.remove('is-fixed-top');
        }
    })
}

navBarFixed() 

```
