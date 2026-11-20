'use strict';
// Banco inicial: questões originais no estilo Cesgranrio (5 alternativas).
// d = disciplina, a = assunto, e = enunciado, o = alternativas, c = índice da correta,
// x = explicação do app, f = 1 mantém a ordem das alternativas (valores numéricos em ordem)
const QS = [
// ---------- Conhecimentos Bancários ----------
{id:'cb01',d:'cb',a:'CMN e órgãos normativos',e:'No Sistema Financeiro Nacional, o órgão normativo máximo, responsável por fixar as diretrizes das políticas monetária, creditícia e cambial, é o(a)',
 o:['Banco Central do Brasil','Comissão de Valores Mobiliários','Conselho Monetário Nacional','Comitê de Política Monetária (Copom)','Federação Brasileira de Bancos (Febraban)'],c:2,
 x:'O CMN é o órgão normativo máximo do SFN: ele define as diretrizes. O Banco Central executa e fiscaliza; a CVM regula o mercado de valores mobiliários; o Copom define a meta da Selic; a Febraban é uma associação privada.'},
{id:'cb02',d:'cb',a:'CMN e órgãos normativos',e:'Integram o Conselho Monetário Nacional (CMN):',
 o:['o Presidente da República, o Ministro da Fazenda e o Presidente do Banco Central','o Ministro da Fazenda, o Ministro do Planejamento e Orçamento e o Presidente do Banco Central','o Presidente do Banco Central, o Presidente da CVM e o Presidente do Banco do Brasil','o Ministro da Fazenda, o Presidente do BNDES e o Presidente da Caixa','os diretores do Banco Central reunidos no Copom'],c:1,
 x:'O CMN tem três membros: o Ministro da Fazenda (que o preside), o Ministro do Planejamento e Orçamento e o Presidente do Banco Central.'},
{id:'cb03',d:'cb',a:'Bacen e supervisores',e:'Uma companhia aberta que pretende emitir debêntures para captar recursos junto ao público deve observar as normas e a fiscalização da(o)',
 o:['Banco Central do Brasil','Superintendência de Seguros Privados (Susep)','Comissão de Valores Mobiliários (CVM)','Conselho Nacional de Seguros Privados (CNSP)','Superintendência Nacional de Previdência Complementar (Previc)'],c:2,
 x:'Debêntures são valores mobiliários. A emissão pública e as companhias abertas ficam sob regulação e fiscalização da CVM.'},
{id:'cb04',d:'cb',a:'Política monetária',e:'A meta da taxa Selic é definida pelo(a)',
 o:['Conselho Monetário Nacional','Comitê de Política Monetária (Copom) do Banco Central','Tesouro Nacional','Ministério da Fazenda','B3 – Brasil, Bolsa, Balcão'],c:1,
 x:'Quem fixa a meta da Selic é o Copom, formado pela diretoria colegiada do Banco Central. O CMN fixa a meta de inflação, não a Selic.'},
{id:'cb05',d:'cb',a:'Política monetária',e:'Um aumento da alíquota do recolhimento compulsório sobre os depósitos à vista tende a',
 o:['aumentar a liquidez da economia e estimular o crédito','reduzir os recursos que os bancos podem emprestar, com efeito contracionista','reduzir automaticamente a taxa Selic','ampliar a cobertura do Fundo Garantidor de Créditos','elevar o volume de moeda em circulação'],c:1,
 x:'Com compulsório maior, os bancos precisam deixar mais dinheiro parado no Banco Central. Sobra menos para emprestar, e o efeito sobre a economia é contracionista.'},
{id:'cb06',d:'cb',a:'Produtos e FGC',e:'O Certificado de Depósito Bancário (CDB) é um',
 o:['título de renda variável negociado exclusivamente em bolsa','título emitido por bancos para captar recursos, que conta com a garantia do FGC dentro dos limites previstos','empréstimo concedido pelo banco ao cliente com garantia de imóvel','título público emitido pelo Tesouro Nacional','fundo de investimento administrado pelo banco'],c:1,
 x:'O CDB é a forma de o banco pegar dinheiro emprestado do investidor (captação). É renda fixa e tem cobertura do FGC até o limite por titular.'},
{id:'cb07',d:'cb',a:'Produtos e FGC',e:'Os títulos de capitalização são regulados e fiscalizados pela(o)',
 o:['Comissão de Valores Mobiliários','Banco Central do Brasil','Superintendência de Seguros Privados (Susep)','Superintendência Nacional de Previdência Complementar (Previc)','Conselho Monetário Nacional'],c:2,
 x:'Capitalização, seguros e previdência aberta ficam sob a Susep (com normas do CNSP). Previdência fechada (fundos de pensão) fica sob a Previc.'},
{id:'cb08',d:'cb',a:'Produtos e FGC',e:'Entre os itens a seguir, o único que NÃO conta com a garantia do Fundo Garantidor de Créditos (FGC) é',
 o:['o depósito em caderneta de poupança','o depósito à vista','o CDB','a Letra de Crédito Imobiliário (LCI)','a cota de fundo de investimento'],c:4,
 x:'O FGC protege depósitos e alguns títulos emitidos por bancos (poupança, conta corrente, CDB, LCI, LCA etc.). Cotas de fundos de investimento não têm essa garantia: o risco é dos ativos do fundo.'},
{id:'cb09',d:'cb',a:'Garantias',e:'A garantia pessoal própria dos títulos de crédito, como a nota promissória, prestada por terceiro que se obriga pelo pagamento do título, é o(a)',
 o:['fiança','hipoteca','penhor','aval','alienação fiduciária'],c:3,
 x:'Aval é garantia típica de títulos de crédito, dada no próprio título. Fiança é um contrato à parte. Hipoteca, penhor e alienação fiduciária são garantias reais (sobre bens).'},
{id:'cb10',d:'cb',a:'Garantias',e:'No financiamento de veículo com alienação fiduciária, até a quitação da dívida,',
 o:['o devedor tem a propriedade plena e o banco tem apenas um crédito sem garantia','a propriedade (resolúvel) do bem fica com o credor, e o devedor fica com a posse direta e o uso','o bem fica depositado no banco até o pagamento final','o veículo é penhorado judicialmente desde a assinatura do contrato','o avalista passa a ser o proprietário do bem'],c:1,
 x:'Na alienação fiduciária, o credor fica com a propriedade do bem até a quitação; o devedor usa o bem (posse direta). Quitada a dívida, a propriedade passa ao devedor.'},
{id:'cb11',d:'cb',a:'Lavagem de dinheiro (PLD)',e:'Na lavagem de dinheiro, a etapa em que o criminoso realiza várias transações para dificultar o rastreamento da origem dos recursos é chamada de',
 o:['colocação','ocultação (estratificação)','integração','compensação','liquidação'],c:1,
 x:'As três etapas clássicas: colocação (o dinheiro entra no sistema), ocultação (transações para apagar o rastro) e integração (o dinheiro volta com aparência legal).'},
// ---------- Vendas e Negociação ----------
{id:'vn01',d:'vn',a:'Marketing de serviços',e:'O fato de que uma hora de atendimento não usada na agência não pode ser guardada para outro dia corresponde a qual característica dos serviços?',
 o:['Intangibilidade','Inseparabilidade','Variabilidade','Perecibilidade','Tangibilidade'],c:3,
 x:'Perecibilidade: serviço não se estoca. Intangibilidade: não se pode tocar antes de comprar. Inseparabilidade: é produzido e consumido ao mesmo tempo. Variabilidade: a qualidade depende de quem presta, quando e onde.'},
{id:'vn02',d:'vn',a:'Marketing de serviços',e:'Um banco investe em ambiente bem cuidado, materiais claros e credenciais visíveis dos funcionários para reduzir a incerteza do cliente antes de contratar um serviço. Essa estratégia responde principalmente à',
 o:['perecibilidade','intangibilidade','sazonalidade da demanda','elasticidade-preço','segmentação geográfica'],c:1,
 x:'Como o cliente não consegue "ver" o serviço antes, o banco mostra sinais concretos (ambiente, material, pessoas) para dar segurança. Essa é a resposta à intangibilidade.'},
{id:'vn03',d:'vn',a:'Negociação',e:'Em negociação, a sigla MAANA (BATNA, em inglês) refere-se',
 o:['ao valor máximo que o comprador aceita pagar','à melhor alternativa disponível caso não se chegue a um acordo','ao primeiro preço anunciado pelo vendedor','à margem de lucro mínima da empresa','ao prazo máximo da negociação'],c:1,
 x:'MAANA = Melhor Alternativa À Negociação de um Acordo. Quanto melhor a sua alternativa fora da mesa, mais força você tem para negociar.'},
{id:'vn04',d:'vn',a:'Negociação',e:'A negociação integrativa (ganha-ganha) caracteriza-se por',
 o:['dividir um valor fixo, em que o ganho de um é a perda do outro','esconder ao máximo as informações da outra parte','buscar soluções que ampliem o valor total, atendendo aos interesses das duas partes','encerrar a negociação rapidamente com concessões unilaterais','manter a posição inicial sem considerar interesses'],c:2,
 x:'Na integrativa, as partes exploram interesses e criam opções para aumentar o "bolo". Dividir um valor fixo é a negociação distributiva.'},
{id:'vn05',d:'vn',a:'Técnicas de vendas',e:'Na técnica de vendas SPIN, as perguntas que exploram as consequências de um problema do cliente (por exemplo: "o que acontece com seu caixa se esse pagamento atrasar?") são as de',
 o:['Situação','Problema','Implicação','Necessidade de solução','Fechamento'],c:2,
 x:'SPIN: Situação (contexto), Problema (dificuldades), Implicação (consequências do problema) e Necessidade de solução (valor de resolver).'},
{id:'vn06',d:'vn',a:'Técnicas de vendas',e:'O principal objetivo das ações de pós-venda em um banco é',
 o:['reduzir o número de contatos com o cliente','fortalecer o relacionamento e aumentar a satisfação e a fidelização','substituir a prospecção de novos clientes','cumprir apenas exigências legais','evitar a oferta de novos produtos ao mesmo cliente'],c:1,
 x:'O pós-venda acompanha o cliente depois da contratação para manter a satisfação, resolver problemas e fidelizar. Reter um cliente costuma custar menos do que conquistar um novo.'},
{id:'vn07',d:'vn',a:'Ética e CDC',e:'Condicionar a liberação de um empréstimo à contratação de um seguro pelo cliente configura',
 o:['venda cruzada legítima','prática abusiva conhecida como venda casada, vedada pelo Código de Defesa do Consumidor','estratégia de fidelização permitida','obrigação prevista em norma do Banco Central','negociação integrativa'],c:1,
 x:'Oferecer outro produto é venda cruzada (permitida). Exigir que o cliente compre um para ter acesso ao outro é venda casada, proibida pelo CDC.'},
{id:'vn08',d:'vn',a:'Ética e CDC',e:'Pelo Código de Defesa do Consumidor, quando a contratação ocorre fora do estabelecimento comercial (por telefone ou internet, por exemplo), o consumidor pode desistir no prazo de',
 o:['3 dias','7 dias','15 dias','30 dias','90 dias'],c:1,f:1,
 x:'É o direito de arrependimento (art. 49 do CDC): 7 dias a contar da assinatura ou do recebimento do produto ou serviço.'},
// ---------- Informática ----------
{id:'inf01',d:'inf',a:'Segurança da informação',e:'Um cliente recebe um e-mail que imita a comunicação do banco e pede que ele clique em um link e informe sua senha. Esse tipo de golpe é conhecido como',
 o:['spam','phishing','backup','firewall','cookie'],c:1,
 x:'Phishing é a "pescaria" de dados: mensagem falsa que se passa por instituição confiável para roubar senhas ou dados.'},
{id:'inf02',d:'inf',a:'Segurança da informação',e:'O malware que criptografa os arquivos da vítima e exige pagamento para devolver o acesso é o',
 o:['spyware','adware','ransomware','worm','keylogger'],c:2,
 x:'Ransomware sequestra os dados (criptografa) e pede resgate. Spyware espiona; keylogger grava o que se digita; worm se espalha sozinho pela rede; adware exibe propaganda.'},
{id:'inf03',d:'inf',a:'Segurança da informação',e:'A autenticação em dois fatores é mais segura porque',
 o:['exige duas senhas diferentes digitadas em sequência','combina fatores de tipos diferentes, como algo que o usuário sabe e algo que ele possui','impede qualquer acesso pela internet','dispensa o uso de senhas','criptografa o disco rígido do computador'],c:1,
 x:'O ganho vem de combinar tipos diferentes: algo que você sabe (senha), algo que tem (celular, token) ou algo que é (biometria). Duas senhas são o mesmo fator.'},
{id:'inf04',d:'inf',a:'Planilhas',e:'Em uma planilha do Excel, a célula A1 contém o valor 6,5. A fórmula =SE(A1>=7;"Aprovado";"Reprovado") retorna',
 o:['Aprovado','Reprovado','6,5','#VALOR!','VERDADEIRO'],c:1,
 x:'6,5 não é maior ou igual a 7, então a condição é falsa e a função devolve o terceiro argumento: "Reprovado".'},
{id:'inf05',d:'inf',a:'Planilhas',e:'No Excel, a célula C1 contém a fórmula =A1*$B$1. Ao copiar C1 para C2, a fórmula em C2 será',
 o:['=A1*$B$1','=A2*$B$2','=A2*$B$1','=A2*B2','=A1*$B$2'],c:2,
 x:'Referência relativa (A1) se ajusta ao copiar: vira A2. Referência absoluta ($B$1) não muda.'},
{id:'inf06',d:'inf',a:'Planilhas',e:'Em uma planilha, B1 = 2, B2 = 4, B3 está vazia e B4 = 6. O resultado de =MÉDIA(B1:B4) é',
 o:['3','4','6','12','#DIV/0!'],c:1,f:1,
 x:'MÉDIA ignora células vazias: (2 + 4 + 6) ÷ 3 = 4. Se B3 tivesse o valor 0, ele entraria na conta e o resultado seria 3.'},
{id:'inf07',d:'inf',a:'Internet e nuvem',e:'Sobre a navegação anônima (privativa) dos navegadores, é correto afirmar que ela',
 o:['esconde a navegação do provedor de internet e da rede da empresa','impede a instalação de qualquer malware','não guarda no computador o histórico e os cookies da sessão depois que a janela é fechada','criptografa todos os sites visitados','torna o usuário anônimo para os sites acessados'],c:2,
 x:'O modo anônimo só evita gravar histórico, cookies e dados de formulário no próprio aparelho. Provedor, rede da empresa e os próprios sites continuam vendo o acesso.'},
{id:'inf08',d:'inf',a:'Internet e nuvem',e:'Uma empresa passa a usar e-mail corporativo diretamente pelo navegador, sem instalar programas nem manter servidores próprios. Esse modelo de computação em nuvem é o',
 o:['IaaS','PaaS','SaaS','LAN','VPN'],c:2,
 x:'SaaS (Software como Serviço): o software pronto é usado pela internet. IaaS fornece infraestrutura (máquinas); PaaS fornece plataforma para desenvolver.'},
// ---------- Matemática Financeira ----------
{id:'mf01',d:'mf',a:'Juros simples e desconto',e:'Um capital de R$ 2.000,00 é aplicado a juros simples de 3% ao mês durante 5 meses. O montante ao final do período é',
 o:['R$ 2.060,00','R$ 2.150,00','R$ 2.300,00','R$ 2.318,55','R$ 3.000,00'],c:2,f:1,
 x:'Juros simples: J = C × i × t = 2.000 × 0,03 × 5 = 300. Montante = 2.000 + 300 = R$ 2.300,00. (R$ 2.318,55 seria o resultado com juros compostos.)'},
{id:'mf02',d:'mf',a:'Juros simples e desconto',e:'Um título de R$ 5.000,00 é descontado 2 meses antes do vencimento, com desconto comercial simples de 3% ao mês. O valor recebido é',
 o:['R$ 4.700,00','R$ 4.716,98','R$ 4.850,00','R$ 4.970,00','R$ 5.300,00'],c:0,f:1,
 x:'O desconto comercial ("por fora") incide sobre o valor nominal: D = 5.000 × 0,03 × 2 = 300. Valor recebido = 5.000 − 300 = R$ 4.700,00. (R$ 4.716,98 seria o desconto racional, "por dentro".)'},
{id:'mf03',d:'mf',a:'Juros compostos e taxas',e:'R$ 1.000,00 aplicados a juros compostos de 10% ao mês geram, após 2 meses, o montante de',
 o:['R$ 1.100,00','R$ 1.200,00','R$ 1.210,00','R$ 1.221,00','R$ 1.331,00'],c:2,f:1,
 x:'M = 1.000 × (1,10)² = 1.000 × 1,21 = R$ 1.210,00. Com juros simples seriam R$ 1.200,00.'},
{id:'mf04',d:'mf',a:'Juros compostos e taxas',e:'A taxa anual equivalente a 1% ao mês, no regime de juros compostos, é de aproximadamente',
 o:['11,36%','12,00%','12,36%','12,68%','13,00%'],c:3,f:1,
 x:'(1,01)¹² − 1 ≈ 0,1268, ou seja, 12,68% ao ano. 12% seria a taxa proporcional (juros simples).'},
{id:'mf05',d:'mf',a:'Sistemas de amortização',e:'Um financiamento de R$ 12.000,00 será pago em 12 parcelas mensais pelo Sistema de Amortização Constante (SAC), com juros de 2% ao mês. O valor da primeira prestação é',
 o:['R$ 1.000,00','R$ 1.134,72','R$ 1.220,00','R$ 1.240,00','R$ 1.480,00'],c:3,f:1,
 x:'No SAC a amortização é fixa: 12.000 ÷ 12 = 1.000. Juros do 1º mês: 2% de 12.000 = 240. Prestação = 1.000 + 240 = R$ 1.240,00. (R$ 1.134,72 seria a prestação fixa da Tabela Price; R$ 1.220,00 é a 2ª prestação do SAC.)'},
{id:'mf06',d:'mf',a:'Sistemas de amortização',e:'No Sistema Francês de Amortização (Tabela Price), ao longo do financiamento,',
 o:['as prestações são decrescentes e a amortização é constante','as prestações são constantes, a parcela de juros diminui e a amortização aumenta','as prestações e os juros são constantes','os juros aumentam e a amortização diminui','não há cobrança de juros nas últimas parcelas'],c:1,
 x:'Na Price a prestação é fixa. Como o saldo devedor cai, os juros de cada parcela diminuem e a parte que amortiza a dívida cresce.'},
// ---------- Língua Portuguesa ----------
{id:'pt01',d:'pt',a:'Concordância',e:'Está de acordo com a norma-padrão a frase:',
 o:['Haviam muitos clientes na fila da agência.','Fazem dois anos que a agência foi reformada.','Houve muitos problemas no sistema ontem.','Devem haver soluções para o atraso.','Existe muitas dúvidas sobre o produto.'],c:2,
 x:'"Haver" no sentido de existir é impessoal: fica no singular (houve, havia) e passa essa impessoalidade ao auxiliar (deve haver). "Fazer" indicando tempo também é impessoal (faz dois anos). Já "existir" concorda normalmente: existem muitas dúvidas.'},
{id:'pt02',d:'pt',a:'Concordância',e:'A concordância está correta em:',
 o:['Segue anexo as planilhas solicitadas.','Seguem anexas as planilhas solicitadas.','Segue anexas as planilhas solicitadas.','Seguem anexo as planilhas solicitadas.','Anexo seguem as planilhas solicitadas.'],c:1,
 x:'"Anexo" é adjetivo e concorda com o substantivo: anexas as planilhas. O verbo também concorda com o sujeito no plural: seguem.'},
{id:'pt03',d:'pt',a:'Crase',e:'O acento grave indicativo de crase está empregado corretamente em:',
 o:['O cliente começou à reclamar do atendimento.','A agência funciona das 10h às 16h.','Entregamos o cartão à ela ontem.','O pagamento foi feito à prazo.','O gerente dirigiu-se à todos os presentes.'],c:1,
 x:'"Das 10h às 16h": há preposição "a" + artigo "as" antes da hora. Não há crase antes de verbo (a reclamar), de pronome pessoal (a ela), de palavra masculina (a prazo) nem de pronome indefinido (a todos).'},
{id:'pt04',d:'pt',a:'Crase',e:'Está correto o uso do acento grave em:',
 o:['Refiro-me à proposta enviada ontem.','Vou à Brasília na próxima semana.','Ficaram frente à frente na reunião.','Ele estava disposto à negociar.','O banco atende à pessoas físicas e jurídicas.'],c:0,
 x:'"Referir-se a" + "a proposta" = à proposta. Brasília não aceita artigo (salvo com especificador: à Brasília dos anos 60); expressões com palavras repetidas não têm crase; antes de verbo não há crase; "a pessoas", no plural sem artigo, também não.'},
{id:'pt05',d:'pt',a:'Regência e pontuação',e:'A regência está de acordo com a norma-padrão em:',
 o:['Os clientes preferem mais o atendimento digital do que o presencial.','Os clientes preferem o atendimento digital ao presencial.','Muitos funcionários aspiram o cargo de gerente.','É preciso obedecer as normas internas.','Os clientes chegaram no banco antes da abertura.'],c:1,
 x:'Prefere-se algo A outra coisa (sem "mais" e sem "do que"). Aspirar (desejar) pede "a": aspiram ao cargo. Obedecer pede "a": obedecer às normas. Na norma-padrão, chega-se "a" algum lugar: chegaram ao banco.'},
{id:'pt06',d:'pt',a:'Regência e pontuação',e:'A frase corretamente pontuada é:',
 o:['Os gerentes da agência, aprovaram o crédito.','Ontem à tarde o sistema, ficou fora do ar.','O banco, que é público, abriu novas vagas.','Precisamos, de mais tempo para a análise.','A proposta enviada pelo cliente, foi recusada.'],c:2,
 x:'Não se separa sujeito de verbo nem verbo de complemento com vírgula. Na frase correta, "que é público" é oração explicativa, por isso vem entre vírgulas.'},
// ---------- Matemática ----------
{id:'mat01',d:'mat',a:'Porcentagem',e:'Um preço sofre dois aumentos sucessivos, de 10% e de 20%. O aumento total equivale a',
 o:['30%','31%','32%','33%','35%'],c:2,f:1,
 x:'Multiplique os fatores: 1,10 × 1,20 = 1,32, ou seja, aumento de 32%. Porcentagens sucessivas não se somam.'},
{id:'mat02',d:'mat',a:'Porcentagem',e:'Um produto recebe desconto de 20% e, depois, o novo preço é aumentado em 20%. Em relação ao preço original, o preço final é',
 o:['igual','4% menor','4% maior','2% menor','20% menor'],c:1,
 x:'0,80 × 1,20 = 0,96: o preço final é 96% do original, ou seja, 4% menor.'},
{id:'mat03',d:'mat',a:'Proporção e sequências',e:'Três caixas, trabalhando no mesmo ritmo, atendem 60 clientes por hora. Mantido o ritmo, cinco caixas atenderão, por hora,',
 o:['80 clientes','90 clientes','100 clientes','120 clientes','150 clientes'],c:2,f:1,
 x:'Cada caixa atende 60 ÷ 3 = 20 clientes por hora. Cinco caixas: 5 × 20 = 100.'},
{id:'mat04',d:'mat',a:'Proporção e sequências',e:'Na progressão aritmética 5, 9, 13, 17, ..., o 20º termo é',
 o:['77','79','81','85','89'],c:2,f:1,
 x:'aₙ = a₁ + (n − 1) · r = 5 + 19 × 4 = 81.'},
// ---------- Língua Inglesa ----------
{id:'ing01',d:'ing',a:'Vocabulário',e:'In banking, the word "loan" means',
 o:['empréstimo','agência','saldo','tarifa','investimento'],c:0,
 x:'Loan = empréstimo. Branch = agência; balance = saldo; fee = tarifa; investment = investimento.'},
{id:'ing02',d:'ing',a:'Vocabulário',e:'In the sentence "The scammer pretended to be a bank employee", the verb "pretended" means',
 o:['pretendeu','fingiu','tentou','conseguiu','recusou'],c:1,
 x:'"Pretend" é falso cognato: significa fingir. "Pretender" (ter intenção) seria "intend".'},
{id:'ing03',d:'ing',a:'Interpretação',e:'In "Although interest rates rose, demand for credit remained strong", the word "although" expresses',
 o:['cause','consequence','contrast (concession)','time','condition'],c:2,
 x:'"Although" = embora. Indica concessão/contraste: os juros subiram, mas mesmo assim a procura por crédito continuou forte.'},
// ---------- Atualidades do Mercado Financeiro ----------
{id:'atu01',d:'atu',a:'Pix e meios de pagamento',e:'Sobre o Pix, é correto afirmar que',
 o:['foi criado e é gerido pela Febraban','é o meio de pagamento instantâneo instituído pelo Banco Central, disponível 24 horas por dia, todos os dias','funciona apenas em dias úteis, como a TED','só pode ser usado por pessoas físicas','exige cartão de crédito para ser utilizado'],c:1,
 x:'O Pix foi instituído pelo Banco Central, que é o gestor do sistema. Funciona 24 horas, 7 dias por semana, para pessoas físicas e empresas.'},
{id:'atu02',d:'atu',a:'Pix e meios de pagamento',e:'O Mecanismo Especial de Devolução (MED) do Pix serve para',
 o:['parcelar pagamentos Pix no cartão','permitir a devolução de valores em casos de suspeita de fraude ou de falha operacional','cobrar tarifa de pessoas físicas em transferências','agendar pagamentos recorrentes','converter Pix em moeda estrangeira'],c:1,
 x:'O MED permite bloquear e devolver valores quando há suspeita fundamentada de fraude ou falha operacional na instituição.'},
{id:'atu03',d:'atu',a:'Open Finance e fintechs',e:'No Open Finance, o compartilhamento dos dados do cliente entre instituições',
 o:['é obrigatório e automático para todos os correntistas','depende do consentimento do cliente, que pode revogá-lo','é feito apenas entre bancos públicos','permite a venda dos dados a terceiros sem autorização','é restrito a dados de cartão de crédito'],c:1,
 x:'O pilar do Open Finance é o consentimento: o cliente escolhe o que compartilhar, com quem e por quanto tempo, e pode cancelar quando quiser.'},
{id:'atu04',d:'atu',a:'Open Finance e fintechs',e:'A Sociedade de Crédito Direto (SCD), modelo usado por fintechs de crédito, caracteriza-se por',
 o:['captar depósitos à vista do público','conceder empréstimos e financiamentos com recursos próprios, sem captar recursos do público','emitir moeda digital oficial','atuar exclusivamente como corretora de valores','dispensar autorização do Banco Central'],c:1,
 x:'A SCD empresta com capital próprio, por plataforma eletrônica, e não pode captar recursos do público. Precisa de autorização do Banco Central para funcionar.'}
];

