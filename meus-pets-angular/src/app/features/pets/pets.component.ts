import { Pet } from './shared/interfaces/pet.interface';
import { Component, OnInit } from '@angular/core';

import {
  PoBreadcrumb,
  PoModule,
  PoPageAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import { Pets } from './shared/interfaces/pets.interface';

@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [PoModule],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export class PetsComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
    this.setColumns();
    this.getPets();
  }

  actions: Array<PoPageAction> = [
    { label: 'Novo'}
  ];

  breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Pets' }
    ]
  }

  columns: Array<PoTableColumn> = [];

  pets: Pets = {
    items: [],
    hasNext: false,
    remainingRecords: 0
  }

  setColumns(): void {
    this.columns = [
      { property: 'sexo', label: 'Sexo', type: 'subtitle', subtitles: [
        { value: "F", color: 'color-06', label: 'Fêmea', content: '' },
        { value: "M", color: 'color-04', label: 'Macho', content: '' }
      ] },
      { property: 'id', label: 'Código' },
      { property: 'name', label: 'Nome' },
      { property: 'color', label: 'Cor' },
      { property: 'breed', label: 'Raça' },
      { property: 'specie', label: 'Espécie' },
      { property: 'ownerid', label: 'Tutor' }
    ];
  }

  getPets(): void {
    this.pets.items = [
      { id: '000001', name: 'teste', breed: '001', color: '010101', sexo: 'F',   specie:'keila', ownerid:'101010' }
    ]
  }

}
