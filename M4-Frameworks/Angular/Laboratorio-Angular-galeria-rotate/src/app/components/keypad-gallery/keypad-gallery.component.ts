import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces';
import { GalleryService } from 'src/app/services/gallery.service';

enum Action {
  Next,
  Previous,
}

@Component({
  selector: 'app-keypad-gallery',
  templateUrl: './keypad-gallery.component.html',
  styleUrls: ['./keypad-gallery.component.scss']
})
export class KeypadGalleryComponent implements OnInit {

  @Input() galleryService!: GalleryService
  thumbnailsStart: boolean = true
  thumbnailsEnd: boolean = false
  onMove: boolean = false

  constructor() { }

  ngOnInit(): void { }

  backward(): void {
    this.thumbnailsHandler(Action.Previous)
  }

  forward(): void {
    this.thumbnailsHandler(Action.Next)    
  }

  thumbnailsHandler(action: Action): void {
    const thumbnails = document.querySelector('.thumbnails')
    const thumbnail = thumbnails?.querySelector('li img')
    if (thumbnails && thumbnail) {
      const maxScroll = (this.galleryService.list().length - 3) * thumbnail.clientWidth
      let scroll = thumbnails.scrollLeft
      if (action === Action.Previous) {
        scroll -= thumbnail.clientWidth
      } else {
        scroll += thumbnail.clientWidth
      }
      if (scroll <= 0) {
        scroll = 0
        this.thumbnailsStart = true
      } else this.thumbnailsStart = false
      if (scroll >= maxScroll) {
        scroll == maxScroll
        this.thumbnailsEnd = true
      } else this.thumbnailsEnd = false
      thumbnails.scrollTo({
        behavior: 'smooth',
        left: scroll,
        top: 0,
      })
    }
  } 

  list(): Image[] {
    return this.galleryService.list()
  }

  currentPicture(): Image {
    return this.galleryService.getCurrentPicture()
  }

  setCurrentPicture(index: number): void {
    this.galleryService.setCurrentPicture(index)
  }

}
