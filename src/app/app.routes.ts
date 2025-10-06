import { Routes } from '@angular/router';
import { Databinding } from './pages/databinding/databinding';
import { signal } from '@angular/core';
import { Signal } from './pages/signal/signal';
import { ContolFlow } from './pages/contol-flow/contol-flow';
import { DirectiveAttr } from './pages/directive-attr/directive-attr';
import { GetApi } from './get-api/get-api';
import { User } from './pages/user/user';

export const routes: Routes = [
    {path : '' , component : Databinding} ,
    {path : 'databinding' , component : Databinding},
    {path : 'signal' , component : Signal},
    {path : 'contol-flow' , component : ContolFlow},
    {path :'directive-attr' , component : DirectiveAttr},
    {path :'get-api' , component : GetApi},
    {path: 'user' , component : User}
];
