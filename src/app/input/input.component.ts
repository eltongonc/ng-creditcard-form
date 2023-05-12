import { Component, Input } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    return !!(
      control &&
      control.invalid &&
      control.dirty &&
      control.touched &&
      control.errors
    );
  }
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() control!: FormControl;
  @Input() label = '';

  @Input() size: 'full' | 'half' = 'full';
  @Input() maskPattern!: string;

  matcher = new MyErrorStateMatcher();

  getWidth() {
    return `size-${this.size}`;
  }
}
