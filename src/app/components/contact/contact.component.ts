import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective ,CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
 // Construtor
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, this.telefoneValidator]],
      mensagem: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Validador customizado para telefone
  telefoneValidator(control: any) {
    const telefone = control.value;
    if (!telefone) return null;
    
    const telefoneRegex = /^(\(?\d{2}\)?\s?)?(\d{4,5})-?(\d{4})$/;
    return telefoneRegex.test(telefone) ? null : { telefoneInvalido: true };
  }
// Metodo para enviar o formulário
  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulário válido:', this.contactForm.value);
      // Aqui teoricamente eu enviaria os dados para o backend: rsrs
      alert('Mensagem enviada com sucesso!');
      this.contactForm.reset();
    } else {
      console.log('Formulário inválido');
      this.markFormGroupTouched();
    }
  }
 // Metodo para marcar os campos como tocados
  private markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  // Métodos auxiliares para o template
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }
// Aqui onde eu seto o erro de cada campo do formulário
  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors && field.touched) {
      if (field.errors['required']) return `${fieldName} é obrigatório`;
      if (field.errors['email']) return 'Email inválido';
      if (field.errors['minlength']) return `${fieldName} Muito curto`;
      if (field.errors['telefoneInvalido']) return 'Telefone inválido';
    }
    return '';
  }
}