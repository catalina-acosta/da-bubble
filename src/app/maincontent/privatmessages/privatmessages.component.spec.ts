import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatmessagesComponent } from './privatmessages.component';

describe('PrivatmessagesComponent', () => {
  let component: PrivatmessagesComponent;
  let fixture: ComponentFixture<PrivatmessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrivatmessagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivatmessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
