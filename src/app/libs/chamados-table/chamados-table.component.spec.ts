import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChamadosTableComponent } from './chamados-table.component';

describe('ChamadosTableComponent', () => {
  let component: ChamadosTableComponent;
  let fixture: ComponentFixture<ChamadosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ChamadosTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChamadosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
