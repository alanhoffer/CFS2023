import { Controller, Get } from '@nestjs/common';
import { PistaService } from './pista.service';

@Controller('pista')
export class PistaController {
    constructor(private pistaService: PistaService) { }

    @Get()
    public getPistas(): string {
        return this.pistaService.getPistas();
    }
}