// ================= Prioriza Bancários =================
const DISC={
  vn:{n:'Vendas e Negociação',c:'#b5651d'},
  inf:{n:'Informática / TI',c:'#3b5bb5'},
  cb:{n:'Conhecimentos Bancários',c:'#0f8a7e'},
  pt:{n:'Língua Portuguesa',c:'#b8326a'},
  mf:{n:'Matemática Financeira',c:'#7a3fa0'},
  mat:{n:'Matemática',c:'#5b7d1f'},
  atu:{n:'Atualidades do Mercado Financeiro',c:'#a77400'},
  ing:{n:'Língua Inglesa',c:'#2a7f9e'},
  atd:{n:'Atendimento Bancário',c:'#c2447a'},
  est:{n:'Probabilidade e Estatística',c:'#5f55c9'},
  eti:{n:'Ética e Compliance',c:'#8a5a44'},
  dig:{n:'Comportamentos Digitais',c:'#2b8fb0'},
  reg:{n:'Conhecimentos sobre o Estado',c:'#6b7f3a'},
  leg:{n:'Legislação',c:'#4d6b8a'}
};
// Pesos por edital: [questões, pontos]
const PERFIS={
  bb:{n:'BB 2023',full:'Banco do Brasil 2023 · Escriturário – Agente Comercial (Cesgranrio)',
      w:{vn:[15,22.5],inf:[15,22.5],cb:[10,15],pt:[10,15],mf:[5,7.5],mat:[5,7.5],atu:[5,5],ing:[5,5]}},
  cx:{n:'Caixa 2024',full:'Caixa 2024 · Técnico Bancário Novo (Cesgranrio)',
      w:{cb:[15,15],atd:[10,10],pt:[5,5],ing:[5,5],mf:[5,5],est:[5,5],eti:[5,5],inf:[5,5],dig:[5,5]}},
  brs:{n:'Banrisul 2023',full:'Banrisul 2023 · Escriturário (Cesgranrio) — peso pelo número de questões',
      w:{vn:[20,20],pt:[15,15],mf:[10,10],cb:[10,10],inf:[10,10],mat:[5,5],atu:[5,5],eti:[5,5]}},
  basa:{n:'BASA 2024',full:'Banco da Amazônia 2024 · Técnico Bancário (Cesgranrio)',
      w:{cb:[15,15],vn:[15,15],pt:[5,5],ing:[5,5],atu:[5,5],eti:[5,5],inf:[5,5],atd:[5,5],mf:[5,5],est:[5,5]}},
  bnb:{n:'BNB 2024',full:'Banco do Nordeste 2024 · Analista Bancário 1 (Cesgranrio)',
      w:{cb:[40,80],pt:[10,10],mat:[10,10]}},
  banese:{n:'Banese 2025',full:'Banese 2025 · Técnico Bancário I (Cesgranrio) — peso pelo número de questões',
      w:{cb:[15,15],vn:[15,15],pt:[10,10],eti:[10,10],mat:[9,9],reg:[6,6],inf:[5,5],mf:[5,5],atu:[5,5]}}
};
// Provas oficiais que o app sabe importar. Gabaritos conferidos nos PDFs oficiais da Cesgranrio.
const PROVAS={
  bb23a1:{
    grp:'Banco do Brasil 2023 · Escriturário – Agente Comercial',
    n:'BB 2023 · Prova A, Gabarito 1',
    short:'Cesgranrio · BB 2023 · Agente Comercial (Prova A, gab. 1)',
    pdf:'https://cdn.direcaoconcursos.com.br/uploads/2023/04/PROVA-A-AGENTE-COMERCIAL-GABARITO-1.pdf',
    gab:'https://www.cesgranrio.org.br/concurso/banco-do-brasil-bb-01-2022/',
    status:'definitivo (alterado em 12/05/2023 · questão 33 anulada)',
    check:[/AGENTE\s*COMERCIAL/i,/PROVA\s*A(?=\s|GABARITO|$)/i,/GABARITO\s*1\b/i],
    reject:/PROVA\s*[BC](?=\s|GABARITO|$)|2021\s*\/\s*001|JUNHO DE 2021/i,
    total:70,
    secs:[[1,10,'pt',1],[11,15,'ing',1],[16,20,'mat'],[21,25,'atu'],[26,30,'mf'],[31,40,'cb'],[41,55,'inf'],[56,70,'vn']],
    key:'BBECADBEDCBCEEBDBEDACABDEACDBDABXDCBAAEBBAABCDEDDBADEBDDBDCAEDCDBAAECB'
  },
  bb23b1:{
    grp:'Banco do Brasil 2023 · Escriturário – Agente Comercial',
    n:'BB 2023 · Prova B, Gabarito 1',
    short:'Cesgranrio · BB 2023 · Agente Comercial (Prova B, gab. 1)',
    pdf:'https://cdn.direcaoconcursos.com.br/uploads/2023/04/PROVA-B-AGENTE-COMERCIAL-GABARITO-1.pdf',
    gab:'https://cdn.direcaoconcursos.com.br/uploads/2023/04/GABARITO-23-04-2023-PROVA-B-ESCRITURARIO-AGENTE-COMERCIAL.pdf',
    status:'oficial (sem alteração após recursos)',
    check:[/AGENTE\s*COMERCIAL/i,/PROVA\s*B(?=\s|GABARITO|$)/i,/GABARITO\s*1\b/i],
    reject:/PROVA\s*[AC](?=\s|GABARITO|$)|2021\s*\/\s*001|JUNHO DE 2021/i,
    total:70,
    secs:[[1,10,'pt',1],[11,15,'ing',1],[16,20,'mat'],[21,25,'atu'],[26,30,'mf'],[31,40,'cb'],[41,55,'inf'],[56,70,'vn']],
    key:'CAADCBEEDBBCDAECDEBDEADAABCEADCDCADEEADADECCABCABDBECCBABDBADBEAADEDCC'
  },
  bb23c2:{
    grp:'Banco do Brasil 2023 · Escriturário – Agente Comercial',
    n:'BB 2023 · Prova C, Gabarito 2',
    short:'Cesgranrio · BB 2023 · Agente Comercial (Prova C, gab. 2)',
    pdf:'https://cdn.direcaoconcursos.com.br/uploads/2023/04/PROVA-C-AGENTE-COMERCIAL-GABARITO-2.pdf',
    gab:'https://arquivos.qconcursos.com/prova/arquivo_gabarito/95913/cesgranrio-2023-banco-do-brasil-agente-comercial-prova-c-gabarito.pdf',
    status:'definitivo (alterado em 12/05/2023 · questão 28 anulada)',
    check:[/AGENTE\s*COMERCIAL/i,/PROVA\s*C(?=\s|GABARITO|$)/i,/GABARITO\s*2\b/i],
    reject:/PROVA\s*[AB](?=\s|GABARITO|$)|2021\s*\/\s*001|JUNHO DE 2021/i,
    total:70,
    secs:[[1,10,'pt',1],[11,15,'ing',1],[16,20,'mat'],[21,25,'atu'],[26,30,'mf'],[31,40,'cb'],[41,55,'inf'],[56,70,'vn']],
    key:'EDDCBCBABEBDCAEACDEDECDBBDEXCAEEBACEEEAADCECAAACDEBCDABBDBECDEECADEEAB'
  },
  cx24p1g1:{
    grp:'Caixa 2024 · Técnico Bancário Novo',
    n:'Caixa 2024 · Prova 1, Gabarito 1',
    short:'Cesgranrio · Caixa 2024 · Técnico Bancário Novo (Prova 1, gab. 1)',
    pdf:'https://arquivos.qconcursos.com/prova/arquivo_prova/109980/cesgranrio-2024-caixa-tecnico-bancario-novo-prova.pdf',
    gab:'https://arquivos.qconcursos.com/prova/arquivo_gabarito/109980/cesgranrio-2024-caixa-tecnico-bancario-novo-gabarito.pdf',
    status:'oficial publicado (prova de 26/05/2024)',
    check:[/PROVA\s*1\s*[-–]\s*T[ÉE]CNICO\s*BANC[ÁA]RIO\s*NOVO/i,/GABARITO\s*1\b/i],
    reject:/RIO GRANDE DO SUL|07\/2024\/NM|TECNOLOGIA DA INFORMA[ÇC][ÃA]O\s*GABARITO/i,
    total:60,
    secs:[[1,5,'pt',1],[6,10,'ing',1],[11,15,'mf'],[16,20,'est'],[21,25,'eti'],[26,40,'cb'],[41,45,'inf'],[46,50,'dig'],[51,60,'atd']],
    key:'ABEBCDABECACCBDDAACBECDBEBDEABACCADBEADDABCACCBCDADBBEDEECED'
  },
  brs23g1:{
    grp:'Banrisul 2023 · Escriturário',
    n:'Banrisul 2023 · Gabarito 1',
    short:'Cesgranrio · Banrisul 2023 · Escriturário (gab. 1)',
    pdf:'https://www.acheconcursos.com.br/imagens/post/58335/prova-escriturario-1.pdf',
    gab:'https://www.acheconcursos.com.br/imagens/post/58335/gabarito-banrisul-2023.pdf',
    status:'preliminar (23/01/2023)',
    check:[/BANRISUL/i,/ESCRITUR[ÁA]RIO/i,/GABARITO\s*1\b/i],
    reject:/GABARITO\s*[2-5]\b/i,
    total:80,
    secs:[[1,15,'pt'],[16,20,'mat'],[21,25,'atu'],[26,35,'mf'],[36,45,'cb'],[46,55,'inf'],[56,75,'vn'],[76,80,'eti']],
    skip:[1,2,3,4,5,6,7,8,12,15],
    key:'BBECCBDAAEEDEADCAECABCEEBCEBCADDCBAACBDDACCBCBDCEACAEEBEBCEDBACACCEABEBDCDCECACE'
  },
  basa24a1:{
    grp:'Banco da Amazônia 2024 · Técnico Bancário',
    n:'BASA 2024 · Prova A, Gabarito 1',
    short:'Cesgranrio · Banco da Amazônia 2024 · Técnico Bancário (Prova A, gab. 1)',
    pdf:'https://arquivos.qconcursos.com/prova/arquivo_prova/121419/cesgranrio-2024-banco-da-amazonia-tecnico-bancario-prova.pdf',
    gab:'https://arquivos.qconcursos.com/prova/arquivo_gabarito/121419/cesgranrio-2024-banco-da-amazonia-tecnico-bancario-gabarito.pdf',
    status:'final, após recursos',
    check:[/PROVA\s*A\s*[-–]\s*T[ÉE]CNICO\s*BANC[ÁA]RIO/i,/GABARITO\s*1\b/i,/BANCO\s*DA\s*AMAZ[ÔO]NIA/i],
    reject:/GABARITO\s*[23]\b|PROVA\s*B\s*[-–]\s*T[ÉE]CNICO\s*CIENT/i,
    total:70,
    secs:[[1,5,'pt'],[6,10,'ing',1],[11,15,'atu'],[16,20,'eti'],[21,25,'inf'],[26,30,'atd'],[31,35,'mf'],[36,40,'est'],[41,55,'cb'],[56,70,'vn']],
    skip:[1,2,3],
    key:'CDBCBCABAEEADACDABDECEEADDBBACDBCAACCCABCCBEEABDAAECECCDDAADCECBAAEDCC'
  },
  bnb24g1:{
    grp:'Banco do Nordeste 2024 · Analista Bancário 1',
    n:'BNB 2024 · Gabarito 1',
    short:'Cesgranrio · BNB 2024 · Analista Bancário 1 (gab. 1)',
    pdf:'https://arquivos.qconcursos.com/prova/arquivo_prova/108279/cesgranrio-2024-bnb-analista-bancario-prova.pdf',
    gab:'https://arquivos.qconcursos.com/prova/arquivo_gabarito/108279/cesgranrio-2024-bnb-analista-bancario-gabarito.pdf',
    status:'definitivo (alterado em 13/05/2024)',
    check:[/ANALISTA\s*BANC[ÁA]RIO\s*1/i,/GABARITO\s*1\b/i,/BNB|BANCO DO NORDESTE/i],
    reject:/GABARITO\s*[23]\b/i,
    total:60,
    secs:[[1,10,'pt'],[11,20,'mat'],[21,60,'cb']],
    skip:[1,2,3,4,5,6,7,8,11,24,54],
    key:'ADBCBDBCEDADCEBCDCABADCBAAEECBEDEBABDCACEAADAECDEBABDXECBCCE'
  },
  banese25a1:{
    grp:'Banese 2025 · Técnico Bancário I',
    n:'Banese 2025 · Prova A, Gabarito 1',
    short:'Cesgranrio · Banese 2025 · Técnico Bancário I (Prova A, gab. 1)',
    pdf:'https://arquivos.qconcursos.com/prova/arquivo_prova/130331/cesgranrio-2025-banese-tecnico-bancario-i-prova.pdf',
    gab:'https://arquivos.qconcursos.com/prova/arquivo_gabarito/130331/cesgranrio-2025-banese-tecnico-bancario-i-gabarito.pdf',
    status:'definitivo (alterado em 15/04/2025)',
    check:[/T[ÉE]CNICO\s*BANC[ÁA]RIO\s*I\s*[-–]\s*PROVA\s*A/i,/GABARITO\s*1\b/i,/BANESE/i],
    reject:/GABARITO\s*[23]\b/i,
    total:80,
    secs:[[1,10,'pt',1],[11,19,'mat'],[20,25,'reg'],[26,30,'inf'],[31,35,'mf'],[36,50,'cb'],[51,65,'vn'],[66,70,'atu'],[71,80,'eti']],
    skip:[23,24,43,45,72,73,75,76],
    key:'DCECDABEBBADBDDDADXDDDCBDDBCDEDEDECEADEDDBAEBBBAACEDADCEADACDEDCDEABDEAABACCABBA'
  },
  bb21a1:{
    grp:'Banco do Brasil 2021 · Escriturário – Agente Comercial',
    n:'BB 2021 · Prova A, Gabarito 1',
    short:'Cesgranrio · BB 2021 · Agente Comercial (Prova A, gab. 1)',
    pdf:'https://cdn.direcaoconcursos.com.br/uploads/2023/01/cesgranrio-2021-banco-do-brasil-escriturario-agente-comercial-prova-a-prova.pdf',
    gab:'https://s3-improved-files-sec1.iesde.com.br/resolucaoq/prova/gabarito/48148.pdf',
    status:'oficial publicado pela Cesgranrio',
    check:[/AGENTE\s*COMERCIAL/i,/PROVA\s*A(?=\s|GABARITO|$)/i,/GABARITO\s*1\b/i,/2021\s*\/\s*001|JUNHO DE 2021/i],
    reject:/PROVA\s*[BC](?=\s|GABARITO|$)|2022\s*\/\s*001|DEZEMBRO DE 2022|GABARITO\s*[2-5]\b/i,
    total:70,
    secs:[[1,10,'pt',1],[11,15,'ing',1],[16,20,'mat'],[21,25,'atu'],[26,30,'mf'],[31,40,'cb'],[41,55,'inf'],[56,70,'vn']],
    skip:[34,37],
    key:'CDBDECBEDEBCEDCADEDCBABCACACABCEACDDACBECBDCDCDBBAACEEBECBDEBCDABEABCA'
  },
  bb21b1:{
    grp:'Banco do Brasil 2021 · Escriturário – Agente Comercial',
    n:'BB 2021 · Prova B, Gabarito 1',
    short:'Cesgranrio · BB 2021 · Agente Comercial (Prova B, gab. 1)',
    pdf:'https://www.aprovaconcursos.com.br/questoes-de-concurso/prova/cesgranrio-2021-banco-do-brasil-escriturario-agente-comercial-prova-b',
    gab:'https://s3-improved-files-sec1.iesde.com.br/resolucaoq/prova/gabarito/48150.pdf',
    status:'oficial publicado pela Cesgranrio · caderno: baixe no link (Aprova Concursos)',
    check:[/AGENTE\s*COMERCIAL/i,/PROVA\s*B(?=\s|GABARITO|$)/i,/GABARITO\s*1\b/i,/2021\s*\/\s*001|JUNHO DE 2021/i],
    reject:/PROVA\s*[AC](?=\s|GABARITO|$)|2022\s*\/\s*001|DEZEMBRO DE 2022|GABARITO\s*[2-5]\b/i,
    total:70,
    secs:[[1,10,'pt',1],[11,15,'ing',1],[16,20,'mat'],[21,25,'atu'],[26,30,'mf'],[31,40,'cb'],[41,55,'inf'],[56,70,'vn']],
    key:'DCCDCBCAEEDCBDBAECEACABBCEADAADBAEEBACCDDADEABDECDABCDDBDEECBBDDECABEA'
  },
  bb21c1:{
    grp:'Banco do Brasil 2021 · Escriturário – Agente Comercial',
    n:'BB 2021 · Prova C, Gabarito 1',
    short:'Cesgranrio · BB 2021 · Agente Comercial (Prova C, gab. 1)',
    pdf:'https://www.aprovaconcursos.com.br/questoes-de-concurso/prova/cesgranrio-2021-banco-do-brasil-escriturario-agente-comercial-prova-c',
    gab:'https://s3-improved-files-sec1.iesde.com.br/resolucaoq/prova/gabarito/48151.pdf',
    status:'oficial publicado pela Cesgranrio · caderno: baixe no link (Aprova Concursos)',
    check:[/AGENTE\s*COMERCIAL/i,/PROVA\s*C(?=\s|GABARITO|$)/i,/GABARITO\s*1\b/i,/2021\s*\/\s*001|JUNHO DE 2021/i],
    reject:/PROVA\s*[AB](?=\s|GABARITO|$)|2022\s*\/\s*001|DEZEMBRO DE 2022|GABARITO\s*[2-5]\b/i,
    total:70,
    secs:[[1,10,'pt',1],[11,15,'ing',1],[16,20,'mat'],[21,25,'atu'],[26,30,'mf'],[31,40,'cb'],[41,55,'inf'],[56,70,'vn']],
    key:'CDCAABDDECDEBDBADBDDDBDCACADECEDACDBDBCCEBAEEDADBDDAAAACEDDEEBCEAEBADB'
  },
  bb18g1:{
    grp:'Banco do Brasil 2018 · Escriturário',
    n:'BB 2018 · Gabarito 1',
    short:'Cesgranrio · BB 2018 · Escriturário (gab. 1)',
    pdf:'https://www.aprovaconcursos.com.br/questoes-de-concurso/prova/cesgranrio-2018-banco-do-brasil-escriturario',
    gab:'https://s3-improved-files-sec1.iesde.com.br/resolucaoq/prova/gabarito/44811.pdf',
    status:'oficial publicado pela Cesgranrio · caderno: baixe no link (Aprova Concursos)',
    check:[/BANCO DO BRASIL/i,/GABARITO\s*1\b/i,/2018\s*\/\s*001|MAR[ÇC]O DE 2018/i],
    reject:/AGENTE\s*COMERCIAL|AGENTE DE TECNOLOGIA|GABARITO\s*[2-5]\b/i,
    total:70,
    secs:[[1,5,'pt',1],[6,10,'ing',1],[11,15,'mat'],[16,20,'atu'],[21,40,'est'],[41,45,'cb'],[46,70,'inf']],
    key:'CCDEABDCACBBEDBCBDDEADEDACBCAEEDDCECDDDDDCEBBCDCBBDDCDCCDCECCDEBCECBED'
  },
  cx21:{
    grp:'Caixa 2021 · Técnico Bancário Novo',
    n:'Caixa 2021 · Técnico Bancário Novo',
    short:'Cesgranrio · Caixa 2021 · Técnico Bancário Novo',
    pdf:'https://cdn.direcaoconcursos.com.br/uploads/2023/02/cesgranrio-2021-caixa-tecnico-bancario-novo-prova.pdf',
    gab:'https://s3-improved-files-sec1.iesde.com.br/resolucaoq/prova/gabarito/48191.pdf',
    status:'oficial publicado pela Cesgranrio',
    check:[/CAIXA/i,/1\s*\/\s*2021\s*\/\s*NM/i,/T[ÉE]CNICO\s*BANC[ÁA]RIO\s*NOVO/i],
    reject:/TECNOLOGIA DA INFORMA/i,
    total:60,
    secs:[[1,10,'pt',1],[11,20,'mf'],[21,30,'cb'],[31,35,'est'],[36,45,'inf'],[46,60,'atd']],
    skip:[25],
    key:'BDABEACDAECCABDEAACEBCBABCCBDBBBDDDDCDAEBBEADCBDAEACCBAACCBD'
  },
  basa22g1:{
    grp:'Banco da Amazônia 2022 · Técnico Bancário',
    n:'BASA 2022 · Gabarito 1',
    short:'Cesgranrio · Banco da Amazônia 2022 · Técnico Bancário (gab. 1)',
    pdf:'https://cdn.direcaoconcursos.com.br/uploads/2023/02/cesgranrio-2022-banco-da-amazonia-tecnico-bancario-prova.pdf',
    gab:'https://s3-improved-files-sec1.iesde.com.br/resolucaoq/prova/gabarito/48545.pdf',
    status:'definitivo (alterado em 23/03/2022)',
    check:[/BANCO DA AMAZ[ÔO]NIA/i,/T[ÉE]CNICO\s*BANC[ÁA]RIO/i,/GABARITO\s*1\b/i,/DEZEMBRO DE 2021|0\s*2\s*\/\s*20\s*2\s*1/i],
    reject:/GABARITO\s*[2-5]\b|T[ÉE]CNICO\s*CIENT/i,
    total:60,
    secs:[[1,5,'pt',1],[6,10,'mat'],[11,15,'leg'],[16,20,'atu'],[21,25,'inf'],[26,30,'vn'],[31,60,'cb']],
    skip:[6,7,16,18,19,20,38],
    key:'CBEBEBACEBDBACDEBCDABCAEECECBCCABCEABDDCCEEABCEBABACADCBDAED'
  },
  basa18g1:{
    grp:'Banco da Amazônia 2018 · Técnico Bancário',
    n:'BASA 2018 · Gabarito 1',
    short:'Cesgranrio · Banco da Amazônia 2018 · Técnico Bancário (gab. 1)',
    pdf:'https://cdn.direcaoconcursos.com.br/uploads/2023/02/cesgranrio-2018-banco-da-amazonia-tecnico-bancario-prova.pdf',
    gab:'https://s3-improved-files-sec1.iesde.com.br/resolucaoq/prova/gabarito/44560.pdf',
    status:'oficial publicado pela Cesgranrio',
    check:[/BANCO DA AMAZ[ÔO]NIA/i,/T[ÉE]CNICO\s*BANC[ÁA]RIO/i,/GABARITO\s*1\b/i,/FEVEREIRO DE 2018|01\s*\/\s*2018/i],
    reject:/GABARITO\s*[2-5]\b|T[ÉE]CNICO\s*CIENT/i,
    total:60,
    secs:[[1,5,'pt',1],[6,10,'mat'],[11,15,'leg'],[16,20,'atu'],[21,25,'inf'],[26,30,'vn'],[31,60,'cb']],
    skip:[17,18,19,20,37],
    key:'BAECECAEDBEDABBAECCABAEECCAEBECCDBAEEABDABDACBEBDCDADBAEADEA'
  },
  bb15a1:{
    grp:'Banco do Brasil 2015 (março) · Escriturário',
    n:'BB 2015 (março) · Gabarito 1',
    short:'Cesgranrio · BB 2015 (edital 2014/002) · Escriturário (gab. 1)',
    pdf:'https://arquivos.infra-questoes.grancursosonline.com.br/folha-de-prova/F_61411_1629927468.pdf',
    gab:'https://arquivos.infra-questoes.grancursosonline.com.br/gabarito/G_61411_1629927468.zip',
    status:'definitivo (recursos: 22 e 24 anuladas, 60 alterada)',
    check:[/BANCO DO BRASIL/i,/2014\s*\/\s*002/,/GABARITO\s*1\b/i],
    reject:/GABARITO\s*[2-5]\b|AGENTE/i,
    total:70,
    secs:[[1,10,'pt',1],[11,20,'mat'],[21,25,'atu'],[26,30,'atd'],[31,40,'vn'],[41,50,'atd'],[51,55,'inf'],[56,65,'cb'],[66,70,'ing',1]],
    key:'ECDAEACABBDEEABBCEDBBXAXEDCDBCBDEABABCBEBACDCEBBADDEDACEBCDDDEDCBCEADE'
  },
  bb15b1:{
    grp:'Banco do Brasil 2015 (outubro) · Escriturário',
    n:'BB 2015 (outubro) · Gabarito 1',
    short:'Cesgranrio · BB 2015 (edital 2015/001) · Escriturário (gab. 1)',
    pdf:'https://arquivos.infra-questoes.grancursosonline.com.br/folha-de-prova/F_40520.pdf',
    gab:'https://arquivos.infra-questoes.grancursosonline.com.br/gabarito/G_40520.pdf',
    status:'oficial publicado pela Cesgranrio',
    check:[/BANCO DO BRASIL/i,/2015\s*\/\s*001/,/GABARITO\s*1\b/i],
    reject:/GABARITO\s*[2-5]\b|AGENTE/i,
    total:70,
    secs:[[1,10,'pt',1],[11,20,'mat'],[21,25,'atu'],[26,30,'atd'],[31,40,'vn'],[41,50,'atd'],[51,55,'inf'],[56,65,'cb'],[66,70,'ing',1]],
    key:'BCCADCDEBEEADBBEBBCDBECAABEBCAADDCAEDECBCEDCBABABBEEDECEADEDBBECCBDAEA'
  },
  bb14g1:{
    grp:'Banco do Brasil 2014 · Escriturário',
    n:'BB 2014 · Gabarito 1',
    short:'Cesgranrio · BB 2014 (edital 2013/002) · Escriturário (gab. 1)',
    pdf:'https://arquivos.infra-questoes.grancursosonline.com.br/folha-de-prova/F_20918.pdf',
    gab:'https://arquivos.infra-questoes.grancursosonline.com.br/gabarito/G_20918_1702981498.zip',
    status:'definitivo (alterado em 25/02/2014)',
    check:[/BANCO DO BRASIL/i,/2013\s*\/\s*002/,/GABARITO\s*1\b/i],
    reject:/GABARITO\s*[2-5]\b|AGENTE/i,
    total:70,
    secs:[[1,10,'pt',1],[11,20,'mat'],[21,25,'atu'],[26,30,'atd'],[31,40,'vn'],[41,45,'atd'],[46,55,'inf'],[56,70,'cb']],
    key:'CABCACDEAEEACBEEADBEECDBEDAECBCCEAEBDCBDACEEEDCEDECBEABDCXAADCABDCBAAD'
  },
  bb12g1:{
    grp:'Banco do Brasil 2012 · Escriturário',
    n:'BB 2012 · Gabarito 1',
    short:'Cesgranrio · BB 2012 · Escriturário (gab. 1)',
    pdf:'https://arquivos.infra-questoes.grancursosonline.com.br/folha-de-prova/F_20756.pdf',
    gab:'https://arquivos.infra-questoes.grancursosonline.com.br/gabarito/G_20756.pdf',
    status:'oficial publicado pela Cesgranrio',
    check:[/BANCO DO BRASIL/i,/2012\s*\/\s*001/,/GABARITO\s*1\b/i],
    reject:/GABARITO\s*[2-5]\b|AGENTE/i,
    total:70,
    secs:[[1,10,'pt',1],[11,20,'mat'],[21,25,'atu'],[26,30,'mat'],[31,40,'inf'],[41,52,'atd'],[53,70,'cb']],
    key:'CDBBDDABECEECBABACEDDAABBBDECCEBDCBDAACEAEDCECBDEDAECCCCEBDCDEADABECDA'
  },
  bb10g1:{
    grp:'Banco do Brasil 2010 · Escriturário',
    n:'BB 2010 · Gabarito 1 (Amarela)',
    short:'Cesgranrio · BB 2010 · Escriturário (gab. 1, prova amarela)',
    pdf:'https://arquivos.infra-questoes.grancursosonline.com.br/folha-de-prova/F_11281.pdf',
    gab:'https://arquivos.infra-questoes.grancursosonline.com.br/gabarito/G_11281.zip',
    status:'definitivo (recursos: 33 e 70 anuladas)',
    check:[/BANCO DO BRASIL/i,/2010/,/GABARITO\s*1\b/i,/AMARELA/i],
    reject:/GABARITO\s*[2-5]\b|AGENTE/i,
    total:70,
    secs:[[1,10,'pt',1],[11,20,'mat'],[21,25,'atu'],[26,30,'mat'],[31,40,'inf'],[41,52,'atd'],[53,70,'cb']],
    key:'CECEBEAABACAEACEBCDAECBADEDBCCEEXCBCDABBABDCEEDEACCACAEDBBEBCBDACEDACX'
  },
  cxrs24g1:{
    grp:'Caixa 2024 Rio Grande do Sul · Técnico Bancário Novo',
    n:'Caixa RS 2024 · Prova 1, Gabarito 1',
    short:'Cesgranrio · Caixa RS 2024 · Técnico Bancário Novo (Prova 1, gab. 1)',
    pdf:'https://arquivos.infra-questoes.grancursosonline.com.br/folha-de-prova/F_167723_1739288983.pdf',
    gab:'https://arquivos.infra-questoes.grancursosonline.com.br/gabarito/G_167723_1739288984.zip',
    status:'definitivo (alterado em 07/10/2024)',
    check:[/CAIXA/i,/07\s*\/\s*2024\s*\/\s*NM/i,/T[ÉE]CNICO\s*BANC[ÁA]RIO\s*NOVO/i,/GABARITO\s*1\b/i],
    reject:/GABARITO\s*[2-5]\b|PROVA\s*2\s*[-–]/i,
    total:60,
    secs:[[1,5,'pt',1],[6,10,'ing',1],[11,15,'mf'],[16,20,'est'],[21,25,'eti'],[26,40,'cb'],[41,45,'inf'],[46,50,'dig'],[51,60,'atd']],
    key:'CCEBAEBCAECDBCAEDEBBEBDAEBBDDAECEDBADAXBEDBXCEACECAEDCDAEECE'
  },
  cx12g1:{
    grp:'Caixa 2012 · Técnico Bancário Novo',
    n:'Caixa 2012 · Gabarito 1',
    short:'Cesgranrio · Caixa 2012 · Técnico Bancário Novo (gab. 1)',
    pdf:'https://arquivos.infra-questoes.grancursosonline.com.br/folha-de-prova/F_14136.pdf',
    gab:'https://arquivos.infra-questoes.grancursosonline.com.br/gabarito/G_14136_1641998252.zip',
    status:'definitivo (recursos indeferidos)',
    check:[/CAIXA/i,/01\s*\/\s*2012\s*\/\s*NM/i,/T[ÉE]CNICO\s*BANC[ÁA]RIO\s*NOVO/i,/GABARITO\s*1\b/i],
    reject:/GABARITO\s*[2-6]\b/i,
    total:60,
    secs:[[1,5,'pt',1],[6,10,'mat'],[11,14,'atu'],[15,18,'eti'],[19,22,'atd'],[23,26,'cb'],[27,30,'leg'],[31,50,'cb'],[51,60,'inf']],
    key:'EDDCDACCEBECDADBDBDBCEECECBDBCBBDDEBDADDADAAECDBEDDEACBCDEBA'
  },
  cx08g1:{
    grp:'Caixa 2008 · Técnico Bancário',
    n:'Caixa 2008 · Gabarito 1',
    short:'Cesgranrio · Caixa 2008 · Técnico Bancário (gab. 1)',
    pdf:'https://arquivos.infra-questoes.grancursosonline.com.br/folha-de-prova/F_4966.pdf',
    gab:'https://arquivos.infra-questoes.grancursosonline.com.br/gabarito/G_4966.pdf',
    status:'oficial publicado pela Cesgranrio',
    check:[/T[ÉE]CNICO\s*BANC[ÁA]RIO/i,/2008/,/GABARITO\s*1\b/i],
    reject:/NOVO|AMAZ[ÔO]NIA|BANCO DO BRASIL|GABARITO\s*[2-5]\b|TECNOLOGIA DA INFORMA/i,
    total:60,
    secs:[[1,10,'mat'],[11,20,'pt',1],[21,24,'atu'],[25,26,'eti'],[27,33,'atd'],[34,50,'cb'],[51,60,'inf']],
    key:'BDDACECBEBEABACEBADBCAEBDDBEECABDBEADDDBAEBDACEBACEEAACDBABC'
  },
  basa13g1:{
    grp:'Banco da Amazônia 2013 · Técnico Bancário',
    n:'BASA 2013 · Gabarito 1',
    short:'Cesgranrio · Banco da Amazônia 2013 · Técnico Bancário (gab. 1)',
    pdf:'https://arquivos.infra-questoes.grancursosonline.com.br/folha-de-prova/F_70339_1641932008.pdf',
    gab:'https://arquivos.infra-questoes.grancursosonline.com.br/gabarito/G_70339_1641932008.zip',
    status:'definitivo (questão 60 anulada)',
    check:[/BANCO DA AMAZ[ÔO]NIA/i,/T[ÉE]CNICO\s*BANC[ÁA]RIO/i,/GABARITO\s*1\b/i,/1\s*\/\s*2013/],
    reject:/GABARITO\s*[2-5]\b|T[ÉE]CNICO\s*CIENT/i,
    total:60,
    secs:[[1,10,'pt',1],[11,20,'mat'],[21,25,'atu'],[26,30,'inf'],[31,60,'cb']],
    key:'EAEACBBDCDBABAABDACDCECBDBCDECCBBEBCAECECBADBACBDBDCABEDEABX'
  }
};
// Classificação automática de assunto por palavras-chave (ordem importa)
const RULES={
  cb:[['Lavagem de dinheiro (PLD)',/lavagem|coaf|financiamento do terrorismo|\bpld\b|ocultação de bens/],
      ['Garantias',/\baval\b|fiança|hipoteca|penhor|alienação fiduciária|garantia real|garantia pessoal/],
      ['CMN e órgãos normativos',/conselho monetário|\bcmn\b|\bcnsp\b|\bcnpc\b|normativ|normatizador|conselho nacional de (seguros|previdência)/],
      ['Política monetária',/selic|copom|compulsório|redesconto|open market|política monetária|meta de inflação|ipca/],
      ['Bacen e supervisores',/banco central|\bbacen\b|\bbcb\b|\bcvm\b|comissão de valores|susep|previc|supervis|fiscaliza/],
      ['Instituições financeiras (operadores)',/bancos? (comercia|múltipl|de investimento|de desenvolvimento|cooperativ)|cooperativas? de crédito|corretora|distribuidora|caixa econômica|\bbndes\b|sociedades? de crédito|financeira|instituiç(ão|ões) de pagamento|operador|administradora de consórcio|bolsa de valores|\bb3\b/],
      ['Mercado financeiro e intermediação',/mercado (financeiro|monetário|de crédito|de capitais|de câmbio|cambial)|intermedia(ção|dor) financeir|poupadores|tomadores|spread|sistema financeiro nacional/],
      ['Estatuto e governança',/estatuto social|conselho de administração|diretoria|governança/],
      ['Produtos e FGC',/\bcdb\b|\blci\b|\blca\b|poupança|\bfgc\b|fundo garantidor|consórcio|capitaliza|previdência|seguro|cartão|consignado|fundos? de investimento|tesouro|debênture|financiamento|crédito/],
      ['Outros de bancários',/./]],
  vn:[['Ética e CDC',/código de defesa|consumidor|venda casada|ética|conduta|sigilo|lgpd|ouvidoria/],
      ['Negociação',/negocia|maana|batna|concess|barganha|zopa/],
      ['Marketing de serviços',/intangib|perecib|variabilidade|inseparab|marketing|composto|segmenta|posicionamento|valor percebido|qualidade|\bmarca\b/],
      ['Administração e liderança',/administra(dor|ção)|lideran|organizaciona|planejamento|\bpodc\b|motiva|eficácia|eficiência/],
      ['Técnicas de vendas',/./]],
  inf:[['Segurança da informação',/phishing|malware|vírus|ransomware|senha|autentica|backup|firewall|criptogra|spyware|golpe|ataque|segurança|token/],
       ['Planilhas',/excel|planilha|célula|fórmula|\bcalc\b|=soma|procv|libreoffice/],
       ['Internet e nuvem',/navegador|internet|nuvem|e-mail|correio eletrônico|\burl\b|chrome|edge|firefox|teams|drive|cookie|rede|wi-?fi|videoconfer/],
       ['Dados, IA e programação',/business intelligence|big data|dados abertos|banco de dados|\bsql\b|python|algoritmo|estruturas? de (controle|dados)|programa(ção|r)\b|aprendizado de máquina|intelig[êe]ncia artificial|machine learning|gest[ãa]o do conhecimento/],
       ['Sistemas e arquivos',/./]],
  mf:[['Sistemas de amortização',/\bsac\b|price|amortiza|prestaç|parcelas? (mensais|iguais|fixas)/],
      ['Juros simples e desconto',/juros simples|desconto/],
      ['Juros compostos e taxas',/./]],
  mat:[['Raciocínio lógico',/lógic|proposiç|negação|conectivo|tabela-verdade|silogismo/],['Porcentagem',/%|porcent|aumento de|redução de/],
       ['Proporção e sequências',/razão|propor|progress|sequência|regra de três/],
       ['Outros de matemática',/./]],
  atu:[['Pix e meios de pagamento',/\bpix\b|pagamento|boleto|\bted\b|cartão|transferência/],
       ['Open Finance e fintechs',/open finance|fintech|\bscd\b|\bsep\b|banco digital|cripto|drex|moeda digital|blockchain/],
       ['Tendências do mercado',/./]],
  est:[['Probabilidade',/probabilidade|chance|sortead|aleatori|evento/],['Estatística descritiva',/./]],
  eti:[['Compliance e integridade',/compliance|lavagem|integridade|corrup|conflito de interesse|controles internos/],['Socioambiental e ESG',/socioambiental|sustentab|\besg\b|ambiental|clim/],['Diversidade e inclusão',/diversidade|inclus|discrimina|equidade|racismo|gênero|deficiência|acessib/],['Ética e conduta',/./]],
  dig:[['Comportamentos digitais',/./]],
  atd:[['Vendas e relacionamento',/venda|gatilho|negocia|relacionamento|fideli|prospec|oferta/],['Atendimento e qualidade',/./]],
  reg:[['Conhecimentos regionais',/./]],
  leg:[['Código de Defesa do Consumidor',/consumidor|cdc|fornecedor/],['Lavagem de dinheiro',/lavagem|coaf/],['Sigilo bancário e LGPD',/sigilo|lgpd|dados pessoais/],['Acessibilidade e atendimento prioritário',/deficiência|idos|prioritári|acessib/],['Outros temas de legislação',/./]],
  pt:[['Crase',/crase|acento grave/],['Concordância',/concord/],['Regência e pontuação',/regência|vírgula|pontua/],['Interpretação de texto',/interpreta|compreens|ideias? (central|principal|apresentad)|infere-se|entende-se|depreende|tipologia|g[êe]nero textual|sentidos? do texto/],['Gramática',/./]],ing:[['Interpretação',/./]]
};
function classify(d,txt){const t=txt.toLowerCase();for(const [a,re] of (RULES[d]||[]))if(re.test(t))return a;return 'Geral'}

