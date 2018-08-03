import { Component, OnInit } from '@angular/core';
import { ICatImage } from '../../Interfaces/ICatImage';


@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  private image: ICatImage = {
    message: 'Progressive Web Cat',
    api: 'https://cataas.com/cat/says/',
    fontsize: 40
  };

  public src: string;

  constructor() {}

  ngOnInit() {
    this.src = this.image.api + this.image.message;
  }

  generateSrc(): void {
    this.src = `${this.image.api} ${this.image.message} ?size= ${this.image.fontsize} &ts='${Date.now()}`;
  }

}

