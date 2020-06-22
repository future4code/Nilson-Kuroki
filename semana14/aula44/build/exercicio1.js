const minhaString = 'essa e minha string';
const meuNummero = 23;
var Cores;
(function (Cores) {
    Cores["VIOLETA"] = "violeta";
    Cores["ANIL"] = "anil";
    Cores["AZUL"] = "azul";
    Cores["VERDE"] = "verde";
    Cores["AMARELO"] = "amarelo";
    Cores["LARANJA"] = "laranja";
    Cores["VERMELHO"] = "vermelho";
})(Cores || (Cores = {}));
const nilson = {
    name: 'nilson kuroki',
    age: 21,
    colourFav: Cores.LARANJA
};
const nana = {
    name: 'Naiyara',
    age: 20,
    colourFav: Cores.VIOLETA
};
const gabe = {
    name: 'Gabriela',
    age: 19,
    colourFav: Cores.AMARELO
};
const People = [
    gabe, nana, nilson
];
console.log(People);
//# sourceMappingURL=exercicio1.js.map