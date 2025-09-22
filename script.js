// Seleciona o formulário pelo ID e adiciona um ouvinte de evento para o "submit" (envio do formulário)
document.getElementById('reservaForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Coletar dados do formulário
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const data = document.getElementById('data').value;
  const hora = document.getElementById('hora').value;
  const pessoas = document.getElementById('pessoas').value;

  // Validação simples
  if (!nome || !email || !data || !hora || !pessoas) {
    alert('Preencha todos os campos!');
    return;
  }

  // Criar item de lista
  const li = document.createElement('li');
  li.textContent = `${nome} - ${data} às ${hora} para ${pessoas} pessoa(s). Contato: ${email}`;
  
  // Adicionar na lista
  document.getElementById('reservas').appendChild(li);

  // Limpar formulário
  this.reset();
});