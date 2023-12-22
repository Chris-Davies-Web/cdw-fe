import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.sass'],
})
export class HeroComponent implements OnInit {
  response: any;
  constructor(private http: HttpClient) {}

  fadeTextSlotOne!: any[];
  activeIndex = 0;
  activeSlideOne!: any[];
  fadeTextSlotTwo!: any[];
  activeSlideTwo!: any[];
  image!: String;

  updateActiveSlides() {
    setInterval(() => {
      this.activeIndex =
        this.activeIndex++ >= this.fadeTextSlotOne.length - 1
          ? 0
          : this.activeIndex++;
      this.activeSlideOne = this.fadeTextSlotOne[this.activeIndex];
      this.activeSlideTwo = this.fadeTextSlotTwo[this.activeIndex];
    }, 4000);
  }

  ngOnInit() {
    this.getDataFromStrapi();
  }

  getDataFromStrapi() {
    this.http
      .get(
        'http://localhost:1337/api/hero?populate[0]=first.text&populate[1]=second.text&populate[2]=image&populate[3]=heroCTA'
      )
      .subscribe((response) => {
        // Setup Data
        this.response = response;
        console.log(this.response.data);
        this.fadeTextSlotOne = [
          this.response.data.attributes.first.text[0].text,
          this.response.data.attributes.first.text[1].text,
          this.response.data.attributes.first.text[2].text,
        ];

        this.fadeTextSlotTwo = [
          this.response.data.attributes.second.text[0].text,
          this.response.data.attributes.second.text[1].text,
          this.response.data.attributes.second.text[2].text,
        ];
        this.activeSlideOne = this.fadeTextSlotOne[0];
        this.activeSlideTwo = this.fadeTextSlotTwo[0];
        this.updateActiveSlides();

        this.image = `http://localhost:1337${this.response.data.attributes.image.data.attributes.url}`;
      });
  }
}
