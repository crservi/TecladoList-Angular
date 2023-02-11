import { Component } from '@angular/core';
import { Teclado } from 'src/model/teclado.model';
import { tecladoData } from '../data/teclado.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyApp';

  teclados = tecladoData;

  onTecladoSelected(teclado: Teclado) {
    console.log("App Component onTecladoSelected", teclado);
  }
}


