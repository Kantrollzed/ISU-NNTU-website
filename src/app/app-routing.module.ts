import { NgModule } from '@angular/core';

import {MainComponent} from './pages/main/main.component';
import {AbiturientComponent} from './pages/abiturient/abiturient.component';
import {DetailsPartnersComponent} from './modules/details-partners/details-partners.component';
import {NewsPageComponent} from './pages/news-page/news-page.component';
import {RouterModule, Routes} from '@angular/router';
import {GrantspComponent} from './pages/grantsp/grantsp.component';
import {ProjectsPComponent} from './pages/projects-p/projects-p.component';
import {KafPComponent} from './pages/kaf-p/kaf-p.component';
import {PartnersPComponent} from './pages/partners-p/partners-p.component';
import {PrepPComponent} from './pages/prep-p/prep-p.component';
import {KafComponent} from './pages/kaf/kaf.component';
import {LoginPComponent} from './pages/login-p/login-p.component';
import {RegistrationPComponent} from './pages/registration-p/registration-p.component';
import {ProfileComponent} from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'abiturient', component: AbiturientComponent},
  { path: 'news', component: NewsPageComponent},
  { path: 'grants', component: GrantspComponent},
  { path: 'projects', component: ProjectsPComponent},
  { path: 'staff', component: PrepPComponent},
  { path: 'kaf', component: KafPComponent},
  { path: 'kaf/infkaf', component: KafComponent},
  { path: 'partners', component: PartnersPComponent},
  { path: 'login', component: LoginPComponent},
  { path: 'register', component: RegistrationPComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', component: MainComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
