import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/plan.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {

  plans: any[] = [];
  filtro: string = '';
  filtroPreco: string = ''; // 'mais-barato' | 'mais-caro' | ''

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    this.carregarPlans();
  }

  carregarPlans() {
    this.planService.getPlans().subscribe({
      next: (dados) => {
        this.plans = dados;
      },
      error: (error) => {
        console.error("error ao carregar os planos!", error)
      }
    });
  }

  get plansFiltrados() {
  const filtroTexto = this.filtro.toLowerCase();
  const planosFiltradosPorNome = this.plans.filter(plan =>
    plan.nome.toLowerCase().includes(filtroTexto)
  );

  // Converte o valor string para número com ponto decimal
  const planosComValorNumerico = planosFiltradosPorNome.map(plan => ({
    ...plan,
    valorNum: Number(plan.valor.replace(',', '.'))
  }));

  if (this.filtroPreco === 'mais-barato') {
    // Ordena do menor para o maior valor
    planosComValorNumerico.sort((a, b) => a.valorNum - b.valorNum);
    // Pega os 3 primeiros (ou menos se não tiver) 
    return planosComValorNumerico.slice(0, 3);
  }

  if (this.filtroPreco === 'mais-caro') {
    // Ordena do maior para o menor valor
    planosComValorNumerico.sort((a, b) => b.valorNum - a.valorNum);
    // Pega os 3 primeiros (ou menos)
    return planosComValorNumerico.slice(0, 3);
  }

  // Se não tiver filtro de preço, só retorna o resultado filtrado por nome
  return planosFiltradosPorNome;
}
}
