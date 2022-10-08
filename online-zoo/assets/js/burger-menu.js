class BurgerMenu {
    constructor (menuBurger, openMenuButton, closeMenuButton, backgroundBurger) {
        this.menuBurger = menuBurger;
        this.openMenuButton = openMenuButton;
        this.closeMenuButton = closeMenuButton;
        this.backgroundBurger = backgroundBurger;
        this.body = document.querySelector('body');
       
        openMenuButton.addEventListener('click', (event) => {
            event.stopPropagation()
            this.openMenu()
        })
        closeMenuButton.addEventListener('click', (event) => {
            event.stopPropagation()
            this.closeMenu()
        })
        backgroundBurger.addEventListener('click', (event) => {
            this.closeMenu()
        })
        window.addEventListener('resize', (e) => {
            if (window.screen.width >= 641) {
                this.backgroundBurger.style.display = 'none'
            }
        })
    }
    
    openMenu() {
        this.menuBurger.style.transform = 'translateX(0px)';
        this.backgroundBurger.style.transform = 'translateX(0px)';
        this.backgroundBurger.style.display = 'block';
        this.body.style.overflow = "hidden";
    }
    closeMenu() {
        this.menuBurger.style.transform = 'translateX(640px)';
        this.backgroundBurger.style.transform = 'translateX(640px)';
        this.backgroundBurger.style.display = 'none';
        this.body.style.overflow = "visible";
    }
}

export default BurgerMenu