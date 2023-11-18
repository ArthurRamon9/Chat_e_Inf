// FUNCAO DO MODAL
const botaoPessoa1 = document.querySelector("#botao_pessoa1");
const botaoPessoa2 = document.querySelector("#botao_pessoa2");
const botaoPessoa3 = document.querySelector("#botao_pessoa3");
const botaoPessoa4 = document.querySelector("#botao_pessoa4");


const modal1 = document.querySelector("#dialog1");
const modal2 = document.querySelector("#dialog2");
const modal3 = document.querySelector("#dialog3");
const modal4 = document.querySelector("#dialog4");



botaoPessoa1.onclick = function() {
    modal1.showModal();
};
botaoPessoa2.onclick = function() {
    modal2.showModal();
};
botaoPessoa3.onclick = function() {
    modal3.showModal();
};
botaoPessoa4.onclick = function() {
    modal4.showModal();
};
