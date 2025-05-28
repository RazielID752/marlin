import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// Serviço de planos
@Injectable({
  providedIn: 'root'
})
// Classe do serviço
export class PlanService {

  private apiUrl = 'assets/data/planos.json';  // Caminho do JSON

  constructor(private http: HttpClient) { }
  // Metodo para buscar os planos
  getPlans(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
