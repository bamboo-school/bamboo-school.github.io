import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PresentationRoutingModule } from './components/presentation/presentation.component-routing.module';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: MainPageComponent
  },
  {
    path: "pres",
    loadChildren: () => import('./components/presentation/presentation.component.module')
      .then(m => m.PresentationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
