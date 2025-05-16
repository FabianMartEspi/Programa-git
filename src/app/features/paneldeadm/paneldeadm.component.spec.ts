import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneldeadmComponent } from './paneldeadm.component';

describe('PaneldeadmComponent', () => {
  let component: PaneldeadmComponent;
  let fixture: ComponentFixture<PaneldeadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaneldeadmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaneldeadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
