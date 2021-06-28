import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataManagerService } from '../service/data-manager.service';
import { EnglishWords, WordDefinitions } from '../dataClass/data-classes';
// Enables access to the route / URL
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-definition-eng',
  templateUrl: './add-definition-eng.component.html',
  styleUrls: ['./add-definition-eng.component.css'],
})
export class AddDefinitionEngComponent implements OnInit {
  newDef!: WordDefinitions;
  details!: EnglishWords;
  id!: String;
  constructor(
    private m: DataManagerService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.newDef = new WordDefinitions();

    this.newDef.authorName = '';
    this.newDef.dateCreated = new Date();
    this.newDef.definition = '';
    this.newDef.quality = 0;
    this.newDef.likes = 0;
  }

  ngOnInit(): void {
    this.m.engGetById(this.route.snapshot.params['id']).subscribe((data) => {
      if (!data) {
        console.log('Error!');
      } else {
        this.details = data;
      }
    });
  }

  likeCount(id: any): void {
    this.m.likeCountEng(id).subscribe((data) => {
      if (!data) {
        // this.details = undefined;
        console.log('Error!');
      } else {
        console.log(' Testing ' + data);
        this.ngOnInit();
      }
    });
  }
  saveDef(): void {
    if (this.details.authorName) {
      if (!this.newDef.authorName) {
        this.newDef.authorName = this.details.authorName;
      }
    }
    this.m
      .addingSubENGWord(this.details._id!, this.newDef)
      .subscribe((data) => {
        this.newDef = data;
        this.router.navigate([`/termsEnglish/details/${this.details._id}`]);
      });
  }

  backClicked() {
    this.location.back();
  }
}
