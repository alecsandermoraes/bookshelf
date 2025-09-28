// pequenas utilidades
function escapeHtml(str = '') {
  return String(str).replace(/[&<>"'`]/g, (m) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '`': '&#96;'
  })[m]);
}

function formatDate(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  return d.toLocaleDateString('pt-BR');
}

document.getElementById('formBook').addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const autor = document.getElementById('autor').value.trim();
  const status = document.getElementById('status').value;
  const genero = document.getElementById('genero').value.trim();
  const preco = document.getElementById('preco').value;
  const link = document.getElementById('link').value.trim();
  const inicio = document.getElementById('inicio').value;
  const fim = document.getElementById('fim').value;

  const tabela = document.querySelector('#tabelaLivros tbody');
  const novaLinha = document.createElement('tr');

  const precoDisplay = preco ? Number(preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '-';
  const linkDisplay = link ? `<a href="${escapeHtml(link)}" target="_blank" rel="noopener noreferrer">Abrir</a>` : '-';

  novaLinha.innerHTML = `
    <td><span class="dot ${status}"></span></td>
    <td>${escapeHtml(nome) || '-'}</td>
    <td>${escapeHtml(autor) || '-'}</td>
    <td>${escapeHtml(genero) || '-'}</td>
    <td>${precoDisplay}</td>
    <td>${linkDisplay}</td>
    <td>${formatDate(inicio)}</td>
    <td>${formatDate(fim)}</td>
  `;

  tabela.appendChild(novaLinha);
  e.target.reset();
});
