import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-footer',
  imports: [MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FooterComponent {

}
