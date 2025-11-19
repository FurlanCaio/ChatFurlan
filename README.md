💬 Realtime Chat — Vue + Node + Socket.io

Aplicação de chat em tempo real desenvolvida com Vue 3 + Vite no frontend e Node.js + Socket.io no backend.

Recursos implementados:

Mensagens em tempo real
Identificador único de usuário
Indicador de "usuário digitando"
Notificações de entrada e saída de usuários
Estilização em formato de chat moderno

📂 Estrutura do projeto
/backend
  app.js
/frontend
  /src
    App.vue

▶️ Como rodar o projeto

1️⃣ Clonar o repositório
https://github.com/FurlanCaio/ChatFurlan.git <br>
cd ChatFurlan

2️⃣ Backend (Node + Socket.io) <br>
cd backend <br>
npm install <br>
node app.js <br>

Servidor inicia por padrão em:

http://localhost:3000

3️⃣ Frontend (Vue + Vite)
cd frontend
npm install
npm run dev


Aplicação irá rodar (geralmente) em:

http://localhost:5173

🚀 Tecnologias utilizadas
Tecnologia	Uso
Vue 3	Frontend
Vite	Build / Dev server
Node.js	Backend
Socket.io	Comunicação em tempo real
JavaScript Linguagem principal

📌 Como funciona

Cada usuário recebe um userId único ao entrar no chat.
As mensagens são transmitidas em tempo real para todos os clientes conectados.
Eventos de digitação são enviados e exibidos apenas para outros usuários.
Entrada e saída de usuários são notificadas automaticamente.
