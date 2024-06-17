import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent}, //Quando o caminho for vazio (ou seja, homepage), ele chama o homocomponent
  { path: 'owners', loadChildren: () => import('./features/owner/owner.module').then(m => m.OwnerModule) },
  { path: 'pets', loadChildren: () => import('./features/pets/pets.module').then(m => m.PetsModule) },
];
