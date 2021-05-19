import { Injectable } from '@angular/core';
import { Image } from '../interfaces/image';
import fotos from '../../assets/fotos.json';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private pictures: Image[]
  private current!: Image;

  constructor() {
    this.pictures = fotos;
  }

  list(): Image[] {
    return [...this.pictures]
  }

  getCurrentPicture(): Image {
    return {...this.current}
  }

  setCurrentPicture(index: number): void {
    this.current = this.pictures[index]
  }
  
}
