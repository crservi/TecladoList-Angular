import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Teclado } from 'src/model/teclado.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input ( )
  teclado!: Teclado

  @Output()
  tecladoSelected = new EventEmitter<Teclado>();

  onCardClicked(){
    console.log("card Component onCardClicked");
    this.tecladoSelected.emit(this.teclado);
  }

  isImageAvailable(){
    return this.teclado && this.teclado.Poster;
  }

  cardClasses(){
    return this.teclado.Category;
  }
}

