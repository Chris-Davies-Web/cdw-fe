import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroDevComponent } from './cro-dev.component';

describe('CroDevComponent', () => {
  let component: CroDevComponent;
  let fixture: ComponentFixture<CroDevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CroDevComponent]
    });
    fixture = TestBed.createComponent(CroDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
