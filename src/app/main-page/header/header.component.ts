import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  onWindowScroll($event: Event) {

    this.onNav = true;
  }
  onNav: boolean = false;

  mobileNav: boolean = true;

  ngOnInit() {
    if (window.screen.width < 640) { // 768px portrait
      this.mobileNav = false;
    }
    else {
      this.mobileNav = true;
    }
  }

  mobile() {
    this.mobileNav = true;
  }

  hiddenmobile() {
    if (window.screen.width < 640) { // 768px portrait
      this.mobileNav = false;
    }
    else {
      this.mobileNav = true;
    }
  }

  backhome() {
    this.onNav = false;
  }

  nav_item() {
    this.onNav = true;
  }
}
