import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntesHeaderComponent } from './antes-header.component';

describe('AntesHeaderComponent', () => {
  let component: AntesHeaderComponent;
  let fixture: ComponentFixture<AntesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntesHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
