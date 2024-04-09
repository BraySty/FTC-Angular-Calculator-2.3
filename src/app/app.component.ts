import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'FTC-Angular-Calculator-2.3';

  valor1:number = 0
  valor2:number = 0
  resultado:number = 0;

  sumar():void {
    this.resultado = this.valor1 + this.valor2;
  }

  restar():void {
    this.resultado = this.valor1 - this.valor2;
  }

  multiplicar() {
    this.resultado = this.valor1 * this.valor2;
  }

  dividir() {
    this.resultado = this.valor1 / this.valor2;
  }

}
