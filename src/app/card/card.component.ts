import { Component, Input } from '@angular/core';
import { FieldTypes } from '../card-form/card-form.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() fields!: FieldTypes;
  flipped = false;

  handleFlip() {
    this.flipped = !this.flipped;
  }
}
