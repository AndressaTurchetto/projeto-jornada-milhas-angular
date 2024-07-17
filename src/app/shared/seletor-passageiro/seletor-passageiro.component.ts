import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-passageiro',
  templateUrl: './seletor-passageiro.component.html',
  styleUrls: ['./seletor-passageiro.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorPassageiroComponent),
      multi: true
    }
  ]
})
export class SeletorPassageiroComponent implements ControlValueAccessor {

  @Input() titulo = '';
  @Input() subtitulo = '';

  value = 0;
  onChange: (val: number)=> void = () => {};

  onTouch: ()=> void = () => {};

  writeValue(val: number): void {
    this.value = val;
  }

  registerOnChange(fn: (val: number)=> void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: ()=> void): void {
    this.onTouch = fn;
  }

  incrementar () {
    this.value += 1;
    this.onChange(this.value);
    this.onTouch();
  }

  decrementar () {
    if (this.value > 0) {
      this.value -= 1;
      this.onChange(this.value);
      this.onTouch();
    }
  }
}
