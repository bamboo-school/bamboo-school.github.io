import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightModule } from 'ngx-highlightjs';

import { SourceComponent } from '../source/source.component';
import { PresentationComponent } from './presentation.component';
import { PresentationRoutingModule } from './presentation.component-routing.module';

@NgModule({
  declarations: [
    PresentationComponent,
    SourceComponent
  ],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    TranslateModule.forChild({}),
    HighlightModule
  ],
})
export class PresentationModule {
}
