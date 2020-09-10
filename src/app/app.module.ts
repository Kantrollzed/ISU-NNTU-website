import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartupStudentsComponent } from './modules/startup-students/startup-students.component';
import { MainComponent } from './pages/main/main.component';
import { AbiturMapComponent } from './modules/abitur-map/abitur-map.component';
import { AbiturientComponent } from './pages/abiturient/abiturient.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { StartupStudentsLessComponent } from './modules/startup-students-less/startup-students-less.component';
import { ProjectsMiriteamComponent } from './modules/projects-miriteam/projects-miriteam.component';
import { AdditionalEducationComponent } from './modules/additional-education/additional-education.component';
import { PeopleLeaveComponent } from './modules/people-leave/people-leave.component';
import { PartnersComponent } from './modules/partners/partners.component';
import { DetailsPartnersComponent } from './modules/details-partners/details-partners.component';
import { LeftPageBarComponent } from './modules/left-page-bar/left-page-bar.component';
import { GlingOneComponent } from './modules/gling-one/gling-one.component';
import { GlinfTwoComponent } from './modules/glinf-two/glinf-two.component';
import { NewsComponent } from './modules/news/news.component';
import { ImpinfComponent } from './modules/impinf/impinf.component';
import { GrantComponent } from './modules/grant/grant.component';
import { GrantsComponent } from './modules/grants/grants.component';
import { AdditionalInnovationComponent } from './modules/additional-innovation/additional-innovation.component';
import { DisciplinesComponent } from './modules/disciplines/disciplines.component';
import { StudlifeComponent } from './modules/studlife/studlife.component';
import { DemandComponent } from './modules/demand/demand.component';
import { UsefullinfComponent } from './modules/usefullinf/usefullinf.component';
import { FieldsstudyComponent } from './modules/fieldsstudy/fieldsstudy.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GrantspComponent } from './pages/grantsp/grantsp.component';
import { ProjectsPComponent } from './pages/projects-p/projects-p.component';
import { KafPComponent } from './pages/kaf-p/kaf-p.component';
import { GlinfThreeComponent } from './modules/glinf-three/glinf-three.component';
import { DirectionComponent } from './modules/direction/direction.component';
import { PrepPComponent } from './pages/prep-p/prep-p.component';
import { PartnersPComponent } from './pages/partners-p/partners-p.component';
import {MatIconModule} from '@angular/material/icon';
import { LoginPComponent } from './pages/login-p/login-p.component';
import {MatSelectModule} from '@angular/material/select';
import { RegistrationPComponent } from './pages/registration-p/registration-p.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ProfileComponent } from './pages/profile/profile.component';
import { NewsCardComponent } from './modules/news-card/news-card.component';

@NgModule({
  declarations: [
    AppComponent,
    StartupStudentsComponent,
    MainComponent,
    AbiturMapComponent,
    AbiturientComponent,
    StartupStudentsLessComponent,
    ProjectsMiriteamComponent,
    AdditionalEducationComponent,
    PeopleLeaveComponent,
    PartnersComponent,
    DetailsPartnersComponent,
    LeftPageBarComponent,
    GlingOneComponent,
    GlinfTwoComponent,
    NewsComponent,
    ImpinfComponent,
    GrantComponent,
    GrantsComponent,
    AdditionalInnovationComponent,
    DisciplinesComponent,
    StudlifeComponent,
    DemandComponent,
    UsefullinfComponent,
    FieldsstudyComponent,
    NewsPageComponent,
    GrantspComponent,
    ProjectsPComponent,
    KafPComponent,
    GlinfThreeComponent,
    DirectionComponent,
    PrepPComponent,
    PartnersPComponent,
    LoginPComponent,
    RegistrationPComponent,
    ProfileComponent,
    NewsCardComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
