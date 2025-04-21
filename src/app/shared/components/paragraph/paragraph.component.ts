import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [],
  templateUrl: './paragraph.component.html',
  styleUrl: './paragraph.component.scss'
})
export class ParagraphComponent {
  @Input({ required: true }) text: string = "";
  @Input() align: string = "left";
  @Input() width: string = "100%";
  @Input() fontSize: string = "1.6rem";
  @Input() color: string = "auto";
}