import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home/home.component';
import { EnglishListComponent } from './english-list/english-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OtherListComponent } from './other-list/other-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsEngComponent } from './details-eng/details-eng.component';
import { DetailsOthComponent } from './details-oth/details-oth.component';
import { AddNewEngComponent } from './add-new-eng/add-new-eng.component';
import { AddNewOthComponent } from './add-new-oth/add-new-oth.component';
import { AddDefinitionEngComponent } from './add-definition-eng/add-definition-eng.component';
import { AddDefinitionOthComponent } from './add-definition-oth/add-definition-oth.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    EnglishListComponent,
    NotFoundComponent,
    OtherListComponent,
    AboutComponent,
    ContactComponent,
    DetailsEngComponent,
    DetailsOthComponent,
    AddNewEngComponent,
    AddNewOthComponent,
    AddDefinitionEngComponent,
    AddDefinitionOthComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
