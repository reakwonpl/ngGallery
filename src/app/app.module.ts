import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertModule} from 'node_modules/ngx-bootstrap/alert/alert.module';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from "./gallery/GalleryComponent";
import { ImageComponent } from './image/image.component';
import { ImageService } from 'src/shared/ImageService';
import {ImageFilterPipe} from '../shared/filterPipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot() //ver 3.0.1 works forRoot is necessary for angular 7
  ],
  providers: [ImageService,ImageFilterPipe],
  bootstrap: [AppComponent] //tells which component its need to bootstrap
})
export class AppModule { }
