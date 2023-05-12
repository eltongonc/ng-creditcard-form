import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl {
  override setValue(
    value: string,
    options?: {
      emitModelToViewChange?: boolean;
    }
  ): void {
    // prevent any text input
    if (value.match(/[^0-9|\/]/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    // prevent input after 5 chars
    if (value.length > 5) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });
      return;
    }

    // allow user to delete the /
    if (value.length === 2 && this.value.length === 3) {
      super.setValue(value, { ...options, emitModelToViewChange: true });
      return;
    }

    // auto add / at the end of the first two dates
    if (value.length === 2) {
      super.setValue(value + '/', { ...options, emitModelToViewChange: true });
      return;
    }

    // auto remove / at the end of the first two dates
    if (value.length === 3 && this.value.length === 4) {
      super.setValue(value.replace('/', ''), {
        ...options,
        emitModelToViewChange: true,
      });
      return;
    }

    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
