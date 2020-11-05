import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.classActive = "active";

    // defini touchstart e click como argumento padrão de events, caso o usuário nao defina
    if (events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }

    // bind do callback
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.classActive);
    this.menuButton.classList.add(this.classActive);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.classActive);
      this.menuButton.classList.remove(this.classActive);
    });
  }

  addMenuMobileEvent() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.openMenu();
    }
    return this;
  }
}
