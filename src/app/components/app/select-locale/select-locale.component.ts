import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransService } from 'src/app/services/trans.service';

@Component({
  selector: 'app-select-locale',
  templateUrl: './select-locale.component.html',
  styleUrls: ['./select-locale.component.scss']
})
export class SelectLocaleComponent implements OnInit {
  locale: string;
  @Output() onLocaleChange: EventEmitter<string> = new EventEmitter();

  constructor(private trans: TransService) { }

  ngOnInit() {
    this.locale = this.trans.getLocale();
  }

  changeLocale(locale: string) {
    this.onLocaleChange.emit(locale);
  }

}
