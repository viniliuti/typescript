"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Moto_1 = __importDefault(require("./Moto"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
var carro = new Carro_1.default('CarroA', 1);
var moto = new Moto_1.default();
carro.acelerar();
moto.acelerar();
console.log(moto);
console.log(carro);
var concessionaria = new Concessionaria_1.default("Endereco", []);
console.log(concessionaria.fornecerHorarioDeFuncionamento());
