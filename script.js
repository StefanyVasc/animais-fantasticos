function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const classActive = "active";

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(classActive);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(classActive);
      });
      tabContent[index].classList.add(classActive);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const classActive = "active";
  if (accordionList.length) {
    accordionList[0].classList.add(classActive);
    accordionList[0].nextElementSibling.classList.add(classActive);

    function activeAccordion() {
      this.classList.toggle(classActive);
      this.nextElementSibling.classList.toggle(classActive);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");

    const section = document.querySelector(href);

    // scrollIntoView só funciona em browsers novos
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /* forma alternativa do scroll suave
    const topoSection = section.offsetTop;
    console.log(topoSection);
  
    window.scrollTo({
      top: topoSection,
      behavior: "smooth",
    }); */
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();
