import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from "./components/menu/menu.component";
import { HeroComponent } from "./components/hero/hero.component";
import { PlanComponent } from "./components/plan/plan.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, MenuComponent, HeroComponent, PlanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'teste-marlin';
}
