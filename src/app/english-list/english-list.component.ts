import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../service/data-manager.service';
import { EnglishWords } from '../dataClass/data-classes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-english-list',
  templateUrl: './english-list.component.html',
  styleUrls: ['./english-list.component.css'],
})
export class EnglishListComponent implements OnInit {
  // Properties for the class
  englishWords!: EnglishWords[];

  constructor(private m: DataManagerService, private route: ActivatedRoute) {}
  // constructor() {}

  ngOnInit(): void {
    this.m.engGetAll().subscribe((response) => {
      this.englishWords = response;
      console.log(response);
    });
  }
}
