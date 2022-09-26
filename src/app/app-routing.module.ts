import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "menu", component: MenuComponent }
];



@NgModule({
  declarations: [
  ],
  imports: [
   [ RouterModule.forRoot(routes),
      CommonModule
  ],
  ]
})
export class AppRoutingModule { }
