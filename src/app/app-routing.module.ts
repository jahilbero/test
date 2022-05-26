import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { BodyComponent } from './body/body.component';

const routes : Routes = [
  { path: '',redirectTo: '/hazul',pathMatch:'full'},
  { path:'hazul', component: BodyComponent},
  { path: 'grace', component: TestComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports :[RouterModule]
})
export class AppRoutingModule { }
