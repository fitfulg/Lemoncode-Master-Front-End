import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-thumbnails',
  templateUrl: './thumbnails.component.html',
  styleUrls: ['./thumbnails.component.scss']
})
export class ThumbnailsComponent implements OnInit {

  @Input() galleryService!: GalleryService
 
  constructor() { }

  ngOnInit(): void { }

  list(): Image[] {
    return this.galleryService.list()
  }

  setCurrentPicture(index: number): void {
    this.galleryService.setCurrentPicture(index)
  }

}
