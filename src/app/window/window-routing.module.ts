import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Part1Component } from '../part1/part1.component';
import { Part2Component } from '../part2/part2.component';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/window/part1',
        pathMatch: 'full'
    },
    {
        path: 'part1',
        component: Part1Component
    }, 
    {
        path: 'part2',
        component: Part2Component
    }

];

// forChild - используется для Lazy-Loading модулей
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WindowRoutingModule { }
