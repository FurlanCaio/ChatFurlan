<script setup>
import { onMounted, ref, reactive } from "vue";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

const mensagens = reactive([]);
let userId = ref("");
const typingUser = ref("");

onMounted(() => {
  socket.on("connect", () => {
    console.log("socket connected");
  });

  socket.on("serverMessage", (msg) => {
    console.log("received message:", msg);
    mensagens.push(msg);
  });

  socket.on("userId", (id) => {
    userId.value = id;
    console.log("User ID:", userId.value);
  });

  socket.on("typing", (nickname) => {
    typingUser.value = nickname;
    resetTypingTimeout();
  });

  socket.on("userJoined", (id) => {
  mensagens.push({ system: true, text: `🔵 ${id} entrou no chat` });
  });
  
  socket.on("userLeft", (id) => {
  mensagens.push({ system: true, text: `🔴 ${id} saiu do chat` });
  });
  
});

const mensagem = ref("");
let estaDigitando = ref(false);

function enviarmensagem() {
  socket.emit("clientMessage", mensagem.value);
  mensagem.value = "";
}

function resetTypingTimeout() {
  setTimeout(() => {
    typingUser.value = "";
    estaDigitando.value = false;
  }, 2000);
}
function handleKeyUp() {
  estaDigitando.value = true;
  socket.emit("typing", userId.value);
  resetTypingTimeout();
}

</script>


<template>
<div id="container">
  <div id="chat">
    <div id="mensagens">
      <p v-if="typingUser" class="typing">{{ typingUser }} está digitando...</p>


      <div v-for="(msg, index) in mensagens" :key="index"
        :class="msg.system ? 'sysmsg' : (msg.userId === userId ? 'me' : 'other')"
        class="message">
        <span v-if="!msg.system" class="user">{{ msg.userId }}</span>
        <span class="text">{{ msg.text }}</span>
      </div>
    </div>

    <div id="inputArea">
      <input type="text" placeholder="Digite sua mensagem" v-model="mensagem" @keyup="handleKeyUp" />
      <button @click="enviarmensagem">Enviar</button>
    </div>
  </div>
</div>


</template>

<style>
#container {
  display: flex;
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 40px;
  font-family: Arial, sans-serif;
}

#chat {
  flex: 3;
  background: #f5f5f5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 500px;
  overflow: hidden;
  border: 1px solid #d1d1d1;
}

#mensagens {
  flex: 1;
  padding: 15px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.message {
  max-width: 70%;
  padding: 8px 12px;
  border-radius: 10px;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
}

.me {
  background: #d1ffd4;
  margin-left: auto;
  text-align: right;
}

.other {
  background: #d6e6ff;
  margin-right: auto;
}

.sysmsg {
  background: #ececec;
  color: #707070;
  font-style: italic;
  text-align: center;
  align-self: center;
  max-width: 100%;
}

.user {
  font-size: 11px;
  color: #555;
  font-weight: bold;
  margin-bottom: 3px;
}

.text {
  font-size: 14px;
}

#inputArea {
  display: flex;
  border-top: 1px solid #ccc;
}

#inputArea input {
  flex: 1;
  border: none;
  padding: 14px;
  font-size: 15px;
  outline: none;
}

#inputArea button {
  background: #1677ff;
  color: white;
  border: none;
  padding: 14px 22px;
  cursor: pointer;
  font-size: 15px;
  transition: 0.2s;
}

#inputArea button:hover {
  background: #0d56c7;
}

.typing {
  font-size: 13px;
  color: #777;
  margin-bottom: 5px;
}

#sistema {
  flex: 1;
  height: 500px;
  background: #fdfdfd;
  border-radius: 10px;
  padding: 15px;
  border: 1px solid #d1d1d1;
  font-size: 14px;
  overflow-y: auto;
}

#sistema h3 {
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 16px;
  text-align: center;
}

</style>
