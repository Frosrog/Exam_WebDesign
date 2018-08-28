import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractInfoComponent } from './extract-info.component';

describe('ExtractInfoComponent', () => {
  let component: ExtractInfoComponent;
  let fixture: ComponentFixture<ExtractInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtractInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
