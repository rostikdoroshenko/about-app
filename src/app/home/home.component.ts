import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showMore = false;

  public showMoreBtnClicked(): void {
    this.showMore = !this.showMore;
  }
}
