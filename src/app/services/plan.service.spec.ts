import { TestBed } from '@angular/core/testing';
import { PlanService } from './plan.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

describe('PlanService', () => { 
  // Variaveis de teste 
  let service: PlanService;
  let httpMock: HttpTestingController;
// Configurações iniciais
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(PlanService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  // Limpeza de variaveis
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
// Testes de integração
  it('should fetch plans from correct URL', () => {
    const mockPlans = [
      { nome: 'Plano 1', valor: '50,00', descricao: 'Teste' }
    ];

    service.getPlans().subscribe(plans => {
      expect(plans).toEqual(mockPlans);
    });

    const req = httpMock.expectOne('assets/data/planos.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockPlans);
  });
});