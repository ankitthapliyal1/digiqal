import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsroomComponent } from './pages/newsroom/newsroom.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { TermsComponent } from './pages/terms/terms.component';

const routes: Routes = [

  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '' , component: HomeComponent},
  { path: 'newsroom' , component: NewsroomComponent },
  { path: 'contact' , component: ContactComponent},
  { path: 'career' , component: CareerComponent},
  { path: 'terms' , component: TermsComponent},
  { path: 'privacy' , component: PrivacyComponent},
  { path: 'cookies' , component: CookiesComponent},
  { path: 'aboutUs' , component: AboutUsComponent},

  { path: '**', pathMatch: 'full', 
        component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
