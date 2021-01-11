import { AuthenticationService } from './authentication.service';
import { ChatService } from './chat.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { SideBarComponent } from './core/side-bar/side-bar.component';
import { MainContainerComponent } from './core/main-container/main-container.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    MainContainerComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'my-app'}),
  ],
  providers: [ChatService, AuthenticationService],
   bootstrap: [AppComponent]
})
export class AppModule { }
