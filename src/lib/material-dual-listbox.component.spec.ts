import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDualListboxComponent } from './material-dual-listbox.component';

describe('MaterialDualListboxComponent', () => {
  let component: MaterialDualListboxComponent;
  let fixture: ComponentFixture<MaterialDualListboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDualListboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDualListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
