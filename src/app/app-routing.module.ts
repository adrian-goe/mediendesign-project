import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'cofe-shop', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'to-go', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'coffee-break', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: '**', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
