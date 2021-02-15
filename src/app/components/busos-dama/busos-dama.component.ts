import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-busos-dama',
  templateUrl: './busos-dama.component.html',
  styleUrls: ['./busos-dama.component.css']
})
export class BusosDamaComponent implements OnInit {
  posts: any;

  constructor(
    private peticionesService: PeticionesService
  ) { }

  ngOnInit(): void {
    this.peticionesService.getPostsBusos()
    .subscribe((posts) => {
      this.posts = posts; 
    });
  }

}
