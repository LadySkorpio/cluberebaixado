(() => {
  const tooltip = document.createElement("div");
  tooltip.id = "rebaixado-tooltip";
  tooltip.style.display = "none";
  document.body.appendChild(tooltip);

  // Normaliza texto removendo acentos para matching
  function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  // Cria mapa normalizado dos clubes
  const clubesNormalizados = {};
  for (const nome in CLUBES_BRASILEIROS) {
    clubesNormalizados[normalize(nome)] = { chave: nome, ...CLUBES_BRASILEIROS[nome] };
  }

  // Ordena por tamanho do nome (maior primeiro) para match mais específico
  const nomesOrdenados = Object.keys(clubesNormalizados).sort((a, b) => b.length - a.length);

  // Regex para encontrar nomes de clubes
  const regexPattern = nomesOrdenados.map(n => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const regex = new RegExp(`\\b(${regexPattern})\\b`, "gi");

  function wrapMatches(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent;
      const normalizedText = normalize(text);

      // Verifica se há algum match
      regex.lastIndex = 0;
      if (!regex.test(normalizedText)) return;

      // Re-run para capturar matches
      regex.lastIndex = 0;
      const fragment = document.createDocumentFragment();
      let lastIndex = 0;
      let match;

      // Precisamos fazer match na versão normalizada mas preservar o texto original
      const normalizedLower = normalizedText;
      const regexNorm = new RegExp(`\\b(${regexPattern})\\b`, "gi");

      while ((match = regexNorm.exec(normalizedLower)) !== null) {
        const matchStart = match.index;
        const matchEnd = match.index + match[0].length;

        // Texto antes do match
        if (matchStart > lastIndex) {
          fragment.appendChild(document.createTextNode(text.substring(lastIndex, matchStart)));
        }

        // Cria span para o match
        const span = document.createElement("span");
        span.className = "rebaixado-highlight";
        span.textContent = text.substring(matchStart, matchEnd);
        span.dataset.clube = normalize(match[0]);
        fragment.appendChild(span);

        lastIndex = matchEnd;
      }

      if (lastIndex === 0) return; // Nenhum match real

      // Texto restante
      if (lastIndex < text.length) {
        fragment.appendChild(document.createTextNode(text.substring(lastIndex)));
      }

      node.parentNode.replaceChild(fragment, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Ignora scripts, styles e o próprio tooltip
      const tag = node.tagName.toLowerCase();
      if (tag === "script" || tag === "style" || tag === "noscript" || tag === "iframe" || node.id === "rebaixado-tooltip") return;
      if (node.classList && node.classList.contains("rebaixado-highlight")) return;

      // Processa filhos (copia array pois vamos modificar o DOM)
      const children = Array.from(node.childNodes);
      children.forEach(wrapMatches);
    }
  }

  // Processa a página
  wrapMatches(document.body);

  // Observer para conteúdo dinâmico
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE && node.id !== "rebaixado-tooltip") {
          wrapMatches(node);
        }
      });
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });

  // Eventos de hover
  document.addEventListener("mouseover", (e) => {
    const target = e.target.closest(".rebaixado-highlight");
    if (!target) return;

    const clubeKey = target.dataset.clube;
    const clube = clubesNormalizados[clubeKey];
    if (!clube) return;

    const { nomeCompleto, escudo, rebaixamentos } = clube;

    let mensagem;
    if (rebaixamentos.length === 0) {
      mensagem = `<strong>Este clube nunca foi rebaixado.</strong> 🏆`;
    } else {
      const anos = rebaixamentos.join(", ");
      mensagem = `<strong>Este clube já foi rebaixado ${rebaixamentos.length} ${rebaixamentos.length === 1 ? "vez" : "vezes"}.</strong><br>Anos: ${anos}`;
    }

    tooltip.innerHTML = `
      <div class="rebaixado-content">
        <img src="${chrome.runtime.getURL(escudo)}" alt="${nomeCompleto}" class="rebaixado-escudo" onerror="this.style.display='none'">
        <div class="rebaixado-info">
          <div class="rebaixado-nome">${nomeCompleto}</div>
          <div class="rebaixado-msg">${mensagem}</div>
        </div>
      </div>
    `;
    tooltip.style.display = "block";

    // Posiciona
    const rect = target.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();
    let left = rect.left + window.scrollX;
    let top = rect.bottom + window.scrollY + 8;

    // Não sair da tela pela direita
    if (left + tooltipRect.width > window.innerWidth + window.scrollX) {
      left = window.innerWidth + window.scrollX - tooltipRect.width - 10;
    }

    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
  });

  document.addEventListener("mouseout", (e) => {
    const target = e.target.closest(".rebaixado-highlight");
    if (target && !target.contains(e.relatedTarget)) {
      tooltip.style.display = "none";
    }
  });
})();
