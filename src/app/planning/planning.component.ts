import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  productSelected: Boolean = false;
  selectedProd;

  constructor() { }

  ngOnInit() {
  }

  onProductSelected(product){
    this.productSelected = true;
    this.selectedProd = product;
  }

}
