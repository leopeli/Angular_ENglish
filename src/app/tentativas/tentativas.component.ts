import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public emptyHeart: string = '/assets/coracao_vazio.png';
  public fullHeart: string = '/assets/coracao_cheio.png';
}
