import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Component Import
import { HomeComponent } from './home/home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EnglishListComponent } from './english-list/english-list.component';
import { OtherListComponent } from './other-list/other-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DetailsEngComponent } from './details-eng/details-eng.component';
import { DetailsOthComponent } from './details-oth/details-oth.component';
import { AddNewEngComponent } from './add-new-eng/add-new-eng.component';
import { AddNewOthComponent } from './add-new-oth/add-new-oth.component';
import { AddDefinitionEngComponent } from './add-definition-eng/add-definition-eng.component';
import { AddDefinitionOthComponent } from './add-definition-oth/add-definition-oth.component';

const routes: Routes = [
  { path: 'englishTerms', component: EnglishListComponent },
  { path: 'otherTerms', component: OtherListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'englishTerms/add-new', component: AddNewEngComponent },
  { path: 'englishTerms/details/:id', component: DetailsEngComponent },
  {
    path: 'englishTerms/add-definition/:id',
    component: AddDefinitionEngComponent,
  },
  { path: 'otherTerms/add-new/:id', component: AddNewOthComponent },
  { path: 'otherTerms/details/:id', component: DetailsOthComponent },
  {
    path: 'otherTerms/add-definition/:id',
    component: AddDefinitionOthComponent,
  },
  // more routes are added here -^

  { path: 'home', component: HomeComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
