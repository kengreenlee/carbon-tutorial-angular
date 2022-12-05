import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BreadcrumbModule, GridModule, TabsModule } from 'carbon-components-angular';
import { IconModule, IconService } from 'carbon-components-angular';
import PersonFavorite32Module from "@carbon/icons/lib/person--favorite/32";
import Globe32Module from "@carbon/icons/lib/globe/32";
import Application32Module from "@carbon/icons/lib/application/32";

@NgModule({
    declarations: [
        LandingPageComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        GridModule,
        BreadcrumbModule,
        TabsModule,
        IconModule
    ]
})
export class HomeModule {
    constructor(protected iconService: IconService) {
        iconService.registerAll([
            PersonFavorite32Module,
            Globe32Module,
            Application32Module
        ]);
    }
}
