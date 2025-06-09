# Mapa de Hierarquia de Componentes

## Árvore Principal

components
└── Layout  
    ├── Header  
    │   ├── Logo  
    │   ├── Navigation  
    │   └── UserMenu  
    └── Footer

## Componentes por Categoria

- **Layout**:  
  - `Layout`: layout.tsx  
  - `Header`: header.tsx  
    - `Logo`: logo.tsx  
    - `Navigation`: navigation.tsx  
    - `UserMenu`: userMenu.tsx  
  - `Footer`: footer.tsx

- **UI**:  
  - Button  
  - Modal  
  - Form  
  - Card  
  - Input  

- **Sections**:  
  - Hero  
  - About  
  - Services  
  - Contact  

- **Common**:  
  - Loading  
  - ErrorBoundary  
  - SEO

## Observações

- Todos os componentes seguem o padrão **PascalCase** para nomes de arquivos e pastas.
- Os componentes de `Header` estão encapsulados na pasta `Header/` com barrel file (`index.ts`) para facilitar a importação.
- Tipagem forte com TypeScript.
- Comentários em todos os arquivos indicam claramente **pai**, **filhos**, **props** e **responsabilidade**.

