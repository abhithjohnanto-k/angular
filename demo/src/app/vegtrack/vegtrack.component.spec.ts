import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegtrackComponent } from './vegtrack.component';

describe('VegtrackComponent', () => {
  let component: VegtrackComponent;
  let fixture: ComponentFixture<VegtrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegtrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
