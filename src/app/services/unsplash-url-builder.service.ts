import { Injectable } from '@angular/core';
import { ImageOptions } from '../models/image-options';

@Injectable({
    providedIn: 'root'
})
export class UnsplashUrlBuilderService {

    BASE_URL = 'https://images.unsplash.com/'

    /**
     *
     * @param id
     * @param options
     */
    getURL(id: string, options?: ImageOptions): string {
        const url: URL = new URL(id, this.BASE_URL);
        url.searchParams.append('q', options?.quality?.toString() ?? '80');
        url.searchParams.append('fm', options?.format ?? 'webp');
        url.searchParams.append('w', options?.width?.toString() ?? '1080');
        url.searchParams.append('fit', options?.fit ?? 'max');
        return url.href;
    }

}
