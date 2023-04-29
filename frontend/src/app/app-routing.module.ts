import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LocationsComponent } from './components/pages/locations/locations.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { StaffComponent } from './components/pages/staff/staff.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent },
  {path: 'services', component: ServicesComponent },
  {path: 'staff', component: StaffComponent },
  {path: 'gallery', component: GalleryComponent },
  {path: 'locations', component: LocationsComponent},
  {path: 'contact', component: ContactComponent},
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
