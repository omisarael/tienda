import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  // extraemos las rutas hijjo de la seccion admin de app-routingModule principal

  // quitar los dos niveles por abajo del routing principal
  // ./@admin/pages/dashboard/dashboard.module
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: ``,
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: `users`,
        loadChildren: () =>
          import('./users/users.module').then((m) => m.UsersModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
