import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { VisitComponent } from './visit.component';
import { AppInfoComponent } from './info/info.component';
import { AppArticleComponent } from './article/article.component';
import { AppArticleDetailComponent } from './article-detail/article-detail.component';

const routes: Routes = [
  {
    path: '',
    component: VisitComponent,
    children: [
      { path: '', redirectTo: 'article', pathMatch: 'full' },
      { path: 'info', component: AppInfoComponent },
      { path: 'article', component: AppArticleComponent },
      { path: 'article-detail', component: AppArticleDetailComponent },
      { path: '**', redirectTo: 'article' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitRoutingModule { }

export const visitiRoutedComponents = [
  VisitComponent,
  AppInfoComponent,
  AppArticleComponent,
  AppArticleDetailComponent,
];
