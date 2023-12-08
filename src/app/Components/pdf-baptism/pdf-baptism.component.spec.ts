import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfBaptismComponent } from './pdf-baptism.component';

describe('PdfComponent', () => {
  let component: PdfBaptismComponent;
  let fixture: ComponentFixture<PdfBaptismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfBaptismComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfBaptismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
