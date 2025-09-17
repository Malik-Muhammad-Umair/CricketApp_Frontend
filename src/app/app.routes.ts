import { Routes } from '@angular/router';
import { Matches } from './Mycomponents/matches/matches';
import { Home } from './Mycomponents/home/home';
import { Result } from './Mycomponents/result/result';
import { Help } from './Mycomponents/help/help';
import { Update } from './Mycomponents/update/update';

export const routes: Routes = [
 { path: '', component: Home },   
 { path: 'home', component: Home },   
 { path: 'update/:id', component: Update },   
 { path: 'update', component: Update },   
 { path: 'help', component: Help },   
 { path: 'matches', component: Matches },   
 { path: 'result', component: Result },   
 { path: '**', component: Home },   
 
];
