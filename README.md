<img width="912" height="671" alt="image" src="https://github.com/user-attachments/assets/7918178d-05e0-47b1-aaa6-11402e5d1bb1" />

# Full-Stack Todo App

Este é um projeto de uma aplicação de lista de tarefas (TODO list) full-stack, onde o usuário pode criar, gerenciar, filtrar e excluir suas tarefas diárias.

## Funcionalidades

- **Criação de Tarefas:** O usuário pode criar uma nova tarefa através de um modal.
- **Edição de Tarefas:** É possível editar o título de uma tarefa existente.
- **Exclusão de Tarefas:** Exclua tarefas individualmente.
- **Marcar como Concluída:** Alterne o status de uma tarefa entre pendente e concluída.
- **Filtro de Tarefas:** Filtre a visualização entre todas as tarefas, pendentes ou concluídas.
- **Limpar Tarefas Concluídas:** Remova todas as tarefas que já foram concluídas com um único clique.
- **Atualizações Otimistas:** A interface é atualizada instantaneamente para uma experiência de usuário mais fluida, com rollback automático em caso de erro.
- **Barra de Progresso:** Visualize o progresso geral com base nas tarefas concluídas.
- **Responsividade:** Interface adaptada para funcionar em dispositivos móveis e desktops.

## Tecnologias Utilizadas

### Full-Stack:

- **Next.js:** Framework React Full-Stack.
- **TypeScript:** Superset do JavaScript para tipagem estática.
- **Prisma:** ORM para Node.js e TypeScript, utilizado para interagir com o banco de dados.
- **PostgreSQL:** Banco de dados relacional executado via Docker.
- **Docker:** Para containerização do banco de dados e facilitar o ambiente de desenvolvimento.
- **Tailwind CSS:** Para estilização utilitária e criação do design.
- **TanStack Query (React Query):** Para gerenciamento de estado do servidor, cache, atualizações otimistas e requisições assíncronas.
- **shadcn/ui:** Coleção de componentes de UI reutilizáveis.
- **Lucide React:** Biblioteca de ícones.
- **Sonner:** Para exibir notificações (toasts).

## Como Executar o Projeto

### Pré-requisitos

- **Docker** e **Docker Compose**
- **Git** para clonagem do repositório

### Opção 1: Executar Tudo com Docker (Recomendado)

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/IsaaczZj/full-stack-todo.git
    ```

2.  **Acesse o diretório do projeto:**

    ```bash
    cd full-stack-todo
    ```

3.  **Configure as variáveis de ambiente:**
    Copie o arquivo `env.example` para `.env`:

    ```bash
    cp env.example .env
    ```

4.  **Execute a aplicação completa:**

    ```bash
    docker-compose up --build
    ```

    Isso irá:

    - Construir a imagem da aplicação Next.js
    - Iniciar o banco PostgreSQL
    - Executar as migrações automaticamente
    - Disponibilizar a aplicação em `http://localhost:3000`

5.  **Para executar em background (opcional):**

    ```bash
    docker-compose up --build -d
    ```

### Opção 2: Desenvolvimento Local (Node.js + Docker para DB)

1.  **Siga os passos 1-3 da Opção 1**

2.  **Instale as dependências:** (Recomenda-se `pnpm`)

    ```bash
    pnpm install
    ```

3.  **Inicie apenas o banco de dados:**

    ```bash
    docker-compose up postgres -d
    ```

4.  **Execute as migrações:**

    ```bash
    pnpm prisma migrate dev
    ```

5.  **Execute o servidor de desenvolvimento:**

    ```bash
    pnpm run dev
    ```

6.  **Acesse:** `http://localhost:3000`

### Comandos Úteis:

- **Parar todos os containers:** `docker-compose down`
- **Ver logs da aplicação:** `docker-compose logs todo_app`
- **Ver logs do banco:** `docker-compose logs postgres`
- **Rebuild completo:** `docker-compose down && docker-compose up --build`
- **Visualizar dados (desenvolvimento local):** `pnpm prisma studio`
- **Reset do banco:** `docker-compose down -v && docker-compose up --build`

## Estrutura do Projeto

```
src/
├── actions/        # Server Actions do Next.js para a lógica de backend.
├── api/            # Funções do lado do cliente que invocam as Server Actions.
├── app/            # Estrutura de rotas e páginas principais do Next.js (App Router).
├── assets/         # Ícones e imagens.
├── components/     # Componentes React reutilizáveis (UI e de domínio).
│   ├── todo/       # Componentes específicos da funcionalidade de TODO.
│   └── ui/         # Componentes de UI genéricos (shadcn/ui).
├── lib/            # Configuração de bibliotecas (Prisma, utils).
├── types/          # Definições de tipos globais (TypeScript).
prisma/             # Schema e migrações do banco de dados.
public/             # Arquivos estáticos.
next.config.ts      # Arquivo de configuração do Next.js.
tsconfig.json       # Arquivo de configuração do TypeScript.
package.json        # Define as informações do projeto, scripts e dependências.
pnpm-lock.yaml      # Arquivo de lock de dependências do pnpm.
```
