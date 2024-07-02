window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var menu = document.querySelector('.header_menu');
    

    if (window.scrollY > 10) {
        menu.classList.add('menu_scroll');
        console.log(menuElements)

    } else {
        menu.classList.remove('menu_scroll');
    }
});



window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var menu = document.querySelector('.header_menu');
    var menu_afastado = this.document.querySelector(".menu_afastado a")

    if (window.scrollY > header.clientHeight) {
        menu.classList.add('menu_scroll');
        menu_afastado.classList.add("..menu_scroll .menu_afastado a")

    } else {    
        menu.classList.remove('menu_scroll');
    }
});


// Selecionar o ícone de menu
const menuIcon = document.querySelector('.menu-icon');

// Selecionar o menu afastado
const menuAfastado = document.querySelector('.menu_afastado');

// Adicionar evento de clique no ícone de menu
menuIcon.addEventListener('click', () => {
    menuAfastado.classList.toggle('active'); // Alternar a classe 'active' no menu afastado
});

