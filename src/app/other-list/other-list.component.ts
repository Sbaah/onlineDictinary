import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../service/data-manager.service';
import { OtherWords } from '../dataClass/data-classes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-other-list',
  templateUrl: './other-list.component.html',
  styleUrls: ['./other-list.component.css'],
})
export class OtherListComponent implements OnInit {
  // Properties for the class
  otherWords!: OtherWords[];

  constructor(private m: DataManagerService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.m.othGetAll().subscribe((response) => {
      this.otherWords = response;
      console.log(response);
    });
  }
}
