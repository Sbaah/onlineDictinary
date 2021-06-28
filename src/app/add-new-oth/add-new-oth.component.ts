import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataManagerService } from '../service/data-manager.service';
import {
  EnglishWords,
  OtherWords,
  WordDefinitions,
  languagesCode,
} from '../dataClass/data-classes';
// Enables access to the route / URL
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-oth',
  templateUrl: './add-new-oth.component.html',
  styleUrls: ['./add-new-oth.component.css'],
})
export class AddNewOthComponent implements OnInit {
  engDetail!: EnglishWords;
  newWord: OtherWords;
  wordDef: WordDefinitions;
  langCode!: languagesCode[];

  constructor(
    private m: DataManagerService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.newWord = new OtherWords();
    this.wordDef = new WordDefinitions();

    //Initialization of new Object  for Oth Word to empty state
    this.newWord.wordEnglish = '';
    this.newWord.wordNonEnglish = '';
    this.newWord.wordExpanded = '';
    this.newWord.languageCode = '';
    this.newWord.image = '';
    this.newWord.audio = '';
    this.newWord.linkAuthoritative = '';
    this.newWord.linkWikipedia = '';
    this.newWord.linkYouTube = '';
    this.newWord.authorName = '';
    this.newWord.dateCreated = new Date();
    this.newWord.dateRevised = new Date();
    this.newWord.fieldOfStudy = '';
    this.newWord.helpYes = 0;
    this.newWord.helpNo = 0;
    this.newWord.termEnglishId = '';

    // Oth Word Definition Initialization
    this.wordDef.authorName = '';
    this.wordDef.dateCreated = this.newWord.dateCreated;
    this.wordDef.definition = '';
    this.wordDef.quality = 0;
    this.wordDef.likes = 0;

    // storing the Eng Word Definition into  new Object of Eng Word
    this.newWord.definitions = [this.wordDef];
  }

  ngOnInit(): void {
    this.m.lanGetAll().subscribe((response) => {
      this.langCode = response;
      console.log(response);
    });
    this.m.engGetById(this.route.snapshot.params['id']).subscribe((data) => {
      if (!data) {
        console.log('Error');
      } else {
        this.engDetail = data;
      }
    });
  }

  saveWord(): void {
    if (
      this.newWord.wordNonEnglish &&
      this.newWord.authorName &&
      this.newWord.languageCode
    ) {
      this.m.addOTH_Word(this.newWord).subscribe((data) => {
        this.newWord = data;
        this.newWord.termEnglishId = this.engDetail._id;
        this.wordDef.authorName = this.newWord.authorName;
        this.router.navigate([`/termsEnglish/details/${this.newWord._id}`]);
      });
    } else {
      console.log('Error: failed to add word');
    }
  }

  back(): void {
    this.location.back();
  }
}
