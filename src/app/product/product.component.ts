import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,

  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{
  public product : any;
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
    this.product=[
      {"id":1,"name":"computer","price":4300},
      {"id":1,"name":"Printer","price":1300},
      {"id":1,"name":"Smartphone","price":4200},
      {"id":1,"name":"Mouse","price":111}
    ];
  }

  deleteProduct(p: any) {
    let index= this.product.indexOf(p);
    this.product.splice(index,1);
  }

  search() {
    console.log(this.keyword);
    let result =[];
    for(let p of this.product){
      if(p.name.includes(this.keyword)){
        result.push(p);
      }
    }
    this.product=result;
  }
}
