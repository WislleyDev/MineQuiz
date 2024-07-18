let home = document.querySelector('#home')
let opcoes = document.querySelector('#opcoes')
let btn_home = document.querySelector('#btn_home')
let btn_iniciar = document.querySelector('#btn_iniciar')
let btn_opcoes = document.querySelector('#btn_opcoes')
let btn_sair = document.querySelector('#btn_sair')
let sair = document.querySelector('#sair')
let btn_sim = document.querySelector('#sim')
let btn_nao = document.querySelector('#nao')
let div_per = document.querySelector('#per')
let game_over = document.querySelector('#game_over')
let game_over_btn_home = document.querySelector('#game_over_btn_home')
let game_over_btn_reset = document.querySelector('#game_over_btn_reset')

game_over_btn_home.addEventListener('click', () => {
    home.style.opacity = '0'
    home.style.transition = '1s opacity ease-in-out'
    game_over.style.opacity = '0'
    setTimeout(() => {
        game_over.style.display = 'none'
        home.style.left = '50%'
        home.style.display = 'flex'
        home.style.opacity = '1'
        div_per.style.left = '200%'
    }, 1000);
})

game_over_btn_reset.addEventListener('click', () => {
    div_per.style.display = 'flex'
    div_per.style.opacity = '0'
    div_per.style.transition = '1s opacity ease-in-out'
    game_over.style.opacity = '0'
    setTimeout(() => {
        game_over.style.display = 'none'
        div_per.style.left = '50%'
        div_per.style.opacity = '1'
        home.style.left = '-200%'
    }, 1000);
})

btn_opcoes.addEventListener('click', () => {
    home.style.transition = '1s left ease-in-out'
    opcoes.style.transition = '1s left ease-in-out'
    setTimeout(() => {
        home.style.left = '-400px'
        opcoes.style.display = 'flex'
        opcoes.style.left = '50%'
    }, 50);

    setTimeout(() => {
        home.style.transition = 'none'
        home.style.left = '200%'
    }, 1000);
})

btn_home.addEventListener('click', () => {
    home.style.transition = '1s left ease-in-out'
    setTimeout(() => {
        opcoes.style.left = '-400px'
        home.style.display = 'flex'
        home.style.left = '50%'
    }, 50);
    
    setTimeout(() => {
        opcoes.style.transition = 'none'
        opcoes.style.left = '200%'
    }, 1000);
})

btn_sair.addEventListener('click', () => {
    sair.style.display = 'flex'
    setTimeout(() => {
        sair.style.opacity = '1'
    }, 100);
})

btn_sim.addEventListener('click', () => {
    window.close()
})

btn_nao.addEventListener('click', () => {
    sair.style.opacity = '0'
    setTimeout(() => {
        sair.style.display = 'none'
    }, 1000);
})

btn_iniciar.addEventListener('click', () => {
    div_per.style.opacity = '1'
    div_per.style.display = 'flex'
    div_per.style.transition = '1s left ease-in-out'
    home.style.transition = '1s left ease-in-out'
    setTimeout(() => {
        home.style.left = '-400px'
        div_per.style.left = '50%'
    }, 50)
})