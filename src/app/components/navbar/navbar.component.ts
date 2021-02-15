import { Component, OnInit } from '@angular/core';
import  { SubirImagenService } from '../../services/subir-imagen.service';

declare var funcion3:any;
declare var funcion1:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id: string;

  constructor(private subirImagenService: SubirImagenService  ) { }

  ngOnInit(): void {
    this.subirImagenService.enviarIdObservable.subscribe(id =>{
      this.id = id;
    })
  }

  cambioTexto(id: string){
    this.subirImagenService.enviarId(id);
  }
 

  registro(){
    funcion3();
  }
}
