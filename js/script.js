import "../css/style.css";
import Accordion from "./modules/accordion.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initFuncionamento from "./modules/funcionamento.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initModal from "./modules/modal.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import ScrollSuave from "./modules/scroll-suave.js";
import initTabNav from "./modules/tabnav.js";
import initTooltip from "./modules/tooltip.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initAnimacaoScroll();

initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
