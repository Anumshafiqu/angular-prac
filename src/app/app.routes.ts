import { Routes } from '@angular/router';
import { Databinding } from './pages/databinding/databinding';
import { signal } from '@angular/core';
import { Signal } from './pages/signal/signal';
import { ContolFlow } from './pages/contol-flow/contol-flow';
import { DirectiveAttr } from './pages/directive-attr/directive-attr';

export const routes: Routes = [
    {path : '' , component : Databinding} ,
    {path : 'databinding' , component : Databinding},
    {path : 'signal' , component : Signal},
    {path : 'contol-flow' , component : ContolFlow},
    {path :'directive-attr' , component : DirectiveAttr}
];
