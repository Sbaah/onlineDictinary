import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataManagerService } from '../service/data-manager.service';
import { EnglishWords, WordDefinitions } from '../dataClass/data-classes';
// Enables access to the route / URL
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-eng',
  templateUrl: './add-new-eng.component.html',
  styleUrls: ['./add-new-eng.component.css'],
})
export class AddNewEngComponent implements OnInit {
  // Data-holding properties
  newWord: EnglishWords;
  wordDef: WordDefinitions;
  constructor(
    private m: DataManagerService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
    this.newWord = new EnglishWords();
    this.wordDef = new WordDefinitions();

    //Initialization of new Object  for Eng Word to empty state
    this.newWord.wordEnglish = '';
    this.newWord.wordNonEnglish = '';
    this.newWord.wordExpanded = '';
    this.newWord.languageCode = 'en-ca';
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

    // Eng Word Definition Initialization
    this.wordDef.authorName = '';
    this.wordDef.dateCreated = this.newWord.dateCreated;
    this.wordDef.definition = '';
    this.wordDef.quality = 0;
    this.wordDef.likes = 0;

    // storing the Eng Word Definition into  new Object of Eng Word
    this.newWord.definitions = [this.wordDef];
  }

  ngOnInit(): void {}

  saveWord(): void {
    if (
      this.newWord.wordEnglish &&
      this.newWord.authorName &&
      this.newWord.languageCode
    ) {
      this.newWord.definitions[0].authorName = this.newWord.authorName;
      this.m.addNewEngWord(this.newWord).subscribe((data) => {
        this.newWord = data;
        this.router.navigate([`/englishTerms/details/${this.newWord._id}`]);
      });
    } else {
      console.log('Error: failed to add word');
    }
  }

  back(): void {
    this.location.back();
  }
}
