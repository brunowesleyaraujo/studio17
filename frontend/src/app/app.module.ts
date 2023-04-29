import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { StaffComponent } from './components/pages/staff/staff.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { AppointmentComponent } from './components/pages/appointment/appointment.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LocationsComponent } from './components/pages/locations/locations.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    StaffComponent,
    ServicesComponent,
    GalleryComponent,
    AppointmentComponent,
    ContactComponent,
    LocationsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
