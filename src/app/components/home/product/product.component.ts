import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Provinces ,Province} from 'src/app/Models/Provinces';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  result:Province[]=[];
name:string;

  completed:boolean=false;
  constructor(private productService:DataServiceService) {

  }

  ngOnInit(): void {
    this.getProduct();

  }
    getProduct() {

    this.productService.getProduct().subscribe({
      next: function(value){
        if(value.status){
          this.result= value.object;
          console.log(this.result);
          //console.log(this.result[5].province.name);
        }

      },
      complete :function () {
        console.log("completed")
        this.completed= true;




      }
    });
  }

}
