import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { Testpage1Component } from './testpage1/testpage1.component';
import { Testpage2Component } from './testpage2/testpage2.component';
const routes:Routes=[
//{path:'profile/home',component:HomeComponent},
{path:'profile',component:ProfileComponent,children:[
    {path:"page1",component:Testpage1Component},
    {path:"page2",component:Testpage2Component}
]},
{path:'home',component:HomeComponent},
{path:'',component:LoginComponent},
{path:'**',redirectTo:''}
];

export const appRoutingModule=RouterModule.forRoot(routes);