import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { PlanService } from '../../services/plan.service'; 
import { of } from 'rxjs';

// Componente de teste 
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let planServiceMock: jasmine.SpyObj<PlanService>;
// 
  beforeEach(async () => {
    const spy = jasmine.createSpyObj('PlanService', ['getPlans']);

    await TestBed.configureTestingModule({ // Configuração do módulo
      imports: [AppComponent],
      providers: [
        { provide: PlanService, useValue: spy }
      ]
    }).compileComponents();

    planServiceMock = TestBed.inject(PlanService) as jasmine.SpyObj<PlanService>;
    planServiceMock.getPlans.and.returnValue(of([]));

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
// Aqui começa os testes
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'teste-marlin' title`, () => {
    expect(component.title).toEqual('teste-marlin');
  });

  it('should render component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toBeTruthy();
  });
});