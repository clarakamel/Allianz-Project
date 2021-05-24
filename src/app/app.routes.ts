import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {StepperComponent} from './stepper/stepper.component';
import {DataConfirmationComponent} from './data-confirmation/data-confirmation.component';



export const routes: Routes = [
    {path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
    {path: '', component: LoginComponent},
    {path: 'package', component: StepperComponent, data: {animation: 'PackagePage'}},
    {path: 'dataconfirm', component: DataConfirmationComponent},

];