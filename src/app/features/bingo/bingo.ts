import { Component } from '@angular/core';
import { options } from '../../core/data/options';
import { BingoOption } from '../../core/models/bingo-option';
import { FormsModule } from '@angular/forms';
import { Card } from '../../shared/components/card/card';

@Component({
  selector: 'app-bingo',
  imports: [FormsModule, Card],
  templateUrl: './bingo.html',
  styleUrl: './bingo.scss',
})
export class Bingo {
  public options: BingoOption[];
  public readonly LIMIT: number = 9;
  private _dataOptions: string[];

  constructor() {
    this.options = [];
    this._dataOptions = options;
    this._generateOption();
  }

  public counterDone(): number {
    return this.options.filter(option => option.done).length;
  }

  private _generateOption(): void {
    for (let index = 0; index < this.LIMIT; index++) {
      this.options.push(this._getOption());
    }
  }

  private _getOption(): BingoOption {
    const index: number = Math.floor(Math.random() * this._dataOptions.length);
    const option: BingoOption = {
      text: this._dataOptions[index],
      done: false,
      name: '',
    };
    this._dataOptions.splice(index, 1);
    return option;
  }
}
