import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: ` `, redirectTo: `home`, pathMatch: `full` },
  { path: `**`, redirectTo: `home`, pathMatch: `full` },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // evitar que el navegador recargue la pagina
      useHash: true,
      // inicio descroll arriba de cada pagina
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
