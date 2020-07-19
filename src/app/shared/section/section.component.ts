import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Colors } from '../../models/colors.enum';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],

    encapsulation: ViewEncapsulation.ShadowDom
})
export class SectionComponent implements OnInit {
    Colors = Colors;

    containerClasses: string[] = ['section-container']

    @Input()
    position: 'left' | 'right';

    @Input()
    imageUrl: string;

    /*@Input('position')
    set Position(position: 'left' | 'right') {
        this.containerClasses.push(position === 'left' ? 'section-image-left' : 'section-image-right')
    }*/

    constructor() {
    }

    ngOnInit(): void {
    }

}
