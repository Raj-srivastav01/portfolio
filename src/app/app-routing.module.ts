import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionTwoComponent } from './section-two/section-two.component';
import { SectionFourComponent } from './section-four/section-four.component';
import { SectionThreeComponent } from './section-three/section-three.component';

const routes: Routes = [
  {path:'home', component:SectionOneComponent},
  {path:'About Me', component:SectionTwoComponent},
  {path:'Projects', component:SectionFourComponent},
  {path:'Skills', component:SectionThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