const DAY=864e5, HALF_LIFE=21;
const INTERVALS=[10*6e4, DAY, 3*DAY, 7*DAY, 21*DAY, 45*DAY, 90*DAY, 180*DAY];
const FIRST_OK=3; // acerto com certeza numa questão nova: primeira revisão em 7 dias
const GUESS_BOX=1; // acerto no chute: volta em 1 dia
const MAX_TENT=5000;
const L='ABCDE';
const PDFJS=window.PDFJS_BASE||'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/';

let S={tent:[],leit:{},com:{},custom:[],imp:{},perfil:'bb',metas:[]};
let QMAP={};
const PERM={};
const U={tab:'painel',mode:'smart',disc:'',topic:'',cur:null,why:'',answered:null,last:null,sess:{n:0,ok:0},round:{n:0,ok:0,g:0,ids:[],t0:0,dom0:{}},roundSum:null,bankQ:'',bankD:'',bankF:'',openId:null,pending:null};

// ---------- utilidades ----------
const $=s=>document.querySelector(s);
const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const fmtPts=p=>String(+(+p).toFixed(1)).replace('.',',');
const pct=x=>Math.round(x*100);
function lvl(d){return d<.5?'lo':d<.7?'mid':'hi'}
function ago(t){const m=(Date.now()-t)/6e4;if(m<60)return 'há pouco';const h=m/60;if(h<24)return 'há '+Math.round(h)+' h';const d=Math.round(h/24);return d===1?'ontem':'há '+d+' dias'}
function until(t){const m=(t-Date.now())/6e4;if(m<1)return 'agora';if(m<60)return 'em '+Math.ceil(m)+' min';const h=m/60;if(h<24)return 'em '+Math.round(h)+' h';const d=Math.round(h/24);return d===1?'amanhã':'em '+d+' dias'}
function hash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return h>>>0}
function rng(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function perm(q){
  if(PERM[q.id]&&PERM[q.id].length===q.o.length)return PERM[q.id];
  const idx=q.o.map((_,i)=>i);
  if(!q.f&&!q.u){const r=rng(hash(q.id)+7);for(let i=idx.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[idx[i],idx[j]]=[idx[j],idx[i]]}}
  return PERM[q.id]=idx;
}
function letterOf(q,orig){return L[perm(q).indexOf(orig)]}
function impQ(){return Object.values(S.imp).flat()}
function allQ(){return QS.concat(S.custom,impQ(),matQs(),simQs())}
function rebuild(){QMAP={};for(const q of allQ())QMAP[q.id]=q}
const tkey=q=>q.d+'|'+q.a;
const P=()=>PERFIS[S.perfil]||PERFIS.bb;
const wDisc=d=>(P().w[d]||[0,0])[1];
function discOrder(){
  const present=new Set(allQ().map(q=>q.d));
  return Object.keys(DISC).filter(d=>wDisc(d)>0||present.has(d)).sort((a,b)=>wDisc(b)-wDisc(a));
}
function toast(msg,ms){const t=$('#toast');t.textContent=msg;t.classList.add('on');clearTimeout(toast.h);toast.h=setTimeout(()=>t.classList.remove('on'),ms||2000)}

// ---------- motor ----------
function topics(){
  const m=new Map();
  for(const q of allQ()){const k=tkey(q);if(!m.has(k))m.set(k,{k,d:q.d,a:q.a,qs:[],w1:0,w0:0,n:0});m.get(k).qs.push(q.id)}
  const per={};for(const t of m.values())per[t.d]=(per[t.d]||0)+1;
  const now=Date.now();
  for(const at of S.tent){const q=QMAP[at.q];if(!q)continue;const t=m.get(tkey(q));const w=Math.pow(.5,(now-at.t)/DAY/HALF_LIFE);if(at.o&&at.g){t.w1+=w*.5;t.w0+=w*.5}else if(at.o)t.w1+=w;else t.w0+=w;t.n++}
  for(const t of m.values()){t.dom=(1+t.w1)/(2+t.w1+t.w0);t.peso=wDisc(t.d)/per[t.d];t.prio=t.peso*(1-t.dom)}
  return [...m.values()];
}
function discStats(tps){
  const r={};for(const d of Object.keys(DISC))r[d]={w1:0,w0:0,n:0,nq:0};
  for(const t of tps){const x=r[t.d];x.w1+=t.w1;x.w0+=t.w0;x.n+=t.n;x.nq+=t.qs.length}
  for(const d in r){const x=r[d];x.dom=(1+x.w1)/(2+x.w1+x.w0)}
  return r;
}
function qHist(){
  const h={};
  for(const at of S.tent){const x=h[at.q]||(h[at.q]={n:0,err:0,last:0,lastOk:0,lastWrong:0});x.n++;if(!at.o){x.err++;x.lastWrong=at.t}x.last=at.t;x.lastOk=at.o}
  return h;
}
function inScope(q){return (!U.disc||q.d===U.disc)&&(!U.topic||tkey(q)===U.topic)&&(U.disc||U.topic||wDisc(q.d)>0)}
function dueList(scoped){
  const now=Date.now();
  return Object.entries(S.leit).filter(([id,v])=>v.d<=now&&QMAP[id]&&(!scoped||inScope(QMAP[id]))).sort((a,b)=>a[1].d-b[1].d).map(e=>e[0]);
}
function nextDue(){let m=Infinity;for(const id in S.leit)if(QMAP[id]&&S.leit[id].d<m)m=S.leit[id].d;return m}
function pickNext(){
  const h=qHist();
  const due=dueList(true).filter(id=>id!==U.last);
  const revWhy=id=>{const x=h[id]||{};return x.lastOk?'Revisão espaçada: você acertou '+ago(x.last)+'. Ainda lembra?':'Revisão: você errou esta questão '+ago(x.lastWrong||x.last||Date.now())};
  if(U.mode==='rev'){if(!due.length)return null;return {id:due[0],why:revWhy(due[0])}}
  if(due.length&&Math.random()<.4)return {id:due[0],why:revWhy(due[0])};
  const all=topics();
  let tps=all.filter(t=>(!U.disc||t.d===U.disc)&&(!U.topic||t.k===U.topic));
  if(!U.disc&&!U.topic)tps=tps.filter(t=>t.peso>0);
  if(!tps.length)return null;
  // evita repetir questão respondida há menos de 5 min: prefere assuntos que ainda têm questão "descansada"
  {const lim=Date.now()-5*6e4,ok=id=>id!==U.last&&(!h[id]||h[id].last<lim),t2=tps.filter(t=>t.qs.some(ok));if(t2.length)tps=t2}
  const ranked=all.filter(t=>t.peso>0).sort((a,b)=>b.prio-a.prio);
  let ws=tps.map(t=>t.prio*t.prio),tot=ws.reduce((a,b)=>a+b,0);
  if(tot<=0){ws=tps.map(()=>1);tot=tps.length}
  let r=Math.random()*tot,t=tps[tps.length-1];
  for(let i=0;i<tps.length;i++){r-=ws[i];if(r<=0){t=tps[i];break}}
  const now5=Date.now()-5*6e4;
  let cands=t.qs.filter(id=>id!==U.last&&(!h[id]||h[id].last<now5));if(!cands.length)cands=t.qs.filter(id=>id!==U.last);if(!cands.length)cands=t.qs;
  const unseen=cands.filter(id=>!h[id]);
  const id=unseen.length?unseen[Math.floor(Math.random()*unseen.length)]:[...cands].sort((a,b)=>h[a].last-h[b].last)[0];
  const rank=ranked.findIndex(x=>x.k===t.k)+1;
  let why;
  if(t.peso<=0)why=`${t.a} (fora do edital ${P().n})`;
  else if(t.n)why=`Prioridade nº ${rank}: domínio de ${pct(t.dom)}% em ${t.a}`;
  else why=`${t.a} ainda não foi treinado (vale ${fmtPts(t.peso)} pts no edital ${P().n})`;
  return {id,why};
}
// Revisão espaçada: erro volta em 10 min; acerto no chute volta em 1 dia;
// acerto com certeza empurra a próxima revisão (7, 21, 45, 90, 180 dias) até a questão ficar dominada.
function schedule(id,ok,g,now){
  const cur=S.leit[id];
  if(!ok){S.leit[id]={b:0,d:now+INTERVALS[0]};return}
  if(g){S.leit[id]={b:GUESS_BOX,d:now+INTERVALS[GUESS_BOX]};return}
  const b=cur?cur.b+1:FIRST_OK;
  if(b>=INTERVALS.length){delete S.leit[id];return}
  S.leit[id]={b,d:now+INTERVALS[b]};
}
function nextMsg(id){const v=S.leit[id];return v?until(v.d):null}

// ---------- hábito: meta diária, sequência e rodadas ----------
const META_DEF=10,ROUND=10;
const dk=t=>{const d=new Date(t);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
function metaNow(){const m=S.metas||[];return m.length?m[m.length-1][1]:META_DEF}
function metaAt(t){let v=META_DEF;for(const x of (S.metas||[]))if(x[0]<=t)v=x[1];return v}
function weekKey(t){const x=new Date(t);x.setHours(0,0,0,0);x.setDate(x.getDate()-((x.getDay()+6)%7));return dk(x)}
// Sequência = dias seguidos batendo a meta. Uma proteção por semana (seg–dom) cobre um dia sem meta,
// desde que o dia seguinte volte a bater a meta (dois dias seguidos sem meta zeram a sequência).
function habit(){
  const c={};let first=Infinity;
  for(const at of dedupTent(S.tent)){const k=dk(at.t);c[k]=(c[k]||0)+1;if(at.t<first)first=at.t}
  const d0=new Date();d0.setHours(0,0,0,0);
  const meta=metaNow(),hoje=c[dk(d0)]||0;
  let run=0,best=0,pend=false,lastFreeze=null;const used=new Set();
  if(first<Infinity){
    const d=new Date(first);d.setHours(0,0,0,0);
    while(d<d0){
      const k=dk(d),nx=new Date(d);nx.setDate(nx.getDate()+1);
      if((c[k]||0)>=metaAt(nx.getTime()-1)){run++;pend=false}
      else if(run>0&&!pend&&!used.has(weekKey(d))){used.add(weekKey(d));pend=true;lastFreeze=k}
      else{run=0;pend=false}
      if(run>best)best=run;
      d.setTime(nx.getTime());
    }
  }
  const y=new Date(d0);y.setDate(y.getDate()-1);
  const done=hoje>=meta;if(done)run++;if(run>best)best=run;
  return {hoje,meta,done,run,best,freeze:!used.has(weekKey(d0)),frozeY:pend&&lastFreeze===dk(y)};
}
function topicDom(k){
  const now=Date.now();let w1=0,w0=0,n=0;
  for(const at of S.tent){const q=QMAP[at.q];if(!q||tkey(q)!==k)continue;const w=Math.pow(.5,(now-at.t)/DAY/HALF_LIFE);if(at.o&&at.g){w1+=w*.5;w0+=w*.5}else if(at.o)w1+=w;else w0+=w;n++}
  return {dom:(1+w1)/(2+w1+w0),n};
}
const newRound=()=>({n:0,ok:0,g:0,ids:[],t0:0,dom0:{}});
const dias=n=>n===1?'1 dia':n+' dias';
// Um bug antigo gravava vários erros seguidos quando a mesma questão era tocada de novo.
// Respostas à mesma questão em menos de 5 min contam como uma só (vale a primeira).
function mergeData(a,b){
  const o={...a};
  o.tent=dedupTent([...a.tent,...b.tent.filter(x=>!a.tent.some(y=>y.q===x.q&&y.t===x.t))]);
  o.leit={...a.leit};for(const k in b.leit){const x=b.leit[k],y=a.leit[k];if(!y)o.leit[k]=x;else{const la=Math.max(...a.tent.filter(t=>t.q===k).map(t=>t.t),0),lb=Math.max(...b.tent.filter(t=>t.q===k).map(t=>t.t),0);if(lb>la)o.leit[k]=x}}
  o.com={...b.com,...a.com};for(const k in b.com)if(a.com[k]&&a.com[k]!==b.com[k]&&!a.com[k].includes(b.com[k]))o.com[k]=a.com[k]+'\n'+b.com[k];
  const ids=new Set(a.custom.map(q=>q.id));o.custom=[...a.custom,...b.custom.filter(q=>!ids.has(q.id))];
  o.imp={...b.imp,...Object.fromEntries(Object.entries(a.imp).filter(([,v])=>v.length))};
  o.impT={...b.impT,...Object.fromEntries(Object.entries(a.impT||{}).filter(([,v])=>Object.keys(v).length))};
  o.mat={...b.mat,...a.mat};o.matQ={...b.matQ,...a.matQ};o.sim={...b.sim,...a.sim};
  o.metas=(a.metas&&a.metas.length)?a.metas:(b.metas||[]);
  return o;
}
function dedupTent(arr){
  const last={},out=[];
  for(const x of arr.slice().sort((a,b)=>a.t-b.t)){
    const s=last[x.q];
    if(s!==undefined&&x.t-s<5*6e4)continue;
    last[x.q]=x.t;out.push(x);
  }
  return out;
}
function answer(orig){
  const q=QMAP[U.cur];if(!q||U.answered)return;
  const ok=orig===q.c, now=Date.now();
  const g=!!U.guess;
  const k=tkey(q),before=topicDom(k),h0=habit();
  const R=U.round;if(!R.n)R.t0=now;if(!(k in R.dom0))R.dom0[k]=before.dom;
  const at={q:q.id,o:ok?1:0,t:now};if(g)at.g=1;
  S.tent.push(at);
  R.n++;if(ok)R.ok++;if(ok&&g)R.g++;R.ids.push(q.id);
  if(S.tent.length>MAX_TENT)S.tent=S.tent.slice(-MAX_TENT);
  const prev=S.leit[q.id]?{...S.leit[q.id]}:null;
  schedule(q.id,ok,g,now);
  U.answered={ch:orig,ok,g,prev,t:now};U.sess.n++;if(ok)U.sess.ok++;
  save('progresso');render();
  const fb=$('#fb');if(fb)fb.scrollIntoView({behavior:'smooth',block:'nearest'});
  const after=topicDom(k),h1=habit();
  if(!h0.done&&h1.done)toast(`🎯 Meta do dia batida! 🔥 ${dias(h1.run)} seguidos`,3500);
  else if(lvl(before.dom)!=='hi'&&lvl(after.dom)==='hi'&&after.n>=3)toast(`🟩 Assunto no verde: ${q.a}`,3000);
}

// ---------- armazenamento ----------
const LK='prioriza-bancarios-v1';
const ST={mode:'none',db:null,uid:null,busy:{},dirty:{},timers:{}};
function docNames(){return ['progresso','comentarios','questoes','materiais','simulados',...Object.keys(S.sim||{}).map(id=>'sim_'+id),...Object.keys(PROVAS).map(id=>'imp_'+id),...Object.keys(S.mat||{}).flatMap(id=>['mat_'+id,'matq_'+id])]}
function payload(n){
  if(n==='progresso')return {v:1,t:S.tent,l:S.leit,p:S.perfil,m:S.metas};
  if(n==='comentarios')return {v:1,c:S.com};
  if(n==='questoes')return {v:1,q:S.custom};
  if(n==='simulados'){const r={};for(const [k,v] of Object.entries(S.sim||{}))r[k]=v.n;return {v:1,ids:r}}
  if(n.startsWith('sim_')){const x=(S.sim||{})[n.slice(4)];return {v:1,n:x?x.n:'',q:x?x.qs:[],t:x?x.t:{}}}
  if(n==='materiais')return {v:1,ids:Object.keys(S.mat||{})};
  if(n.startsWith('matq_'))return {v:1,q:(S.matQ||{})[n.slice(5)]||[]};
  if(n.startsWith('mat_'))return {v:1,m:(S.mat||{})[n.slice(4)]||null};
  return {v:1,q:S.imp[n.slice(4)]||[],t:(S.impT||{})[n.slice(4)]||{}};
}
function validQ(q){return q&&typeof q.id==='string'&&DISC[q.d]&&typeof q.a==='string'&&typeof q.e==='string'&&Array.isArray(q.o)&&q.o.length>=2&&q.o.every(x=>typeof x==='string')&&Number.isInteger(q.c)&&q.c>=0&&q.c<q.o.length}
function fixTopic(q){const r=RULES[q.d];if(r&&!r.some(x=>x[0]===q.a))q.a=classify(q.d,q.e+' '+q.o.join(' '));return q}
function norm(o){
  o=o||{};
  const imp={};
  if(o.imp&&typeof o.imp==='object')for(const k in o.imp)if(PROVAS[k]&&Array.isArray(o.imp[k]))imp[k]=o.imp[k].filter(validQ).map(q=>fixTopic({...q,u:1,f:1,of:k}));
  return{
    tent:dedupTent(Array.isArray(o.tent)?o.tent.filter(x=>x&&typeof x.q==='string'&&typeof x.t==='number').map(x=>x.g?{q:x.q,o:x.o?1:0,t:x.t,g:1}:{q:x.q,o:x.o?1:0,t:x.t}):[]),
    leit:(()=>{const r={};if(o.leit&&typeof o.leit==='object'&&!Array.isArray(o.leit))for(const k in o.leit){const v=o.leit[k];if(v&&Number.isFinite(+v.d))r[k]={b:Math.max(0,Math.min(INTERVALS.length-1,+v.b||0)),d:+v.d}}return r})(),
    com:(()=>{const r={};if(o.com&&typeof o.com==='object')for(const k in o.com)if(typeof o.com[k]==='string')r[k]=o.com[k];return r})(),
    custom:Array.isArray(o.custom)?o.custom.filter(validQ).map(q=>({...q,u:1})):[],
    imp,
    impT:(()=>{const r={};if(o.impT&&typeof o.impT==='object')for(const k in o.impT)if(PROVAS[k]&&o.impT[k]&&typeof o.impT[k]==='object'){r[k]={};for(const t in o.impT[k])if(typeof o.impT[k][t]==='string')r[k][t]=o.impT[k][t]}return r})(),
    mat:(()=>{const r={};if(o.mat&&typeof o.mat==='object')for(const k in o.mat){const m=o.mat[k];if(m&&typeof m.t==='string'&&DISC[m.d]&&Array.isArray(m.secs))r[k]={id:k,t:m.t,d:m.d,pages:m.pages||0,secs:m.secs.filter(x=>x&&typeof x.tx==='string'&&typeof x.t==='string').map(x=>({t:x.t,k:x.k||'teo',p0:+x.p0||1,p1:+x.p1||+x.p0||1,tx:x.tx,tp:Array.isArray(x.tp)?x.tp.filter(y=>typeof y==='string'):[]}))}}return r})(),
    matQ:(()=>{const r={};if(o.matQ&&typeof o.matQ==='object')for(const k in o.matQ)if(Array.isArray(o.matQ[k]))r[k]=o.matQ[k].filter(validQ).map(q=>fixTopic({...q,u:1,f:1,mt:k}));return r})(),
    sim:(()=>{const r={};if(o.sim&&typeof o.sim==='object')for(const k in o.sim){const x=o.sim[k];if(!x||!Array.isArray(x.qs))continue;const t={};if(x.t&&typeof x.t==='object')for(const y in x.t)if(typeof x.t[y]==='string')t[y]=x.t[y];r[k]={n:typeof x.n==='string'&&x.n?x.n:'Simulado',t,qs:x.qs.filter(validQ).map(q=>fixTopic({...q,u:1,f:1,gs:k}))}}return r})(),
    perfil:PERFIS[o.perfil]?o.perfil:'bb',
    metas:Array.isArray(o.metas)?o.metas.filter(x=>Array.isArray(x)&&Number.isFinite(+x[0])&&Number.isInteger(+x[1])&&+x[1]>=1&&+x[1]<=300).map(x=>[+x[0],+x[1]]).sort((a,b)=>a[0]-b[0]):[]
  };
}
// Dados no aparelho: IndexedDB (cabe muito mais que o localStorage); localStorage só como reserva.
const IDB={db:null,timer:null};
function idbOpen(){return new Promise(res=>{try{const r=indexedDB.open('prioriza',1);r.onupgradeneeded=()=>r.result.createObjectStore('kv');r.onsuccess=()=>res(r.result);r.onerror=()=>res(null)}catch(e){res(null)}})}
function idbGet(k){return new Promise(res=>{try{const t=IDB.db.transaction('kv').objectStore('kv').get(k);t.onsuccess=()=>res(t.result);t.onerror=()=>res(undefined)}catch(e){res(undefined)}})}
function idbPut(k,v){return new Promise(res=>{try{const tx=IDB.db.transaction('kv','readwrite');tx.objectStore('kv').put(v,k);tx.oncomplete=()=>res(true);tx.onerror=tx.onabort=()=>res(false)}catch(e){res(false)}})}
async function writeLocalNow(){
  clearTimeout(IDB.timer);IDB.timer=null;
  const txt=JSON.stringify(S);
  if(IDB.db){const ok=await idbPut(LK,txt);if(ok){try{localStorage.removeItem(LK)}catch(e){}saveLight();return}if(ST.mode!=='cloud')setStatus('err','Espaço cheio no aparelho')}
  try{localStorage.setItem(LK,txt)}catch(e){}
}
// Progresso e comentários (pequenos) vão na hora para o localStorage, que grava na mesma instrução;
// o resto (questões importadas, textos, aulas) vai logo depois para o IndexedDB.
const LKP=LK+'-progresso';
function saveLight(){try{localStorage.setItem(LKP,JSON.stringify({tent:S.tent,leit:S.leit,com:S.com,perfil:S.perfil,custom:S.custom,metas:S.metas}))}catch(e){}}
function saveLocal(){saveLight();clearTimeout(IDB.timer);IDB.timer=setTimeout(writeLocalNow,60)}
async function loadLocal(){
  IDB.db=await idbOpen();
  let r=IDB.db?await idbGet(LK):undefined;
  if(!r){try{r=localStorage.getItem(LK)}catch(e){}}
  let o={};if(r){try{o=JSON.parse(r)}catch(e){}}
  try{const l=localStorage.getItem(LKP);if(l)Object.assign(o,JSON.parse(l))}catch(e){}
  if(r||Object.keys(o).length)S=norm(o);
  try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist()}catch(e){}
}
addEventListener('pagehide',()=>{if(IDB.timer)writeLocalNow()});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&IDB.timer)writeLocalNow()});
function ref(n){return ST.db.doc('data/users/'+ST.uid+'/'+n)}
function anyBusy(){return Object.values(ST.busy).some(Boolean)||Object.values(ST.timers).some(Boolean)}
function save(n,delay){
  saveLocal();
  if(ST.mode!=='cloud')return;
  clearTimeout(ST.timers[n]);ST.timers[n]=null;
  if(delay){setStatus('saving');ST.timers[n]=setTimeout(()=>{ST.timers[n]=null;flush(n)},delay)}
  else flush(n);
}
async function flush(n){
  if(ST.busy[n]){ST.dirty[n]=true;return}
  ST.busy[n]=true;setStatus('saving');
  let err=null;
  for(let k=0;k<2;k++){
    try{await ref(n).set(JSON.parse(JSON.stringify(payload(n))));err=null;break}
    catch(e){err=e||{};if(err.code==='unavailable'&&k===0){await sleep(500+Math.random()*1000);continue}break}
  }
  ST.busy[n]=false;
  if(ST.dirty[n]){ST.dirty[n]=false;return flush(n)}
  if(err){
    if(err.code==='quota_exceeded')setStatus('err','Espaço cheio');
    else if(err.code==='revoked'||err.code==='invalid_argument'){ST.mode='local';setStatus('local')}
    else setStatus('err','Erro ao salvar');
  } else if(!anyBusy())setStatus('ok');
}
function setStatus(k,msg){
  const el=$('#status');el.className='pill';
  if(k==='ok'){el.classList.add('ok');el.textContent='✓ Sincronizado'}
  else if(k==='saving')el.textContent='Salvando…';
  else if(k==='loading')el.textContent='Carregando…';
  else if(k==='err'){el.classList.add('err');el.textContent=msg||'Erro'}
  else el.textContent='Salvo neste aparelho';
}
function withTimeout(p,ms){return Promise.race([p,new Promise((_,rej)=>setTimeout(()=>rej({code:'timeout'}),ms))])}

