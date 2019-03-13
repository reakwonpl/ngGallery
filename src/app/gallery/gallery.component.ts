import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from 'src/shared/ImageService';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  @Input() filterBy?: string = 'all';
  
  visibleImages: any[];

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
   }

  ngOnInit() {
    this.visibleImages = this.imageService.getImages();
  }

}
