import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoListComponent } from './components/aluno-list/aluno-list.component';
import { AlunoFormComponent } from './components/aluno-form/aluno-form.component';

const routes: Routes = [
  { path: 'alunos', component: AlunoListComponent },
  { path: 'cadastrar', component: AlunoFormComponent },
  { path: '**', redirectTo: 'alunos' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
