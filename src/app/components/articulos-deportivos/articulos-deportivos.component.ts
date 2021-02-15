import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-articulos-deportivos',
  templateUrl: './articulos-deportivos.component.html',
  styleUrls: ['./articulos-deportivos.component.css']
})
export class ArticulosDeportivosComponent implements OnInit {
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
