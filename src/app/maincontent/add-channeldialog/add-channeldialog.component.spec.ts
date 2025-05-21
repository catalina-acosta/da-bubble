import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChanneldialogComponent } from './add-channeldialog.component';

describe('AddChanneldialogComponent', () => {
  let component: AddChanneldialogComponent;
  let fixture: ComponentFixture<AddChanneldialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChanneldialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChanneldialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
