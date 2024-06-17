import { OwnerService } from './shared/services/owner.service';
import { Component, OnInit } from '@angular/core';

import {
  PoBreadcrumb,
  PoModule,
  PoNotificationService,
  PoPageAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import { Owner } from './shared/interfaces/owner.interface';
import { Owners } from './shared/interfaces/owners.interface';

@Component({
  selector: 'app-owner',
  standalone: true,
  imports: [PoModule],
  templateUrl: './owner.component.html',
  styleUrl: './owner.component.css'
})
export class OwnerComponent implements OnInit{

  actions: Array<PoPageAction> = [
    { label: 'Novo'}
  ];

  breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/' },
      { label: 'Tutores' }
    ]
  }

  columns: Array<PoTableColumn> = [];

  owner: Owner = {
    items: [],
    hasNext: false,
    remainingRecords: 0
  }

  constructor(
    private OwnerService: OwnerService,
    private poNotificationService: PoNotificationService
  ){}

  ngOnInit(): void {
    this.setColumns();
    this.getOwners();
  }

  setColumns(): void {
    this.columns = [
      { property: 'id', label: 'Código' },
      { property: 'name', label: 'Nome' },
      { property: 'rg', label: 'RG', visible: false },
      { property: 'cpf', label: 'CPF' },
      { property: 'email', label: 'E-mail' },
      { property: 'tel1', label: 'Telefone 1' },
      { property: 'tel2', label: 'Telefone 2', visible: false },
      { property: 'pets', label: 'Pets', type: 'icon', icons: [
        { value: 'view-pet', icon: 'po-icon-eye', tooltip: 'Visualizar pets' },
        { value: 'include-pet', icon: 'po-icon-plus-circle', tooltip: 'Incluir pets' }
      ] }
    ];
  }


  getOwners(): void {
    this.OwnerService.get().subscribe({
      next: (owner: Owner) => this.owner.items = owner.items,
      error: (error:any) => this.poNotificationService.error('Falha ao Notificar Tutores')
    })

  }

}
