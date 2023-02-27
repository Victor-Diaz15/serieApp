import { Injectable } from '@angular/core';
import { Momento } from '../interfaces/momento.interface';

@Injectable({
  providedIn: 'root'
})
export class SerieService {


  private _momentos: Momento[] = [
    {
      title: "Harvey Specter Entrevista a Mike",
      img: "https://imgs.search.brave.com/bf0Xd1P6YzXr2vw3tztSw6wK_eN55pDY80Ma6bcv5_g/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/ZUlfQW1FcFFjTEE2/SWNpWllzQi1BQUFB/QSZwaWQ9QXBp",
      detalle: "La escena comienza con Harvey entrevistando a varios candidatos para el puesto, pero ninguno de ellos cumple con sus expectativas. Cuando Mike entra en la sala, Harvey se muestra inicialmente escéptico debido a su apariencia poco convencional y a que no tiene un título universitario, pero rápidamente se da cuenta de que Mike tiene un conocimiento enciclopédico del derecho y una inteligencia sobresaliente."
    },
    {
      title: "Harvey Specter VS Mike Ross",
      img: "https://imgs.search.brave.com/y1-1v3i_0XGYB2mcgdmxTFuIZlYi9_RzeR4dQiDmGDA/rs:fit:702:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/Mm84TkdvVWFmQkRX/dWRySUNhdndRSGFG/QSZwaWQ9QXBp",
      detalle: "Harvey y Mike se enfrentan en un juicio de prueba en su firma de abogados, trabajando contra el tiempo; para impedir que Mike pierda su juicio por ejercer como abogado sin un titulo"
    },
    {
      title: "Tengo una reputación que mantener",
      img: "https://imgs.search.brave.com/BYEUWklH4wyDAx9Si0wT-R3El8Ilz6TREpqIsAwG9_s/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/R2wwbTVXcDNxN3Rw/TkQyWGlVdk1RSGFG/aiZwaWQ9QXBp",
      detalle: "Harvey se enfrenta en el tribunal contra un taxista que lo acusa de que el chofer de Harvey lo choco y quiere aprovecharse para poner una demanda, mientras que Harvey le muestra que el no tenia la razon en el tribunal."
    },
  ];


  get momentos(){
    return [...this._momentos];
  }

  constructor() { }
}
