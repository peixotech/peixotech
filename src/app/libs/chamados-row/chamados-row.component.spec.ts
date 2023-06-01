import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosRowComponent } from './chamados-row.component';

describe('ChamadosRowComponent', () => {
  let component: ChamadosRowComponent;
  let fixture: ComponentFixture<ChamadosRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChamadosRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamadosRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
