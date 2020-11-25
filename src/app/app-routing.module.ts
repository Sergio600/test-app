import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PracticeComponent } from './practice/practice.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/pathpractice',
        pathMatch: 'full'
    },
    {
        path: 'pathpractice',
        component: PracticeComponent
    }, 
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: '**', // подходит любой адрес 
        component: NotFoundComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
