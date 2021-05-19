import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Card } from 'src/app/models/card.model';
import { Material } from 'src/app/models/materials.model';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
    private _materials: Material[] = [];

    constructor(private _translateService: TranslateService) {
        this._loadMaterials();
    }

    public get materials() : Material[] {
        return this._materials;
    }

    public getMaterialCards(m: Material) : Card[] {
        const cards: Card[] = [];

        for (let l of m.lectures || []) {
            cards.push({
                color: l.color,
                header: l.title,
                link: l.link,
                text: l.subtitle,
            });
        }

        return cards;
    }

    private async _loadMaterials() {
        this._materials = await this._translateService
            .get("MATERIALS")
            .toPromise();
    }
}
