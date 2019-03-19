import { NgModule } from '@angular/core';
import { AuthRoutingModule, authRoutedComponents } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { AppContrastComponent } from './register/contrast/contrast.component';
import { NgxMdModule } from 'ngx-md';
import { httpInterceptorProviders } from '../others/interceptor';
import { ThemeModule } from '../@theme/theme.module';
import { NbDialogModule } from '@nebular/theme';

const CHILD_COMPONENT = [
  AppContrastComponent,
];

@NgModule({
  imports: [
    AuthRoutingModule,
    ThemeModule,
    NbAuthModule.forRoot(),
    NgxMdModule.forRoot(),
  ],
  declarations: [
    ...authRoutedComponents,
    ...CHILD_COMPONENT,
  ],
  entryComponents: [
    ...CHILD_COMPONENT,
  ],
  providers: [
    httpInterceptorProviders,
    ...NbDialogModule.forRoot().providers,
  ]
})
export class AuthModule { }
