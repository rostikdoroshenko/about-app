import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        const message = 'message';
        this.errorMessage = data[message];
      }
    );
  }
}
