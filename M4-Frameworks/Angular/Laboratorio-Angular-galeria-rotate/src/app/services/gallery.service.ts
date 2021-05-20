import { Injectable } from '@angular/core';
import { Image } from '../interfaces/image';
import fotos from '../../assets/fotos.json';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private pics: Image[]
  private current!: Image;

  constructor() {
    this.pics = fotos;
  }

  list(): Image[] {
    return [...this.pics]
  }

  getCurrentPicture(): Image {
    return {...this.current}
  }

  setCurrentPicture(index: number): void {
    this.current = this.pics[index]
  }
  
}
