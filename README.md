💬 Realtime Chat — Vue + Node + Socket.io

Aplicação de chat em tempo real desenvolvida com Vue 3 + Vite no frontend e Node.js + Socket.io no backend.

Recursos implementados:

Mensagens em tempo real
Identificador único de usuário
Indicador de "usuário digitando"
Notificações de entrada e saída de usuários
Estilização em formato de chat moderno

📂 Estrutura do projeto <br>
/backend <br>
  app.js <br>
/frontend <br>
  /src <br>
    App.vue <br>

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

3️⃣ Frontend (Vue + Vite) <br>
cd frontend <br>
npm install <br>
npm run dev <br>


Aplicação irá rodar (geralmente) em:

http://localhost:5173

🚀 Tecnologias utilizadas <br>
Tecnologia	Uso <br>
Vue 3	Frontend <br>
Vite Build / Dev server <br>
Node.js	Backend <br>
Socket.io	Comunicação em tempo real <br>
JavaScript Linguagem principal <br>

📌 Como funciona

Cada usuário recebe um userId único ao entrar no chat. <br>
As mensagens são transmitidas em tempo real para todos os clientes conectados. <br>
Eventos de digitação são enviados e exibidos apenas para outros usuários. <br>
Entrada e saída de usuários são notificadas automaticamente. <br>
