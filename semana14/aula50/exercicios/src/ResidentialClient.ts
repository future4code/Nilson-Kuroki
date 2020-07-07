import {Residence} from './Residence'

export class ResidentialClient extends Residence{
    constructor(private cpf: string, cep: string, residentsQuantity: number){
        super(residentsQuantity, cep)
    }

    public getCpf(): string{
        return this.cpf
    }
}