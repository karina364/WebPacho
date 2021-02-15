import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubirImagenService {

  id: string;
  private enviarIdSubject = new BehaviorSubject<string>('offsubir');
  enviarIdObservable = this.enviarIdSubject.asObservable();

  enviarId(id: string){
    this.id = id;
    this.enviarIdSubject.next(id);
  }

  constructor() { }
}
