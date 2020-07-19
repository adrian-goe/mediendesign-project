import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageOptions } from '../../models/image-options';
import { UnsplashUrlBuilderService } from '../../services/unsplash-url-builder.service';

@Component({
    selector: 'app-header-image',
    templateUrl: './header-image.component.html',
    styleUrls: ['./header-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderImageComponent {

    @Input()
    imageID: string

    constructor(private unsplashUrlBuilderService: UnsplashUrlBuilderService) {

    }

    getImageURL(options?: ImageOptions): string {
        return this.unsplashUrlBuilderService.getURL(this.imageID, options)
    }

    getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    }
}
