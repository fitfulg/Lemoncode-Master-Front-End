import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
 
@Directive({
  selector: 'img[appRotate]'
  //selector: '[appRotate]'
})
export class RotateDirective implements OnInit {
  @Input("step")
  public inputStep : string = "";

  @Input("appRotate")
  public initialStep: string = "";

  private step : number = 10;
  private currentStep: number = 45;

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    const step = Number.parseInt(this.inputStep);
    const currentStep = Number.parseInt(this.initialStep);

    this.step = Number.isInteger(step) ? step : this.step;
    this.currentStep = Number.isInteger(currentStep) ? currentStep : this.currentStep;

    this.el.nativeElement.style.transform = `rotate(${this.currentStep}deg)`;
  }

  @HostListener("click", ['$event'])
  public rotar(evento: MouseEvent) {
    if (evento.shiftKey) {
      this.currentStep = !this.currentStep ? this.step : this.currentStep - this.step;
    }
    else {
      this.currentStep = !this.currentStep ? this.step : this.currentStep + this.step;
    }
    this.el.nativeElement.style.transform = `rotate(${this.currentStep}deg)`;
  }
}
