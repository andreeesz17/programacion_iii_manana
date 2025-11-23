"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expediente = void 0;

var Expediente = /** @class */ (function () {
    function Expediente(numeroExpediente) {
        this.idGeneric = 'EXP-2024-';
        this.numeroExpediente = numeroExpediente;
        this.generarCota();
    }
    Expediente.prototype.generarCota = function () {
        this.cota = (new Date()).toDateString();
    };
    Expediente.prototype.getCota = function () {
        return this.cota;
    };
    Expediente.prototype.getAtributes = function () {
        return {
            numeroExpediente: this.numeroExpediente,
            cota: this.cota,
            id: this.idGeneric
        };
    };
    return Expediente;
}());
exports.Expediente = Expediente;
