import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IricComponent } from './iric.component';

describe('IricComponent', () => {
  let component: IricComponent;
  let fixture: ComponentFixture<IricComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IricComponent]
    });
    fixture = TestBed.createComponent(IricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
