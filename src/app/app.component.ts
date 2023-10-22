import { Component, ElementRef, ViewChild } from '@angular/core';
import { asyncScheduler, fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ResumeCV';


  @ViewChild('top') top!: ElementRef;
  @ViewChild('bottom') bottom!: ElementRef;
  subscription: any;
  constructor() { }
  ngOnInit() {
    this.subscription = fromEvent(document, 'mousemove').pipe(throttleTime(50, asyncScheduler, { leading: true, trailing: true })).subscribe((e: any) => {
      const coordinateX = e.clientX;
      const coordinateY = e.clientY;
      this.top.nativeElement.style.transform =
        `translate(${coordinateX}px, ${coordinateY}px)`;
      this.bottom.nativeElement.style.transform =
        `translate(${coordinateX}px, ${coordinateY}px)`;
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
