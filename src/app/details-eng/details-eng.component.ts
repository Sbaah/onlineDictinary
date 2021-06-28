import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataManagerService } from '../service/data-manager.service';
import {
  EnglishWords,
  OtherWords,
  languagesCode,
} from '../dataClass/data-classes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-eng',
  templateUrl: './details-eng.component.html',
  styleUrls: ['./details-eng.component.css'],
})
export class DetailsEngComponent implements OnInit {
  // Properties for the class
  englishWords!: EnglishWords;
  otherWords!: OtherWords[];
  lanCode!: languagesCode[];

  constructor(
    private m: DataManagerService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.m.engGetById(this.route.snapshot.params['id']).subscribe((data) => {
      if (!data) {
        console.log('Error!');
      } else {
        this.englishWords = data;
      }
    });
    this.m.lanGetAll().subscribe((data) => {
      if (!data) {
        console.log('Error!');
      } else {
        this.lanCode = data;
      }
    });

    this.m.othGetAll().subscribe((data) => {
      if (!data) {
        console.log('Error!');
      } else {
        this.otherWords = data;
      }
    });
  }

  likeCount(id: any): void {
    this.m.likeCountEng(id).subscribe((data: any) => {
      if (!data) {
        console.log('Error!');
      } else {
        this.ngOnInit();
      }
    });
  }

  helpYesCount(id: any): void {
    this.m.helpfulEngCount(id).subscribe((data: any) => {
      if (!data) {
        console.log('Error!');
      } else {
        this.englishWords = data;
      }
    });
  }

  helpNoCount(id: any): void {
    this.m.unhelpfulEngCount(id).subscribe((data: any) => {
      if (!data) {
        console.log('Error!');
      } else {
        this.englishWords = data;
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
