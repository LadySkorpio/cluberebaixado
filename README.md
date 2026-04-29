# Extensão para Chrome 'Seu time já foi rebaixado?'

"Seu time já foi rebaixado?" é uma extensão para o navegador Chrome criada para torcedores de futebol brasileiro. Com ela, em qualquer site da internet, ao passar o mouse sobre o nome de um clube brasileiro da Série A ou Série B do Campeonato Brasileiro, aparece automaticamente um painel com o escudo do clube e a informação sobre seu histórico de rebaixamentos — quantas vezes caiu para a segunda divisão e em quais anos isso aconteceu. Uma forma rápida, divertida e discreta de cutucar (ou se defender de) aquele amigo que nunca perde uma chance de lembrar do rebaixamento do seu time.

A extensão foi criada em parceria com o Claude, assistente de inteligência artificial da Anthropic. A partir de uma ideia inicial descrita em linguagem simples — sem nenhuma linha de código escrita previamente — o Claude estruturou toda a lógica da extensão, escreveu os arquivos necessários, pesquisou e organizou o histórico de rebaixamentos dos clubes, buscou os escudos em fontes confiáveis na internet e resolveu os problemas técnicos que foram surgindo ao longo do caminho, como imagens que não carregavam e erros de instalação. O papel humano foi o de ter a ideia, testar, dar feedbacks e orientar os ajustes — o restante foi desenvolvido inteiramente pelo Claude.

# Como funciona por dentro
A extensão foi desenvolvida com as tecnologias padrão de extensões do Chrome: HTML, CSS e JavaScript puro, sem nenhuma biblioteca ou framework externo.

É composta por três partes principais:

1. Base de dados dos clubes (clubes.js)
Um arquivo com informações de todos os clubes brasileiros da Série A e Série B, contendo o nome do clube, o caminho para o escudo e a lista de anos em que foi rebaixado do Campeonato Brasileiro. Esses dados foram pesquisados e compilados manualmente com base no histórico do Brasileirão desde 1971.

2. Análise do texto da página (content.js)
Quando você abre qualquer site, a extensão varre automaticamente todo o texto visível da página em busca de nomes de clubes. Para que funcione mesmo com variações de grafia — como "Atlético Mineiro", "Atlético-MG" ou "Atletico-MG" — o texto é normalizado (acentos removidos, tudo em minúsculas) antes da comparação. Quando um nome é encontrado, ele recebe um sublinhado pontilhado verde discreto. A extensão também monitora o carregamento de conteúdo dinâmico, funcionando em sites que atualizam a página sem recarregar (como portais de notícias e redes sociais).

3. O tooltip (style.css + content.js)
Ao passar o mouse sobre um nome destacado, aparece um painel com o escudo do clube e a informação de rebaixamentos. Os escudos ficam salvos localmente dentro da própria extensão, evitando qualquer dependência de sites externos — o que garante que as imagens sempre carreguem, independente do site que você está visitando.

# Sobre os dados
Os dados de rebaixamentos são estáticos e baseados no histórico oficial do Campeonato Brasileiro de futebol. Os escudos foram obtidos de fontes públicas e armazenados localmente na extensão.

# Como instalar a extensão
Como a extensão ainda não está publicada na Chrome Web Store, a instalação é feita de forma manual em poucos passos:

Acesse o repositório no GitHub e clique em Code → Download ZIP
1. Descompacte o arquivo ZIP em uma pasta no seu computador
2. No Chrome, acesse chrome://extensions
3. Ative o Modo do desenvolvedor (chave no canto superior direito)
4. Clique em Carregar sem compactação e selecione a pasta descompactada
Pronto! O ícone da extensão aparecerá na barra do Chrome

Observação: por ser instalada manualmente, o Chrome pode exibir um aviso ocasional perguntando se deseja manter a extensão. Basta confirmar que sim.
