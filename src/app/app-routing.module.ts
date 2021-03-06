import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { App1Component } from './app1/app1.component';
import { App2Component } from './app2/app2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PracticeComponent } from './practice/practice.component';
import { TestComponent } from './test/test.component';
import { UserInfoComponent } from './user-info/user-info.component';

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
        path: 'user/:id/info',
        component: UserInfoComponent
    },
    {
        path: 'test',
        component:TestComponent,
        children:[
            {
                path: 'app1',
                component: App1Component
            },
            {
                path: 'app2',
                component: App2Component
            }
        ]
    },
    {
        path: 'window',
        loadChildren: ()=>import('./window/window.module').then((mod)=>mod.WindowModule)
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
