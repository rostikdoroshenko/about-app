import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {

    title = 'My title';
    text = 'some text about ...'

    changeTitle() {
        this.title = 'Helllo'
    }
}