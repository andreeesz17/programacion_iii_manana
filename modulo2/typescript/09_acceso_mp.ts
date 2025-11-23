export class Expediente {
    private idGeneric: string = 'EXP-2024-';
    private numeroExpediente: number;
    private cota!: string;

    constructor(numeroExpediente: number) {
        this.numeroExpediente = numeroExpediente;
        this.generarCota();
    }

    private generarCota(): void {
        this.cota = new Date().toDateString();
    }

    getCota(): string {
        return this.cota;
    }

    getAtributes(): { numeroExpediente: number; cota: string; id: string } {
        return {
            numeroExpediente: this.numeroExpediente,
            cota: this.cota,
            id: this.idGeneric
        };
    }
}
