import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from "./gallery/GalleryComponent";
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  {path: "gallery", component: GalleryComponent},
  {path: "image/:id", component: ImageComponent},
  {path: "", redirectTo:"/gallery",pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
