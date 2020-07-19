import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderImageComponent } from './header-image/header-image.component';
import { ButtonComponent } from './button/button.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from './section/section.component';



@NgModule({
    declarations: [HeaderImageComponent, ButtonComponent, NavbarComponent, SectionComponent],
    exports: [
        HeaderImageComponent,
        ButtonComponent,
        SectionComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SharedModule { }
