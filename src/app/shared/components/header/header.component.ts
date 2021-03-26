import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav(){
    // alert("si funciono");
    let menudes: HTMLHeadingElement= document.getElementById("mySidenav") as HTMLHeadingElement;
    menudes.style.width = "250px";

    let mainmenu: HTMLHeadingElement= document.getElementById("main") as HTMLHeadingElement;
    mainmenu.style.marginLeft = "250px";
  }

  closeNav() {
    let menudes: HTMLHeadingElement = document.getElementById("mySidenav") as HTMLHeadingElement;
    menudes.style.width = "0";

    let mainmenu: HTMLHeadingElement = document.getElementById("main") as HTMLHeadingElement;
    mainmenu.style.marginLeft= "0";
  }

}
