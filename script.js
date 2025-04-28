// Captura o envio do formulário e realiza uma análise simples dos dados do fã da FURIA.
document.getElementById('fan-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o recarregamento da página
  
    // Coleta dos dados dos inputs
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const idade = document.getElementById('idade').value;
    const redes = document.getElementById('redes').value.trim();
    const player = document.getElementById('player').value;
    const comoConhecer = document.getElementById('comoConhecer').value.trim();
  
    // Monta a mensagem de perfil
    let mensagem = `<p><strong>Nome:</strong> ${nome}</p>`;
    mensagem += `<p><strong>Email:</strong> ${email}</p>`;
    mensagem += `<p><strong>Idade:</strong> ${idade} anos</p>`;
    mensagem += `<p><strong>Redes Sociais:</strong> ${redes ? redes : 'Não informado'}</p>`;
    mensagem += `<p><strong>Jogador Favorito:</strong> ${player}</p>`;
    mensagem += `<p><strong>Como conheceu a FURIA:</strong> ${comoConhecer ? comoConhecer : 'Sem resposta'}</p>`;
  
    // Feedback personalizado com base na idade
    if(parseInt(idade) < 18) {
      mensagem += `<p><em>Você é um jovem fã em ascensão! Continue aproveitando e apoiando de forma consciente.</em></p>`;
    } else {
      mensagem += `<p><em>Que bom ver um fã tão engajado e experiente!</em></p>`;
    }
  
    // Feedback com base na escolha do jogador favorito
    if(player === "outros") {
      mensagem += `<p><em>Interessante! Esteja à vontade para nos contar mais sobre suas inspirações.</em></p>`;
    } else {
      mensagem += `<p><em>A escolha de ${player} mostra sua forte identidade como fã da equipe!</em></p>`;
    }
  
    // Exibe os resultados na página
    document.getElementById('profile').innerHTML = mensagem;
    document.getElementById('result').style.display = 'block';
  
    // Aqui também podemos enviar os dados para um servidor ou integrar com APIs de redes sociais.
    console.log("Dados coletados:", { nome, email, idade, redes, player, comoConhecer });
  });
  