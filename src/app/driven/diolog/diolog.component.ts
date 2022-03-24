import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DrivenComponent } from '../driven.component';

@Component({
  selector: 'app-diolog',
  templateUrl: './diolog.component.html',
  styleUrls: ['./diolog.component.css']
})
export class DiologComponent {
  constructor(
    public dialogRef: MatDialogRef<DiologComponent>,
  ) { }

  name: string = ''
  lastname: string = ''
  username: string =  ''
  cpf: string = ''
  telefone: string = ''
  endereco: string = ''
  complemento: string = ''
  senha: string = ''
  senha2: string = ''
  sobrenome: string = ''

}
