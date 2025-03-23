// Lista de questões (exemplo com 2 questões)
const questions = [
  {
    question: "QUESTÃO 31<br><br>Com relação à classificação dos documentos administrativos da Marinha do Brasil, é correta afirmar que:",
    options: ["(A) é classificado quanto ao acesso em: urgente, especial ou rotina.", 
              "(B) a reprodução de parte de um documento administrativo sigiloso terá um grau de sigilo menor que o original.", 
              "(C) a elaboração de extratos de documentos administrativos ultrassecretos depende da permissão de autoridade certificadora ou de autoridade hierarquicamente superior.", 
              "(D) o documento administrativo de correspondência classificado como sigiloso, unicamente por encaminhar anexo sigiloso, será desclassificado tão logo seja retirado esse anexo.", 
              "(E) o Termo de Documentação Sigilosa (TDS) é o formulário que formaliza a decisão de classificação e determina o prazo de sigilo da informação."
            ],
    correctOption: "A",
    detailedSolution: `Correta: Letra (A)<br>

                      Analisando as opções:<br>
           
                      Letra (A)<br><strong>2.1.2. Precedência </strong><br>
                       O <strong>DA</strong> poderá ter um dos seguintes graus de precedência: <strong>urgente</strong>, <strong>especial</strong> ou <strong>rotina</strong>. 
                       
                       <br> a) <strong  id="maiuscula">urgente</id=></strong> - o DA exige ação ou conhecimento imediato do recebedor; 
                       
                       <br> b) <strong  id="maiuscula">especial</strong> - a tramitação do DA especial possui prioridade sobre a tramitação do DA de rotina. Esse grau de precedência somente será atribuído ao DA de âmbito interno; e  
                       
                       <br> c) <strong  id="maiuscula">rotina</strong> - o DA que não se enquadra nas situações anteriores. É atribuída à maioria dos DA. <br>

                       Letra (B)<br><strong>2.2. REPRODUÇÃO DE “DA” SIGILOSO </strong><br>

                       A reprodução <strong>do todo ou</strong> de parte de DA sigiloso terá o mesmo grau de sigilo <strong>do original</strong> e dependerá de autorização da autoridade expedidora, em conformidade com as normas em vigor. <br><br>
                          
                     
                      
                      
                      `
                      
  },
  {
    question: "QUESTÃO 32<br><br>Conforme preconizado no CAAML-703, assinale a opção que NÃO apresenta um tipo de turco.",
    options: [
      "(A) Quadrantal.",
      "(B) Hidráulico.",
      "(C) Comum.",
      "(D) Rolante ou deslizante.",
      "(E)  De rebater."
    ],
    correctOption: "B",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },
  {
    question: "QUESTÃO 33<br><br>De acordo com a Ordenança Geral para o Serviço da Armada, em relação aos deveres das Pragas, conforme suas graduações, é correto afirmar que os:",
    options: [
      "(A)  Cabos serão auxiliares diretos dos Suboficiais, ou dos Oficiais, conforme a Organização  Militar (OM) em que servirem, em todos os atos de serviço e na execução das fainas que aqueles auxiliarem ou dirigirem.",
      "(B) Sargentos serão auxiliares diretos dos Oficiais em todos os atos de serviço e na execução das fainas que aqueles dirigirem.",
      "(C) Sargentos serão auxiliares diretos dos Suboficiais, ou dos Oficiais, conforme a Organização Militar (OM) em que servirem, em todos os atos de serviço e na execução das fainas que aqueles auxiliarem ou dirigirem.",
      "(D) Suboficiais, quando no exercício do comando, impõem penas disciplinares.",
      "(E) Pragas Especiais, quando matriculadas em escola de formação, não têm a obrigação de se impor às Pragas mais modernas."
    ],
    correctOption: "C",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },

  {
    question: "QUESTÃO 34<br><br>A tenacidade é apresentada como um dos valores que compõe a Rosa das Virtudes. Segundo a Doutrina de Liderança da Marinha, esse valor pode ser definido como:",
    options: [
      "(A) a presença de animo perante qualquer obstáculo ou dificuldade, a vontade constante de tudo superar e bem desempenhar a tarefa ou função, de caráter operativo ou administrativo.",
      "(B) a disposição para estudar tanto o material em si como também a maneira de utiliza-lo. É a força misteriosa que, dominando a alma do verdadeiro marinheiro, o conduz sempre ao sacrifício com inexcedível vibração e estoica resignação.",
      "(C) o sentimento que induz o individuo à pratica do Bem, da Justiça e da Moral. É a força que o impele a prestigiar sua própria personalidade, como um sentimento de seu patrimônio moral, um misto de brio e valor.",
      "(D) o querer saber longamente, sem desfalecimento e sem trégua. A disposição sincera de realmente oferecer, espontaneamente, interesses, comodidades, vida, tudo, em prol do cumprimento do dever.",
      "(E) o sentimento que leva a não poupar esforços para o bom desempenho das funções que lhes são atribuídas. É o sentimento que conduz à dedicação ao serviço, como autêntica expressão do dever."
    ],
    correctOption: "A",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },

  {
    question: "QUESTÃO 35<br><br>Conforme CAAML-1202, assinale a opção correta sobre os extintores classe 'K'.",
    options: [
      "(A) O extintor de agente úmido classe K contém uma solução especial de acetato de cálcio, diluída em água que, quando acionado, é descarregado com um jato tipo neblina (pulverização), como em um sistema fixo, e são identificados por meio de um quadrado preto contendo a letra K.",
      "(B) Em relação a extinção e a segurança do pessoal é o melhor extintor portátil para cozinhas comerciais/industriais e pragas de máquinas devido & presença de óleos, e são identificados por meio de um triangulo verde contendo a letra K.",
      "(C)  Este equipamento é dotado de um aplicador, que permite ao operador se posicionar de forma segura da superfície em chamas, não espalhando óleo quente ou gordura, e são identificados por meio de um quadrado branco contendo a letra K.",
      "(D) O fogo é extinto por resfriamento e pelo efeito do abafamento da espuma (saponificação) e os extintores são identificados por meio de um quadrado contendo a letra K.",
      "(E) O fogo é extinto por resfriamento e pelo efeito asfixiante da espuma (saponificação), e os extintores são identificados por meio de um quadrado preto contendo a letra K."
    ],
    correctOption: "E",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },

  {
    question: "QUESTÃO 36<br><br>O decreto nº 88.545/1983, Regulamento Disciplinar para a Marinha, define contravenção disciplinar como toda ação ou omissão contrária às obrigações ou aos deveres militares estatuídos nas leis, nos regulamentos, nas normas e nas disposições em vigor que fundamentam a Organização Militar, desde que não incidindo no que é capitulado pelo Código Penal Militar como crime. Com relação à classificação e extensão das penas disciplinares, analise as afirmativas abaixo e assinale a opção correta. <br><br>I - para Oficiais da ativa: repreensão; prisão simples, até 10 dias; e prisão rigorosa, até 10 dias. <br><br>II - para Oficiais da reserva que exerçam funções de atividade: repreensão; prisão simples, até 10 dias; prisão rigorosa, até 10 dias; e dispensa das funções de atividade e  licenciamento ou exclusão do serviço ativo, a bem da disciplina. <br><br>III - para os Oficiais da reserva remunerada que não exerçam funções de atividade e os reformados: repreensão; prisão simples, até 10 dias; e prisão rigorosa, até 10 dias. <br><br>IV - para Suboficiais: repreensão; prisão simples, até 10 dias; prisão rigorosa, até 10 dias; e exclusão do serviço ativo, a bem da disciplina. <br><br>V - para Sargentos: repreensão; impedimento, até 30 dias; prisão simples, até 10 dias; prisão rigorosa, até 10 dias; serviço extraordinário, até 10 dias; e licenciamento ou exclusão do serviço ativo, a bem da disciplina. <br><br>VI - para Cabos, Marinheiros e Soldados: repreensão; impedimento, até 30 dias; serviço extraordinário, até 10 dias; prisão simples, até 10 dias; prisão rigorosa, até 10 dias; e licenciamento ou exclusão do serviço ativo, a bem da disciplina.                                                                                                                                           ",
    options: [
      "(A) As afirmativas I, II, III, IV, V e VI estão corretas.",
      "(B) As afirmativas I, III, IV e VI estão corretas.",
      "(C) As afirmativas III e VI estão corretas.",
      "(D) As afirmativas II, III e V estão corretas.",
      "(E) As afirmativas IV, V e VI estão corretas."
    ],
    correctOption: "B",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },

  {
    question: "QUESTÃO 37<br><br>De acordo com o vocativo e o número de “boys” estabelecidos no Cerimonial da Marinha do Brasil, assinale a opção que apresenta corretamente os Oficiais que são anunciados pelo cargo que exercem e o respectivo número de 'boys' nas honras de recepção e despedida.",
    options: [
      "(A) O Chefe do Estado-Maior da Armada, o Chefe do Estado-Maior da Esquadra, o Comandante de Operações Navais, o Comandante da Marinha e o Comandante-Geral do Corpo de Fuzileiros Navais com 6 “boys”.",
      "(B) O Comandante da Marinha, o Chefe do Estado-Maior da Esquadra, o Comandante de Operações Navais, o Comandante-Geral do Corpo de Fuzileiros Navais e o Comandante em Chefe da Esquadra com 8 “boys”.",
      "(C) O Chefe do Estado-Maior da Armada, o Comandante em Chefe da Esquadra, o Comandante de Operações Marítimas e Proteção da Amazônia Azul, o Comandante-Geral do Corpo de Fuzileiros Navais e o Comandante da Marinha com 8 “boys”.",
      "(D) O Comandante em Chefe da Esquadra, o Comandante de Operações Navais, o Chefe do Estado-Maior da Armada, o Comandante-Geral do Corpo de Fuzileiros Navais e o Comandante da Marinha com 8 “boys”.",
      "(E) O Comandante em Chefe da Esquadra, o Comandante de Operações Navais, o Diretor Geral do Pessoal da Marinha, o Comandante-Geral do Corpo de Fuzileiros Navais e o Comandante da Marinha com 8 “boys”."
    ],
    correctOption: "D",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },

  {
    question: "QUESTÃO 38<br><br>De acordo com a lei nº 88.545/1983, Regulamento Disciplinar para a Marinha, a repreensão consistira na declaração formal de que o contraventor é assim punido por haver cometido determinada contravenção. Sobre a repreensão, essa pode ser aplicada:",
    options: [
      "(A) apenas em particular ou por escrito em ofício confidencial, quando se tratar de Oficial.",
      "(B) verbalmente ao Suboficial, nos círculos de Oficiais e Suboficiais.",
      "(C) por escrito às Praças de graduação inferior a Sargento, em formatura da guarnição, ou parte dela, e fixada em quadro de avisos do círculo a que pertencer o contraventor.",
      "(D) quando em particular, diretamente pelo subordinado que a impuser; verbalmente, na presença do Encarregado, Sargenteante Geral e do contraventor; por escrito, em ofício ostensivo a ele dirigido.",
      "(E) verbalmente ao Oficial, na presença de Oficiais do mesmo círculo e, quando a Oficiais Superiores, somente por Almirantes."
    ],
    correctOption: "B",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },

  {
    question: "QUESTÃO 39<br><br>Segundo CAAML-703, coloque F (falso) ou V (verdadeiro) nas sentenças a seguir, em relação às precauções de segurança nas operações aéreas, assinalando em seguida a opção correta.",
    options: [
      "(A)  A rede de proteção permanece içada durante a movimentação da aeronave do hangar para a plataforma (espotagem) ou da plataforma para o hangar (hangaragem), e enquanto estiverem sendo executados serviços na aeronave sem virada de motor (inclusive dobragem e desdobragem das pás).",
      "(B) Por ocasião da partida do motor, um componente da Equipe de Manobra e Crache guarnece uma linha de mangueira de combate a incêndio e mantém-se próximo & descarga do motor.",
      "(C) Não se usa cobertura ou qualquer outro tipo de material solto que possa “voar”, tais como papéis, pedaços de pano, no convés de voo ou nos locais abertos que lhe dão acesso, com exceção do piloto mais antigo do Destacamento Aéreo Embarcado (DAE).",
      "(D) Durante as fainas de abastecimento, a Equipe de Crache deve estar a postos, com equipamento de combate a incêndio pronto para ser usado.",
      "(E) O Agente de Segurança da Aviação (ASAV) assessora diretamente o Imediato nos assuntos relativos & segurança da aviação de sua organização militar; respondendo por todas as atividades desenvolvidas em cumprimento ao Programa de Publicação de Acidentes Aeronáuticos (PPAA)."
    ],
    correctOption: "B",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },
  {
    question: "QUESTÃO 40<br><br>De acordo com a DGPM-315, sobre a oitiva do procedimento administrativo que se destina à apuração de fatos que possam constituir crimes militares, delitos da competência da Justiça Militar, previstos no art. 9º do Código Penal Militar (CPM), bem como as suas autorias, assinale a opção correta.",
    options: [
      "(A) A oitiva das testemunhas, do ofendido e do indiciado, exceto em caso de urgência inadiável, que constara da respectiva assentada, deve ser realizada durante o período que medeie entre as dezoito e sete horas, de acordo com o art. 39 do Código de Processo Penal Militar (CPPM). A testemunha não devera ser, normalmente, inquirida por mais de oito horas consecutivas, sendo-lhe facultada um descanso de 45 minutos, sempre que tiver que prestar declarações além daquele termo, de acordo com o art. 19, §2° do CPPM.",
      "(B) Os termos de interrogatório e de inquirição deverão constar em folhas juntas, porém com espaçamento duplo. É prudente que o interrogatório do indiciado seja acompanhado por duas testemunhas, obrigatoriamente Oficial quando o depoente for Oficial, nomeadas pelo escrivão, as quais assinarão o “Termo de Interrogatório”.",
      "(C)Se, durante o curso das investigações, a autoridade nomeante ou o encarregado verificar a existência de indícios contra qualquer testemunha ou ofendido, que leve ao enquadramento de algum destes como indiciado, o encarregado emitira relatório parcial, devendo, ainda, notifica-lo (Termo de Interrogatório) e interroga-lo nesta condição.",
      "(D) Antes de iniciar qualquer oitiva é obrigatório que o ofendido, indiciado ou depoente seja entrevistado pelo escrivão. As perguntas formuladas ao ofendido, quando Oficial, deverão ser feitas pela autoridade nomeante. E ao indiciado ou depoente serão transcritas antes das respectivas respostas.",
      "(E)  Após a oitiva, o termo devera ser lido e assinado pelo ofendido, indiciado ou testemunha e pelas testemunhas que presenciaram a oitiva, caso haja, que rubricarão, também, as folhas que não contiverem assinatura. Poderão ser ouvidos, à semelhança das testemunhas, os menores de 14 anos, os doentes ou deficientes mentais, os ascendentes, descendentes, sogro, sogra, genro, nora, cônjuge, separado judicialmente/ divorciado, irmão ou pessoa que tenha vinculo de adoção com o indiciado, observado o disposto nos art. 352, §2° eart, 354 do CPPM, estando isentos do compromisso de dizer a verdade e, sendo, assim, denominados informantes.",
    ],
    correctOption: "E",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },

  {
    question: "QUESTÃO 41<br><br>De acordo a lei nº 6.880/1980, art. 34 a 41, com relação ao comando e à subordinação, é correto afirmar que:",
    options: [
      "(A) comando é a soma dos poderes da autoridade, legalmente nomeada, deveres e responsabilidades de que o Oficial é investido legalmente quando conduz homens ou dirige uma organização militar. O comando é vinculado ao grau hierárquico e constitui uma prerrogativa pessoal, em cujo exercício o Oficial se define e se caracteriza com o líder. ",
      "(B) a subordinação não afeta, de modo algum, a dignidade — pessoal do militar e decorre, exclusivamente, da estrutura hierarquizada das Forças Armadas.",
      "(C) o Oficial é preparado, nos cursos de carreira, para exercício e funções de comando, como também punir e avaliar seus subordinados.",
      "(D) os graduados supervisionam ou complementam as atividades dos Oficiais, quer na guerra, no adestramento e no emprego de meios navais, quer na instrução e na administração pública.",
      "(E)  as Pragas Especiais, quando aplicável, cabe a rigorosa observância das prescrições dos regulamentos que lhes são pertinentes, exigindo-lhes todas as honras dos subordinados e inteira dedicação ao estudo e ao aprendizado técnico-profissional militar.",
    ],
    correctOption: "B",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },

  {
    question: "QUESTÃO 42<br><br>De acordo com a DGPM-315, no ordenamento jurídico brasileiro, existem as espécies e subespécies de prisão. Assinale a opção correta sobre as subespécies da prisão provisória (cautelar).",
    options: [
      "(A) A prisão provisória civil, para o responsável pelo adimplemento involuntário e escusável de obrigação alimentícia.",
      "(B) A prisão decorrente de sentença civil não condenatória com trânsito em julgado e prazo recorrível.",
      "(C) A prisão administrativa cautelar, para os casos de punição disciplinar militar, de menor teor ofensivo e que não configurem crime militar, e para os estrangeiros em situação regular em seu pais.",
      "(D)  A prisão em flagrante, prisão preventiva, prisão temporária, prisão decorrente de sentença de pronúncia e prisão decorrente de sentença penal condenatória recorrível.",
      "(E) A prisão disciplinar, para os casos de transgressão militar até a graduação de Cabo.",
    ],
    correctOption: "D",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },

  {
    question: "QUESTÃO 43<br><br>Conforme CAAML-1201, assinale a opção correta referente às principais funções e suas respectivas competências de acordo com a Organização de Combate (OC) do Controle de Avarias (CAv).",
    options: [
      "(A) Ao Imediato compete manter o Comandante informado do estado de prontidão do CAv do navio, tanto em termos de material quanto em termos de pessoal.",
      "(B) A Turma de Máscaras é constituída por, pelo menos, três militares, o Controlador de Máscaras e mais dois ajudantes, cabendo a ela sob as ordens do Investigador, controlar a situação dos compartimentos adjacentes ao avariado, cumprindo os Limites de Incêndio conforme ordenado.",
      "(C) O Mensageiro deverá estabelecer a troca de informações entre o Líder da Cena de Ação e o Encarregado do CAv, movimentando-se entre os locais.",
      "(D)  O Líder da Cena de Ação deverá escolher a posição de controle da faina, posicionar-se no melhor local para tal, considerando a presença da fumaça, facilidade de acesso do pessoal do Reparo a este ponto, não necessitando, portanto, estar vestido com Equipamento de Proteção Individua! (EPI).",
      "(E) O Encarregado do Reparo deverá ter um papel ativo no adestramento do pessoal, bem como conhecer profundamente as deficiências logísticas (pessoal e material) na área de responsabilidade do seu Reparo.",
    ],
    correctOption: "E",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },


  {
    question: "QUESTÃO 44<br><br>As prerrogativas dos militares, apresentadas no Estatuto dos Militares, são constituídas pelas honras, dignidades e distinções devidas aos graus hierárquicos e cargos. Assim, são prerrogativas dos militares, EXCETO:",
    options: [
      "(A)  o uso de títulos, uniformes, distintivos, insígnias e emblemas militares —das Forças Armadas, correspondentes ao posto ou graduação, Corpo, Quadro, Arma, Serviço ou Cargo; e honras, tratamento e sinais de respeito que lhes sejam assegurados em leis e regulamentos.",
      "(B)  se durante o processo e julgamento no foro civil houver perigo de vida para qualquer preso militar, a autoridade militar competente, mediante requisição da autoridade judiciaria, mandara guardar os pretórios ou tribunais por força federal.",
      "(C)  o cumprimento de pena de prisão ou detenção somente em organização militar da respectiva Força cujo Comandante, Chefe ou Diretor tenha precedência hierárquica sobre o preso ou, na impossibilidade de cumprir esta disposição, em organização militar de outra Força cujo Comandante, Chefe ou Diretor tenha a necessária precedência.",
      "(D)  os militares da ativa, no exercício de funções militares, são dispensados do serviço na instituição do Júri e do serviço na Justiça Eleitoral; e julgamento em foro especial nos crimes militares.",
      "(E) a promoção que se da pelo acesso da hierarquia militar fundamentada principalmente no valor moral e profissional, é seletiva, gradual e sucessiva e será feita mediante promoções, de conformidade com a legislação e regulamentação de promandes de Oficiais e de Pragas, de modo a obter-se um fluxo regular e equilibrado de carreira para os militares.",
    ],
    correctOption: "E",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },
  {
    question: "QUESTÃO 45<br><br>De acorde com o EMA-137, assinale a opção correta sobre o estilo de liderança participativa.",
    options: [
      "(A) É baseado na autoridade formal, aceita como correta e legítima pela estrutura do grupo. Os componentes do grupo são incentivados a opinarem sobre as formas como a missão poderá ser realizada, cabendo a decisão final ao chefe (exemplo típico é o Estado-Maior da Armada).",
      "(B) O seu êxito é condicionado pelas características pessoais, pelo conhecimento técnico-profissional e pelo engajamento e motivação do grupo como um todo. Em se obtendo sucesso, a satisfação pessoal e o sentimento de contribuição por parte dos subordinados são fatores que permitem uma realimentação positiva do processo.",
      "(C) É indicado para assuntos de natureza técnica, onde o líder atribui a assessores a tomada de decisões especializadas, deixando-os agir por si só. E na ausência do líder, uma boa equipe terá condições de continuar agindo de acordo com o planejamento previamente determinado para cumprir a tarefa da Organização.",
      "(D)  Os componentes do grupo são incentivados a opinarem sobre as formas como uma tarefa poderá ser realizada. O objetivo do líder é a preservação e o fortalecimento das relações pessoais e do próprio grupo. Um chefe seguro facilmente conseguirá exercer uma liderança democrática, mas tenderá a submeter ao grupo todas as decisões.",
      "(E) A especialização em tarefas é uma das principais responsabilidades do líder, na medida em que possui a necessária qualificação profissional para o exercício da função. O líder deve estabelecer um ambiente de respeito, confiança e entendimento unilateral, devendo possuir, para tanto, ascendência técnico-profissional sobre seus superiores e conduta ética, moral e filosófica compatíveis com o cargo de Comando.",
    ],
    correctOption: "B",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },
  {
    question: "QUESTÃO 46<br><br>Com relação aos tipos de Documentos Administrativos da Marinha do Brasil, é correto afirmar que a:",
    options: [
      "(A) (A) Instrução Normativa é expedida, no âmbito da Marinha do Brasil (MB), exclusivamente pelo Comandante da Marinha (CM), em virtude de competência regimental ou delegada, para estabelecer instruções e procedimentos de caráter geral necessário à execução de normas, leis, decretos e regulamentos.",
      "(B)  Instrução Normativa é o documento administrativo normativo por meio do qual o Estado-Maior da Armada (EMA), os Órgãos de Direção Setorial (ODS), o Gabinete do Comandante da Marinha (GCM), as Organizações  Militares Orientadoras Técnicas (OMOT) e as Organizações Militares (OM) com atribuições de Diretoria Especializada (DE) estabelecem normas e procedimentos sobre assuntos de sua competência, para toda a MB.",
      "(C)  Instrução Permanente é o documento administrativo normativo pelo qual os Almirantes, em cargo de Comando, Direção ou Chefia, bem como os Oficiais Superiores e os Oficiais Superiores Comandantes de Força estabelecem normas e procedimentos que  sendo cumpridos pelas OM que lhes são subordinadas.",
      "(D) Portaria é o documento administrativo normativo pelo qual os Titulares de OM estabelecem normas e procedimentos no âmbito interno de suas OM.",
      "(E) Ordem Interna é o documento administrativo normativo expedido em virtude de competência regimental ou delegada, para a  institucionalização de politicas, diretrizes, planos, programas e projetos.",
    ],
    correctOption: "B",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },
  
  
  {
    question: "QUESTÃO 47<br><br>Conforme CAAML-1201, durante uma faina de combate a incêndio, a quem compete realizar busca a feridos nos compartimentos adjacentes ao sinistro, especialmente se for em uma área habitável, e resfriar os pontos de ignição em potencial, respectivamente?",
    options: [
      "(A) Investigador e Turma de Contenção.",
      "(B) Turma de Primeiros Socorros e Turma de Contenção.",
      "(C) É indicado para assuntos de natureza técnica, onde o líder atribui a assessores a tomada de decisões especializadas, deixando-os agir por si só. E na ausência do líder, uma boa equipe terá condições de continuar agindo de acordo com o planejamento previamente determinado para cumprir a tarefa da Organização.",
      "(D)  Eletricista e Turma de Contengéo.",
      "(E) Turma de Primeiros Socorros e Turma de Rescaldo.",
    ],
    correctOption: "C",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },

  
  {    question: "QUESTÃO 48<br><br>Com relação as disposições gerais dos serviços de Oficiais, & luz da Ordenança Geral para o Serviço da Armada, é correto afirmar que:",
    options: [
      "(A) o Serviço de Estado é o serviço executado por período de duração superior a quatro horas, não podendo ultrapassar vinte e quatro horas.",
      "(B) a duração dos quartos será fixada pelo Comandante da Organização Militar (OM), não podendo ser inferior a duas horas para navios em viagem.",
      "(C) o Oficial de Serviço a bordo de navio, em regime de viagem, na estação de controle da manobra, denomina-se Oficial de Manobra.",
      "(D)  o Oficial de Serviço, no exercício de suas atribuições, é o representante do Comandante e, como tal, tem plena autoridade sobre tudo que se relacionar com o Serviço.",
      "(E) o Oficial de Serviço dará conhecimento ao Comandante e ao Chefe de Maquinas das ocorrências mais importantes e das providências que tomar a respeito.",
    ],
    correctOption: "D",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },

  
  {    question: "QUESTÃO 49<br><br>De acordo com as Normas sobre Justiça e Disciplina da Marinha (DGPM-315), assinale a opção correta sobre a competência da justiça.",
    options: [
      "(A) A Justiça Federal competem as causas em que a Federação, Entidade Autárquica ou Empresa Mista Federal forem processadas. ",
      "(B) A Justiça Federal Comum compõe-se dos Tribunais de Justiça, dos Juízes de Direito, da Justiça do Trabalho, do Tribunal do Júri e os Juizados Especiais.",
      "(C) A Justiça Eleitoral compõe-se dos Tribunais Regionais Federais, dos Juízes Federais Especiais, dos Juizados Especiais (para causas cíveis de menor complexidade e infrações penais de menor potencial defensivo) e do Tribunal do Júri Eleitoral.",
      "(D) Tanto as causas da Justiça Federal como as da Justiça Estadual, cumpridos os requisitos exigidos, podem ser submetidas ao Superior Tribunal de Justiça (STJ), Tribunal que, além de sua competência originaria, aparece como última instancia da Justiça Comum em matéria não constitucional, o que se da através do recurso ordinário ou do recurso especial.",
      "(E) O órgão de cúpula do Poder Judiciário Militar é o Superior Tribunal Militar (STM), composto de 25 Ministros. Sua função precípua é preservar, por meio de sua interpretação analítica e subjetiva, o “espirito” e os princípios do Código de Processo Penal Militar(CPPM), já que é seu intérprete definitivo.",
    ],
    correctOption: "D",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  },
  
  {    question: "QUESTÃO 50<br><br>De acordo com o art. 8-1-4 do Cerimonial da Marinha do Brasil, assinale a opção correta que apresenta uma situação em que a bandeira de nação estrangeira é hasteada no tope do mastro principal.",
    options: [
      "(A) Para prestar honras de salva a autoridade civil ou militar da respectiva nação que tenha direito a salva menor que vinte e um tiros.",
      "(B) Em substituição a Bandeira Nacional, por ocasião de embandeiramento em arco ou nos topes, em homenagem & nação estrangeira.",
      "(C) Em substituição à bandeira-insígnia da nação, quando esta, sendo reconhecida pelo governo brasileiro como independente e possuindo bandeira-insignia própria, faz uso de bandeira de guerra da comunidade, império ou federação da qual é parte ou domínio.",
      "(D) Para prestar honras de salva a autoridade civil ou militar da respectiva nação que tenha direito a salva maior que vinte e um tiros.",
      "(E) Quando a nação, por mandato ou representante, não exerce o governo de outra nação que tenha bandeira nacional própria.",
    ],
    correctOption: "B",
    detailedSolution: `I - Com respeito ao papel de condutor de homens, identifica-se um estreito relacionamento com o atributo de LÍDER.<br>
VI - O exercício da CHEFIA é entendido pelo conjunto de ações e decisões tomadas pelo mais antigo, com autoridade para tal, a fim de conduzir de forma integrada o setor que lhe é confiado.`
  }
];

