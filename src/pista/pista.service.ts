import { Injectable } from '@nestjs/common';
import { Pista } from './pista-entity';
import * as fs from 'fs'

@Injectable()
export class PistaService {
    private listaPistas = []

    constructor(){
        this.loadPistas();
    }

    public getPista(id:number){
        return this.listaPistas.find(pista => pista.identificador == id);
    }

    public getPistas(): Pista[] {
        return this.listaPistas;
    }

    private loadPistas(): void {
        let archivo = fs.readFileSync('src/assets/pistas.csv', 'utf8');
        let datos = archivo.split('\n').map(p => p.replace('\r', '')).map(p => p.split(','));
        this.listaPistas = [];
        for (let i = 0; i < datos.length; i++) {
            let pista = new Pista(parseInt(datos[i][0]), datos[i][1], parseInt(datos[i][2]), datos[i][3]);
            this.listaPistas.push(pista);
        }
    }
}
