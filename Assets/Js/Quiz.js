function carregar_site() {
    let num_da_questao = document.querySelector('#numero > p')
    let pergunta = document.querySelector('#anuciado > h1')
    let tela_de_vitoria = document.querySelector('#tela_de_vitoria')
    let tela_de_game_over = document.querySelector('#game_over')
    let win_btn_home = document.querySelector('#win_btn_home')
    let qnts_erros = document.querySelector('#erros > span')
    let btn_res = document.querySelectorAll('.btn_res')
    let btn_res1 = document.querySelector('#res1')
    let btn_res2 = document.querySelector('#res2')
    let btn_res3 = document.querySelector('#res3')
    let btn_res4 = document.querySelector('#res4')
    let contador = 0
    let erros = 0
    let win = false

    fetch('Assets/Json/perguntas_e_respostas.json')
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        } shuffleArray(data)

        
        btn_res.forEach((element, alternativa) => {
            element.addEventListener('click', () => {
                
                if (data[contador].Alternativas[alternativa].Certa && data.length - 1 != contador) {

                    contador++
                    Gerar_Perguntas()

                } else if (!data[contador].Alternativas[alternativa].Certa){
                    Game_Over()
                    div_per.style.transition = '1s opacity ease-in-out'
                    div_per.style.opacity = '0'
                    
                    setTimeout(() => {
                        div_per.style.display = 'none'
                    }, 1000)

                    contador = 0
                    tela_de_game_over.style.display = 'flex'

                    setTimeout(() => {
                        tela_de_game_over.style.opacity = '1'
                    }, 100)
                } else if (data[contador].Alternativas[alternativa].Certa && data.length - 1 == contador) {
                    
                    win = true
                    Win()
                }
            })
        })

        btn_iniciar.addEventListener('click', () => {
            shuffleArray(data)
            Gerar_Perguntas()
        })

        win_btn_home.addEventListener('click', () => {
            div_per.style.transition = 'none'
            div_per.style.left = '200%'
            home.style.opacity = '0'
            home.style.left = '50%'

            setTimeout(() => {
                home.style.transition = '1s opacity ease-in-out'
                tela_de_vitoria.style.transition = '1s opacity ease-in-out'
                tela_de_vitoria.style.opacity = '0'
            }, 50)
            
            setTimeout(() => {
                tela_de_vitoria.style.display = 'none'
                home.style.opacity = '1'
            }, 1000)

            contador = 0
        })

        function Gerar_Perguntas() {
            
            num_da_questao.innerText = contador + 1
            pergunta.innerText = data[contador].p
            btn_res1.innerText = data[contador].Alternativas[0].Texto
            btn_res2.innerText = data[contador].Alternativas[1].Texto
            btn_res3.innerText = data[contador].Alternativas[2].Texto
            btn_res4.innerText = data[contador].Alternativas[3].Texto
        } Gerar_Perguntas()

        function Game_Over() {
            erros++
            contador = 0
            

            setTimeout(() => {
                shuffleArray(data)
                Gerar_Perguntas()
            }, 1000);
        }

        function Win () {
            if (win) {
                qnts_erros.innerText = erros <= 9 ? `0${erros}` : `${erros}`
                div_per.style.transition = '1s opacity ease-in-out'
                div_per.style.opacity = '0'
                
                setTimeout(() => {
                    div_per.style.display = 'none'
                }, 1000)

                contador = 0
                tela_de_vitoria.style.display = 'flex'

                setTimeout(() => {
                    tela_de_vitoria.style.opacity = '1'
                }, 100)
            }
            
        }
    })
} carregar_site()