import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { StepperComponent } from './stepper/stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { PackageSelectionComponent } from './package-selection/package-selection.component';
import { DataConfirmationComponent } from './data-confirmation/data-confirmation.component';
import { FinalComponent } from './final/final.component';
import {MatRadioModule} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import {MatDialogModule} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { FooterComponent } from './footer/footer.component';
import { AnimationsComponent } from './animations/animations.component';
import { Modal2Component } from './modal2/modal2.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    StepperComponent,
    PackageSelectionComponent,
    DataConfirmationComponent,
    FinalComponent,
    CarouselComponent,
    ModalComponent,
    FooterComponent,
    AnimationsComponent,
    Modal2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    MatStepperModule,
    MatRadioModule,
    MatSelectModule,
    MatCardModule,
    CarouselModule,
    WavesModule,
    MatDialogModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
