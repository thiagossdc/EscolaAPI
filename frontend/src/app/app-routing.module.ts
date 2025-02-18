import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoListComponent } from './components/aluno-list/aluno-list.component';
import { AlunoFormComponent } from './components/aluno-form/aluno-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'alunos', pathMatch: 'full' }, 
  { path: 'alunos', component: AlunoListComponent },
  { path: 'alunos/novo', component: AlunoFormComponent },
  { path: 'alunos/editar/:id', component: AlunoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
