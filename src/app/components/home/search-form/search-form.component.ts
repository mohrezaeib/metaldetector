import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  value:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  searchProduct(){
    console.log(this.value)
  }
  onKeyup(value:string){
   this.value =value
  }


}
