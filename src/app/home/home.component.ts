import { Component, OnInit } from '@angular/core';
import { Colors } from '../models/colors.enum';
import { UnsplashUrlBuilderService } from '../services/unsplash-url-builder.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    Colors = Colors;

    constructor(private unsplashUrlBuilderService: UnsplashUrlBuilderService) {
        // photo-1550684848-fac1c5b4e853
        // photo-1497935586351-b67a49e012bf
        // photo-1509785307050-d4066910ec1e
        // photo-1504888527749-e68244b4d3d7
    }

    ngOnInit(): void {
    }

}
