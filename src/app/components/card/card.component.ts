import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Coffee } from 'src/app/model/coffee.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent{

  @Input() card: Coffee;
}
