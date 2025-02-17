import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss'],
})
export class AlunoFormComponent {
  alunoForm: FormGroup;

  constructor(private fb: FormBuilder, private alunoService: AlunoService) {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      dataNascimento: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.alunoForm.valid) {
      this.alunoService.addAluno(this.alunoForm.value).subscribe(() => {
        this.alunoForm.reset();
      });
    }
  }
}
