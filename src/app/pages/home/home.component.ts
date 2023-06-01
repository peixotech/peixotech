import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from 'src/app/libs/card/card.component';
import { ChamadosTableComponent } from 'src/app/libs/chamados-table/chamados-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent, ChamadosTableComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
