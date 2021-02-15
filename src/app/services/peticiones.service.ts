import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PeticionesService { 

  url1 = 'assets/datos/posts.json';
  url2 = 'assets/datos/posts-basicas.json'
  url3 = 'assets/datos/posts-busos.json'
  url4 = 'assets/datos/posts-deportivos.json'
  url5 = 'assets/datos/posts-personalizados.json'

  constructor(
    private httpClient: HttpClient
  ){}

   getPosts(){
    return this.httpClient.get(this.url1);
  }

  getPostsBasica(){
    return this.httpClient.get(this.url2);
  }

  getPostsBusos(){
    return this.httpClient.get(this.url3);
  }

  getPostsArticulosDeportivos(){
    return this.httpClient.get(this.url4);
  }

  getPostsArticulosPersonalizados(){
    return this.httpClient.get(this.url4);
  }
  
}
