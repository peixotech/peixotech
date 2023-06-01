import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadosRowComponent } from '../chamados-row/chamados-row.component';

@Component({
  selector: 'app-chamados-table',
  standalone: true,
  imports: [CommonModule, ChamadosRowComponent],
  templateUrl: './chamados-table.component.html',
  styleUrls: ['./chamados-table.component.scss']
})
export class ChamadosTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
