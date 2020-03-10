import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  constructor() {



   }





  // console.log(parseInt(style.font-size, 10));

  ngOnInit() {
    this.runSvg();
  }

  runSvg(){
    const element = document.querySelector('.svg');
    const style = getComputedStyle(element);
    const font_size = parseInt(style.fontSize, 10)
    console.log(font_size);
    const element2 = document.querySelector('.mysvg');
    // element2.style.height = font_size;

  }

}
