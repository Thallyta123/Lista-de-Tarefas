const input = document.getElementById("tarefa");
const button = document.getElementById("adicionar");
const lista = document.getElementById("lista");
// Carregar tarefas salvas
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
renderTarefas();
button.addEventListener("click", () => {
const texto = input.value.trim();
if (texto === "") return;
tarefas.push({ texto, concluida: false });
input.value = "";
salvarEAtualizar();
});
function renderTarefas() {
lista.innerHTML = "";
tarefas.forEach((tarefa, index) => {
const li = document.createElement("li");
li.textContent = tarefa.texto;
if (tarefa.concluida) li.classList.add("concluida");
li.addEventListener("click", () => {
tarefa.concluida = !tarefa.concluida;
salvarEAtualizar();
});
const btnRemover = document.createElement("span");
btnRemover.textContent = "✕";
btnRemover.classList.add("remove");
btnRemover.addEventListener("click", (e) => {
e.stopPropagation();
tarefas.splice(index, 1);
salvarEAtualizar();
});
li.appendChild(btnRemover);
lista.appendChild(li);
});
}
function salvarEAtualizar() {
localStorage.setItem("tarefas", JSON.stringify(tarefas));
renderTarefas();
}