// Função para renderizar todas as questões de uma única vez
function renderQuestions() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = questions.map((q, i) => {
    return `
      <div class="question" id="question-${i}">
        <h3>${q.question}</h3>
        <div class="options">
          ${q.options.map((option, j) => {
            const trimmed = option.trim();
            const displayText = trimmed.startsWith("(") ? trimmed : `${String.fromCharCode(65 + j)}) ${option}`;
            const value = trimmed.startsWith("(") ? trimmed.substring(1,2) : option;
            return `
              <div class="option" onclick="selectOption(this, 'q${i}')">
                <input type="radio" name="q${i}" id="q${i}_${j}" value="${value}">
                <label for="q${i}_${j}">${displayText}</label>
              </div>
            `;
          }).join('')}
        </div>
        <!-- Botão "Mostrar Solução" inicia desabilitado -->
        <button class="show-solution-btn" id="sol-btn-${i}" disabled onclick="toggleSolution(${i}, this)">Mostrar Solução</button>
        <button class="show-solution-btn" id="sol-btn-${i}" onclick="toggleSolution(${i}, this)">Mostrar Solução</button>
        <!-- Bloco de solução para a questão -->
        <div class="solution" id="solution-${i}">
          <fieldset class="solution-box">
            <legend>Resposta correta</legend>
            <p class="solution-text">
              ${q.detailedSolution}
            </p>
          </fieldset>
        </div>
      </div>
    `;
  }).join('');
}

