import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../../services/aluno.service';
import { Aluno } from '../../models/aluno';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.scss'],
})
export class AlunoListComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.getAlunos();
  }

  getAlunos(): void {
    this.alunoService.getAlunos().subscribe((data) => (this.alunos = data));
  }

  deleteAluno(id: number): void {
    this.alunoService.deleteAluno(id).subscribe(() => this.getAlunos());
  }
}
