import { Component, OnInit } from '@angular/core';
//import { from } from 'rxjs';
import { PeticionesService } from '../../services/peticiones.service';
import  { SubirImagenService } from '../../services/subir-imagen.service';

declare let funcion1:any;
declare let funcion2:any;
declare let funcion4:any;


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  posts: any;
  id: string;
  

  constructor(
    private peticionesService: PeticionesService,
    private subirImagenService: SubirImagenService  
  ) { }

  ngOnInit(): void {
    this.peticionesService.getPosts() 
    .subscribe((posts) => {
      this.posts = posts; 
    });
    
    this.subirImagenService.enviarIdObservable.subscribe(id =>{
      this.id = id;
    })

    }

    closeModal(){
  
      funcion2();
    }
  
  cambioTexto(id: string){
    this.subirImagenService.enviarId(id);
    funcion4();
  }
   
    imagenDownload(){
    
      this.subirImagenService.enviarId(funcion1());
    }
    
  
  }



