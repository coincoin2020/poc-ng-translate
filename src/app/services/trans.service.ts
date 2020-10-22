import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const DEFAULT_LOCALE: string = 'en';

@Injectable({
  providedIn: 'root'
})
export class TransService {

  constructor(private translate: TranslateService) {
    this.setDefaultLang(DEFAULT_LOCALE);
  }

  // this language will be used as a fallback when a translation isn't found in the current language
  setDefaultLang(locale: string): void {
    this.translate.setDefaultLang('en')
  }
  
  // the lang to use, if the lang isn't available, it will use the current loader to get them
  use(locale: string): void {
    this.translate.use('fr'); // If removed, the default language will apply
  }
}
