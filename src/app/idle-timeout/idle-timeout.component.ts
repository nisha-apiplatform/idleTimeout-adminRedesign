import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Component } from '@angular/core';

@Component({
  selector: 'app-idle-timeout',
  templateUrl: './idle-timeout.component.html',
  styleUrls: ['./idle-timeout.component.scss'],
})
export class IdleTimeoutComponent {
  public addIdleTimeout: FormGroup = new FormGroup({
    enableIdleTimeout: new FormControl(false),
    idleTimeout: new FormControl(0, [Validators.pattern('^[0-9]*$')]),
    logoutTimeout: new FormControl(0, [Validators.pattern('^[0-9]*$')]),
    pingInterval: new FormControl(0, [Validators.pattern('^[0-9]*$')]),
  });

  public checkError = (controlName: string, errorName: string) => {
    const control = this.addIdleTimeout.get(controlName);
    return control && control.hasError(errorName);
  };

  onFormUpdate(formValue: any) {
    // TODO : add onUpdate logic
    console.log('formValue::', formValue);
  }
}
