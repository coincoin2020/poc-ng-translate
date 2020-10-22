import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocTranslateComponent } from './poc-translate.component';

describe('PocTranslateComponent', () => {
  let component: PocTranslateComponent;
  let fixture: ComponentFixture<PocTranslateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocTranslateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
