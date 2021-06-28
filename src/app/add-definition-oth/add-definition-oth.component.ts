import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataManagerService } from '../service/data-manager.service';
import { OtherWords, WordDefinitions } from '../dataClass/data-classes';
// Enables access to the route / URL
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-definition-oth',
  templateUrl: './add-definition-oth.component.html',
  styleUrls: ['./add-definition-oth.component.css'],
})
export class AddDefinitionOthComponent implements OnInit {
  newDef!: WordDefinitions;
  details!: OtherWords;

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
    this.m.othGetById(this.route.snapshot.params['id']).subscribe((data) => {
      if (!data) {
        console.log('Error!');
      } else {
        this.details = data;
      }
    });
  }

  likeCount(id: any): void {
    this.m.likeCountOTH_Word(id).subscribe((data) => {
      if (!data) {
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
    this.m.addSubOTH_Word(this.details._id!, this.newDef).subscribe((data) => {
      this.newDef = data;
      this.router.navigate([`/otherTerms/details/${this.details._id}`]);
    });
  }
  backClicked() {
    this.location.back();
  }
}
