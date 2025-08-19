import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  // 🔑 SUA CONFIG FIREBASE
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login
const form = document.getElementById("loginForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const senha = document.getElementById("password").value;

  try {
    await signInWithEmailAndPassword(auth, email, senha);
    window.location.href = "painel.html"; // redireciona para painel
  } catch (error) {
    document.getElementById("erro").innerText = "Login inválido!";
    console.error(error);
  }
});

// Verificar se já está logado
onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "painel.html";
  }
});
