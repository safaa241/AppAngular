import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: false,

  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public products : any;
  public keyword: string ="";
  /** public products=[
   {"id":1,"name":"computer","price":4300},
   {"id":1,"name":"Printer","price":1300},
   {"id":1,"name":"Smartphone","price":4200},
   {"id":1,"name":"Mouse","price":111}
   ]*/
  constructor() {
  }
  ngOnInit() {
    this.products=[
      {"id":1,"name":"computer","price":4300},
      {"id":1,"name":"Printer","price":1300},
      {"id":1,"name":"Smartphone","price":4200},
      {"id":1,"name":"Mouse","price":111}
    ];
  }

  deleteProduct(p: any) {
    let index= this.products.indexOf(p);
    this.products.splice(index,1);
  }

  search() {
    console.log(this.keyword);
    let result =[];
    for(let p of this.products){
      if(p.name.includes(this.keyword)){
        result.push(p);
      }
    }
    this.products=result;
  }
}
