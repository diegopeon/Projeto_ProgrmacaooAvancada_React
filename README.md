# Aurum Motors — Projeto React

Aplicação web responsiva desenvolvida em React para a atividade de componentes visuais.

## Tema

Site premium fictício de curadoria e exposição de carros de luxo.

## Componentes obrigatórios implementados

1. Accordion — FAQ premium
2. Pagination — paginação do catálogo de veículos
3. Progress Bar — jornada de aquisição
4. Tabs — detalhes do veículo destaque
5. Dropdown Menu — filtro de categoria
6. Toast Notification — feedback temporário de ações

## Extra 0,5 ponto

Implementado com Context API em `src/context/ToastContext.jsx`, permitindo acionar notificações globais a partir de componentes não diretamente relacionados.

## Como executar

```bash
npm install
npm run dev
```

Depois acesse a URL exibida no terminal, normalmente:

```bash
http://localhost:5173
```

## Como gerar versão final

```bash
npm run build
npm run preview
```

## Organização

O projeto foi separado por responsabilidades:

- `src/components`: componentes visuais reutilizáveis
- `src/context`: estado global do Toast
- `src/data`: dados fictícios de carros e FAQ
- `src/styles`: design tokens e estilos globais
