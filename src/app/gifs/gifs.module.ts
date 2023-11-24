import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.componet';
import { CardlistComponent } from './components/cardlist/cardlist.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardlistComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
    HttpClientModule,
  ]
})
export class GifsModule { }
