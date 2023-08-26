import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonaemComponent } from './monaem.component';

describe('MonaemComponent', () => {
  let component: MonaemComponent;
  let fixture: ComponentFixture<MonaemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonaemComponent]
    });
    fixture = TestBed.createComponent(MonaemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
