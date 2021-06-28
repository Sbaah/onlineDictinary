// Data Classes Module  setup

// Definition for languages Code

export class languagesCode {
  _id?: String;
  language: String;
  languageCode: String;

  constructor(language = '', languageCode = '') {
    this.language = language;
    this.languageCode = languageCode;
  }
}

// Definition for specific word
export class WordDefinitions {
  _id?: String;
  authorName: String;
  dateCreated: Date;
  definition: String;
  quality: Number;
  likes: Number;
  constructor(authorName = '', definition = '', quality = 0, likes = 0) {
    this.authorName = authorName;
    this.dateCreated = new Date();
    this.definition = definition;
    this.quality = quality;
    this.likes = likes;
  }
}

// Definition for English Words
export class EnglishWords {
  _id?: String;
  wordEnglish: String;
  wordNonEnglish: String;
  wordExpanded: String;
  languageCode: String;
  image: String;
  audio: String;
  linkAuthoritative: String;
  linkWikipedia: String;
  linkYouTube: String;
  authorName: String;
  dateCreated: Date;
  dateRevised: Date;
  fieldOfStudy: String;
  helpYes?: Number;
  helpNo?: Number;
  definitions: Array<WordDefinitions>;
  constructor(
    wordEnglish = '',
    authorName = '',
    definition = new WordDefinitions()
  ) {
    this.wordEnglish = wordEnglish;
    this.wordNonEnglish = '';
    this.wordExpanded = '';
    this.authorName = authorName;
    this.languageCode = 'en';
    this.linkAuthoritative = '';
    this.image = '';
    this.audio = '';
    this.linkWikipedia = '';
    this.fieldOfStudy = '';
    this.linkYouTube = '';
    this.dateCreated = new Date();
    this.dateRevised = new Date();
    this.definitions = [definition];
    this.helpYes = 0;
    this.helpNo = 0;
  }
}

// Definition for Other Words
export class OtherWords {
  _id?: String;
  wordEnglish: String;
  wordNonEnglish: String;
  wordExpanded: String;
  languageCode: String;
  image: String;
  audio: String;
  linkAuthoritative: String;
  linkWikipedia: String;
  linkYouTube: String;
  authorName: String;
  dateCreated: Date;
  dateRevised: Date;
  fieldOfStudy: String;
  helpYes?: Number;
  helpNo?: Number;
  definitions: Array<WordDefinitions>;
  termEnglishId?: String;
  constructor(
    termEnglishId = '',
    wordOther = '',
    authorName = '',
    definition = new WordDefinitions()
  ) {
    this.termEnglishId = termEnglishId;
    this.wordNonEnglish = wordOther;
    this.wordEnglish = '';
    this.wordExpanded = '';
    this.languageCode = '';
    this.image = '';
    this.audio = '';
    this.linkAuthoritative = '';
    this.linkWikipedia = '';
    this.linkYouTube = '';
    this.authorName = authorName;
    this.dateCreated = new Date();
    this.dateRevised = new Date();
    this.definitions = [definition];
    this.fieldOfStudy = '';
    this.helpYes = 0;
    this.helpNo = 0;
  }
}
