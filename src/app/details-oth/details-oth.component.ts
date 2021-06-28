import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { DataManagerService } from '../service/data-manager.service';
import { OtherWords, languagesCode } from '../dataClass/data-classes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-oth',
  templateUrl: './details-oth.component.html',
  styleUrls: ['./details-oth.component.css'],
})
export class DetailsOthComponent implements OnInit {
  // Properties for the class
  otherWords!: OtherWords;
  lanCode!: languagesCode[];

  constructor(
    private m: DataManagerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.m.othGetById(this.route.snapshot.params['id']).subscribe((data) => {
      if (!data) {
        console.log('Error!');
      } else {
        this.otherWords = data;
      }
    });

    this.m.lanGetAll().subscribe((data) => {
      if (!data) {
        console.log('Error!');
      } else {
        this.lanCode = data;
      }
    });
  }

  likeCount(id: any): void {
    this.m.likeCountOTH_Word(id).subscribe((data: any) => {
      if (!data) {
        console.log('Error!');
      } else {
        this.ngOnInit();
      }
    });
  }

  helpYesCount(id: any): void {
    this.m.helpfulOTHCount(id).subscribe((data: any) => {
      if (!data) {
        console.log('Error!');
      } else {
        this.otherWords = data;
      }
    });
  }

  helpNoCount(id: any): void {
    this.m.unhelpfulOTHCount(id).subscribe((data: any) => {
      if (!data) {
        console.log('Error!');
      } else {
        this.otherWords = data;
      }
    });
  }

  //  compare the pass language code to the language object array and return the match
  findTrans(langCode: any): string {
    let lanNAme: any;
    if (this.lanCode) {
      for (let i = 0; i < this.lanCode.length; i++) {
        if (this.lanCode[i].languageCode === langCode) {
          lanNAme = this.lanCode[i].language;
        }
      }
    }
    return lanNAme;
  }

  backClicked() {
    this.location.back();
  }
}
