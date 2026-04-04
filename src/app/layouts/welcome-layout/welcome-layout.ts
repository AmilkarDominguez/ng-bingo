import { Component } from '@angular/core';
import { Register } from "../../features/register/register";

@Component({
  selector: 'app-welcome-layout',
  imports: [Register],
  templateUrl: './welcome-layout.html',
  styleUrl: './welcome-layout.scss',
})
export class WelcomeLayout {}
