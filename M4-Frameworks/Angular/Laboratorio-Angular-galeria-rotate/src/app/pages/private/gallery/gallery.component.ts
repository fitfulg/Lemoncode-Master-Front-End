import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private interval!: any
  private position: number = 0
  private scale: number = 0.8
  private rotation: number = 0
  biggestSize: boolean = false
  smallestSize: boolean = false

  constructor(
    private galleryService: GalleryService,
  ) {
  }

  ngOnInit(): void { }

  getGalleryService(): GalleryService {
    return this.galleryService
  }

  getCurrentPicture(): Image {
    return this.galleryService.getCurrentPicture()
  }

  previous(): void {
    if (this.isStart()) return
    this.position--
    this.galleryService.setCurrentPicture(this.position)
  }

  next(): void {
    if (this.isEnd()) {
      this.stop()
      return
    }
    this.position++
    this.galleryService.setCurrentPicture(this.position)
  }

  getScale(): string {
    return `scale(${this.scale})`
  }

  increaseScale(): void {
    if (this.scale < 1) this.scale = Math.round((this.scale + 0.2) * 10) / 10
  }

  decreaseScale(): void {
    if (this.scale > 0.4) this.scale = Math.round((this.scale - 0.2) * 10) / 10
  }

  increase(): void {
    this.increaseScale()
    if (this.scale === 1) {
      this.biggestSize = true
    }
    this.smallestSize = false
  }

  decrease(): void {
    this.decreaseScale()
    if (this.scale === 0.4) {
      this.smallestSize = true
    }
    this.biggestSize = false
  }

  getRotation(): string {
    return `rotate(${this.rotation}deg)`
  }

  rotate(event: MouseEvent): void {
    if (event.shiftKey) this.rotation -= 10
    else this.rotation += 10
  }

  getStyle(): string {
    return `${this.getScale()} ${this.getRotation()}`
  }

  isStart(): boolean {
    return this.position === 0
  }

  isEnd(): boolean {
    return this.position === this.galleryService.list().length - 1
  }

  stop(): void {
    clearInterval(this.interval)
    this.interval = undefined
  }

  nextOnLoop(): void {
    this.position = this.galleryService.list().findIndex((picture) => picture.id === this.getCurrentPicture().id)
    if (this.isEnd()) {
      this.position = -1
    }
    this.position++
    this.galleryService.setCurrentPicture(this.position)
  }

  play(): void {
    if (!this.interval) this.interval = setInterval(() => this.nextOnLoop(), 2000)
  }

  isPlaying(): boolean {
    return !!this.interval
  }
}
