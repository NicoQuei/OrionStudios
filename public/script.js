// Import do Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Config do Firebase (substitua pelos seus dados do console)
const firebaseConfig = {
  apiKey: "AIzaSyDCcYAEWclMkGbeL5W0Y-bOypHm3hrHDSk",
  authDomain: "orionstudios-5376d.firebaseapp.com",
  projectId: "orionstudios-5376d",
  storageBucket: "orionstudios-5376d.firebasestorage.app",
  messagingSenderId: "529744919807",
  appId: "1:529744919807:web:a71e3958d0b0a5cc4760ca",
  measurementId: "G-WCZXY2HMEM"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Seleciona container dos cards
const catalogo = document.getElementById("catalogoProdutos");

// Função para listar produtos do Firestore e criar cards
async function gerarCards() {
  catalogo.innerHTML = ""; // limpa antes de adicionar

  const querySnapshot = await getDocs(collection(db, "produtos"));

  querySnapshot.forEach((doc) => {
    const produto = doc.data();

    // Cria o card
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img class="card__imagem" src="${produto.imagem}" alt="Imagem de ${produto.nome}">
        <h4>${produto.nome}</h4>
        <p>${produto.descricao}</p>
    `;

    catalogo.appendChild(card);
  });
}

// Chama a função ao carregar a página
gerarCards();