
window.addEventListener('scroll', function() {
    const header = document.getElementById('main-header');
    if (window.scrollY > 50) {
        header.classList.add('rolagem');
    } else {
        header.classList.remove('rolagem');
    }
});

const botoesComprar = document.querySelectorAll('.btn-buy');

botoesComprar.forEach(botao => {
    botao.addEventListener('click', function() {
        const nomePizza = this.parentElement.querySelector('h3').innerText;
        alert(`Magnifique! A pizza ${nomePizza} foi adicionada ao seu pedido.`);
        
        // Efeito visual no botão
        this.innerText = "Adicionado ✓";
        this.style.backgroundColor = "#2d5a27";
        this.style.color = "white";
        
        setTimeout(() => {
            this.innerText = "Adicionar";
            this.style.backgroundColor = "transparent";
            this.style.color = "#630d16";
        }, 2000);
    });
});

document.getElementById('btn-contato').addEventListener('click', () => {
    alert("Telefone: (11) 9999-8888\nE-mail: bonjour@lapizza.com");
});