// Função para selecionar uma opção (mantém o tamanho inalterado)
function selectOption(element, groupName) {
  const radios = document.getElementsByName(groupName);
  radios.forEach(radio => {
    radio.parentElement.classList.remove("selected");
    radio.parentElement.classList.remove("wrong");
  });
  element.classList.add("selected");
  element.querySelector("input").checked = true;
  // O botão "Mostrar Solução" permanece desabilitado até que o quiz seja submetido.
}

// Função para alternar a exibição da solução de uma questão
function toggleSolution(index, btn) {
  const sol = document.getElementById("solution-" + index);
  if (sol.style.display === "none" || sol.style.display === "") {
    sol.style.display = "block";
    btn.textContent = "Ocultar Solução";
  } else {
    sol.style.display = "none";
    btn.textContent = "Mostrar Solução";
  }
}

// Função para submeter o quiz, calcular o resultado, destacar alternativas erradas e exibir o certificado
function submitQuiz() {
  let score = 0;
  let unanswered = false;
  
  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    const container = document.getElementById(`question-${i}`);
    if (selected) {
      if (selected.value === q.correctOption) {
        score++;
      } else {
        // Destaca a alternativa errada selecionada
        selected.parentElement.classList.add("wrong");
      }
    } else {
      unanswered = true;
    }
  });
  
  if (unanswered) {
    alert("Por favor, responda todas as questões antes de submeter.");
    return;
  }
  
  const percentage = (score / questions.length) * 100;
  
  // Cria a mensagem do certificado conforme solicitado
  const certificateMessage = 
`Certificado de Conclusão
Este certificado atesta que você concluiu o exercício do EMA-137.

Não desanime! Revise o conteúdo e tente novamente para melhorar seu desempenho.

Você acertou ${score} de ${questions.length} questões (${percentage.toFixed(2)}%).`;
  
  const certificateContainer = document.getElementById("certificate");
  certificateContainer.innerHTML = `<pre>${certificateMessage}</pre>`;
  certificateContainer.classList.remove("hidden");
  
  // Após submeter, habilita todos os botões "Mostrar Solução"
  document.querySelectorAll(".show-solution-btn").forEach(btn => btn.disabled = false);
  
  // Desabilita o botão de submeter para evitar reenvio
  document.getElementById("submit-btn").disabled = true;
}

// Inicializa o quiz renderizando todas as questões
renderQuestions();