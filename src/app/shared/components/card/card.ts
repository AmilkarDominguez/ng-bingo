import { Component, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BingoOption } from '../../../core/models/bingo-option';

@Component({
  selector: 'app-card',
  imports: [FormsModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input()
  option!: BingoOption;

  isFlipped: boolean = false;

  public toggleFlip(): void {
    this.isFlipped = !this.isFlipped;

    if (this.option.name.trim().length >= 4) {
      this.option.done = true;
    } else {
      this.option.done = false;
    }
  }
}
