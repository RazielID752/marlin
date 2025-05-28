# Marlin

Este projeto foi gerado usando o [Angular CLI](https://github.com/angular/angular-cli) versão 19.2.13.

## Servidor de desenvolvimento

Para iniciar um servidor de desenvolvimento local, execute:

```bash
ng serve
```

Assim que o servidor estiver em execução, abra seu navegador e navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente sempre que você modificar qualquer um dos arquivos de origem.

## Estrutura de código

O Angular CLI inclui ferramentas poderosas de estrutura de código. Para gerar um novo componente, execute:

```bash
ng generate component component-name
```

Para obter uma lista completa dos esquemas disponíveis (como `components`, `directives` ou `pipes`), execute:

```bash
ng generate --help
```

## Construindo

Para construir o projeto, execute:

```bash
ng build
```

Isso compilará seu projeto e armazenará os artefatos de construção no diretório `dist/`. Por padrão, a construção de produção otimiza seu aplicativo para desempenho e velocidade.

## Executando testes unitários

Para executar testes unitários com o executor de testes [Karma](https://karma-runner.github.io), use o seguinte comando:

```bash
ng test
```

## Executando testes de ponta a ponta

Para testes de ponta a ponta (e2e), execute:

```bash
ng e2e
```

O Angular CLI não vem com uma estrutura de testes de ponta a ponta por padrão. Você pode escolher uma que atenda às suas necessidades.

## Recursos Adicionais

Para obter mais informações sobre como usar o Angular CLI, incluindo referências detalhadas de comandos, visite a página [Visão Geral e Referência de Comandos do Angular CLI](https://angular.dev/tools/cli).

Tecnologias Utilizadas
- Angular
- TypeScript
- RxJS
- HTML5 + SCSS
- Karma + Jasmine (para testes)
- MaterialIcons
- iconify
- NgxMaskDirective 

### Estrutura de Pastas

src/
├── app/
│   ├── components/
│   ├── services/
│   ├── models/
│   └── app.component.ts
├── assets/
├── environments/
└── index.html

### Funcionalidades
- Listagem de planos
- Filtro por nome
- Filtro por preço
- Ordenação por menor ou maior preço
- Consumo de API (simulada)
- Testes unitários com cobertura de funcionalidade
- Formulario com Validação, e simula envio ap back-end