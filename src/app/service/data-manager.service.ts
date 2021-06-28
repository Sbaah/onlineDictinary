import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import {
  EnglishWords,
  OtherWords,
  WordDefinitions,
  languagesCode,
} from '../dataClass/data-classes';

@Injectable({
  providedIn: 'root',
})
export class DataManagerService {
  // Inject the HttpClient
  constructor(private http: HttpClient) {}

  private url: string = 'https://online-dictionary-api.herokuapp.com/api';
  // private url: string = 'http://localhost:8080/api';

  // Options object for POST and PUT requests
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'my-auth-token',
    }),
  };

  // Error handler, from the Angular docs
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // * Prefix for all LAnguages
  lanGetAll(): Observable<languagesCode[]> {
    return this.http.get<languagesCode[]>(`${this.url}/languages`);
  }

  // ********************************************
  // *                                          *
  // *        English Terminology API           *
  // *                                          *
  // ********************************************

  //Get All
  engGetAll(): Observable<EnglishWords[]> {
    return this.http.get<EnglishWords[]>(`${this.url}/terms/english`);
  }

  // Get Functionality for one English Word by id
  engGetById(id: string): Observable<EnglishWords> {
    return this.http.get<EnglishWords>(`${this.url + '/terms/english'}/${id}`);
  }

  // Get Functionality for one English Word by word
  engGetByWord(word: string): Observable<EnglishWords[]> {
    return this.http.get<EnglishWords[]>(
      `${this.url + '/terms/english/word'}/${word}`
    );
  }

  //Add New
  // POST  Functionality for Add a new ENG Detail
  addNewEngWord(saveEng: EnglishWords): Observable<any> {
    return this.http
      .post<any>(`${this.url}/terms/english/`, saveEng)
      .pipe(catchError(this.handleError('addingEnglishWord', saveEng)));
  }

  // Add New def
  // PUT REQUESTS
  // Edit existing ENG Detail by adding sub-doc Definition/s
  addingSubENGWord(
    id: String,
    subData: WordDefinitions
  ): Observable<WordDefinitions> {
    return this.http
      .put<WordDefinitions>(
        `${this.url}/terms/english/${id}/add-definitions`,
        subData
      )
      .pipe(catchError(this.handleError('addingSub EnglishWord', subData)));
  }

  // PUT REQUESTS
  // Edit existing ENG Detail
  updateENGWord(id: String, editEng: EnglishWords): Observable<any> {
    return this.http
      .put<any>(`${this.url}/terms/english/${id}`, editEng)
      .pipe(catchError(this.handleError('updatingEnglishWord', editEng)));
  }

  // PUT REQUESTS
  // Edit existing ENG sub doc for Helpful count
  helpfulEngCount(id: String): Observable<any> {
    return this.http
      .put<any>(`${this.url}/terms/english/helpful/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError('helpfulCount ENG', id)));
  }

  // PUT REQUESTS
  // Edit existing ENG sub doc for Helpful count
  unhelpfulEngCount(id: String): Observable<any> {
    return this.http
      .put<any>(`${this.url}/terms/english/un-helpful/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError('unhelpfulCount_ENG', id)));
  }

  // PUT REQUESTS
  // Edit existing ENG sub doc for the like count
  likeCountEng(id: String): Observable<any> {
    return this.http
      .put<any>(`${this.url}/terms/english/likeCount/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError('addingLikeCount_EnglishWord', id)));
  }

  deleteENGWord(id: String): Observable<any> {
    return this.http
      .put<any>(`${this.url + '/terms/english'}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError('Deleting_EnglishWord', id)));
  }

  //  ********************************************
  //  *                                          *
  //  *          Other Terminology API           *
  //  *                                          *
  //  ********************************************

  // Get Functionality for Other Words
  othGetAll(): Observable<OtherWords[]> {
    return this.http.get<OtherWords[]>(`${this.url}/terms/other`);
  }

  othGetById(id: string): Observable<OtherWords> {
    return this.http.get<OtherWords>(`${this.url + '/terms/other'}/${id}`);
  }

  othGetByword(word: string): Observable<OtherWords[]> {
    return this.http.get<OtherWords[]>(
      `${this.url + '/terms/other/word'}/${word}`
    );
  }

  //Add New
  // POST  Functionality for Add a new OTH Detail
  addOTH_Word(saveEng: OtherWords): Observable<any> {
    return this.http
      .post<any>(`${this.url}/terms/other/`, saveEng)
      .pipe(catchError(this.handleError('addingOtherWord', saveEng)));
  }

  // Add New def
  // PUT REQUESTS
  // Edit existing ENG Detail by adding sub-doc Definition/s
  addSubOTH_Word(
    id: String,
    subData: WordDefinitions
  ): Observable<WordDefinitions> {
    return this.http
      .put<WordDefinitions>(
        `${this.url}/terms/other/${id}/add-definitions`,
        subData
      )
      .pipe(catchError(this.handleError('addingSub_OtherWord', subData)));
  }

  // PUT REQUESTS
  // Edit existing OTH Detail
  updateOTH_Word(id: String, editOth: OtherWords): Observable<any> {
    return this.http
      .put<any>(`${this.url}/terms/other/${id}`, editOth)
      .pipe(catchError(this.handleError('updatingOtherWord', editOth)));
  }

  // PUT REQUESTS
  // Edit existing ENG sub doc for Helpful count
  helpfulOTHCount(id: String): Observable<any> {
    return this.http
      .put<any>(`${this.url}/terms/other/helpful/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError('helpfulCount_OTH', id)));
  }

  // PUT REQUESTS
  // Edit existing ENG sub doc for Helpful count
  unhelpfulOTHCount(id: String): Observable<any> {
    return this.http
      .put<any>(`${this.url}/terms/other/un-helpful/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError('unhelpfulCount_OTH', id)));
  }

  // PUT REQUESTS
  // Edit existing ENG sub doc for the like count
  likeCountOTH_Word(id: String): Observable<any> {
    return this.http
      .put<any>(`${this.url}/terms/other/likeCount/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError('addingLikeCount_OthWord', id)));
  }

  deleteOTH_Word(id: String): Observable<any> {
    return this.http
      .put<any>(`${this.url + '/terms/other'}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError('Deleting_OthWord', id)));
  }
}
