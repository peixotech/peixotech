import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamados-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chamados-row.component.html',
  styleUrls: ['./chamados-row.component.scss']
})
export class ChamadosRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
