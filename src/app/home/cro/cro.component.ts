import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cro',
  templateUrl: './cro.component.html',
  styleUrls: ['./cro.component.sass'],
})
export class CroComponent implements OnInit {
  response: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDataFromStrapi();
  }

  getDataFromStrapi() {
    this.http
      .get('http://localhost:1337/api/information-blob?populate[0]=info_blob')
      .subscribe((response) => {
        // Setup Data
        this.response = response;
      });
  }
}
