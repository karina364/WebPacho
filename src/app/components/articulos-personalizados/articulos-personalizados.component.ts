import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-articulos-personalizados',
  templateUrl: './articulos-personalizados.component.html',
  styleUrls: ['./articulos-personalizados.component.css']
})
export class ArticulosPersonalizadosComponent implements OnInit {
  posts: any;

  constructor(
    private peticionesService: PeticionesService
  ) { }

  ngOnInit(): void {
    this.peticionesService.getPostsArticulosDeportivos()
    .subscribe((posts) => {
      this.posts = posts; 
    });
  }

}
