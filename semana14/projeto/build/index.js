"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const moment = require("moment");
const CadasterUser = (name, cpf, birthDateString) => {
    const birthDate = moment(birthDateString, "DD/MM/YYYY");
    const today = moment();
    const age = today.diff(birthDate, "years");
    if (age < 18) {
        console.log("usuario não é maior que 18 anos");
        return;
    }
    const link = 'usuarios.json';
    const data = fs.readFileSync(link);
    const fileConvert = data.toString();
    const users = JSON.parse(fileConvert);
    const foundUser = users.find((user) => {
        return user.cpf === cpf;
    });
    if (foundUser !== undefined) {
        console.log("ja existe um usuario com este cpf");
        return;
    }
    users.push({
        name: name,
        cpf: cpf,
        birthDate: birthDateString,
        balance: 0,
        extract: []
    });
    const usersStringified = JSON.stringify(users, null, 2);
    fs.writeFileSync(link, usersStringified);
};
const name = process.argv[2];
const cpf = process.argv[3];
const birthDate = process.argv[4];
CadasterUser(name, cpf, birthDate);
//# sourceMappingURL=index.js.map