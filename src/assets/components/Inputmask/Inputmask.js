import Inputmask from "inputmask";

let input = document.getElementById('input-phone');

let im = new Inputmask("999 999-99-99")
im.mask(input)