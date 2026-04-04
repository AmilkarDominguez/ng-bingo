import { Component } from '@angular/core';
import { Bingo } from "../../features/bingo/bingo";

@Component({
  selector: 'app-main-layout',
  imports: [Bingo],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
