import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../../services/peticiones.service';

@Component({
  selector: 'app-basica',
  templateUrl: './basica.component.html',
  styleUrls: ['./basica.component.css']
})
export class BasicaComponent implements OnInit {
  posts: any;

  constructor(
    private peticionesService: PeticionesService
  ) { }

  ngOnInit(): void {
    this.peticionesService.getPostsBasica() 
    .subscribe((posts) => {
      this.posts = posts; 
    });
  }

}
