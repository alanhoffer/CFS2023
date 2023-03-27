import { Injectable } from '@nestjs/common';

@Injectable()
export class PistaService {
    private listaPistas = [{
        "identificador": 1,
        "titulo": "Bohemian Rapshody",
        "duracion": 420,
        "interprete": "Queen",
        "lanzamiento": 1997
    }, {
        "identificador": 2,
        "titulo": "BToas",
        "duracion": 420,
        "interprete": "Jejejje",
        "lanzamiento": 1997
    }, {
        "identificador": 3,
        "titulo": "Mar",
        "duracion": 420,
        "interprete": "Antonio",
        "lanzamiento": 1997
    }, {
        "identificador": 4,
        "titulo": "Luz",
        "duracion": 420,
        "interprete": "Pepe",
        "lanzamiento": 1997
    }]

    public getPistas(): any {
        return this.listaPistas;
    }


}
