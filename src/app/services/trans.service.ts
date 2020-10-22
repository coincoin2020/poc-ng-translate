import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const DEFAULT_LOCALE: string = 'en';
const STORAGE_NAME: string = 'POC-NG-TRANSLATE';

@Injectable({
  providedIn: 'root'
})
export class TransService {

  constructor(private translate: TranslateService) {
    let stored = localStorage.getItem(STORAGE_NAME);

    this.setDefaultLang(DEFAULT_LOCALE);
    this.use(!!stored ? stored : DEFAULT_LOCALE);
  }

  getLocale(): string {
    return this.translate.store.currentLang;
  }

  // this language will be used as a fallback when a translation isn't found in the current language
  setDefaultLang(locale: string): void {
    this.translate.setDefaultLang('en');
  }

  setLocale(locale: string): void {
    // this.translate.store.currentLang = locale;
    this.use(locale);
    localStorage.setItem(STORAGE_NAME, locale);
  }
  
  // the lang to use, if the lang isn't available, it will use the current loader to get them
  use(locale: string): void {
    this.translate.use(locale); // If removed, the default language will apply
  }
}
