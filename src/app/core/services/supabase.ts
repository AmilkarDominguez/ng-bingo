import { Injectable } from '@angular/core';
import { from, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class Supabase {
  private supabase: SupabaseClient;
  private todos$ = new BehaviorSubject<any[]>([]);

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  getUsers(): Observable<any[]> {
    return from(
      this.supabase.from('users').select('*')
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data ?? [];
      })
    );
  }

  addUser(user: { full_name: string; interests: string, avatar_code: string }): Observable<any> {
    return from(
      this.supabase.from('users').insert([user]).select()
    ).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data;
      })
    );
  }

  listenUsers(): Observable<any[]> {
    this.getUsers().subscribe(todos => this.todos$.next(todos));

    this.supabase
      .channel('users-changes')
      .on('postgres_changes',
        { event: '*', schema: 'public', table: 'users' },
        () => {
          this.getUsers().subscribe(todos => this.todos$.next(todos));
        }
      )
      .subscribe();

    return this.todos$.asObservable();
  }
}
