import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PistaService } from './pista.service';
import { Pista } from './pista-entity';

@Controller('pista')
export class PistaController {
    constructor(private pistaService: PistaService) { }

    @Get(":id")
    getPista(@Param("id", ParseIntPipe) id:number): Pista{
        return this.pistaService.getPista(id);
    }

    @Get()
    public getPistas(): Pista[] {
        return this.pistaService.getPistas();
    }
}
