const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;

  let data = {
    nome,
    email,
  }

  let convertData = JSON.stringify(data);

  localStorage.setItem('cadastro', convertData)

  loading()
})

function loading() {
  const content = document.getElementById('content');
  let carregando = `<img src="./img/pacman.gif"> `
  let pronto = `<p>Bom apetite...</p>`

  content.innerHTML = carregando

  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)
}
