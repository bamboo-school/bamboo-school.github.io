import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Presentation, PresentationView } from 'src/app/models/materials.model';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  private _presentation?: PresentationView;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _http: HttpClient,
    private _translateService: TranslateService) {
    const id = this._activatedRoute.snapshot.params['id'];
    this._loadPresentation(id);
  }

  get presentation() : PresentationView | undefined {
    return this._presentation;
  }

  private async _resolveRef(ref: string) : Promise<Object> {
    return this._http
      .get(`assets/${ref}`, {
        responseType: "text",
      })
      .toPromise();
  }

  private async _loadPresentation(id: string) {
    const presentations: Presentation[] = await this._translateService
      .get('PRESENTATIONS')
      .toPromise();

    const presentation = presentations.find((p) => p.id === id);
    if (!presentation) {
      return;
    }

    const pres: PresentationView = await this._http
      .get(`assets/${presentation.fileLink}`)
      .toPromise();

    for (let block of pres.blocks || []) {
      if (block.$ref) {
        block.data = await this._resolveRef(block.$ref);
      }
    }

    this._presentation = pres;
  }
}