async function boot(){
  await loadLocal();rebuild();render();
  const sessionStart=S.tent.length;
  let db=null,user=null;
  try{if(window.claude&&typeof window.claude.use==='function'){[db,user]=await Promise.all([window.claude.use('db'),window.claude.use('user')])}}catch(e){}
  let uid=null;
  if(db&&user){try{uid=await user.id()}catch(e){}}
  if(!db||!uid){ST.mode='local';setStatus('local');return}
  ST.db=db;ST.uid=uid;setStatus('loading');
  try{
    const names=docNames();
    const snaps=await withTimeout(Promise.all(names.map(n=>ref(n).get())),10000);
    const got={},missing=[];
    names.forEach((n,i)=>{const s=snaps[i];if(s&&s.exists)got[n]=s.data();else missing.push(n)});
    const localNew=S.tent.slice(sessionStart);
    const imp={};
    let mats={},matQ={};
    const mids=got.materiais&&Array.isArray(got.materiais.ids)?got.materiais.ids.filter(x=>typeof x==='string'):Object.keys(S.mat||{});
    if(got.materiais){
      const ns=mids.flatMap(id=>['mat_'+id,'matq_'+id]);
      const ss=await withTimeout(Promise.all(ns.map(n=>ref(n).get())),15000);
      ns.forEach((n,i)=>{const sn=ss[i];if(!sn||!sn.exists)return;const v=sn.data();if(n.startsWith('matq_'))matQ[n.slice(5)]=v.q||[];else if(v.m)mats[n.slice(4)]=v.m});
    } else {mats=S.mat||{};matQ=S.matQ||{}}
    let sims={};
    if(got.simulados){
      const sids=Object.keys(got.simulados.ids||{});
      const ss=await withTimeout(Promise.all(sids.map(id=>ref('sim_'+id).get())),15000);
      sids.forEach((id,i)=>{const sn=ss[i];if(!sn||!sn.exists)return;const v=sn.data();sims[id]={n:v.n||got.simulados.ids[id],t:v.t||{},qs:v.q||[]}});
    } else sims=S.sim||{};
    const impT={};
    for(const id of Object.keys(PROVAS)){const n='imp_'+id;imp[id]=got[n]?got[n].q:(S.imp[id]||[]);impT[id]=got[n]?(got[n].t||{}):((S.impT||{})[id]||{})}
    const cloud=norm({
      tent:got.progresso?got.progresso.t:S.tent,
      leit:got.progresso?got.progresso.l:S.leit,
      perfil:got.progresso&&got.progresso.p?got.progresso.p:S.perfil,
      metas:got.progresso&&Array.isArray(got.progresso.m)?got.progresso.m:S.metas,
      com:got.comentarios?got.comentarios.c:S.com,
      custom:got.questoes?got.questoes.q:S.custom,
      imp,impT,mat:mats,matQ,sim:sims
    });
    if(got.progresso&&localNew.length){const seen=new Set(cloud.tent.map(x=>x.q+'@'+x.t));for(const x of localNew)if(!seen.has(x.q+'@'+x.t))cloud.tent.push(x)}
    S=cloud;rebuild();ST.mode='cloud';saveLocal();setStatus('ok');
    const has=n=>{const p=payload(n);return n==='progresso'?S.tent.length>0:n==='comentarios'?Object.keys(S.com).length>0:n==='materiais'?p.ids.length>0:n==='simulados'?Object.keys(p.ids).length>0:n.startsWith('mat_')?!!p.m:(p.q&&p.q.length>0)};
    const toWrite=missing.filter(has);
    if(got.progresso&&localNew.length)toWrite.push('progresso');
    for(const n of toWrite)await flush(n);
    if(U.cur&&!QMAP[U.cur])U.cur=null;
    render();
  }catch(e){ST.mode='local';setStatus('err','Sem conexão: salvando neste aparelho')}
}

