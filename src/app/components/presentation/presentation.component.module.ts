import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HighlightModule } from 'ngx-highlightjs';
import { BashComponent } from '../bash/bash.component';
import { LinkComponent } from '../link/link.component';

import { SourceComponent } from '../source/source.component';
import { PresentationComponent } from './presentation.component';
import { PresentationRoutingModule } from './presentation.component-routing.module';

@NgModule({
  declarations: [
    PresentationComponent,
    SourceComponent,
    LinkComponent,
    BashComponent
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
