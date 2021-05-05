import { Injectable } from '@angular/core';
import { Image } from '../interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  constructor() { }

  public getImages() : Promise<Image[]> {
    return Promise.resolve([
      {
        id: 1,
        src: "assets/fotos/devdog.jpg",
        title: "Developer dog",
      },
      {
        id: 2,
        src:"assets/fotos/bambi.jpg",
        title: "Bambi",
      },
      {
        id: 3,
        src:"assets/fotos/cat.jpg",
        title: "A cat",
      },
      {
        id: 4,
        src:"assets/fotos/dog.jpg",
        title: "A dog",
      },
      {
        id: 5,
        src:"assets/fotos/dogfly.jpg",
        title: "Flying dog",
      },
      {
        id: 6,
        src:"assets/fotos/dogman.jpg",
        title: "Dressed dog ",
      },
      {
        id: 7,
        src:"assets/fotos/dogrun.jpg",
        title: "Dog running",
      },
      {
        id: 8,
        src:"assets/fotos/mantis.jpg",
        title: "Mantis",
      }
    ]);
  }
}
