import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsModule } from '../../../gifs/gifs.module';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  standalone: true,
  imports: [CommonModule, GifsModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {}

  get tags() {
    return this.gifsService.tagsHistory;
  }

}
