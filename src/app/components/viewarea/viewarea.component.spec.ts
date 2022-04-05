import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewareaComponent } from './viewarea.component';

describe('ViewareaComponent', () => {
  let component: ViewareaComponent;
  let fixture: ComponentFixture<ViewareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
