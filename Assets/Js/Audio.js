document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('musica');
    const controleMusicaBtn = document.getElementById('controleMusica');
    const volumeControl = document.getElementById('volumeControl');

    // Inicializar volume do áudio
    audio.volume = volumeControl.value;

    // Função para atualizar o texto do botão de controle da música
    function atualizarBotao() {
        if (audio.paused) {
            controleMusicaBtn.textContent = 'Música OFF';
        } else {
            controleMusicaBtn.textContent = 'Música On';
        }
    }

    // Adicionar evento de clique ao botão de controle da música
    controleMusicaBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        atualizarBotao();
    });

    // Adicionar evento de input ao controle de volume
    volumeControl.addEventListener('input', () => {
        audio.volume = volumeControl.value;
    });

    // Tentar iniciar a música automaticamente ao carregar a página
    audio.play().then(() => {
        // Música começou a tocar automaticamente
        atualizarBotao();
    }).catch(error => {
        // Autoplay bloqueado pelo navegador
        console.log('Autoplay bloqueado:', error);
        atualizarBotao();
    });
});
