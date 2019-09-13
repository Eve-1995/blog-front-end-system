import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistService } from './register.service';
import { NbDialogService } from '@nebular/theme';
import { AppContrastComponent } from './contrast/contrast.component';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['register.component.scss'],
  providers: [RegistService]
})
export class AppRegisterComponent {
  public user: any = {};
  public submitted: boolean = false;
  public moreInfo = false;

  public register(): void {
    this.submitted = true;
    this.service.save(this.user).subscribe(() => {
      this.router.navigate(['/auth/login']);
    }, () => {
      this.submitted = false;
    });
  }

  public checkContrast() {
    this.dialogService.open(AppContrastComponent);
  }

  constructor(
    private router: Router,
    private service: RegistService,
    private dialogService: NbDialogService
  ) { }
}
