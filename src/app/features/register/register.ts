import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Supabase } from '../../core/services/supabase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  users$!: Observable<any[]>;

  constructor(private supabaseService: Supabase) {}

  ngOnInit() {
    this.users$ = this.supabaseService.listenUsers();
  }
  register() {
    this.supabaseService
      .addUser({
        full_name: 'Amilkar',
        interests: 'Dev,FullStack,Otros',
        avatar_code: '1,3,4,5'
      })
      .subscribe((next) => {
        console.log(next);
      });
  }
}
