import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProvidersComponent } from './components/providers/providers.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'providers', component:ProvidersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeComponents = [HomeComponent, ProvidersComponent]
