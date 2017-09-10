import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdToolbarModule, MdCardModule, MdInputModule, MdButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MdButtonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
          path:'signup',
          component:SignupComponent
      },
      {
          path:'login',
          component:LoginComponent
      }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
