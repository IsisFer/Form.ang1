import { DiologComponent } from './diolog/diolog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'driven',
  templateUrl: './driven.component.html',
  styleUrls: ['./driven.component.css']
})
export class DrivenComponent {

    name: FormControl = new FormControl('')
    lastname: FormControl = new FormControl('')
    username: FormControl = new FormControl('')
    cpf: FormControl = new FormControl('')
    telefone: FormControl = new FormControl('')
    endereco: FormControl = new FormControl('')
    complemento: FormControl = new FormControl('')
    senha: FormControl = new FormControl('')
    senha2: FormControl = new FormControl('')
    sobrenome: FormControl = new FormControl('')

    constructor(
      public dialog: MatDialog
    ){}

    openDialog() {
      let dio = this.dialog.open(DiologComponent)

      dio.componentInstance.name =this.name.value
      dio.componentInstance.lastname =this.lastname.value
      dio.componentInstance.cpf =this.cpf.value
      dio.componentInstance.complemento =this.complemento.value
      dio.componentInstance.endereco =this.endereco.value
      dio.componentInstance.sobrenome =this.sobrenome.value
      dio.componentInstance.username =this.username.value
      dio.componentInstance.senha =this.senha.value
      dio.componentInstance.senha2 =this.senha2.value
      dio.componentInstance.telefone =this.telefone.value

    }

    Enviar(senhaum: string, senhadois: string): void {
      if (senhaum === senhadois) {
        alert ( 'Formulário enviado')
     } else {
       alert('Senhas Incorretas')
      }
    }

}
