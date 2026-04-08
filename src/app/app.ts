import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Bingo } from "./features/bingo/bingo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Bingo],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-bingo');
}
