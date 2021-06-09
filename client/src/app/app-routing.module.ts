import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumExampleComponent } from './album-example/album-example.component';
import { CarouselExampleComponent } from './carousel-example/carousel-example.component';

const routes: Routes = [
  {path: "album-example", component: AlbumExampleComponent},
  {path: "carousel-example", component: CarouselExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
