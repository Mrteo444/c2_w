import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PeliculasComponent } from './componets/peliculas/peliculas.component';
import { Error404Component } from './pages/error404/error404.component';
import { EditarComponent } from './componets/editar/editar.component';
import { accesoGuard, loginGuard } from './guards/login.guard';
import { ApiComponent } from './componets/api/api.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent,canActivate:[accesoGuard]},
    {path:'registro',component:RegisterComponent,canActivate:[accesoGuard]},





    
    {path:'peliculas',component:PeliculasComponent,canActivate:[loginGuard]},
    {path:'Api',component:ApiComponent,canActivate:[loginGuard]},
    {path:'editar/:idpeli',component:EditarComponent,canActivate:[loginGuard]},

    {path:'**',component:Error404Component},
];
