import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeNav() {
    let menudes: HTMLHeadingElement = document.getElementById("mySidenav") as HTMLHeadingElement;
    menudes.style.width = "0";

    let mainmenu: HTMLHeadingElement = document.getElementById("main") as HTMLHeadingElement;
    mainmenu.style.marginLeft= "0";
  }

}
