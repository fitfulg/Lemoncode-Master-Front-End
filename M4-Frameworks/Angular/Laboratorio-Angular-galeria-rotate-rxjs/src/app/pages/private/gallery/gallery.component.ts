import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/interfaces/image';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private imagenes: Image[] = [];
  private imagenSeleccionada: number = -1;
  public imageWidth = 400.0;

  constructor(galeriaService: GalleryService) { 
    galeriaService.getImages()
                  .then(imagenes => {
                    this.imagenes = imagenes;

                    if (this.imagenes?.length > 0) {
                      this.imagenSeleccionada = 0;
                    }
                  });
  }

  public get Imagenes(): Image[] {
    return this.imagenes;
  }

  public set Imagenes(value: Image[]) {
    this.imagenes = value;
  }

  public get ImagenSeleccionada(): number {
    return this.imagenSeleccionada;
  }

  public set ImagenSeleccionada(value: number) {
    this.imagenSeleccionada = value;

    if (!this.imagenes || !this.imagenes.length)
    {
      this.imagenSeleccionada = -1;
    }

    if (this.imagenSeleccionada < 0) {
      this.imagenSeleccionada = 0;
    }
    else if (this.imagenSeleccionada >= this.imagenes.length) {
      this.imagenSeleccionada = this.imagenes.length - 1;
    }
  }

  public aumentarImagen() {
    this.imageWidth += 25;
  }

  public disminuirImagen() {
    this.imageWidth -= 25;
  }

  ngOnInit(): void {
  }

}
