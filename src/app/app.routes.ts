import { Routes } from '@angular/router';
import { Databinding } from './pages/databinding/databinding';
import { signal } from '@angular/core';
import { Signal } from './pages/signal/signal';
import { ContolFlow } from './pages/contol-flow/contol-flow';
import { DirectiveAttr } from './pages/directive-attr/directive-attr';
import { GetApi } from './get-api/get-api';
import { User } from './pages/user/user';
import { ReactiveForm } from './pages/reactive-form/reactive-form';
import { Pipe } from './pages/pipe/pipe';
import { Resourceapi } from './pages/resourceapi/resourceapi';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Loginpage } from './pages/loginpage/loginpage';
import { authGuard } from './guards/auth-guard';
import { InlineTable } from './pages/inline-table/inline-table';

export const routes: Routes = [
    // {path : '', redirectTo : 'loginpage' , pathMatch : 'full'},
    // {path : 'loginpage' , component : Loginpage },
    // {path : '' , component : Layout ,
    //     children : [
    // {path : '' , component : Databinding} ,
    // {path : 'databinding' , component : Databinding},
    // {path : 'signal' , component : Signal},
    // {path : 'contol-flow' , component : ContolFlow},
    // {path :'directive-attr' , component : DirectiveAttr},
    // {path :'get-api' , component : GetApi},
    // {path: 'user' , component : User},
    // {path :'reactive-form' , component : ReactiveForm},
    // {path : 'pipe' ,  component : Pipe},
    // {path : 'resourceapi' , component : Resourceapi}
    // ]},

  // public
    {path : '', redirectTo : 'loginpage' , pathMatch : 'full'},
    {path : 'loginpage' , component : Loginpage },
  {
    path: '',
    component: Layout,
    canActivateChild: [authGuard], // protect all children
    children: [
      { path: '', redirectTo: 'databinding', pathMatch: 'full' },
      { path: 'databinding', component: Databinding },
      { path: 'signal', component: Signal },
      { path: 'contol-flow', component: ContolFlow },
      { path: 'directive-attr', component: DirectiveAttr },
      { path: 'get-api', component: GetApi },
      { path: 'user', component: User },
      { path: 'reactive-form', component: ReactiveForm },
      { path: 'pipe', component: Pipe },
      { path: 'resourceapi', component: Resourceapi },
      { path: 'inline-table', component: InlineTable },
      
    ]
  },

  // fallback
  { path: '**', redirectTo: 'loginpage' }

];
