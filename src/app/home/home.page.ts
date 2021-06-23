import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from './home.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  popular:any;
  tipo=this.router.url


  constructor(private homepageService: HomeService, private router:Router) {}

  ngOnInit(){
    this.getTipo()
  }
getTipo(){
  this.homepageService.getPopular(this.tipo).subscribe(response=>this.popular=response)
}
selectTipo(tipo){
tipo=tipo
this.getTipo()
}
}