// ---------- leitura de PDF (no aparelho) ----------
function loadScript(src){return new Promise((res,rej)=>{const s=document.createElement('script');s.src=src;s.onload=res;s.onerror=()=>rej(new Error('não carregou o leitor de PDF'));document.head.appendChild(s)})}
async function loadPdfJs(){
  if(!window.pdfjsLib)await loadScript(PDFJS+'pdf.min.js');
  if(!window.pdfjsWorker)await loadScript(PDFJS+'pdf.worker.min.js');
  window.pdfjsLib.GlobalWorkerOptions.workerSrc=PDFJS+'pdf.worker.min.js';
}
function toLines(items){
  items.sort((a,b)=>b.y-a.y||a.x-b.x);
  const rows=[];let cur=null;
  for(const it of items){
    if(cur&&Math.abs(it.y-cur.y)<=Math.max(2,cur.h*.45))cur.items.push(it);
    else{cur={y:it.y,h:it.h,items:[it]};rows.push(cur)}
  }
  return rows.map(r=>{
    r.items.sort((a,b)=>a.x-b.x);let s='',end=null;
    for(const it of r.items){if(end!==null&&it.x-end>r.h*.18&&!s.endsWith(' ')&&!it.s.startsWith(' '))s+=' ';s+=it.s;end=it.x+it.w}
    return s.replace(/\s+/g,' ').trim();
  }).filter(Boolean);
}
async function pdfLines(file){
  const data=new Uint8Array(await file.arrayBuffer());
  const pdf=await window.pdfjsLib.getDocument({data,isEvalSupported:false,disableFontFace:true}).promise;
  const lines=[];let head='';
  for(let p=1;p<=pdf.numPages;p++){
    const page=await pdf.getPage(p);const vp=page.getViewport({scale:1});
    const tc=await page.getTextContent();
    const W=vp.width,H=vp.height,its=[];
    for(const it of tc.items){
      if(!it||typeof it.str!=='string'||!it.str)continue;
      const tr=it.transform;its.push({s:it.str,x:tr[4],y:tr[5],w:it.width||0,h:Math.hypot(tr[2],tr[3])||it.height||10});
    }
    if(p<=3)head+=' '+its.map(i=>i.s).join(' ');
    const body=its.filter(i=>i.y<H*.95&&i.y>H*.03);
    const mid=W/2;
    lines.push(...toLines(body.filter(i=>i.x<mid-2)),...toLines(body.filter(i=>i.x>=mid-2)));
  }
  return {lines,head:head.replace(/\s+/g,' ')};
}
function isBoiler(l){
  const u=l.toUpperCase().replace(/\s+/g,' ').trim();
  if(/^(BANCO DO BRASIL|CAIXA ECON[ÔO]MICA FEDERAL|RASCUNHO|BNB|BANESE|BANRISUL|BANCO DA AMAZ[ÔO]NIA)$/.test(u))return true;
  if(/^(ESCRITUR[ÁA]RIO|ANALISTA BANC[ÁA]RIO 1|T[ÉE]CNICO BANC[ÁA]RIO( NOVO| I)?)\s*\d*$/.test(u))return true;
  if(/^(PROVA [A-C1-9]\s*[-–]\s*)?T[ÉE]CNICO BANC[ÁA]RIO( I| NOVO)?\s*([-–]\s*PROVA\s*[A-C])?\s*(GABARITO\s*\d)?\s*\d*$/.test(u))return true;
  if(/GABARITO\s*\d/.test(u)&&(/PROVA/.test(u)||u.length<16))return true;
  if(/^(AGENTE COMERCIAL\s*[-–]\s*PROVA|PROVA\s*\d+\s*[-–]\s*T[ÉE]CNICO)/.test(u))return true;
  if(/^(ESCRITUR[ÁA]RIO\s*[-–]\s*AGENTE COMERCIAL|BANCO DO BRASIL\s*[-–]\s*PROVA)/.test(u))return true;
  if(/^[_.\s-]{4,}$/.test(u))return true;
  if(!/[a-zà-ú]/.test(l)&&/^(L[ÍI]NGUA|MATEM[ÁA]TICA|ATUALIDADES|CONHECIMENTOS|VENDAS|NO[ÇC][ÕO]ES|COMPORTAMENTOS|ATENDIMENTO|PROBABILIDADE)/.test(u))return true;
  return false;
}
function parseBlocks(lines,total){
  // Agrupa por alternativa (E): cada "(E)" fecha uma questão. Números soltos antes dela competem;
  // vence o que segue a sequência. Tolera páginas fora de ordem, gráficos e linhas numeradas de textos.
  // Também guarda, em blocks._pre[n], o que vem entre a questão anterior e a questão n (textos de apoio).
  const L2=[],OI=[];lines.forEach((l,k)=>{if(!isBoiler(l)){L2.push(l);OI.push(k)}});
  const isE=l=>/(^|\s)\(E\)/.test(l);
  const groups=[];let cands=[];
  for(let i=0;i<L2.length;i++){
    const l=L2[i];
    if(/^\d{1,3}$/.test(l)&&+l>=1&&+l<=total)cands.push({k:+l,i});
    if(isE(l)){
      let j=i;let tail=l.replace(/^.*\(E\)/,'').trim();
      while(j+1<L2.length&&!/^\d{1,3}$/.test(L2[j+1])&&!/[.?!;:)]$/.test(tail)&&/^[a-zà-ú]/.test(L2[j+1])){j++;tail=L2[j]}
      if(cands.length)groups.push({cands,end:j});
      cands=[];i=j;
    }
  }
  const blocks={};const pre={};let n=1,prevEnd=-1;
  for(const g of groups){
    let pick=g.cands.filter(c=>c.k===n).pop();
    if(!pick){const ahead=g.cands.filter(c=>c.k>n&&c.k<=n+3).sort((a,b)=>a.k-b.k);pick=ahead[0]}
    const from=prevEnd;prevEnd=g.end;
    if(!pick)continue;
    const bl=L2.slice(pick.i+1,g.end+1).filter(l=>!(/^\d{1,3}$/.test(l)&&g.cands.some(c=>c.i>pick.i&&L2[c.i]===l)));
    if(!splitBlock(bl)){if(pick.k===n)n++;else n=pick.k+1;continue}
    blocks[pick.k]=bl;
    const a=from<0?0:OI[from]+1,b=OI[pick.i];
    pre[pick.k]=lines.slice(a,b);
    n=pick.k+1;if(n>total)break;
  }
  Object.defineProperty(blocks,'_pre',{value:pre,enumerable:false});
  return blocks;
}
// Texto de apoio: o trecho antes da questão, sem cabeçalhos, capa, instruções e números de linha.
function supportText(raw){
  if(!raw||!raw.length)return '';
  let k=0;
  raw.forEach((l,i)=>{const u=l.toUpperCase().trim();if(/^(RASCUNHO|CONHECIMENTOS (B[ÁA]SICOS|ESPEC[ÍI]FICOS)|L[ÍI]NGUA (PORTUGUESA|INGLESA)( I+)?|ATUALIDADES.*|REDA[ÇC][ÃA]O)$/.test(u)||/^_{5,}/.test(u)||/LEIA ATENTAMENTE|CART[ÃA]O-RESPOSTA/.test(u))k=i+1});
  // Mantém as quebras e os números de linha do caderno (as questões citam "linha 12", "l. 5").
  const ls=raw.slice(k).filter(l=>!isBoiler(l)&&!/^_{3,}/.test(l));const out=[];let pend='';
  for(const l of ls){if(/^\d{1,2}$/.test(l.trim())){pend=l.trim();continue}out.push(pend?pend+'  '+l:l);pend=''}
  const t=out.join('\n').trim();
  if(t.length<250||!/[a-zà-ú]{4,}\s+[a-zà-ú]{3,}/.test(t))return '';
  return t;
}
function splitBlock(lines){
  let t='';
  for(const l of lines){
    if(!t){t=l;continue}
    if(/[-­]$/.test(t)&&/^[a-zà-ú]/.test(l))t=t.replace(/[-­]$/,'')+l;
    else if(/^\([A-E]\)/.test(l)||/^(\(?[ivx]{1,4}\)|[IVX]{1,4}\s*[-–.])\s/.test(l))t+='\n'+l;
    else t+=' '+l;
  }
  const idx=[];let from=0;
  for(const X of L){const m=t.slice(from).indexOf('('+X+')');if(m<0)return null;idx.push(from+m);from=from+m+3}
  const e=t.slice(0,idx[0]).replace(/[ \t]+/g,' ').replace(/ ?\n ?/g,'\n').trim();
  const o=idx.map((p,i)=>t.slice(p+3,i<4?idx[i+1]:undefined).replace(/\s+/g,' ').trim());
  if(e.length<10||o.some(x=>!x))return null;
  return {e,o};
}
function secOf(Pv,n){return Pv.secs.find(s=>n>=s[0]&&n<=s[1])}
function buildImport(pid,blocks){
  const Pv=PROVAS[pid],qs=[],bad=[],skipped={texto:0,anulada:0},texts={};let nt=0;
  const pre=blocks._pre||{};let cur=null,curSec=null;
  const refRe=/\btexto\b|\btrecho|fragmento|par[áa]grafo|\(l\.|\blinhas?\b|\bverso|\btext\b|paragraph|excerpt|passage|\bline\b|o autor|a autora|cr[ôo]nica|\bpoema/i;
  for(let n=1;n<=Pv.total;n++){
    const sec=secOf(Pv,n);
    if(sec!==curSec){curSec=sec;cur=null}
    const k=Pv.key[n-1];
    const b=blocks[n]&&splitBlock(blocks[n]);
    const st=supportText(pre[n]);
    if(st){nt++;texts['t'+nt]=st;cur='t'+nt}
    if(!L.includes(k)){skipped.anulada++;continue}
    if(!b){bad.push(n);continue}
    const needs=sec[3]||(Pv.skip&&Pv.skip.includes(n))||refRe.test(b.e);
    let ti=null;
    if(needs&&cur)ti=cur;
    else if(needs&&(sec[3]||(Pv.skip&&Pv.skip.includes(n)))&&b.e.length<250){skipped.texto++;continue}
    const d=sec[2];
    const q={id:pid+'_'+n,d,a:classify(d,b.e+' '+b.o.join(' ')),e:b.e,o:b.o,c:L.indexOf(k),u:1,f:1,of:pid,n,src:Pv.short+' · Q'+n};
    if(ti)q.ti=ti;
    if(/tabela|gráfico|figura|quadro|imagem|abaixo/i.test(b.e))q.fig=1;
    qs.push(q);
  }
  const used={};for(const q of qs)if(q.ti)used[q.ti]=texts[q.ti];
  return {qs,bad,skipped,texts:used};
}
// ---------- simulados do Gran (PDF de "Baixar simulado", com gabarito no fim) ----------
const SIM_DISC=[['pt',/portugu|reda[çc][ãa]o oficial/i],['ing',/ingl[êe]s/i],['mf',/matem[áa]tica financeira/i],['est',/estat[íi]stica|probabilidade/i],['mat',/matem[áa]tica|racioc[íi]nio|l[óo]gica/i],['atu',/atualidades/i],['dig',/comportamentos digitais/i],['inf',/inform[áa]tica|tecnologia/i],['atd',/atendimento|recursos materiais/i],['vn',/vendas|negocia|marketing|comunica[çc][ãa]o social|administra[çc][ãa]o geral/i],['eti',/[ée]tica|compliance|meio ambiente|socioambiental|direito administrativo|diversidade/i],['leg',/legisla[çc][ãa]o federal|defesa do consumidor/i],['cb',/banc[áa]ri|legisla[çc][ãa]o dos [óo]rg|economia|finan[çc]|direito penal|previdenci|mercado/i]];
function simDisc(name){for(const [k,re] of SIM_DISC)if(re.test(name))return k;return 'cb'}
function simQs(){return Object.values(S.sim||{}).flatMap(s=>s.qs||[])}
async function simLines(file){
  const data=new Uint8Array(await file.arrayBuffer());
  const pdf=await window.pdfjsLib.getDocument({data,isEvalSupported:false,disableFontFace:true}).promise;
  const out=[];
  for(let p=1;p<=pdf.numPages;p++){
    const tc=await (await pdf.getPage(p)).getTextContent();const its=[];
    for(const it of tc.items){if(!it||typeof it.str!=='string'||!it.str.trim())continue;const tr=it.transform;its.push({s:it.str,x:tr[4],y:tr[5],w:it.width||0,h:Math.hypot(tr[2],tr[3])||it.height||10})}
    out.push(...toLines(its));
  }
  return out;
}
// Quebra o caderno em questões: "N. [Qid]" enunciado, "a ) … e )", "Disciplinas/Assuntos vinculados", "Fonte … Questão: N".
// O que fica entre o fim de uma questão e o início da próxima é texto de apoio.
function parseSim(lines){
  let gi=-1;for(let i=lines.length-1;i>=0;i--)if(/^Gabarito$/i.test(lines[i].trim())){gi=i;break}
  const key={};
  if(gi>=0)for(const m of lines.slice(gi).join(' ').matchAll(/\((\d{1,3})\s*=\s*([a-eA-E])\s*\)/g))key[+m[1]]=m[2].toUpperCase();
  const body=(gi>=0?lines.slice(0,gi):lines).filter(l=>!/^Simulado$/i.test(l.trim())&&!/^Criado em:/i.test(l.trim()));
  const qs=[];let pre=[],cur=null,state='pre';
  const done=s=>/Quest[ãa]o:\s*\d+\s*$/.test(s);
  for(const l of body){
    const m=l.match(/^(\d{1,3})\.\s*\[Q(\d+)\]\s*(.*)$/);
    if(m){if(cur)qs.push(cur);cur={n:+m[1],qid:m[2],pre,e:m[3]?[m[3]]:[],o:[],dl:'',fonte:'',fl:0};pre=[];state='e';continue}
    if(!cur){pre.push(l);continue}
    if(state==='fonte'){
      if(!done(cur.fonte)&&cur.fl<3){cur.fonte+=' '+l;cur.fl++;if(done(cur.fonte))state='after';continue}
      state='after';
    }
    if(state==='after'){pre.push(l);continue}
    if(/^Disciplinas\/Assuntos vinculados:/i.test(l)){state='dl';cur.dl=l.replace(/^Disciplinas\/Assuntos vinculados:\s*/i,'');continue}
    if(state==='dl'){
      if(/^Fonte:/i.test(l)){cur.fonte=l;state=done(l)?'after':'fonte';continue}
      cur.dl+=' '+l;continue;
    }
    const om=l.match(/^([a-e])\s?\)\s*(.*)$/);
    if(om&&om[1].charCodeAt(0)-97===cur.o.length&&(state==='e'||state==='o')){cur.o.push(om[2]);state='o';continue}
    if(state==='o'){cur.o[cur.o.length-1]+=' '+l;continue}
    cur.e.push(l);
  }
  if(cur)qs.push(cur);
  return {qs,key};
}
function simJoin(ls){
  let t='';
  for(const l of ls){
    if(!t){t=l;continue}
    if(/[-­]$/.test(t)&&/^[a-zà-ú]/.test(l))t=t.replace(/[-­]$/,'')+l;
    else if(/^(I{1,3}|IV|VI{0,3}|IX|X)\s*[–-]\s|^[•▪]/.test(l))t+='\n'+l;
    else t+=' '+l;
  }
  return t.replace(/[ \t]+/g,' ').trim();
}
function simText(pre){
  const ls=pre.map(l=>l.replace(/_{2,}/g,' ').replace(/\s+/g,' ').trim()).filter(Boolean);
  const t=ls.join('\n').trim();
  if(t.length<200||!/[a-zà-ú]{4,}\s+[a-zà-ú]{3,}/i.test(t))return '';
  return t;
}
function simName(fname){
  const b=String(fname||'Simulado').replace(/\.pdf$/i,'');
  const m=b.match(/^GranSim_([A-Za-z]+)(\d{4})_(\d+)o$/);
  if(m)return 'Gran · '+({BB:'BB',Caixa:'Caixa',BASA:'BASA',BNB:'BNB',Banrisul:'Banrisul',Banese:'Banese'}[m[1]]||m[1])+' '+m[2]+' · '+m[3]+'º simulado';
  const m2=b.match(/^GranSim_([A-Za-z]+)(\d{4})_(.+)$/);
  if(m2)return 'Gran · '+m2[1]+' '+m2[2]+' · '+m2[3].replace(/_\d+$/,'').replace(/^pre-edital (\d+)o$/,'pré-edital · $1º simulado').replace(/^disciplina disc$/,'disciplina').trim();
  return 'Gran · '+b.replace(/[_]+/g,' ').trim();
}
async function simImport(file){
  const lines=await simLines(file);
  const {qs:raw,key}=parseSim(lines);
  if(!raw.length)return {ok:false,msg:'não consegui separar as questões do simulado'};
  if(!Object.keys(key).length)return {ok:false,msg:'o PDF não trouxe o gabarito no fim'};
  const sid='g'+hash(raw.map(q=>q.qid).join(',')).toString(36);
  const name=simName(file.name);
  const refRe=/\btexto\b|\btrecho|fragmento|par[áa]grafo|\(l\.|\blinhas?\b|\bverso|\btext\b|paragraph|excerpt|passage|\bline\b|o autor|a autora|cr[ôo]nica|\bpoema|\bauthor\b/i;
  const fp=e=>nrm(e).slice(0,110);
  const seen=new Set();
  for(const q of QS.concat(impQ(),matQs(),Object.entries(S.sim||{}).filter(([k])=>k!==sid).flatMap(([,s])=>s.qs||[])))seen.add(fp(q.e));
  const own=new Set(Object.entries(S.sim||{}).filter(([k])=>k!==sid).flatMap(([,s])=>(s.qs||[]).map(q=>q.id)));
  const out=[],texts={};let nt=0,curT=null,curD=null,dup=0,bad=0;
  for(const r of raw){
    const dn=(r.dl.split('>')[0]||'').trim();
    const d=simDisc(dn);
    if(d!==curD){curD=d;curT=null}
    const st=simText(r.pre);
    if(st){nt++;texts['t'+nt]=st;curT='t'+nt}
    const k=key[r.n];
    const e=simJoin(r.e),o=r.o.map(x=>x.replace(/\s+/g,' ').trim());
    if(!k||o.length<2||!e||o.some(x=>!x)||L.indexOf(k)>=o.length){bad++;continue}
    const id='gq'+r.qid;
    if(own.has(id)||seen.has(fp(e))){dup++;continue}
    seen.add(fp(e));
    const assuntos=r.dl.replace(/^[^>]*>?/,'');
    const q={id,d,a:classify(d,assuntos+' '+e+' '+o.join(' ')),e,o,c:L.indexOf(k),u:1,f:1,gs:sid,n:r.n,src:name+' · Q'+r.n};
    if(curT&&(st||d==='pt'||d==='ing'||refRe.test(e)))q.ti=curT;
    if(/tabela|gráfico|figura|quadro|imagem|abaixo/i.test(e))q.fig=1;
    out.push(q);
  }
  if(!out.length)return {ok:false,msg:dup?'todas as questões já estavam no app':'não consegui ler as questões',dup};
  const used={};for(const q of out)if(q.ti)used[q.ti]=texts[q.ti];
  S.sim=S.sim||{};S.sim[sid]={n:name,t:used,qs:out};
  for(const q of out)delete PERM[q.id];
  rebuild();save('sim_'+sid);save('simulados');
  return {ok:true,sim:sid,name,n:out.length,dup,bad};
}
// Simulados do Gran em formato de caderno (PDF estático com "Letra x." e comentários dos professores).
function cadJoin(ls,brk){
  let t='';
  for(const raw of ls){const l=raw.trim();if(!l)continue;
    if(!t){t=l;continue}
    if(/[-­]$/.test(t)&&/^[a-zà-ú]/.test(l))t=t.replace(/[-­]$/,'')+l;
    else if(brk&&brk.test(l))t+='\n'+l;
    else t+=' '+l;
  }
  return t.replace(/[ \t]+/g,' ').trim();
}
function parseCad(lines){
  const clean=lines.map(l=>l.replace(/\u0001/g,'').replace(/\s+/g,' ').trim()).filter(l=>l&&!/SIMULADO/.test(l)&&!/^(ESCRITUR[ÁA]RIO|T[ÉE]CNICO BANC[ÁA]RIO|ANALISTA BANC[ÁA]RIO)[A-Z\s()\-–]*\d*$/.test(l));
  const ansRe=/^(?:Letra|Gabarito)\s*:?\s*([a-eA-E])\b/;
  const optRe=/^\(([A-E])\)\s*(.*)$/;
  const discOf=l=>{if(/[a-z]/.test(l)||/\d/.test(l)||l.length<5||!/^[A-ZÁÉÍÓÚÂÊÔÃÕÇ][A-ZÁÉÍÓÚÂÊÔÃÕÇ ,\-–()\/]+$/.test(l))return null;for(const [k,re] of CAD_DISC)if(re.test(l))return k;return null};
  const iL=clean.findIndex(l=>ansRe.test(l));if(iL<0)return [];
  let i1=-1;for(let i=iL;i>=0;i--)if(/^\d{1,3}$/.test(clean[i])){i1=i;break}
  if(i1<0)return [];
  let start=i1;for(let i=i1-1;i>=Math.max(0,i1-150);i--){if(discOf(clean[i])){start=i;break}if(ansRe.test(clean[i]))break}
  const isStart=(i,n)=>{if(clean[i]!==String(n))return false;for(let j=i+1;j<Math.min(clean.length,i+45);j++){const l=clean[j];if(/^\(A\)/.test(l))return true;if(ansRe.test(l)||l===String(n+1)||discOf(l))return false}return false};
  const qs=[];let disc=null,pre=[],cur=null,state='pre',n=+clean[i1]-1;
  for(let i=start;i>=0;i--){const d=discOf(clean[i]);if(d){disc=d;break}}
  for(let i=start;i<clean.length;i++){const l=clean[i];
    const sk=isStart(i,n+1)?1:(state==='x'||state==='e'||state==='o')&&isStart(i,n+2)?2:0;
    if(sk){if(cur)qs.push(cur);n+=sk;cur={n,d:disc||'cb',pre,e:[],o:[],k:null,x:[],ass:''};pre=[];state='e';continue}
    const d=discOf(l);
    if(d&&state!=='e'&&state!=='o'){disc=d;if(cur){qs.push(cur);cur=null}pre=[];state='head';continue}
    if(state==='head'){state='pre';if(l.split(' ').length<=4&&!/[.:;?!]$/.test(l))continue}
    if(state==='pre'||!cur){pre.push(l);continue}
    if(state==='e'||state==='o'){
      const m=l.match(optRe),a=l.match(ansRe);
      if(a&&cur.o.length>=2){cur.k=a[1].toUpperCase();state='x';continue}
      if(/^anulad[ao]\.?$/i.test(l)&&cur.o.length>=2){cur.k='X';state='x';continue}
      if(m&&m[1].charCodeAt(0)-65===cur.o.length){cur.o.push([m[2]]);state='o';continue}
      if(state==='o'){cur.o[cur.o.length-1].push(l);continue}
      cur.e.push(l);continue;
    }
    if(state==='x'){const a=l.match(/^Assunto abordado:\s*(.*)$/i);if(a&&!cur.ass){cur.ass=a[1];continue}cur.x.push(l)}
  }
  if(cur)qs.push(cur);
  return qs;
}
const CAD_DISC=[['ing',/INGL[ÊE]S|INGLESA/],['mf',/MATEM[ÁA]TICA FINANCEIRA/],['est',/ESTAT[ÍI]STICA|PROBABILIDADE/],['mat',/MATEM[ÁA]TICA|RACIOC[ÍI]NIO|L[ÓO]GICA/],['atu',/ATUALIDADES/],['dig',/COMPORTAMENTOS DIGITAIS/],['inf',/INFORM[ÁA]TICA|TECNOLOGIA/],['atd',/ATENDIMENTO/],['vn',/VENDAS|NEGOCIA|MARKETING|ADMINISTRA/],['eti',/[ÉE]TICA|COMPLIANCE|SOCIOAMBIENTAL|DIVERSIDADE|SUSTENTAB|\bASG\b|\bESG\b|GOVERNAN/],['leg',/LEGISLA[ÇC]|CONSUMIDOR|PROTE[ÇC][ÃA]O DE DADOS|LEI GERAL DE PROTE/],['pt',/PORTUGU|REDA[ÇC][ÃA]O/],['cb',/BANC[ÁA]RI|ECONOMIA|FINANCEIR|MERCADO|COOPERATIV|SISTEMA FINANCEIRO|CR[ÉE]DITO/]];
// O "Assunto abordado" do professor ajuda quando o título da seção não foi reconhecido.
const ASS_DISC=[['eti',/[ée]tica|conduta|integridade|compliance|responsabilidade socio|\basg\b|\besg\b|socioambient|sustentab|diversidade/i],['leg',/lgpd|prote[çc][ãa]o de dados|dados pessoais|defesa do consumidor/i],['cb',/pol[íi]ticas? econ|monet[áa]ri|banco central|\bbancos?\b|pagamentos|cr[ée]dito|microfinan|fundos? constitucion|garantias|previd[êe]ncia|seguros?\b|t[íi]tulos de capitaliza|c[âa]mbio|mercado (financeiro|de capitais|monet)|cooperativ|sistema financeiro|\bcvm\b|\bcmn\b|\bbacen\b|lavagem/i],['mf',/juros|amortiza|taxas? (de juros|efetiva|nominal|equivalente|real)|desconto (racional|comercial)|valor presente|fluxo de caixa/i],['est',/estat[íi]stica|probabilidade|m[ée]dia|mediana|desvio padr/i],['inf',/inform[áa]tica|computa|software|planilha|navegador|seguran[çc]a da informa|redes? de computadores|nuvem|sistema operacional/i],['vn',/vendas|marketing|negocia[çc]/i],['atd',/atendimento/i]];
const assDisc=a=>{if(!a)return null;for(const [k,re] of ASS_DISC)if(re.test(a))return k;return null};
const isCad=lines=>lines.filter(l=>/^(?:Letra|Gabarito)\s*:?\s*[a-eA-E]\b/.test(l.trim())).length>=3&&lines.filter(l=>/^\(A\)/.test(l.trim())).length>=3;
function cadName(fname,lines){
  if(/^GranSim_/i.test(fname||''))return simName(fname);
  const h=lines.find(l=>/\d\s*[°º]\s*SIMULADO/.test(l));
  const m=h&&h.match(/^(.+?)\s*[–-]\s*(\d+)\s*[°º]\s*SIMULADO/);
  return m?'Gran · '+m[1].trim()+' · '+m[2]+'º simulado':simName(fname);
}
function cadImport(file,lines){
  const raw=parseCad(lines);
  if(!raw.length)return {ok:false,msg:'não consegui separar as questões do simulado'};
  let name=cadName(file.name,lines);
  if(/disciplina$/.test(name)&&DISC[raw[0].d])name+=' · '+DISC[raw[0].d].n;
  const sid='c'+hash(name+'|'+raw.length+'|'+raw.slice(0,3).map(q=>q.e.join(' ')).join('|')).toString(36);
  const refRe=/\btexto\b|\btrecho|fragmento|par[áa]grafo|\(l\.|\blinhas?\b|\bverso|\btext\b|paragraph|excerpt|passage|\bline\b|o autor|a autora|cr[ôo]nica|\bpoema|\bauthor\b/i;
  const fp=e=>nrm(e).slice(0,110);
  const seen=new Set();
  for(const q of QS.concat(impQ(),matQs(),Object.entries(S.sim||{}).filter(([k])=>k!==sid).flatMap(([,s])=>s.qs||[])))seen.add(fp(q.e));
  const out=[],texts={};let nt=0,curT=null,curD=null,dup=0,bad=0,anul=0;
  for(const r of raw){
    if(r.d!==curD){curD=r.d;curT=null}
    const st=simText(r.pre);
    if(st){nt++;texts['t'+nt]=st;curT='t'+nt}
    if(r.k==='X'){anul++;continue}
    const e=cadJoin(r.e,/^(I{1,3}|IV|VI{0,3}|IX|X)\s*[–-]\s|^[•▪]/),o=r.o.map(x=>cadJoin(x));
    if(!r.k||o.length<2||!e||o.some(x=>!x)||L.indexOf(r.k)>=o.length){bad++;continue}
    if(seen.has(fp(e))){dup++;continue}
    seen.add(fp(e));
    const d=(r.d==='pt'||r.d==='ing')?r.d:(assDisc(r.ass)||r.d);
    const q={id:sid+'_'+r.n,d,a:classify(d,r.ass+' '+e+' '+o.join(' ')),e,o,c:L.indexOf(r.k),u:1,f:1,gs:sid,n:r.n,src:name+' · Q'+r.n};
    const x=cadJoin(r.x,/^\(([A-E])\)|^Letra|^Item|^[IVX]+\s*[–-]/);
    if(x)q.x=(r.ass?'Assunto: '+r.ass.replace(/\s+/g,' ').trim()+'\n':'')+x;
    if(curT&&(st||d==='pt'||d==='ing'||refRe.test(e)))q.ti=curT;
    if(/tabela|gráfico|figura|quadro|imagem|abaixo/i.test(e))q.fig=1;
    out.push(q);
  }
  if(!out.length)return {ok:false,msg:dup?'todas as questões já estavam no app':'não consegui ler as questões',dup};
  const used={};for(const q of out)if(q.ti)used[q.ti]=texts[q.ti];
  S.sim=S.sim||{};S.sim[sid]={n:name,t:used,qs:out};
  for(const q of out)delete PERM[q.id];
  rebuild();save('sim_'+sid);save('simulados');
  return {ok:true,sim:sid,name,n:out.length,dup,bad,anul};
}
// ---------- material de estudo (PDFs de curso, lidos no aparelho) ----------
const MAT_DISC=[['cb',/conhecimentos banc|sistema financeiro|mercado financeiro/i],['mf',/matem[áa]tica financeira/i],['inf',/inform[áa]tica|tecnologia da informa/i],['vn',/vendas|negocia[çc]/i],['atd',/atendimento/i],['pt',/portugu[êe]s|l[íi]ngua portuguesa/i],['ing',/ingl[êe]s|l[íi]ngua inglesa/i],['atu',/atualidades/i],['est',/probabilidade|estat[íi]stica/i],['mat',/matem[áa]tica|racioc[íi]nio/i],['eti',/[ée]tica|compliance|esg|socioambiental/i],['leg',/legisla[çc]/i],['dig',/comportamentos digitais/i]];
const nrm=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
async function matPdf(file){
  const data=new Uint8Array(await file.arrayBuffer());
  const pdf=await window.pdfjsLib.getDocument({data,isEvalSupported:false,disableFontFace:true}).promise;
  const pages=[];
  for(let p=1;p<=pdf.numPages;p++){
    const tc=await (await pdf.getPage(p)).getTextContent();const its=[];
    for(const it of tc.items){if(!it||typeof it.str!=='string'||!it.str.trim())continue;const tr=it.transform;its.push({s:it.str,x:tr[4],y:tr[5],w:it.width||0,h:Math.hypot(tr[2],tr[3])||it.height||10})}
    pages.push(toLines(its));
  }
  return pages;
}
// Remove cabeçalho, rodapé e marca d'água (linhas que se repetem em muitas páginas, CPF, número de página).
function matClean(pages){
  const cnt={};const key=l=>l.replace(/\d+/g,'#').replace(/\s+/g,' ').trim().toLowerCase();
  pages.forEach(ls=>{const seen=new Set(ls.map(key));for(const k of seen)cnt[k]=(cnt[k]||0)+1});
  const lim=Math.max(3,Math.ceil(pages.length*.3));
  const freq=Object.keys(cnt).filter(k=>cnt[k]>=lim);
  const out=[];
  pages.forEach((ls,i)=>{for(let l of ls){
    if(cnt[key(l)]>=lim&&!/^(coment[áa]rios?|gabarito|resolu[çc][ãa]o)\b/i.test(l.trim()))continue;
    l=l.replace(/\s*==[0-9a-f]{4,10}==\s*/gi,' ').trim();if(!l)continue;
    if(/^\d{11}\s*-/.test(l)||/\d{3}\.?\d{3}\.?\d{3}-?\d{2}\s*-\s*[A-ZÀ-Ú]/.test(l))continue;
    if(/^\d{1,3}$/.test(l)&&ls.indexOf(l)>=ls.length-3)continue;
    out.push({p:i+1,s:l});
  }});
  return {lines:out,freq};
}
function matKind(t){const u=nrm(t);if(/^resumo|esquema|mapa mental/.test(u))return 'res';if(/questoes comentadas/.test(u))return 'qc';if(/lista de questoes/.test(u))return 'lq';if(/^gabarito/.test(u))return 'gab';if(/^(apresentacao|consideracoes|metodologia|sumario)/.test(u))return 'x';return 'teo'}
function matToc(lines){
  const toc=[];
  for(const {p,s} of lines){if(p>4)break;const m=s.match(/^(.*?[^.\s])\s*\.{3,}\s*(\d{1,3})$/);if(m)toc.push({t:m[1].replace(/\s+/g,' ').trim(),pg:+m[2]})}
  return toc;
}
function matPara(ls){
  let t='';
  for(const l of ls){
    if(!t){t=l;continue}
    if(/[-­]$/.test(t)&&/^[a-zà-ú]/.test(l))t=t.replace(/[-­]$/,'')+l;
    else if(/^([▶•▪●○■◆➢✓\-–]|[a-eA-E]\)|\d{1,2}[.)]\s|[IVX]{1,4}\s*[-–.)])/.test(l))t+='\n'+l;
    else if(/[.:;!?]$/.test(t))t+='\n'+l;
    else t+=' '+l;
  }
  return t.replace(/[ \t]+/g,' ').trim();
}
function matSections(lines,toc){
  // Acha cada título do sumário no corpo, em ordem; a seção vai até o próximo título.
  const heads=[];let from=0;
  const bodyStart=lines.findIndex(x=>x.p>1&&!/\.{3,}\s*\d+$/.test(x.s)&&!/^sum[áa]rio$/i.test(x.s.trim())&&lines.some(y=>y.p===x.p&&/\.{3,}/.test(y.s))===false);
  from=Math.max(0,bodyStart);
  for(const e of toc){
    const tn=nrm(e.t).slice(0,40);let at=-1;
    for(let i=from;i<lines.length;i++){const ln=nrm(lines[i].s);if(ln.length>=Math.min(tn.length,6)&&(ln.startsWith(tn)||(tn.startsWith(ln)&&ln.length>12)||ln.replace(/^\d+( \d+)* /,'').startsWith(tn.replace(/^\d+( \d+)* /,'')))){at=i;break}}
    if(at>=0){heads.push({...e,i:at,k:matKind(e.t.replace(/^\d+(\.\d+)*\s*/,''))});from=at+1}
  }
  return heads.map((h,j)=>{const end=j+1<heads.length?heads[j+1].i:lines.length;const nx=j+1<heads.length?heads[j+1].pg:null;
    return {t:h.t,k:h.k,p0:h.pg,p1:nx&&nx>h.pg?nx:h.pg,i0:h.i+1,i1:end}});
}
function matSecTopics(d,title,tx,max){
  const rules=RULES[d]||[];const sc=[];
  for(const [name,re] of rules){if(re.source==='.')continue;const g=new RegExp(re.source,'gi');const n=(tx.toLowerCase().match(g)||[]).length+6*((title.toLowerCase().match(g)||[]).length);if(n)sc.push([name,n])}
  const tl=title.toLowerCase();sc.forEach(x=>{const re=rules.find(r=>r[0]===x[0])[1];if(new RegExp(re.source,'i').test(tl))x[1]+=1e6});
  sc.sort((a,b)=>b[1]-a[1]);
  const best=sc.length?sc[0][1]:0;
  const r=sc.filter(x=>x[1]>=Math.max(3,(best>=1e6?best-1e6:best)*.4)||x[1]>=1e6).slice(0,max||2).map(x=>x[0]);
  if(!r.length&&rules.length)r.push(rules[rules.length-1][0]);
  return r;
}
function matQuestions(ls,mid,d,title){
  // "Questões comentadas": cabeçalho "12. (2021/CESGRANRIO/BASA/...)", enunciado, a)…e), "Comentários:", "Gabarito: “b”".
  const qs=[];let cur=null,st='';
  const fin=()=>{
    if(!cur||cur.g==null)return;
    const g=cur.g.trim();let c=-1,o=cur.o.map(x=>x.replace(/\s+/g,' ').trim());
    if(/anulad/i.test(g))return;
    if(!o.length){o=['Certo','Errado'];if(/^(certo|correto|c|verdadeiro|v)\b/i.test(g))c=0;else if(/^(errado|incorreto|e|falso|f)\b/i.test(g))c=1}
    else{const m=g.match(/^[“"'‘(]?\s*([a-eA-E])\s*[”"'’)]?/);if(m)c='abcde'.indexOf(m[1].toLowerCase())}
    if(c<0||c>=o.length||o.length<2||o.some(x=>!x))return;
    const e=matPara(cur.e);if(e.length<10)return;
    const last=(RULES[d]||[]).slice(-1)[0];let a=classify(d,e);if(last&&a===last[0])a=classify(d,e+' '+o.join(' '));
    qs.push({id:'m'+mid+'_'+cur.n,d,a,e,o,c,u:1,f:1,mt:mid,n:cur.n,src:'Material · '+title+' · Q'+cur.n+(cur.h?' · '+cur.h:''),x:matPara(cur.x)});
  };
  for(let i=0;i<ls.length;i++){
    const l=ls[i].s.trim();
    const hm=l.match(/^(\d{1,3})\s*[.)–-]\s*\((.*)$/);
    if(hm&&(st===''||st==='done'||st==='com')){
      fin();let h=hm[2],j=i;while(!h.includes(')')&&j+1<ls.length&&j<i+3){j++;h+=' '+ls[j].s.trim()}
      const k=h.indexOf(')');const rest=k>=0?h.slice(k+1).trim():'';h=k>=0?h.slice(0,k):h;i=j;
      cur={n:+hm[1],h:h.replace(/\s+/g,' ').trim(),e:rest?[rest]:[],o:[],x:[],g:null};st='e';continue;
    }
    if(!cur)continue;
    if(/^coment[áa]rios?\s*:?/i.test(l)&&st!=='done'){st='com';const r=l.replace(/^coment[áa]rios?\s*:?\s*/i,'');if(r)cur.x.push(r);continue}
    const gm=l.match(/^gabarito\s*:\s*(.+)$/i);
    if(gm&&st==='com'){cur.g=gm[1];st='done';continue}
    if(st==='e'||st==='o'){
      const am=l.match(/^([a-eA-E])\)\s*(.*)$/);
      if(am&&(cur.o.length<5)){cur.o.push(am[2]);st='o';continue}
      if(st==='o')cur.o[cur.o.length-1]+=' '+l;else cur.e.push(l);
    } else if(st==='com')cur.x.push(l);
  }
  fin();
  return qs;
}
async function matImport(file,nameHint){
  await loadPdfJs();
  const pages=await matPdf(file);
  const {lines,freq}=matClean(pages);
  if(!lines.length)throw new Error('o PDF não tem texto selecionável');
  const toc=matToc(lines);
  let secs=toc.length?matSections(lines,toc):[];
  const idx=k=>secs.findIndex(s=>s.k===k);
  const blob=(freq.join(' ')+' '+(nameHint||'')+' '+lines.slice(0,40).map(x=>x.s).join(' '));
  let d='cb';for(const [k,re] of MAT_DISC)if(re.test(blob)){d=k;break}
  const aula=(freq.find(f=>/aula\s*#/.test(f))||'');
  const mid=hash(nameHint+'|'+pages.length+'|'+lines.length).toString(36);
  const title=(nameHint||'Material').replace(/\.pdf$/i,'').replace(/[_]+/g,' ').trim();
  // questões comentadas
  let qls=[];const iq=idx('qc');
  if(iq>=0){const s=secs[iq];qls=lines.slice(s.i0,s.i1)}
  else{const a=lines.findIndex(x=>/^quest[õo]es comentadas$/i.test(x.s.trim()));if(a>=0){const b=lines.findIndex((x,i)=>i>a&&/^lista de quest[õo]es$/i.test(x.s.trim()));qls=lines.slice(a+1,b>0?b:lines.length)}}
  const out={id:mid,t:title,d,pages:pages.length,aula,secs:[]};
  for(const s of secs){if(s.k!=='teo'&&s.k!=='res')continue;
    const tx=matPara(lines.slice(s.i0,s.i1).map(x=>x.s));if(tx.length<80)continue;
    out.secs.push({t:s.t,k:s.k,p0:s.p0,p1:s.p1,tx,tp:[]})}
  if(!out.secs.length){const tx=matPara(lines.map(x=>x.s));out.secs.push({t:title,k:'teo',p0:1,p1:pages.length,tx,tp:[]})}
  return {m:out,qls};
}
function matFinish(r,d){
  r.m.d=d;
  for(const s of r.m.secs)s.tp=matSecTopics(d,s.t,s.tx,s.k==='res'?4:2);
  const qs=matQuestions(r.qls,r.m.id,d,r.m.t);
  return {m:r.m,qs};
}
function matQs(){return Object.values(S.matQ||{}).flat()}
function matRefs(d,a,prefer){
  const out=[];
  for(const m of Object.values(S.mat||{})){if(m.d!==d)continue;m.secs.forEach((s,i)=>{if(s.tp.includes(a))out.push({m,s,i,score:(m.id===prefer?2:0)+(s.k==='teo'?1:0)})})}
  return out.sort((x,y)=>y.score-x.score).slice(0,2);
}
const pgs=s=>'p. '+s.p0+(s.p1>s.p0?'–'+s.p1:'');
function refLinks(d,a,prefer,cls){
  const r=matRefs(d,a,prefer);if(!r.length)return '';
  return `<div class="${cls||'rev'}"><div class="t">📖 Estude no seu material</div>${r.map(x=>`<button class="lnk" data-act="mat-read" data-m="${esc(x.m.id)}" data-s="${x.i}">${esc(x.m.t)} · ${esc(x.s.t)} <span class="muted">(${pgs(x.s)})</span></button>`).join('')}</div>`;
}
function openMatRead(mid,si){
  const m=(S.mat||{})[mid];if(!m)return;const s=m.secs[si];if(!s)return;
  openModal(`<div class="tiny muted">${esc(m.t)} · ${pgs(s)}</div><h3 style="margin-top:4px">${esc(s.t)}</h3>
  <div class="tiny muted" style="margin-bottom:8px">Assuntos: ${s.tp.map(esc).join(', ')||'—'}</div>
  <div class="mattext">${esc(s.tx)}</div>
  <div class="actions">${s.tp[0]?`<button class="btn small ghost" data-act="train-topic" data-k="${esc(m.d+'|'+s.tp[0])}">Treinar ${esc(s.tp[0])}</button>`:''}<button class="btn small" data-act="close-modal">Fechar</button></div>`);
}
function openMaterials(){
  const ms=Object.values(S.mat||{});
  const topOpts=(d,sel)=>['',...(RULES[d]||[]).map(r=>r[0])].map(n=>`<option value="${esc(n)}" ${n===sel?'selected':''}>${n?esc(n):'— sem vínculo —'}</option>`).join('');
  openModal(`<h3>Material de estudo</h3>
  <p class="small muted">Importe as aulas em PDF do seu curso. O app divide a aula pelos títulos, liga cada parte aos assuntos que ele mede e traz as questões comentadas. Quando você errar, ele mostra a parte da aula para revisar. Tudo fica só na sua conta.</p>
  <div class="card" style="margin:10px 0"><b>Importar aula (PDF)</b>
    <input type="file" accept="application/pdf,.pdf" data-mat="1" style="margin-top:8px">
    <div id="matOut"></div></div>
  ${ms.length?`<h2>Suas aulas (${ms.length})</h2>`:''}
  ${ms.map(m=>`<details class="prv"><summary style="cursor:pointer;list-style:none"><b>${esc(m.t)}</b><div class="tiny muted">${esc(DISC[m.d].n)} · ${m.secs.length} partes · ${((S.matQ||{})[m.id]||[]).length} questões comentadas</div></summary>
    ${m.secs.map((s,i)=>`<div class="msec"><button class="lnk" data-act="mat-read" data-m="${esc(m.id)}" data-s="${i}">${esc(s.t)} <span class="muted">(${pgs(s)})</span></button>
      <select data-mtp="${esc(m.id)}|${i}">${topOpts(m.d,s.tp[0]||'')}</select></div>`).join('')}
    <div style="margin-top:8px"><button class="btn small ghost" data-act="mat-del" data-m="${esc(m.id)}">Remover esta aula</button></div></details>`).join('')}
  <div class="actions"><button class="btn" data-act="close-modal">Fechar</button></div>`);
}
async function handleMat(file){
  const out=$('#matOut');out.innerHTML='<div class="imp-res">Lendo a aula…</div>';
  try{
    const r=await matImport(file,file.name);
    U.matRaw=r;
    out.innerHTML=`<div class="imp-res">
      <label class="lb" for="matName">Nome</label><input id="matName" value="${esc(r.m.t)}">
      <label class="lb" for="matDisc">Disciplina</label><select id="matDisc">${Object.keys(DISC).map(k=>`<option value="${k}" ${k===r.m.d?'selected':''}>${esc(DISC[k].n)}</option>`).join('')}</select>
      <div id="matPrev"></div></div>`;
    matPreview();
  }catch(e){out.innerHTML=`<div class="warn">Não consegui ler a aula: ${esc(e&&e.message||e)}</div>`}
}
function matPreview(){
  const r=U.matRaw;if(!r)return;const d=$('#matDisc').value;
  const f=matFinish(JSON.parse(JSON.stringify(r)),d);U.matPending=f;
  $('#matPrev').innerHTML=`<div style="margin-top:10px"><b>${f.m.secs.length} partes encontradas:</b>
    <ul class="small">${f.m.secs.map(s=>`<li>${esc(s.t)} <span class="muted">(${pgs(s)}) → ${s.tp.map(esc).join(', ')}</span></li>`).join('')}</ul>
    <div class="small"><b>${f.qs.length} questões comentadas</b> com a explicação do professor.</div>
    <div style="margin-top:10px"><button class="btn small" data-act="mat-do">Importar aula</button></div></div>`;
}

const textOf=q=>!q||!q.ti?'':q.of?((S.impT||{})[q.of]||{})[q.ti]||'':q.gs?(((S.sim||{})[q.gs]||{}).t||{})[q.ti]||'':'';

// ---------- telas ----------
const discChip=d=>`<span class="dc"><span class="dot" style="--c:${DISC[d].c}"></span>${esc(DISC[d].n)}</span>`;
function barHtml(dom,n){return `<div class="bar"><i class="${n?lvl(dom):'na'}" style="width:${n?pct(dom):100}%"></i></div>`}
function render(){
  document.querySelectorAll('#tabs button').forEach(b=>b.classList.toggle('on',b.dataset.tab===U.tab));
  const app=$('#app');
  if(U.tab==='painel')app.innerHTML=renderPainel();
  else if(U.tab==='treinar')app.innerHTML=renderTreinar();
  else{app.innerHTML=renderBanco();renderBankList()}
}
function go(tab){U.tab=tab;render();window.scrollTo(0,0)}

function renderPainel(){
  const tps=topics(),ds=discStats(tps);
  const n=S.tent.length,ok=S.tent.filter(t=>t.o).length,okG=S.tent.filter(t=>t.o&&t.g).length;
  const today=new Date();today.setHours(0,0,0,0);
  const nHoje=S.tent.filter(t=>t.t>=today.getTime()).length;
  const due=dueList(false).length,nd=nextDue();
  const top=tps.filter(t=>t.peso>0).sort((a,b)=>b.prio-a.prio).slice(0,6);
  const nImp=impQ().length,H=habit();
  let h=`<label class="lb" for="perfilSel" style="margin-top:0">Edital-alvo (define os pesos)</label><select id="perfilSel" style="margin-bottom:12px">${Object.entries(PERFIS).map(([k,p])=>`<option value="${k}" ${S.perfil===k?'selected':''}>${esc(p.full.split(' (')[0])}</option>`).join('')}</select>
  ${todayCard(H)}
  <div class="kpis">
    <div class="card kpi" style="margin:0"><b>${n}</b><span>respondidas${nHoje?` · ${nHoje} hoje`:''}</span></div>
    <div class="card kpi" style="margin:0"><b>${n?pct(ok/n)+'%':'–'}</b><span>de acerto${okG?` · ${okG} no chute`:''}</span></div>
    <div class="card kpi" style="margin:0"><b>${due}</b><span>${due?'revisões agora':nd<Infinity?'próxima '+until(nd):'revisões'}</span></div>
  </div>
  <button class="btn block" data-act="train-now">${n?'Continuar treino inteligente':'Começar o primeiro treino'}</button>
  ${nImp?'':`<div class="card" style="margin-top:14px"><b>Treine com provas reais</b><div class="small muted" style="margin:4px 0 10px">Importe os cadernos oficiais de BB (2010 a 2023), Caixa (2008 a 2024), Banrisul, Banco da Amazônia (2013 a 2024), Banco do Nordeste e Banese: o app lê o PDF no seu aparelho e aplica o gabarito oficial.</div><button class="btn small" data-act="imp-open">Importar prova oficial</button></div>`}
  <h2>Onde focar agora · ${esc(P().n)}</h2>
  <div class="card">`;
  top.forEach((t,i)=>{
    h+=`<div class="topic"><span class="rank">${i+1}</span>
      <div><div class="tname">${esc(t.a)}</div>
        <div class="tmeta">${discChip(t.d)} · ${t.n?`domínio ${pct(t.dom)}% · ${t.n} resp.`:'ainda não treinado'} · ${t.qs.length} q.</div>
        ${barHtml(t.dom,t.n)}${refLinks(t.d,t.a,null,'rev mini')}</div>
      <button class="btn small ghost" data-act="train-topic" data-k="${esc(t.k)}">Treinar</button></div>`;
  });
  h+=`</div>${mapHtml(tps)}<h2>Por disciplina</h2><div class="card">`;
  for(const d of discOrder()){
    const x=ds[d],w=P().w[d];
    h+=`<button class="disc" data-act="train-disc" data-d="${d}">
      <div><div class="dn">${discChip(d)}</div>${barHtml(x.dom,x.n)}</div>
      <div class="pts">${w?fmtPts(w[1])+' pts':'fora do edital'}<br>${x.nq?(x.n?pct(x.dom)+'% · '+x.n+' resp.':x.nq+' questões'):'sem questões'}</div>
    </button>`;
  }
  h+=`</div>
  <h2>Sobre o app</h2>
  <div class="card"><details class="info"><summary>Como a prioridade é calculada</summary>
    <p><b>Prioridade = peso do assunto × (1 − seu domínio).</b> Um assunto que vale muito e que você erra sobe para o topo; o que você já domina desce.</p>
    <p><b>Peso:</b> pontos de cada disciplina no edital escolhido no topo, divididos igualmente entre os assuntos daquela disciplina. Edital atual: ${esc(P().full)}.</p>
    <table class="pesos">${Object.entries(P().w).sort((a,b)=>b[1][1]-a[1][1]).map(([d,w])=>`<tr><td>${esc(DISC[d].n)}</td><td>${w[0]} questões · ${fmtPts(w[1])} pts</td></tr>`).join('')}</table>
    <p><b>Domínio:</b> sua taxa de acerto no assunto, com as respostas recentes valendo mais (uma resposta perde metade do peso a cada ${HALF_LIFE} dias). Assunto sem respostas começa em 50%.</p>
    <p><b>Revisões espaçadas:</b> questão errada volta em 10 min e recomeça a escada (1, 3, 7, 21, 45, 90 e 180 dias a cada acerto). Questão nova acertada com certeza volta em 7 dias. Depois do último degrau ela é considerada dominada e sai das revisões.</p>
    <p><b>Chute:</b> toque em "Vou chutar" antes de responder quando não tiver certeza. Acerto no chute vale metade no domínio e a questão volta no dia seguinte. Se esquecer de marcar, use "Na verdade, chutei" depois de ver o resultado.</p>
    <p><b>Meta diária e sequência:</b> cada dia em que você responde a meta (padrão 10 questões, ajustável) soma 1 na sequência 🔥. Uma vez por semana, um dia sem meta é coberto por uma proteção ❄️, se no dia seguinte você voltar a bater a meta.</p>
    <p><b>Rodadas:</b> o treino vem em rodadas de ${ROUND} questões. No fim de cada uma aparece o resumo: acertos, assuntos que subiram ou caíram e quantas questões voltam para revisão.</p>
    <p><b>Mapa do edital:</b> cada assunto fica vermelho (domínio abaixo de 50%), amarelo (50% a 69%) ou verde (70% ou mais). Cinza é assunto ainda não treinado.</p>
    <p><b>Treino inteligente:</b> cerca de 40% das vezes traz uma revisão pendente; nas outras, sorteia um assunto com mais chance para os de maior prioridade.</p>
  </details></div>
  <div class="card"><details class="info"><summary>Questões reais e direitos autorais</summary>
    <p>O banco inicial tem 50 questões originais no estilo Cesgranrio. As questões reais entram pelo importador: você baixa o caderno oficial e o app lê o PDF no seu aparelho, aplicando o gabarito oficial. Tudo fica na sua conta, para estudo pessoal.</p>
    <p>Os textos de apoio das provas oficiais e as aulas importadas (Banco → Material) ficam só na sua conta, para seu estudo pessoal. Eles pertencem aos autores e ao seu curso: não compartilhe o app com esse conteúdo.</p>
  </details></div>
  <div class="card"><details class="info"><summary>Backup e dados</summary>
    <p>${ST.mode==='cloud'?'Seu progresso, comentários e questões ficam salvos na sua conta e só você os vê, mesmo se compartilhar o app.':'Os dados ficam salvos só neste aparelho. Exporte um backup de vez em quando e guarde no Drive ou no e-mail: se o app for apagado, o backup é o que recupera tudo.'}</p>
    <div class="row" style="margin-top:10px">
      <button class="btn small ghost" data-act="copy-backup">Exportar backup</button>
      <button class="btn small ghost" data-act="import-open">Restaurar backup</button>
      <button class="btn small ghost" data-act="reset-open">Zerar progresso</button>
    </div>
  </details></div>`;
  return h;
}

function todayCard(H){
  const p=Math.min(1,H.hoje/H.meta),falta=H.meta-H.hoje;
  const msg=H.done?(H.hoje>H.meta?`Meta batida ✓ · ${H.hoje-H.meta} além da meta`:'Meta de hoje batida ✓'):`${falta===1?'Falta 1 questão':'Faltam '+falta+' questões'}${H.run?' para manter a sequência':' para começar uma sequência'}`;
  return `<div class="card today">
    <div class="ring ${H.done?'done':''}" style="--p:${p.toFixed(3)}" role="img" aria-label="${H.hoje} de ${H.meta} questões hoje"><div><b>${H.hoje}</b><span>de ${H.meta}</span></div></div>
    <div class="tinfo">
      <div class="streak">${H.run?'🔥 '+dias(H.run)+' seguidos':'🔥 Sem sequência ainda'}</div>
      <div class="small">${msg}</div>
      <div class="tiny muted">${H.frozeY?'❄️ Ontem foi coberto pela proteção da semana':H.freeze?'❄️ 1 proteção disponível nesta semana':'❄️ Proteção da semana já usada'}${H.best>H.run?' · recorde: '+dias(H.best):''}</div>
    </div>
    <button class="metabtn" data-act="meta-open" aria-label="Mudar meta diária">Meta<br><b>${H.meta}</b>/dia</button>
  </div>`;
}
function mapHtml(tps){
  const ds=discOrder().filter(d=>wDisc(d)>0);
  const all=tps.filter(t=>wDisc(t.d)>0);if(!all.length)return '';
  const g=all.filter(t=>t.n&&lvl(t.dom)==='hi').length,y=all.filter(t=>t.n&&lvl(t.dom)==='mid').length,r=all.filter(t=>t.n&&lvl(t.dom)==='lo').length;
  let h=`<h2>Mapa do edital</h2><div class="card">
    <div class="maptop"><b>${g} de ${all.length}</b> assuntos no verde</div>
    <div class="bar stack" aria-hidden="true"><i class="hi" style="width:${g/all.length*100}%"></i><i class="mid" style="width:${y/all.length*100}%"></i><i class="lo" style="width:${r/all.length*100}%"></i></div>
    <div class="legend tiny muted"><span><i class="sw hi"></i>dominado ${g}</span><span><i class="sw mid"></i>em progresso ${y}</span><span><i class="sw lo"></i>fraco ${r}</span><span><i class="sw nt"></i>não treinado ${all.length-g-y-r}</span></div>`;
  for(const d of ds){
    const ts=tps.filter(t=>t.d===d).sort((a,b)=>a.a.localeCompare(b.a,'pt'));if(!ts.length)continue;
    h+=`<div class="mapd">${discChip(d)}<div class="tiles">${ts.map(t=>`<button class="tile ${t.n?lvl(t.dom):'nt'}" data-act="train-topic" data-k="${esc(t.k)}">${esc(t.a)}<b>${t.n?pct(t.dom)+'%':'–'}</b></button>`).join('')}</div></div>`;
  }
  return h+`<div class="tiny muted">Toque num assunto para treinar só ele.</div></div>`;
}
function roundSummary(R){
  const H=habit(),up=R.tp.filter(t=>t.to-t.from>=.01).sort((a,b)=>(b.to-b.from)-(a.to-a.from)).slice(0,3),down=R.tp.filter(t=>t.from-t.to>=.01).sort((a,b)=>(a.to-a.from)-(b.to-b.from)).slice(0,3);
  const nota=R.ok/R.n,tit=nota>=.9?'Rodada excelente!':nota>=.7?'Boa rodada!':nota>=.5?'Rodada concluída':'Rodada difícil, mas valeu';
  const row=t=>`<li>${esc(t.a)} <span class="muted">${pct(t.from)}% → <b>${pct(t.to)}%</b></span></li>`;
  return `<div class="card rsum">
    <div class="why">Resumo da rodada · ${R.min} min</div>
    <div class="rtit">${tit}</div>
    <div class="rbig"><b>${R.ok}</b><span>de ${R.n} certas${R.g?` · ${R.g} no chute`:''}</span></div>
    ${up.length?`<div class="rsec"><div class="t">📈 Subiram</div><ul>${up.map(row).join('')}</ul></div>`:''}
    ${down.length?`<div class="rsec"><div class="t">📉 Precisam de atenção</div><ul>${down.map(row).join('')}</ul></div>`:''}
    <div class="rsec"><div class="t">🔁 Revisão</div><div class="small">${R.back?`${R.back} ${R.back===1?'questão volta':'questões voltam'} para revisão nas próximas 24 h.`:'Nenhuma questão desta rodada volta antes de amanhã.'}</div></div>
    <div class="rsec"><div class="t">🔥 Hoje</div><div class="small">${H.hoje} de ${H.meta} questões${H.done?' · meta batida ✓':` · faltam ${H.meta-H.hoje}`}${H.run?' · sequência de '+dias(H.run):''}</div></div>
    <div class="actions"><button class="btn" data-act="round-next">Mais uma rodada</button><button class="btn ghost" data-act="go-painel">Ver painel</button></div>
  </div>`;
}

function renderTreinar(){
  let h=`<div class="seg" style="margin-bottom:10px">
    <button class="${U.mode==='smart'?'on':''}" data-act="mode" data-m="smart">Inteligente</button>
    <button class="${U.mode==='rev'?'on':''}" data-act="mode" data-m="rev">Revisões (${dueList(false).length})</button>
  </div>
  <select id="discSel" aria-label="Disciplina" style="margin-bottom:10px"><option value="">Todas do edital ${esc(P().n)}</option>${discOrder().map(d=>`<option value="${d}" ${U.disc===d?'selected':''}>${esc(DISC[d].n)}</option>`).join('')}</select>`;
  if(U.topic){const a=U.topic.split('|').slice(1).join('|');h+=`<div style="margin-bottom:10px"><span class="chip">Assunto: ${esc(a)} <button data-act="clear-topic" aria-label="Remover filtro">×</button></span></div>`}
  if(U.roundSum)return h+roundSummary(U.roundSum);
  {const R=U.round;h+=`<div class="rprog"><span class="tiny muted">Rodada · ${R.n} de ${ROUND}${R.n?` · ${R.ok} certas`:''}</span><div class="bar"><i class="hi" style="width:${R.n/ROUND*100}%"></i></div></div>`}
  if(!U.cur||!QMAP[U.cur]){
    const p=pickNext();
    if(p){U.cur=p.id;U.why=p.why;U.answered=null;U.guess=false}
    else{
      U.cur=null;const nd=nextDue();
      return h+`<div class="card empty"><b>${U.mode==='rev'?'Nenhuma revisão pendente':'Nada para treinar aqui'}</b><span class="muted small">${U.mode==='rev'?(nd<Infinity?'A próxima revisão fica disponível '+until(nd)+'.':'Questões que você errar aparecem aqui.'):'Esta disciplina ainda não tem questões. Importe uma prova oficial no Banco.'}</span>
      ${U.mode==='rev'?'<div style="margin-top:14px"><button class="btn" data-act="mode" data-m="smart">Voltar ao treino inteligente</button></div>':''}</div>`;
    }
  }
  const q=QMAP[U.cur];
  h+=`<div class="card"><div class="why">${esc(U.why)}</div>
    <div class="qmeta">${discChip(q.d)} · ${esc(q.a)}${q.src?' · '+esc(q.src):''}${q.u&&!q.of&&!q.mt&&!q.gs?' · <span class="bdg me">minha questão</span>':''}</div>
    ${q.fig?`<div class="figflag">⚠ Esta questão pode ter tabela ou figura. Se faltar algo, confira a questão ${q.n} no PDF oficial.</div>`:''}
    ${textOf(q)?`<details class="stxt" open><summary>Texto de apoio</summary><div>${esc(textOf(q))}</div></details>`:''}
    <p class="qtext">${esc(q.e)}</p>
    ${U.answered?'':`<div class="guess"><button class="gbtn ${U.guess?'on':''}" data-act="guess">${U.guess?'🎲 Chutando: marcado':'🎲 Vou chutar'}</button><span class="tiny muted">${U.guess?'Se acertar, a questão volta amanhã para confirmar.':'Marque antes de responder se não tiver certeza.'}</span></div>`}
    <div class="alts">${altsHtml(q,U.answered,true)}</div>`;
  if(U.answered){
    const ok=U.answered.ok,g=U.answered.g,nm=nextMsg(q.id);
    const sub=!ok?'Ela volta para revisão em 10 min.':g?'Acerto no chute: volta para revisão '+(nm||'amanhã')+'.':nm?'Próxima revisão '+nm+'.':'Questão dominada: saiu das revisões.';
    h+=`<div id="fb" class="fb ${ok?(g?'meh':'ok'):'bad'}">${ok?(g?'✓ Acertou no chute.':'✓ Você acertou.'):`✗ Você marcou ${letterOf(q,U.answered.ch)}. Gabarito: ${letterOf(q,q.c)}.`} <span style="font-weight:500">${sub}</span>${ok&&!g?' <button class="linkbtn" data-act="was-guess">Na verdade, chutei</button>':''}</div>
    ${q.x?`<div class="exp"><div class="t">${q.mt||q.gs?'Comentário do professor':'Explicação'}</div>${esc(q.x)}</div>`:''}
    ${refLinks(q.d,q.a,q.mt,ok?'rev':'rev bad')}
    ${comBox(q.id)}
    <div class="actions">${U.round.n>=ROUND?'<button class="btn" data-act="round-end">Ver resumo da rodada →</button>':'<button class="btn" data-act="next">Próxima questão →</button>'}</div>`;
  } else h+=`<div class="actions"><button class="btn ghost" data-act="next">Pular</button></div>`;
  {const H=habit();h+=`</div><div class="sess">Hoje: ${H.hoje} de ${H.meta}${H.done?' ✓':''}${H.run?' · 🔥 '+dias(H.run):''} · nesta sessão ${U.sess.n} respondidas, ${U.sess.ok} acertos</div>`}
  return h;
}
function altsHtml(q,ans,clickable){
  return perm(q).map((oi,i)=>{
    let cls='alt';
    if(ans||!clickable){if(oi===q.c)cls+=' right';else if(ans&&oi===ans.ch)cls+=' wrong'}
    return `<button class="${cls}" ${clickable?`data-act="ans" data-i="${oi}"`:''} ${(ans||!clickable)?'disabled':''}><span class="L">${L[i]}</span><span>${esc(q.o[oi])}</span></button>`;
  }).join('');
}
function comBox(id){
  const v=S.com[id]||'';
  return `<div class="mycom"><div class="hd"><b>Meu comentário</b><span class="saved" data-saved="${esc(id)}">${v?'salvo':''}</span></div>
  <textarea data-com="${esc(id)}" placeholder="Escreva com suas palavras: a regra, o macete, a pegadinha da banca…">${esc(v)}</textarea></div>`;
}

function renderBanco(){
  const discs=discOrder().map(d=>`<option value="${d}" ${U.bankD===d?'selected':''}>${esc(DISC[d].n)}</option>`).join('');
  const fs=[['','Todas'],['oficiais','Provas oficiais'],['simulados','Simulados do Gran'],['material','Do meu material'],['originais','Questões do app'],['minhas','Minhas questões'],['com','Com meu comentário'],['sem','Sem comentário'],['err','Já errei'],['nunca','Nunca respondidas']];
  return `<div class="row" style="justify-content:space-between;margin-bottom:12px"><div><b style="font-size:17px">Banco de questões</b><div class="tiny muted">${allQ().length} questões · ${impQ().length} de provas oficiais · ${matQs().length} do material · ${S.custom.length} suas</div></div>
    <div class="row"><button class="btn small ghost" data-act="imp-open">Importar prova</button><button class="btn small ghost" data-act="mat-open">Material</button><button class="btn small" data-act="new-q">+ Nova</button></div></div>
  <div class="filters">
    <input id="bq" type="search" placeholder="Buscar no enunciado, assunto ou comentário" value="${esc(U.bankQ)}">
    <select id="bd"><option value="">Todas as disciplinas</option>${discs}</select>
    <select id="bf">${fs.map(([v,t])=>`<option value="${v}" ${U.bankF===v?'selected':''}>${t}</option>`).join('')}</select>
  </div><div id="bankList"></div>`;
}
function renderBankList(){
  const el=$('#bankList');if(!el)return;
  const h=qHist(),qs=U.bankQ.trim().toLowerCase();
  const list=allQ().filter(q=>{
    if(U.bankD&&q.d!==U.bankD)return false;
    const st=h[q.id],c=S.com[q.id],F=U.bankF;
    if(F==='oficiais'&&!q.of)return false;
    if(F==='originais'&&q.u)return false;
    if(F==='minhas'&&!(q.u&&!q.of&&!q.mt&&!q.gs))return false;
    if(F==='simulados'&&!q.gs)return false;
    if(F==='material'&&!q.mt)return false;
    if(F==='com'&&!c)return false;
    if(F==='sem'&&c)return false;
    if(F==='err'&&!(st&&st.err))return false;
    if(F==='nunca'&&st)return false;
    if(qs&&!(q.e+' '+q.a+' '+(c||'')+' '+q.o.join(' ')+' '+(q.src||'')).toLowerCase().includes(qs))return false;
    return true;
  });
  if(!list.length){el.innerHTML=`<div class="card empty"><b>Nenhuma questão encontrada</b><span class="muted small">${U.bankF==='oficiais'?'Toque em "Importar prova" para trazer as questões reais.':'Ajuste a busca ou os filtros.'}</span></div>`;return}
  const shown=list.slice(0,150);
  el.innerHTML=shown.map(q=>{
    const st=h[q.id],b=[];
    if(q.of)b.push('<span class="bdg me">prova oficial</span>');
    else if(q.mt)b.push('<span class="bdg me">material</span>');
    else if(q.gs)b.push('<span class="bdg me">simulado</span>');
    else if(q.u)b.push('<span class="bdg me">minha</span>');
    if(S.com[q.id])b.push('<span class="bdg me">✎ comentada</span>');
    if(st)b.push(`<span class="bdg ${st.lastOk?'ok':'bad'}">${st.lastOk?'✓':'✗'} ${st.n}×</span>`);
    if(S.leit[q.id])b.push('<span class="bdg">em revisão</span>');
    const short=q.e.length>150?q.e.slice(0,147)+'…':q.e;
    return `<details class="qi" data-id="${esc(q.id)}" ${U.openId===q.id?'open':''}>
      <summary><span class="dot" style="--c:${DISC[q.d].c}"></span><div style="flex:1;min-width:0"><div class="qs-meta">${esc(DISC[q.d].n)} · ${esc(q.a)} ${b.join(' ')}</div><div class="qs-text">${esc(short)}</div></div></summary>
      <div class="qi-body">
        ${q.src?`<div class="qmeta">${esc(q.src)}</div>`:''}
        ${q.fig?`<div class="figflag">⚠ Pode ter tabela ou figura: confira no PDF oficial.</div>`:''}
        <p class="qtext" style="font-size:16px">${esc(q.e)}</p>
        <div class="alts">${altsHtml(q,null,false)}</div>
        ${q.x?`<div class="exp"><div class="t">Explicação</div>${esc(q.x)}</div>`:''}
        ${comBox(q.id)}
        <div class="actions"><button class="btn small" data-act="train-q" data-id="${esc(q.id)}">Resolver agora</button>${q.u?`<button class="btn small ghost" data-act="edit-q" data-id="${esc(q.id)}">Editar</button>`:''}${q.u&&!q.of&&!q.mt&&!q.gs?`<button class="btn small ghost" data-act="del-q" data-id="${esc(q.id)}">Excluir</button>`:''}</div>
      </div></details>`;
  }).join('')+(list.length>shown.length?`<div class="tiny muted" style="text-align:center;margin:10px">Mostrando 150 de ${list.length}. Use a busca ou os filtros.</div>`:'');
}

// ---------- modal ----------
function openModal(html){const m=$('#modal');m.innerHTML=`<div class="sheet" role="dialog" aria-modal="true">${html}</div>`;m.hidden=false}
function closeModal(){const m=$('#modal');m.hidden=true;m.innerHTML='';U.pending=null;U.matPending=null}

function openImport(){
  const groups={};
  for(const [id,p] of Object.entries(PROVAS))(groups[p.grp]=groups[p.grp]||[]).push([id,p]);
  const total=Object.keys(PROVAS).length,done=Object.keys(PROVAS).filter(id=>(S.imp[id]||[]).length).length;
  const rows=Object.entries(groups).map(([g,list])=>`<h2 style="margin:18px 2px 6px">${esc(g)}</h2>`+list.map(([id,p])=>{
    const n=(S.imp[id]||[]).length;
    return `<details class="prv" ${n?'':'open'}><summary style="cursor:pointer;list-style:none"><b>${esc(p.n)}</b><div class="tiny muted">Gabarito ${esc(p.status)}${n?` · <span style="color:var(--ok);font-weight:600">✓ ${n} questões importadas</span>`:''}</div></summary>
      <ol class="small"><li>Baixe o caderno oficial: <a href="${p.pdf}" target="_blank" rel="noopener">PDF da prova</a> · <a href="${p.gab}" target="_blank" rel="noopener">gabarito</a></li><li>Escolha o arquivo baixado:</li></ol>
      <input type="file" accept="application/pdf,.pdf" data-imp="${id}">
      <div class="imp-out" data-out="${id}"></div>
      ${n?`<div style="margin-top:8px"><button class="btn small ghost" data-act="imp-del" data-id="${id}">Remover questões desta prova</button></div>`:''}
    </details>`;
  }).join('')).join('');
  openModal(`<h3>Importar provas oficiais</h3>
    <p class="small muted">${done} de ${total} provas importadas. O app lê o PDF aqui no seu aparelho, separa as questões, traz os textos de apoio e aplica o gabarito oficial. Seus comentários continuam ligados às questões mesmo se você reimportar.</p>
    <div class="card" style="margin:10px 0"><b>Tudo de uma vez</b>
      <div class="tiny muted" style="margin-top:6px">Baixe os cadernos pelos links abaixo (ou use os que já estão no seu computador) e escolha todos de uma vez. O app reconhece qual prova é cada arquivo. Simulados baixados do Gran (botão "Baixar simulado") também entram por aqui.</div>
      <input type="file" accept="application/pdf,.pdf" multiple data-impmulti="1" style="margin-top:6px">
      <div id="impAll"></div></div>
    ${simRows()}${rows}<div class="actions"><button class="btn ghost" data-act="close-modal">Fechar</button></div>`);
}
function simRows(){
  const ss=Object.entries(S.sim||{});if(!ss.length)return '';
  return `<h2 style="margin:18px 2px 6px">Simulados do Gran</h2>`+ss.sort((a,b)=>a[1].n.localeCompare(b[1].n)).map(([id,x])=>`<div class="prv" style="display:flex;justify-content:space-between;align-items:center;gap:8px"><div><b>${esc(x.n)}</b><div class="tiny muted">${x.qs.length} questões inéditas${x.qs.some(q=>q.x)?' · com comentários':''}</div></div><button class="btn small ghost" data-act="sim-del" data-id="${esc(id)}">Remover</button></div>`).join('');
}
function commitImport(pid,qs,t){S.imp[pid]=qs;S.impT=S.impT||{};S.impT[pid]=t||{};for(const q of qs)delete PERM[q.id];rebuild();save('imp_'+pid)}
// Lê um PDF, descobre qual prova do catálogo ele é (cada caderno só passa na verificação da sua prova) e importa.
async function autoImport(file,expect){
  await loadPdfJs();
  const {lines,head}=await pdfLines(file);
  if(!head.trim())return {ok:false,msg:'PDF sem texto selecionável'};
  if(!expect&&/^\s*Simulado\s+Criado em:/i.test(head)&&/\[Q\d+\]/.test(head))return await simImport(file);
  if(!expect&&isCad(lines))return cadImport(file,lines);
  const ids=Object.keys(PROVAS).filter(id=>{const P=PROVAS[id];return P.check.every(r=>r.test(head))&&!(P.reject&&P.reject.test(head))});
  if(expect&&!ids.includes(expect))return {ok:false,msg:'o arquivo não é a versão esperada'};
  const pid=expect||(ids.length===1?ids[0]:null);
  if(!pid)return {ok:false,msg:ids.length?'mais de uma prova possível':'não reconheci a prova (versão de gabarito diferente?)'};
  const r=buildImport(pid,parseBlocks(lines,PROVAS[pid].total));
  if(!r.qs.length)return {ok:false,pid,msg:'não consegui separar as questões'};
  commitImport(pid,r.qs,r.texts);
  return {ok:true,pid,n:r.qs.length};
}
async function importMany(files){
  const out=$('#impAll');const res=[];
  for(let i=0;i<files.length;i++){
    out.innerHTML=`<div class="imp-res">Lendo ${i+1} de ${files.length}: ${esc(files[i].name)}…</div>`;
    try{const r=await autoImport(files[i]);res.push([files[i].name,r])}catch(e){res.push([files[i].name,{ok:false,msg:String(e&&e.message||e)}])}
  }
  showAllRes(res);
}
function showAllRes(res){
  const ok=res.filter(x=>x[1].ok);
  $('#impAll').innerHTML=`<div class="imp-res"><b>${ok.length} de ${res.length} arquivos importados · ${ok.reduce((a,x)=>a+x[1].n,0)} questões</b><ul class="small">${res.map(([nm,r])=>`<li>${r.ok?'✓':'✗'} ${esc(r.pid?PROVAS[r.pid].n:r.name||nm)}${r.ok?` — ${r.n} questões${r.dup?` (${r.dup} repetidas puladas)`:''}`:` — ${esc(r.msg)}`}</li>`).join('')}</ul>${res.some(x=>!x[1].ok)?'<div class="tiny muted">As que falharam você importa pela lista abaixo, baixando o PDF pelo link.</div>':''}<div style="margin-top:8px"><button class="btn small" data-act="imp-open">Atualizar lista</button></div></div>`;
  render();
}
async function importAll(){
  const ids=Object.keys(PROVAS);const res=[];const out=$('#impAll');
  for(let i=0;i<ids.length;i++){
    const id=ids[i],P=PROVAS[id],url=P.dl||(/\.pdf$/i.test(P.pdf)?P.pdf:null);
    out.innerHTML=`<div class="imp-res">Baixando e lendo ${i+1} de ${ids.length}: ${esc(P.n)}…</div>`;
    if(!url){res.push([P.n,{ok:false,pid:id,msg:'sem link direto do PDF'}]);continue}
    try{
      const rsp=await fetch(url);if(!rsp.ok)throw new Error('download recusado ('+rsp.status+')');
      const blob=await rsp.blob();const f=new File([blob],id+'.pdf',{type:'application/pdf'});
      res.push([P.n,await autoImport(f,id)]);
    }catch(e){res.push([P.n,{ok:false,pid:id,msg:/fetch|network|recusado/i.test(String(e&&e.message))?'o site do PDF não deixou o app baixar':String(e&&e.message||e)}])}
  }
  showAllRes(res);
}
async function handleImport(pid,file){
  const out=document.querySelector(`[data-out="${pid}"]`);const Pv=PROVAS[pid];
  out.innerHTML='<div class="imp-res">Lendo o PDF…</div>';
  try{
    await loadPdfJs();
    const {lines,head}=await pdfLines(file);
    if(!head.trim()){out.innerHTML='<div class="warn">Este PDF não tem texto selecionável (parece escaneado). Use o arquivo do link acima.</div>';return}
    if(!Pv.check.every(r=>r.test(head))||(Pv.reject&&Pv.reject.test(head))){
      out.innerHTML=`<div class="warn">Este PDF não parece ser a versão certa (${esc(Pv.n)}). O gabarito muda de uma versão para outra; baixe o caderno pelo link acima.</div>`;return;
    }
    const blocks=parseBlocks(lines,Pv.total);
    const r=buildImport(pid,blocks);
    U.pending={pid,qs:r.qs,t:r.texts};
    const per={};for(const q of r.qs)per[q.d]=(per[q.d]||0)+1;
    out.innerHTML=`<div class="imp-res"><b>Encontrei ${r.qs.length} questões prontas para importar:</b>
      <ul>${Object.entries(per).map(([d,k])=>`<li>${esc(DISC[d].n)}: ${k}</li>`).join('')}</ul>
      <div class="tiny muted">${Object.keys(r.texts).length} textos de apoio incluídos${r.skipped.texto?` · ${r.skipped.texto} sem texto encontrado ficaram de fora`:''}${r.skipped.anulada?` · ${r.skipped.anulada} anuladas`:''}${r.bad.length?` · não consegui separar: ${r.bad.map(n=>'Q'+n).join(', ')}`:''}.</div>
      <div style="margin-top:10px"><button class="btn small" data-act="imp-do" ${r.qs.length?'':'disabled'}>Importar ${r.qs.length} questões</button></div></div>`;
  }catch(e){out.innerHTML=`<div class="warn">Não consegui ler o PDF: ${esc(e&&e.message||e)}</div>`}
}

function openForm(editId){
  const q=editId?QMAP[editId]:null;
  const d=q?q.d:(U.bankD||'cb');
  openModal(`<h3>${q?'Editar questão':'Nova questão'}</h3><div class="tiny muted">${q&&q.of?'Corrija aqui erros de leitura do PDF.':'Cadastre questões de provas que você resolver. Elas entram no motor de prioridades.'}</div>
  <label class="lb" for="fd">Disciplina</label>
  <select id="fd">${Object.keys(DISC).map(x=>`<option value="${x}" ${x===d?'selected':''}>${esc(DISC[x].n)}</option>`).join('')}</select>
  <label class="lb" for="fa">Assunto</label>
  <input id="fa" list="fal" placeholder="Ex.: Garantias" value="${esc(q?q.a:'')}"><datalist id="fal">${assuntosDe(d)}</datalist>
  <label class="lb" for="fs">Fonte (opcional)</label>
  <input id="fs" placeholder="Ex.: Cesgranrio – Caixa 2024" value="${esc(q&&q.src||'')}">
  <label class="lb" for="fe">Enunciado</label>
  <textarea id="fe" placeholder="Texto da questão" style="min-height:130px">${esc(q?q.e:'')}</textarea>
  <label class="lb">Alternativas <span class="muted" style="font-weight:400">(marque a correta)</span></label>
  ${[0,1,2,3,4].map(i=>`<div class="altin"><label><input type="radio" name="fc" value="${i}" ${q&&q.c===i?'checked':''}>${L[i]}</label><input id="fo${i}" placeholder="Alternativa ${L[i]}${i>=4?' (opcional)':''}" value="${esc(q&&q.o[i]||'')}"></div>`).join('')}
  ${q?'':`<label class="lb" for="fx">Meu comentário</label><textarea id="fx" placeholder="Por que a correta é a correta?"></textarea>`}
  <div class="err" id="ferr"></div>
  <div class="actions"><button class="btn ghost" data-act="close-modal">Cancelar</button><button class="btn" data-act="save-q" data-id="${q?esc(q.id):''}">Salvar</button></div>`);
}
function assuntosDe(d){return [...new Set(allQ().filter(q=>q.d===d).map(q=>q.a))].map(a=>`<option value="${esc(a)}">`).join('')}
function saveForm(editId){
  const v=id=>{const el=$('#'+id);return el?(el.value||'').trim():''};
  const d=v('fd'),a=v('fa'),e=v('fe'),src=v('fs'),x=v('fx');
  const raw=[0,1,2,3,4].map(i=>v('fo'+i));
  const sel=document.querySelector('input[name=fc]:checked');
  const err=m=>{$('#ferr').textContent=m};
  if(!a)return err('Informe o assunto.');
  if(!e)return err('Escreva o enunciado.');
  if(!sel)return err('Marque a alternativa correta.');
  const ci=+sel.value;
  if(!raw[ci])return err('A alternativa marcada como correta está vazia.');
  const o=[];let c=-1;
  raw.forEach((t,i)=>{if(t){if(i===ci)c=o.length;o.push(t)}});
  if(o.length<2)return err('Preencha pelo menos duas alternativas.');
  if(editId){
    const q=QMAP[editId];if(!q)return closeModal();
    Object.assign(q,{d,a,e,o,c});if(src)q.src=src;else delete q.src;
    delete PERM[q.id];
    if(q.of)save('imp_'+q.of);else if(q.mt)save('matq_'+q.mt);else if(q.gs)save('sim_'+q.gs);else save('questoes');
    rebuild();closeModal();U.openId=q.id;render();toast('Questão atualizada');return;
  }
  const id='u'+Date.now().toString(36)+Math.floor(Math.random()*1e3).toString(36);
  const q={id,d,a,e,o,c,u:1};if(src)q.src=src;
  S.custom.push(q);rebuild();save('questoes');
  if(x){S.com[id]=x;save('comentarios')}
  closeModal();U.bankD='';U.bankF='minhas';U.openId=id;render();toast('Questão salva');
}

// ---------- eventos ----------
let comTimer=null;
document.addEventListener('click',async e=>{
  const m=$('#modal');if(e.target===m){closeModal();return}
  const b=e.target.closest('[data-act]');if(!b)return;
  const a=b.dataset.act;
  if(a==='tab')go(b.dataset.tab);
  else if(a==='perfil'){S.perfil=b.dataset.p;U.cur=null;U.answered=null;U.disc='';U.topic='';save('progresso');render()}
  else if(a==='train-now'){U.mode='smart';U.disc='';U.topic='';if(U.answered)U.cur=null;go('treinar')}
  else if(a==='train-topic'){U.mode='smart';U.topic=b.dataset.k;U.disc='';U.cur=null;U.answered=null;go('treinar')}
  else if(a==='train-disc'){U.mode='smart';U.disc=b.dataset.d;U.topic='';U.cur=null;U.answered=null;go('treinar')}
  else if(a==='mode'){U.mode=b.dataset.m;U.cur=null;U.answered=null;if(U.mode==='rev')U.topic='';render()}
  else if(a==='clear-topic'){U.topic='';U.cur=null;U.answered=null;render()}
  else if(a==='ans')answer(+b.dataset.i);
  else if(a==='guess'){if(!U.answered){U.guess=!U.guess;render()}}
  else if(a==='was-guess'){
    const A=U.answered,q=QMAP[U.cur];if(!A||!A.ok||A.g||!q)return;
    const at=[...S.tent].reverse().find(x=>x.q===q.id&&x.t===A.t);if(at)at.g=1;
    if(A.prev)S.leit[q.id]=A.prev;else delete S.leit[q.id];
    schedule(q.id,true,true,A.t);A.g=true;save('progresso');render();
  }
  else if(a==='next'){U.last=U.cur;U.cur=null;U.answered=null;U.guess=false;render();window.scrollTo(0,0)}
  else if(a==='round-end'){
    const R=U.round,tp={};
    for(const k in R.dom0){const x=topicDom(k);tp[k]={a:k.split('|').slice(1).join('|'),d:k.split('|')[0],from:R.dom0[k],to:x.dom}}
    const soon=Date.now()+DAY;
    U.roundSum={n:R.n,ok:R.ok,g:R.g,min:Math.max(1,Math.round((Date.now()-R.t0)/6e4)),tp:Object.values(tp),
      back:[...new Set(R.ids)].filter(id=>S.leit[id]&&S.leit[id].d<=soon).length};
    U.round=newRound();U.last=U.cur;U.cur=null;U.answered=null;U.guess=false;render();window.scrollTo(0,0)
  }
  else if(a==='round-next'){U.roundSum=null;render();window.scrollTo(0,0)}
  else if(a==='go-painel'){U.roundSum=null;go('painel')}
  else if(a==='meta-open'){const m=metaNow();openModal(`<h3>Meta diária</h3><p class="muted small">Quantas questões por dia? Cada dia em que você bate a meta soma 1 na sua sequência 🔥. Uma vez por semana, um dia sem meta é coberto por uma proteção ❄️, desde que no dia seguinte você volte a bater a meta.</p>
      <div class="row" style="margin:10px 0">${[5,10,15,20,30,50].map(v=>`<button class="btn small ${v===m?'':'ghost'}" data-act="meta-set" data-v="${v}">${v}</button>`).join('')}</div>
      <label class="lb" for="metaIn">Ou digite outro valor</label><div class="row"><input id="metaIn" type="number" inputmode="numeric" min="1" max="300" value="${m}" style="max-width:110px"><button class="btn small" data-act="meta-set">Salvar</button></div>
      <div class="tiny muted" style="margin-top:8px">Mudar a meta vale a partir de hoje; os dias passados continuam contando com a meta da época.</div>
      <div class="actions"><button class="btn ghost" data-act="close-modal">Fechar</button></div>`)}
  else if(a==='meta-set'){
    const v=b.dataset.v?+b.dataset.v:Math.round(+($('#metaIn')||{}).value);
    if(!Number.isInteger(v)||v<1||v>300){toast('Escolha um número de 1 a 300');return}
    const now=Date.now(),d0=new Date();d0.setHours(0,0,0,0);
    S.metas=(S.metas||[]).filter(x=>x[0]<d0.getTime());S.metas.push([now,v]);
    save('progresso');closeModal();render();toast('Meta diária: '+v+' questões');
  }
  else if(a==='train-q'){U.cur=b.dataset.id;U.why='Escolhida por você no banco';U.answered=null;U.guess=false;U.mode='smart';U.topic='';U.disc='';go('treinar')}
  else if(a==='new-q')openForm();
  else if(a==='edit-q')openForm(b.dataset.id);
  else if(a==='save-q')saveForm(b.dataset.id);
  else if(a==='close-modal')closeModal();
  else if(a==='imp-open')openImport();
  else if(a==='mat-open')openMaterials();
  else if(a==='mat-read')openMatRead(b.dataset.m,+b.dataset.s);
  else if(a==='mat-do'){
    const f=U.matPending;if(!f)return;
    const nm=($('#matName').value||'').trim();if(nm){f.m.t=nm;for(const q of f.qs)q.src=q.src.replace(/^Material · [^·]*·/,'Material · '+nm+' ·')}
    S.mat=S.mat||{};S.matQ=S.matQ||{};
    S.mat[f.m.id]=f.m;S.matQ[f.m.id]=f.qs;for(const q of f.qs)delete PERM[q.id];
    rebuild();save('mat_'+f.m.id);save('matq_'+f.m.id);save('materiais');
    U.matPending=null;U.matRaw=null;openMaterials();toast('Aula importada: '+f.m.secs.length+' partes, '+f.qs.length+' questões');
  }
  else if(a==='mat-del'){const id=b.dataset.m;openModal(`<h3>Remover esta aula?</h3><p class="muted small">Remove o conteúdo e as questões comentadas desta aula. Seu histórico de respostas fica guardado.</p><div class="actions"><button class="btn ghost" data-act="mat-open">Cancelar</button><button class="btn danger" data-act="mat-del-do" data-m="${esc(id)}">Remover</button></div>`)}
  else if(a==='mat-del-do'){const id=b.dataset.m;delete S.mat[id];delete S.matQ[id];rebuild();if(U.cur&&!QMAP[U.cur])U.cur=null;save('materiais');saveLocal();if(ST.mode==='cloud'){ref('mat_'+id).delete().catch(()=>{});ref('matq_'+id).delete().catch(()=>{})}openMaterials();render();toast('Aula removida')}
  else if(a==='imp-all')importAll();
  else if(a==='sim-del'){const id=b.dataset.id;if(!S.sim||!S.sim[id])return;delete S.sim[id];rebuild();if(U.cur&&!QMAP[U.cur])U.cur=null;save('simulados');saveLocal();if(ST.mode==='cloud')ref('sim_'+id).delete().catch(()=>{});openImport();render();toast('Simulado removido')}
  else if(a==='imp-do'){
    const p=U.pending;if(!p)return;
    commitImport(p.pid,p.qs,p.t);closeModal();U.tab='banco';U.bankF='oficiais';U.bankD='';render();window.scrollTo(0,0);toast(p.qs.length+' questões importadas');
  }
  else if(a==='imp-del'){const id=b.dataset.id;openModal(`<h3>Remover questões importadas?</h3><p class="muted small">Remove as questões de ${esc(PROVAS[id].n)} do app. Seus comentários ficam guardados e voltam se você importar de novo.</p><div class="actions"><button class="btn ghost" data-act="close-modal">Cancelar</button><button class="btn danger" data-act="imp-del-do" data-id="${id}">Remover</button></div>`)}
  else if(a==='imp-del-do'){const id=b.dataset.id;S.imp[id]=[];if(S.impT)S.impT[id]={};rebuild();if(U.cur&&!QMAP[U.cur])U.cur=null;save('imp_'+id);closeModal();render();toast('Questões removidas')}
  else if(a==='del-q'){const id=b.dataset.id;openModal(`<h3>Excluir questão?</h3><p class="muted small">A questão, seu comentário e o histórico dela serão apagados.</p><div class="actions"><button class="btn ghost" data-act="close-modal">Cancelar</button><button class="btn danger" data-act="del-do" data-id="${esc(id)}">Excluir</button></div>`)}
  else if(a==='del-do'){const id=b.dataset.id;S.custom=S.custom.filter(q=>q.id!==id);delete S.com[id];delete S.leit[id];S.tent=S.tent.filter(t=>t.q!==id);if(U.cur===id)U.cur=null;rebuild();save('questoes');save('comentarios');save('progresso');closeModal();render();toast('Questão excluída')}
  else if(a==='copy-backup'){
    const txt=JSON.stringify({app:'prioriza-bancarios',v:2,em:new Date().toISOString(),...S});
    const d=new Date(),nm=`prioriza-backup-${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}.json`;
    try{
      let dl=null;try{if(window.claude&&typeof window.claude.use==='function')dl=await window.claude.use('downloads')}catch(_){}
      if(dl){try{await dl.save({filename:nm,data:txt});toast('Backup salvo: '+nm)}catch(e){toast('Download cancelado')}return}
      const blob=new Blob([txt],{type:'application/json'});
      if(navigator.canShare&&navigator.share&&/Android|iPhone|iPad/i.test(navigator.userAgent)){
        const f=new File([blob],nm,{type:'application/json'});
        if(navigator.canShare({files:[f]})){await navigator.share({files:[f],title:'Backup Prioriza'});toast('Backup gerado');return}
      }
      const u=URL.createObjectURL(blob);const l=document.createElement('a');l.href=u;l.download=nm;document.body.appendChild(l);l.click();l.remove();setTimeout(()=>URL.revokeObjectURL(u),60000);
      toast('Backup salvo: '+nm);
    }catch(e){if(e&&e.name==='AbortError')return;toast('Não consegui gerar o arquivo de backup')}
  }
  else if(a==='import-open')openModal(`<h3>Restaurar backup</h3><p class="muted small">Escolha o arquivo de backup (.json). Você pode <b>juntar</b> com o que já está aqui (respostas, comentários e questões dos dois lados ficam) ou <b>substituir</b> tudo.</p><input type="file" id="impf" accept=".json,application/json,text/plain" style="margin:8px 0"><div class="err" id="ierr"></div><div class="actions"><button class="btn ghost" data-act="close-modal">Cancelar</button><button class="btn ghost" data-act="import-do" data-mode="sub">Substituir</button><button class="btn" data-act="import-do" data-mode="merge">Juntar</button></div>`);
  else if(a==='import-do'){
    const f=$('#impf')&&$('#impf').files[0];if(!f){$('#ierr').textContent='Escolha o arquivo de backup.';return}
    let o;try{o=JSON.parse(await f.text())}catch(_){$('#ierr').textContent='Arquivo inválido.';return}
    if(!o||o.app!=='prioriza-bancarios'){$('#ierr').textContent='Isso não parece um backup deste app.';return}
    const inc=norm(o);
    S=b.dataset.mode==='merge'?mergeData(S,inc):inc;
    rebuild();for(const k in PERM)delete PERM[k];
    U.cur=null;U.answered=null;for(const n of docNames())save(n);await writeLocalNow();closeModal();render();
    toast(`Backup restaurado: ${allQ().length} questões, ${S.tent.length} respostas`);
  }
  else if(a==='reset-open')openModal(`<h3>Zerar progresso?</h3><p class="muted small">Apaga respostas e revisões. Seus comentários e questões continuam.</p><div class="actions"><button class="btn ghost" data-act="close-modal">Cancelar</button><button class="btn danger" data-act="reset-do">Zerar</button></div>`);
  else if(a==='reset-do'){S.tent=[];S.leit={};U.sess={n:0,ok:0};U.round=newRound();U.roundSum=null;U.cur=null;U.answered=null;save('progresso');closeModal();render();toast('Progresso zerado')}
});
document.addEventListener('input',e=>{
  const t=e.target;
  if(t.matches('textarea[data-com]')){
    const id=t.dataset.com,v=t.value;
    if(v.trim())S.com[id]=v;else delete S.com[id];
    document.querySelectorAll(`[data-saved="${CSS.escape(id)}"]`).forEach(x=>x.textContent='salvando…');
    clearTimeout(comTimer);comTimer=setTimeout(()=>{save('comentarios');document.querySelectorAll('[data-saved]').forEach(x=>{if(x.textContent==='salvando…')x.textContent=S.com[x.dataset.saved]?'salvo':''})},700);
  }
  else if(t.id==='bq'){U.bankQ=t.value;renderBankList()}
});
document.addEventListener('change',e=>{
  const t=e.target;
  if(t.id==='bd'){U.bankD=t.value;renderBankList()}
  else if(t.id==='bf'){U.bankF=t.value;renderBankList()}
  else if(t.id==='perfilSel'){S.perfil=t.value;U.cur=null;U.answered=null;U.disc='';U.topic='';save('progresso');render()}
  else if(t.id==='discSel'){U.disc=t.value;U.topic='';U.cur=null;U.answered=null;render()}
  else if(t.id==='fd'){$('#fal').innerHTML=assuntosDe(t.value)}
  else if(t.matches('input[data-imp]')&&t.files&&t.files[0])handleImport(t.dataset.imp,t.files[0]);
  else if(t.matches('input[data-impmulti]')&&t.files&&t.files.length)importMany([...t.files]);
  else if(t.matches('input[data-mat]')&&t.files&&t.files[0])handleMat(t.files[0]);
  else if(t.id==='matDisc')matPreview();
  else if(t.matches('select[data-mtp]')){const [mid,i]=t.dataset.mtp.split('|');const s=S.mat[mid]&&S.mat[mid].secs[+i];if(!s)return;const v=t.value;s.tp=v?[v,...s.tp.filter(x=>x!==v)].slice(0,2):[];save('mat_'+mid);toast('Vínculo atualizado')}
});
document.addEventListener('toggle',e=>{const t=e.target;if(t.matches&&t.matches('details.qi')){if(t.open)U.openId=t.dataset.id;else if(U.openId===t.dataset.id)U.openId=null}},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#modal').hidden)closeModal()});

boot();
