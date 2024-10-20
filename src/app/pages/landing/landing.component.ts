import { Component } from '@angular/core';
import { ParagraphComponent } from '../../shared/components/paragraph/paragraph.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ParagraphComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
