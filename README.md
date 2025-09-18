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

- **Next.js:** Framework React para renderização no servidor e construção de APIs.
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

- **Node.js** (versão 18 ou superior)
- **Docker** e **Docker Compose** (para o banco de dados)
- **pnpm** (recomendado) ou npm

### Passo a passo:

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```

2.  **Acesse o diretório do projeto:**

    ```bash
    cd full-stack-todo
    ```

3.  **Instale as dependências:** (Recomendado usar `pnpm`)

    ```bash
    pnpm install
    ```

4.  **Configure as variáveis de ambiente:**
    Copie o arquivo `env.example` para um novo arquivo chamado `.env`:

    ```bash
    cp env.example .env
    ```

    O arquivo `.env` já vem configurado com a URL do banco PostgreSQL que será executado via Docker.

5.  **Inicie o banco de dados com Docker:**
    O projeto inclui um `docker-compose.yml` configurado com PostgreSQL. Execute:

    ```bash
    docker-compose up -d
    ```

    Isso iniciará um container PostgreSQL na porta 5432.

6.  **Execute as migrações do banco de dados:**
    Isso criará as tabelas necessárias no banco de dados:

    ```bash
    pnpm prisma migrate dev
    ```

7.  **Execute o servidor de desenvolvimento:**

    ```bash
    pnpm run dev
    ```

8.  Abra o navegador no endereço `http://localhost:3000`.

### Comandos úteis:

- **Parar o banco de dados:** `docker-compose down`
- **Visualizar dados no Prisma Studio:** `pnpm prisma studio`
- **Reset do banco de dados:** `pnpm prisma migrate reset`

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
