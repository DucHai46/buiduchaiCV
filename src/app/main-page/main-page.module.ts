import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    MatIconModule,
    MatButtonModule
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class MainPageModule { }
