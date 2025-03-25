export interface Problem {
  id: string;
  edicao: string;
  numero: number;
  area_conhecimento: 'Matemática' | 'Fundamentos da Computação' | 'Tecnologia de Computação';
  alternativas: Array<string>;
  enunciado: string;
  gabarito: string;
  solucao: string;
  area: string;
  subarea: string;
  dificuldade: '' | 'Fácil' | 'Média' | 'Difícil';
}

export const problems: Problem[] = [
  {
    "id": "42 - GERADA",
    "edicao": "GERADA",
    "numero": 42,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Em um grafo não orientado, um vértice é chamado de articulação se a remoção desse vértice aumenta o número de componentes conexas do grafo. Em um grafo orientado, um vértice é chamado de:",
    "alternativas": ["A) Ponto de articulação.", "B) Vértice crítico.", "C) Ponto de corte.", "D) Vértice de corte.", "E) Ponto de conexão."],
    "gabarito": "A",
    "solucao": "No caso de grafos orientados, o vértice que desempenha o mesmo papel que a articulação em grafos não orientados é chamado de ponto de articulação.",
    "area": "Teoria dos Grafos",
    "subarea": "Grafos orientados e não-orientados",
    "dificuldade": "Média"
  },
  {
    "id": "4 - GERADA",
    "edicao": "GERADA",
    "numero": 4,
    "area_conhecimento": "Matemática",
    "enunciado": "Determine o valor de \\(\\beta\\) que faz com que a matriz \\(M\\) seja inversível: \n\n\\[ M = \\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & \\beta \\end{bmatrix} \\]",
    "alternativas": ["A) \\(\\beta = 1\\)", "B) \\(\\beta = 2\\)", "C) \\(\\beta = 3\\)", "D) \\(\\beta = 9\\)", "E) \\(\\beta = 10\\)"],
    "gabarito": "D",
    "solucao": "Para que a matriz seja inversível, seu determinante deve ser diferente de zero. Calculando o determinante da matriz, encontramos que \\(\\beta\\) deve ser igual a 9.",
    "area": "Álgebra Linear",
    "subarea": "Transformações Lineares e Matrizes",
    "dificuldade": "Média"
  },
  {
    "id": "2024-01",
    "edicao": "2024",
    "numero": 1,
    "area_conhecimento": "Matemática",
    "enunciado": "Resolva o sistema abaixo utilizando o método de Gauss:\n\n\\[ \\begin{cases} 2x - 2y + z = -3 \\\\ x + 3y - 2z = 1 \\\\ 3x - y - z = 2 \\end{cases} \\]",
    "alternativas": [
      "A) \\((1/5, -1, 2/5)\\)",
      "B) \\((0, -1, 0)\\)",
      "C) \\((2/5, 0, 2/5)\\)",
      "D) \\((-7/5, -2, -21/5)\\)",
      "E) \\((-1/5, -1, -1/5)\\)"
    ],
    "gabarito": "D",
    "solucao": "Primeiro, vamos dividir a primeira equação por 2 para simplificar: \n\n\\(x - y + 0.5z = -1.5\\) \n\nAgora, vamos subtrair a primeira equação da segunda e da terceira para eliminar \\(x\\): \n\n\\(4y - 2.5z = 2.5\\) \n\n\\(-2y - 0.5z = 3.5\\) \n\nAgora, vamos multiplicar a segunda equação por 2 e somar com a terceira para eliminar \\(y\\): \n\n\\(-3z = -1\\) \n\nResolvendo para \\(z\\), obtemos \\(z = \\frac{1}{3}\\). Substituindo \\(z\\) na primeira e segunda equações, obtemos \\(y = -2\\) e \\(x = -\\frac{7}{5}\\). Portanto, a solução é \\((-\\frac{7}{5}, -2, \\frac{1}{3})\\).",
    "area": "Álgebra Linear",
    "subarea": "método de eliminação de Gauss para sistemas lineares",
    "dificuldade": "Média"
  },
  {
    "id": "2024-02",
    "edicao": "2024",
    "numero": 2,
    "area_conhecimento": "Matemática",
    "enunciado": "Calcule o valor de \\(\\alpha\\) que provoca que o determinante da matriz \\(Z\\) seja 8:\n\n\\[ Z = \\begin{bmatrix} 1 & -1 & -1 \\\\ -1 & 1 & -1 \\\\ 2 & 2 & \\alpha \\end{bmatrix} \\]",
    "alternativas": [
      "A) \\(\\alpha = 1\\)",
      "B) \\(\\alpha = 2\\)",
      "C) \\(\\alpha = 4\\)",
      "D) \\(\\alpha = 7\\)",
      "E) \\(\\alpha = 11\\)"
    ],
    "gabarito": "ANULADA",
    "solucao": "O determinante de uma matriz \\(3 \\times 3\\) pode ser calculado pela regra de Sarrus. Para a matriz \\(Z\\), o determinante é dado por: \n\n\\[ \\det(Z) = 1 \\cdot 1 \\cdot \\alpha + (-1) \\cdot (-1) \\cdot 2 + (-1) \\cdot (-1) \\cdot 2 - 2 \\cdot 1 \\cdot (-1) - 2 \\cdot (-1) \\cdot \\alpha - 1 \\cdot 1 \\cdot 2 \\] \n\nSimplificando, obtemos: \n\n\\[ \\det(Z) = \\alpha + 2 + 2 + 2 - 2\\alpha - 2 = \\alpha + 4 - 2\\alpha \\] \n\nIgualando a 8 (pois queremos que o determinante seja 8), temos: \n\n\\[ \\alpha + 4 - 2\\alpha = 8 \\] \n\nSimplificando, obtemos: \\(-\\alpha = 4\\), logo \\(\\alpha = -4\\). No entanto, essa opção não está disponível nas alternativas, portanto a questão está anulada.",
    "area": "Álgebra Linear",
    "subarea": "Sistemas de Equações Lineares",
    "dificuldade": "Média"
  },
  {
    "id": "2024-03",
    "edicao": "2024",
    "numero": 3,
    "area_conhecimento": "Matemática",
    "enunciado": "Assinale a alternativa que apresenta o polinômio característico da matriz:\n\n\\[ A = \\begin{bmatrix} 1 & -1 & -1 \\\\ -1 & 1 & -1 \\\\ 2 & 2 & 4 \\end{bmatrix} \\]",
    "alternativas": [
      "A) \\((\\lambda - 2)\\)",
      "B) \\((\\lambda - 2)^2\\)",
      "C) \\((\\lambda + 2)\\)",
      "D) \\((\\lambda - 4)\\)",
      "E) \\(-(\\lambda - 2)^3\\)"
    ],
    "gabarito": "E",
    "solucao": "O polinômio característico de uma matriz é obtido pela determinação da equação \\(\\det(A - \\lambda I) = 0\\), onde \\(A\\) é a matriz, \\(\\lambda\\) são os autovalores e \\(I\\) é a matriz identidade. Neste caso, a matriz \\(A - \\lambda I\\) é dada por: \n\n\\[ A - \\lambda I = \\begin{bmatrix} 1 - \\lambda & -1 & -1 \\\\ -1 & 1 - \\lambda & -1 \\\\ 2 & 2 & 4 - \\lambda \\end{bmatrix} \\] \n\nA determinação desta matriz resulta na equação \\(\\lambda^3 - 6\\lambda^2 + 12\\lambda - 8 = 0\\), que pode ser reescrita como \\(-(\\lambda - 2)^3 = 0\\). Portanto, a alternativa correta é a letra \\(E\\).",
    "area": "Álgebra Linear",
    "subarea": "Autovalores e Autovetores",
    "dificuldade": "Média"
  },
  {
    "id": "2024-04",
    "edicao": "2024",
    "numero": 4,
    "area_conhecimento": "Matemática",
    "enunciado": "Quantas formas existem de permutar os elementos do conjunto \\(\\{1,2,3,4\\}\\) de maneira que o número 1 não esteja na primeira posição e o número 2 não esteja na segunda posição?",
    "alternativas": [
      "A) 6.",
      "B) 8.",
      "C) 10.",
      "D) 12.",
      "E) 14."
    ],
    "gabarito": "E",
    "solucao": "Existem \\(4! = 24\\) formas de permutar os elementos do conjunto \\(\\{1,2,3,4\\}\\) sem restrições. No entanto, temos duas restrições: o número 1 não pode estar na primeira posição e o número 2 não pode estar na segunda posição. Se o número 1 estiver na primeira posição, existem \\(3! = 6\\) formas de permutar os números restantes. Da mesma forma, se o número 2 estiver na segunda posição, existem \\(3! = 6\\) formas de permutar os números restantes. Portanto, existem \\(6 + 6 = 12\\) permutações que violam as restrições. No entanto, se ambas as restrições forem violadas ao mesmo tempo (ou seja, o número 1 está na primeira posição e o número 2 está na segunda posição), existem \\(2! = 2\\) formas de permutar os números restantes. Portanto, existem 2 permutações que foram contadas duas vezes. Assim, o número total de permutações que satisfazem as restrições é \\(24 - 12 + 2 = 14\\).",
    "area": "Análise Combinatória",
    "subarea": "Permutações com Posições Restritas",
    "dificuldade": "Média"
  },
  {
    "id": "2024-05",
    "edicao": "2024",
    "numero": 5,
    "area_conhecimento": "Matemática",
    "enunciado": "Em um grafo simples não direcionado com \\(n\\) vértices, a quantidade máxima de arestas é dada por \\(n(n-1)/2\\). Qual é o número máximo de arestas que um grafo não direcionado \\(G\\) com 7 vértices pode ter sem formar um ciclo?",
    "alternativas": [
      "A) 6.",
      "B) 7.",
      "C) 10.",
      "D) 11.",
      "E) 21."
    ],
    "gabarito": "A",
    "solucao": "Um grafo é acíclico (não possui ciclos) quando é uma árvore. Uma árvore é um grafo conexo (existe um caminho entre quaisquer dois vértices) que não possui ciclos. Uma propriedade das árvores é que elas possuem exatamente \\(n-1\\) arestas, onde \\(n\\) é o número de vértices. Portanto, um grafo com 7 vértices e sem ciclos pode ter no máximo \\(7-1 = 6\\) arestas.",
    "area": "Análise Combinatória",
    "subarea": "Grafos",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-06",
    "edicao": "2024",
    "numero": 6,
    "area_conhecimento": "Matemática",
    "enunciado": "Uma startup de jogos eletrônicos tem 7 jogos de ação e 5 jogos de esportes. As vendas dos jogos são realizadas com um pacote de 4 jogos. Quantas são as opções de venda da startup em que haja pelo menos 2 jogos de esportes?",
    "alternativas": [
      "A) 70.",
      "B) 120.",
      "C) 210.",
      "D) 285.",
      "E) 495."
    ],
    "gabarito": "D",
    "solucao": "Para resolver essa questão, precisamos utilizar o princípio da combinação. Precisamos considerar todas as possibilidades de pacotes que contenham pelo menos 2 jogos de esportes. As possibilidades são: 2 jogos de esportes e 2 de ação, 3 jogos de esportes e 1 de ação ou 4 jogos de esportes. Para cada caso, calculamos a combinação de jogos de esportes e ação e somamos todos os resultados. \n\nPara 2 jogos de esportes e 2 de ação, temos C(5,2)*C(7,2) = 10*21 = 210. \nPara 3 jogos de esportes e 1 de ação, temos C(5,3)*C(7,1) = 10*7 = 70. \nPara 4 jogos de esportes, temos C(5,4) = 5. \n\nSomando todas as possibilidades, temos 210 + 70 + 5 = 285 opções de venda.",
    "area": "Análise Combinatória",
    "subarea": "Combinações",
    "dificuldade": "Média"
  },
  {
    "id": "2024-07",
    "edicao": "2024",
    "numero": 7,
    "area_conhecimento": "Matemática",
    "enunciado": "Calcule o limite em infinito da função \\(f(x) = \\sqrt{x^2 + 1} - x\\).",
    "alternativas": [
      "A) \\(-\\infty\\)",
      "B) \\(-1\\)",
      "C) \\(0\\)",
      "D) \\(1\\)",
      "E) \\(\\infty\\)"
    ],
    "gabarito": "C",
    "solucao": "Para resolver essa questão, podemos utilizar a regra de L'Hôpital, que é aplicada quando temos uma indeterminação do tipo \\(0/0\\) ou \\(\\infty/\\infty\\). Primeiramente, reescrevemos a função como uma fração: \n\n\\[ f(x) = \\frac{1}{\\sqrt{x^2 + 1} + x} \\] \n\nAgora temos uma indeterminação do tipo \\(\\infty/\\infty\\) quando \\(x\\) tende ao infinito. Aplicando a regra de L'Hôpital, derivamos o numerador e o denominador, obtendo \n\n\\[ f'(x) = \\frac{0}{\\frac{x}{\\sqrt{x^2 + 1}} + 1} \\] \n\nQuando \\(x\\) tende ao infinito, a expressão \\(\\frac{x}{\\sqrt{x^2 + 1}}\\) tende a 1, então \n\n\\[ f'(x) \\to \\frac{0}{1 + 1} = 0 \\] \n\nOu seja, o limite da função quando \\(x\\) tende ao infinito é \\(0\\).",
    "area": "Cálculo Diferencial e Integral",
    "subarea": "Limites de Funções e de Sequências",
    "dificuldade": "Média"
  },
  {
    "id": "2024-08",
    "edicao": "2024",
    "numero": 8,
    "area_conhecimento": "Matemática",
    "enunciado": "Assinale a alternativa que apresenta o intervalo em que a função \\(g(x) = \\frac{\\sqrt{4 - x^2}}{3x - 1}\\) é contínua.",
    "alternativas": [
      "A) \\([-4, 1) \\cup (1, 4]\\)",
      "B) \\([-2, 3) \\cup (3, 2)\\)",
      "C) \\([-2, 1/3) \\cup (1/3, 2]\\)",
      "D) \\((-\\infty, 2) \\cup (2, \\infty)\\)",
      "E) \\((-\\infty, 0) \\cup (0, \\infty)\\)"
    ],
    "gabarito": "C",
    "solucao": "A função \\( g(x) = \\frac{\\sqrt{4 - x^2}}{3x - 1} \\) é contínua onde o denominador e o radicando são ambos definidos. O denominador \\(3x - 1\\) é diferente de zero para todos os \\(x\\) diferentes de \\(\\frac{1}{3}\\), portanto, o intervalo de continuidade deve excluir o valor \\(x = \\frac{1}{3}\\). O radicando \\(4 - x^2\\) é definido para \\(-2 \\leq x \\leq 2\\). Portanto, a intersecção desses dois intervalos é o intervalo de continuidade da função, que é \\([-2, \\frac{1}{3}) \\cup (\\frac{1}{3}, 2]\\).",
    "area": "Cálculo Diferencial e Integral",
    "subarea": "Limites de Funções e de Sequências",
    "dificuldade": "Média"
  },
  {
    "id": "2024-09",
    "edicao": "2024",
    "numero": 9,
    "area_conhecimento": "Matemática",
    "enunciado": "Calcule a integral definida \\(\\int_{1}^{e} \\frac{\\ln x}{x} \\, dx\\).",
    "alternativas": [
      "A) \\(e\\)",
      "B) \\(2\\)",
      "C) \\(1\\)",
      "D) \\(1/2\\)",
      "E) \\(0\\)"
    ],
    "gabarito": "D",
    "solucao": "",
    "area": "Cálculo Diferencial e Integral",
    "subarea": "Métodos de Integração",
    "dificuldade": "Média"
  },
  {
    "id": "2024-10",
    "edicao": "2024",
    "numero": 10,
    "area_conhecimento": "Matemática",
    "enunciado": "O ponto médio do segmento de extremos \\(A(5, -1)\\) e \\(B(4, -2)\\) é:",
    "alternativas": [
      "A) \\((4.5, -1.5)\\)",
      "B) \\((4.5, -1)\\)",
      "C) \\((4, -1.5)\\)",
      "D) \\((4, -1)\\)",
      "E) \\((5, -2)\\)"
    ],
    "gabarito": "B",
    "solucao": "O ponto médio de um segmento de reta com extremos \\( A(x_1, y_1) \\) e \\( B(x_2, y_2) \\) é dado pela média das coordenadas dos pontos extremos, ou seja: \n\n\\[ M = \\left( \\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2} \\right) \\] \n\nSubstituindo os valores dos pontos \\( A(5, -1) \\) e \\( B(4, -2) \\) na fórmula, temos: \n\n\\[ M = \\left( \\frac{5 + 4}{2}, \\frac{-1 + (-2)}{2} \\right) = (4.5, -1.5) \\] \n\nPortanto, a alternativa correta é \\( A) (4.5, -1.5) \\).",
    "area": "Geometria Analítica",
    "subarea": "Reta no plano e no espaço",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-11",
    "edicao": "2024",
    "numero": 11,
    "area_conhecimento": "Matemática",
    "enunciado": "Calcule os dois valores de \\(k\\) em que a distância do ponto \\(P(2, k)\\) até a reta \\(r: x - y + 3 = 0\\) é \\(\\sqrt{2}\\).",
    "alternativas": [
      "A) \\(k = 3\\) e \\(k = 7\\)",
      "B) \\(k = -1\\) e \\(k = 2\\)",
      "C) \\(k = 3\\) e \\(k = 5\\)",
      "D) \\(k = 2\\) e \\(k = 3\\)",
      "E) \\(k = 5\\) e \\(k = 7\\)"
    ],
    "gabarito": "A",
    "solucao": "A distância de um ponto \\(P(x_0, y_0)\\) a uma reta \\(r: ax + by + c = 0\\) é dada pela fórmula \n\n\\[ d = \\frac{|ax_0 + by_0 + c|}{\\sqrt{a^2 + b^2}} \\] \n\nSubstituindo os valores do ponto \\(P(2, k)\\) e da reta \\(r: x - y + 3 = 0\\), temos: \n\n\\[ \\frac{|2 - k + 3|}{\\sqrt{2}} = \\sqrt{2} \\] \n\nSimplificando, temos \\(|5 - k| = 2\\). Resolvendo essa equação absoluta, obtemos \\(k = 3\\) e \\(k = 7\\).",
    "area": "Geometria Analítica",
    "subarea": "Distâncias e Ângulos",
    "dificuldade": "Média"
  },
  {
    "id": "2024-12",
    "edicao": "2024",
    "numero": 12,
    "area_conhecimento": "Matemática",
    "enunciado": "Determine o ponto de intersecção das retas abaixo:\n\n\\[ r: \\begin{cases} x = 2 - 4t \\\\ y = -2 + t \\end{cases} \\]\n\n\\[ s: \\begin{cases} x = 3 + 8t \\\\ y = -1 - 2t \\end{cases} \\]",
    "alternativas": [
      "A) \\((-3, 1)\\)",
      "B) \\((1, 2)\\)",
      "C) \\((-5, 0)\\)",
      "D) \\((1, 1)\\)",
      "E) As retas são paralelas e não possuem ponto de intersecção."
    ],
    "gabarito": "E",
    "solucao": "Para encontrar o ponto de interseção das retas, precisamos igualar as equações e resolver o sistema. No entanto, ao fazer isso, percebemos que não há solução para o sistema, o que significa que as retas são paralelas e não se intersectam. Isso pode ser verificado ao observar que os coeficientes das variáveis \\( t \\) nas equações das retas são proporcionais, indicando que as retas são paralelas.",
    "area": "Álgebra Linear",
    "subarea": "Sistemas de Equações Lineares",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-13",
    "edicao": "2024",
    "numero": 13,
    "area_conhecimento": "Matemática",
    "enunciado": "A expressão lógica \\(\\sim p \\rightarrow \\sim q\\) é equivalente a:",
    "alternativas": [
      "A) \\(\\sim q \\land \\sim p\\)",
      "B) \\(\\sim q \\rightarrow p\\)",
      "C) \\(q \\rightarrow \\sim p\\)",
      "D) \\(q \\rightarrow p\\)",
      "E) \\(p \\rightarrow q\\)"
    ],
    "gabarito": "D",
    "solucao": "A expressão lógica \\(\\sim p \\rightarrow \\sim q\\) é a negação da implicação, também conhecida como contrapositiva. A contrapositiva de uma proposição \\(p \\rightarrow q\\) é \\(\\sim q \\rightarrow \\sim p\\). No entanto, a contrapositiva de \\(\\sim p \\rightarrow \\sim q\\) é \\(q \\rightarrow p\\), que é a alternativa D.",
    "area": "",
    "subarea": "",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-14",
    "edicao": "2024",
    "numero": 14,
    "area_conhecimento": "Matemática",
    "enunciado": "Dadas duas proposições lógicas \\(q\\) e \\(p\\), a proposição lógica \\(\\sim(p \\lor q)\\) é verdadeira se, e somente se, for falsa a proposição:",
    "alternativas": [
      "A) \\(p \\land q\\)",
      "B) \\(\\sim p\\)",
      "C) \\(\\sim p \\rightarrow q\\)",
      "D) \\(\\sim p \\rightarrow \\sim q\\)",
      "E) \\(\\sim q\\)"
    ],
    "gabarito": "C",
    "solucao": "A proposição lógica \\(\\sim(p \\lor q)\\) é equivalente a \\(\\sim p \\land \\sim q\\), de acordo com as leis de De Morgan. Portanto, para que \\(\\sim(p \\lor q)\\) seja verdadeira, ambas as proposições \\(\\sim p\\) e \\(\\sim q\\) devem ser verdadeiras. Isso significa que tanto \\(p\\) quanto \\(q\\) devem ser falsas. A única alternativa que se torna falsa quando \\(p\\) é falso é a alternativa C) \\(\\sim p \\rightarrow q\\), pois uma implicação é falsa apenas quando a premissa é verdadeira e a conclusão é falsa. Portanto, a resposta correta é a alternativa C.",
    "area": "",
    "subarea": "",
    "dificuldade": "Média"
  },
  {
    "id": "2024-15",
    "edicao": "2024",
    "numero": 15,
    "area_conhecimento": "Matemática",
    "enunciado": "Considere as premissas verdadeiras a seguir:\n\n- Premissa 1: Se Ana Paula joga vôlei ou Joaquim joga videogame, então Victória vai à praia.\n- Premissa 2: Hoje, Victória não foi à praia.\n- Premissa 3: Se hoje é sábado, então Ana Paula joga vôlei e Caio treina boxe.\n\nConsiderando as premissas apresentadas, é correto afirmar que:",
    "alternativas": [
      "A) Hoje é sábado e Ana Paula jogou vôlei.",
      "B) Hoje não é sábado e Joaquim não jogou videogame.",
      "C) Ana Paula jogou vôlei ou Joaquim jogou videogame.",
      "D) Hoje é sábado e Joaquim jogou videogame.",
      "E) Hoje não é sábado e Ana Paula jogou vôlei."
    ],
    "gabarito": "B",
    "solucao": "A questão envolve raciocínio lógico e interpretação de premissas. A partir da premissa 1, sabemos que se Ana Paula joga vôlei ou Joaquim joga videogame, então Victória vai à praia. Porém, a premissa 2 nos informa que Victória não foi à praia hoje. Portanto, Ana Paula não jogou vôlei e Joaquim não jogou videogame. A premissa 3 nos informa que se hoje é sábado, então Ana Paula joga vôlei e Caio treina boxe. Como já sabemos que Ana Paula não jogou vôlei, podemos concluir que hoje não é sábado. Portanto, a alternativa correta é 'B) Hoje não é sábado e Joaquim não jogou videogame.'",
    "area": "",
    "subarea": "",
    "dificuldade": "Média"
  },
  {
    "id": "2024-16",
    "edicao": "2024",
    "numero": 16,
    "area_conhecimento": "Matemática",
    "enunciado": "Utilizando as leis de Morgan, assinale a alternativa que apresenta uma expressão em forma de somas de produtos para a seguinte função:\n\n\\[ F = \\overline{(\\overline{A} + C) \\cdot (B + \\overline{D})} \\]",
    "alternativas": [
      "A) \\(A\\overline{C} + B\\)",
      "B) \\(A\\overline{C} + BD\\)",
      "C) \\(AC + B\\)",
      "D) \\(A\\overline{C} + \\overline{B}D\\)",
      "E) \\(A + B\\)"
    ],
    "gabarito": "D",
    "solucao": "",
    "area": "",
    "subarea": "",
    "dificuldade": "Média"
  },
  {
    "id": "2024-17",
    "edicao": "2024",
    "numero": 17,
    "area_conhecimento": "Matemática",
    "enunciado": "Simplifique a expressão booleana \\(f = \\overline{a}b\\overline{c} + \\overline{a}bc + \\overline{a}\\overline{b}c + abc + a\\overline{b}c\\) empregando o mapa de Karnaugh.",
    "alternativas": [
      "A) \\(f = a'b + ab\\)",
      "B) \\(f = ab + c\\)",
      "C) \\(f = a'b + c\\)",
      "D) \\(f = a'b + b\\)",
      "E) \\(f = b + ab\\)"
    ],
    "gabarito": "ANULADA",
    "solucao": "",
    "area": "",
    "subarea": "",
    "dificuldade": ""
  },
  {
    "id": "2024-18",
    "edicao": "2024",
    "numero": 18,
    "area_conhecimento": "Matemática",
    "enunciado": "Determine a saída \\(S\\) do circuito lógico abaixo:\n\n[Circuito lógico não representado]",
    "alternativas": [
      "A) \\(\\overline{(AB + B)\\overline{B}}\\)",
      "B) \\(\\overline{(AB + B)}\\)",
      "C) \\(\\overline{(AB + B)B}\\)",
      "D) \\(\\overline{(AB + \\overline{B})}\\)",
      "E) \\(\\overline{(A + B)\\overline{B}}\\)"
    ],
    "gabarito": "A",
    "solucao": "",
    "area": "",
    "subarea": "",
    "dificuldade": ""
  },
  {
    "id": "2024-19",
    "edicao": "2024",
    "numero": 19,
    "area_conhecimento": "Matemática",
    "enunciado": "Para responder à questão, utilize a seguinte lista de dados, correspondente ao número de segundos que um software precisa para resolver um cálculo matemático:\n60; 66; 77; 70; 66; 68; 57; 70; 66; 52; 75; 65; 69; 71; 58; 66; 67; 74; 61; 63; 69; 80; 59; 66; 70; 67; 78; 75; 64; 71; 81; 62; 64; 69; 68; 72; 83; 56; 65; 74; 67; 54; 65; 65; 69; 61; 67; 73; 57; 62; 67; 68; 63; 67; 71; 68; 76; 61; 62; 63; 76; 61; 67; 67; 64; 72; 64; 73; 79; 58; 67; 71; 68; 59; 69; 70; 66; 62; 63; 66;\n\nA percentagem de tempo em que o processo de cálculo é inferior a 65 segundos é:",
    "alternativas": [
      "A) 28,8%",
      "B) 30,0%",
      "C) 32,5%",
      "D) 36,3%",
      "E) 40,0%"
    ],
    "gabarito": "C",
    "solucao": "",
    "area": "",
    "subarea": "",
    "dificuldade": "Média"
  },
  {
    "id": "2024-20",
    "edicao": "2024",
    "numero": 20,
    "area_conhecimento": "Matemática",
    "enunciado": "Para responder à questão, utilize a seguinte lista de dados, correspondente ao número de segundos que um software precisa para resolver um cálculo matemático:\n60; 66; 77; 70; 66; 68; 57; 70; 66; 52; 75; 65; 69; 71; 58; 66; 67; 74; 61; 63; 69; 80; 59; 66; 70; 67; 78; 75; 64; 71; 81; 62; 64; 69; 68; 72; 83; 56; 65; 74; 67; 54; 65; 65; 69; 61; 67; 73; 57; 62; 67; 68; 63; 67; 71; 68; 76; 61; 62; 63; 76; 61; 67; 67; 64; 72; 64; 73; 79; 58; 67; 71; 68; 59; 69; 70; 66; 62; 63; 66;\n\nO tempo médio aproximado, que o software leva para realizar os cálculos é:",
    "alternativas": [
      "A) 65.",
      "B) 66.",
      "C) 67.",
      "D) 68.",
      "E) 69."
    ],
    "gabarito": "C",
    "solucao": "",
    "area": "",
    "subarea": "",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-21",
    "edicao": "2024",
    "numero": 21,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Considere o problema de acessar os registros de um arquivo. Cada registro contém uma chave única que é utilizada para recuperar os registros do arquivo. Dada uma chave qualquer, o problema consiste em localizar o registro que contenha essa chave. O algoritmo examina os registros na ordem em que eles aparecem no arquivo, até que o registro procurado seja encontrado ou fique determinado que ele não se encontra no arquivo. Seja \\(f\\) uma função de complexidade tal que \\(f(n)\\) é o número de registros consultado no arquivo, é correto afirmar que:",
    "alternativas": [
      "A) O caso médio é \\(f(n) = (n + 1)/2\\)",
      "B) O melhor caso é \\(f(n) = n - 1\\)",
      "C) O caso ótimo é \\(f(n) = 3n/2 - 3/2\\)",
      "D) O caso recorrente é \\(f(n) = 2(n - 1)\\)",
      "E) O pior caso é \\(f(n) = 1\\)"
    ],
    "gabarito": "A",
    "solucao": "O problema descrito é um exemplo de busca sequencial, onde cada registro do arquivo é verificado um por um até que o registro desejado seja encontrado ou seja determinado que ele não está no arquivo. No melhor caso, o registro desejado é o primeiro a ser verificado, resultando em uma complexidade de f(n) = 1. No pior caso, o registro desejado é o último a ser verificado ou não está no arquivo, resultando em uma complexidade de f(n) = n. O caso médio é quando o registro desejado está na metade do arquivo, resultando em uma complexidade de f(n) = (n + 1)/2. Portanto, a alternativa 'A' é a correta.",
    "area": "Análise de Algoritmos",
    "subarea": "Medidas de Complexidade",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-22",
    "edicao": "2024",
    "numero": 22,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Qual é o objetivo da análise assintótica de algoritmos?",
    "alternativas": [
      "A) Analisar conjuntamente o pior caso e o caso médio de um algoritmo.",
      "B) Analisar o desempenho do algoritmo para entradas muito pequenas.",
      "C) Determinar o desempenho do algoritmo para todas as possíveis entradas.",
      "D) Analisar o desempenho do algoritmo para entradas médias.",
      "E) Analisar o comportamento do algoritmo à medida que o tamanho da entrada aumenta indefinidamente."
    ],
    "gabarito": "E",
    "solucao": "A análise assintótica de algoritmos é uma técnica usada para entender o comportamento de um algoritmo à medida que o tamanho da entrada aumenta. Ela não leva em consideração o desempenho do algoritmo para entradas pequenas, mas sim para entradas muito grandes. Isso é feito para ter uma ideia de como o algoritmo irá se comportar em cenários de 'pior caso' ou 'caso médio'. Portanto, a opção correta é 'E) Analisar o comportamento do algoritmo à medida que o tamanho da entrada aumenta indefinidamente.'",
    "area": "Análise de Algoritmos",
    "subarea": "Análise Assintótica de Limites de Complexidade",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-23",
    "edicao": "2024",
    "numero": 23,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Assinale a alternativa que apresenta a complexidade de tempo da busca em uma tabela hash, considerando a complexidade média e do pior caso, respectivamente.",
    "alternativas": [
      "A) \\(O(1)\\) e \\(O(1)\\).",
      "B) \\(O(1)\\) e \\(O(n)\\).",
      "C) \\(O(\\log n)\\) e \\(O(\\log n)\\).",
      "D) \\(O(\\log n)\\) e \\(O(n)\\).",
      "E) \\(O(n)\\) e \\(O(2^n)\\)."
    ],
    "gabarito": "B",
    "solucao": "A busca em uma tabela hash é uma operação de complexidade constante \\(O(1)\\) no caso médio, pois a localização do elemento é determinada diretamente pela função hash. No entanto, no pior caso, quando ocorrem colisões e todos os elementos acabam no mesmo slot da tabela, a busca pode ser linear \\(O(n)\\), pois pode ser necessário percorrer todos os elementos.",
    "area": "Algoritmos e Estrutura de Dados",
    "subarea": "Tabelas Hash",
    "dificuldade": "Média"
  },
  {
    "id": "2024-24",
    "edicao": "2024",
    "numero": 24,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Em uma estrutura de dados lista _____, cada elemento armazena um ou vários dados e um ponteiro para o próximo elemento, que permite o encadeamento e mantém a estrutura linear. Tem-se também um campo-chave através do qual uma determinada ordenação é mantida.",
    "alternativas": [
      "A) duplamente encadeada ordenada",
      "B) circular não ordenada",
      "C) de prioridades",
      "D) duplamente encadeada não ordenada",
      "E) simplesmente encadeada ordenada"
    ],
    "gabarito": "E",
    "solucao": "A questão se refere a uma estrutura de dados linear, onde cada elemento armazena um ou mais dados e um ponteiro para o próximo elemento. Além disso, a estrutura mantém uma ordenação através de um campo-chave. A única alternativa que se encaixa perfeitamente nesta descrição é a 'E) simplesmente encadeada ordenada'. Nas listas simplesmente encadeadas, cada elemento possui um ponteiro para o próximo elemento, formando uma estrutura linear. Além disso, a alternativa menciona que a lista é ordenada, o que indica a existência de um campo-chave para manter a ordenação.",
    "area": "Algoritmos e Estrutura de Dados",
    "subarea": "Listas Encadeadas",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-25",
    "edicao": "2024",
    "numero": 25,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Sobre as instruções de repetição de uma linguagem de programação, assinale a alternativa correta.",
    "alternativas": [
      "A) Na instrução **while (condição) instrução**, a instrução é executada uma ou mais vezes e a condição é testada depois da instrução.",
      "B) O corpo do laço **do...while** é executado pelo menos uma vez, enquanto nos laços **while** e **for** o corpo do laço pode nunca ser executado (caso a condição seja falsa a priori).",
      "C) A instrução **if** adapta-se a situações em que o número de iterações é conhecido a priori.",
      "D) A instrução **break**, quando presente dentro de um laço de repetição, passa o laço para a próxima iteração.",
      "E) Na instrução **for (carga inicial; condição; pos-instrução) instrução**, a instrução é executada zero ou mais vezes e a condição é testada depois da instrução."
    ],
    "gabarito": "B",
    "solucao": "A alternativa correta é a B. O laço do...while garante que o bloco de código dentro dele seja executado pelo menos uma vez, independentemente da condição ser verdadeira ou falsa. Isso ocorre porque a condição é verificada após a execução do bloco de código. Por outro lado, nos laços while e for, o bloco de código só é executado se a condição for verdadeira. Se a condição for falsa desde o início, o bloco de código nunca será executado.",
    "area": "Algoritmos e Estrutura de Dados",
    "subarea": "Comandos de uma Linguagem de Programação",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-26",
    "edicao": "2024",
    "numero": 26,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "No caminhamento _____ de uma árvore \\(T\\), a raiz de \\(T\\) é visitada em primeiro lugar, e então as subárvores enraizadas nos seus filhos são percorridas recursivamente. Se a árvore é ordenada, então as subárvores são percorridas de acordo com a ordem dos filhos.",
    "alternativas": [
      "A) simétrico",
      "B) em largura",
      "C) central",
      "D) pré-fixado",
      "E) pós-fixado"
    ],
    "gabarito": "D",
    "solucao": "O caminhamento pré-fixado, também conhecido como pré-ordem, é uma forma de percorrer uma árvore onde a raiz é visitada antes das subárvores. No caso de uma árvore binária, a ordem de caminhamento é: primeiro visita-se a raiz, depois a subárvore da esquerda e, por fim, a subárvore da direita. Assim, a alternativa correta é a D) pré-fixado.",
    "area": "Algoritmos e Estrutura de Dados",
    "subarea": "Árvores e suas Generalizações",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-27",
    "edicao": "2024",
    "numero": 27,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Considerando uma memória cache que usa mapeamento por conjunto associativo que contém 64 linhas divididas em 16 conjuntos, e uma memória principal que contém 4K blocos de 128 palavras cada, quantos bits serão necessários para endereçar uma palavra e qual tamanho, também em bits, dos campos endereço, tag, s, d e w?",
    "alternativas": [
      "A) Endereço total de 19 bits, com tag = 8 bits, s = 12 bits, d = 4 bits e w = 7 bits.",
      "B) Endereço total de 19 bits, com tag = 12 bits, s = 7 bits, d = 4 bits e w = 12 bits.",
      "C) Endereço total de 23 bits, com tag = 7 bits, s = 4 bits, d = 7 bits e w = 12 bits.",
      "D) Endereço total de 19 bits, com tag = 8 bits, s = 12 bits, d = 7 bits e w = 4 bits.",
      "E) Endereço total de 21 bits, com tag = 4 bits, s = 5 bits, d = 7 bits e w = 9 bits."
    ],
    "gabarito": "A",
    "solucao": "",
    "area": "Arquitetura e Organização de Computadores",
    "subarea": "Memórias",
    "dificuldade": "Média"
  },
  {
    "id": "2024-28",
    "edicao": "2024",
    "numero": 28,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "A ponte norte e a ponte sul são chipsets que compõem a estrutura de uma placa-mãe de um computador. Sobre esses dois chipsets, analise as assertivas abaixo:\n\nI. A ponte norte é responsável pela comunicação entre o processador e dispositivos de entrada/saída de baixa velocidade, enquanto a ponte sul conecta a memória RAM e a placa de vídeo.\n\nII. A ponte sul conecta o processador diretamente à memória RAM e à placa de vídeo, enquanto a ponte norte lida com dispositivos de armazenamento e periféricos de entrada/saída.\n\nIII. A ponte norte faz a interface entre o processador e componentes de alta velocidade como a memória RAM e a placa de vídeo, enquanto a ponte sul gerencia conexões com dispositivos de entrada/saída de menor velocidade.\n\nIV. A ponte norte e a ponte sul são substituíveis e podem ser usadas indistintamente em qualquer função dentro do sistema de barramento do computador.\n\nQuais estão corretas?",
    "alternativas": [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas III.",
      "D) Apenas I e II.",
      "E) Apenas III e IV."
    ],
    "gabarito": "C",
    "solucao": "A ponte norte, também conhecida como Northbridge, é um chipset que faz a interface entre o processador e componentes de alta velocidade como a memória RAM e a placa de vídeo. Já a ponte sul, ou Southbridge, gerencia conexões com dispositivos de entrada/saída de menor velocidade, como os periféricos e o disco rígido. Portanto, a assertiva III está correta. As demais estão erradas: a I inverte as funções das pontes, a II atribui à ponte sul funções da ponte norte e a IV está errada porque as pontes norte e sul não são substituíveis e têm funções específicas no sistema de barramento do computador.",
    "area": "Arquitetura e Organização de Computadores",
    "subarea": "Barramento",
    "dificuldade": "Média"
  },
  {
    "id": "2024-29",
    "edicao": "2024",
    "numero": 29,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Qual dos seguintes métodos permite a transferência de dados entre um dispositivo de entrada e saída e a memória principal sem o intermédio da CPU?",
    "alternativas": [
      "A) Polling.",
      "B) Interrupções.",
      "C) E/S mapeada em memória.",
      "D) Direct Memory Access (DMA).",
      "E) E/S programada."
    ],
    "gabarito": "D",
    "solucao": "O método Direct Memory Access (DMA) permite a transferência de dados entre um dispositivo de entrada e saída e a memória principal sem a intervenção da CPU. Isso ocorre porque o DMA tem um controlador que gerencia a transferência de dados, liberando a CPU para realizar outras tarefas. Os outros métodos listados na questão requerem a intervenção da CPU para a transferência de dados.",
    "area": "Arquitetura e Organização de Computadores",
    "subarea": "Entrada e Saída",
    "dificuldade": "Média"
  },
  {
    "id": "2024-30",
    "edicao": "2024",
    "numero": 30,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Dada a função \\(F(A,B,C) = AC + ABC + A(B + C)\\), assinale a alternativa que contém a expressão lógica de \\(F(A,B,C)\\), utilizando a notação canônica da soma de mintermos.",
    "alternativas": [
      "A) \\(\\Sigma m(5, 6, 7, 8)\\)",
      "B) \\(\\Sigma m(0, 1, 2, 3)\\)",
      "C) \\(\\Sigma m(4, 5, 6, 7)\\)",
      "D) \\(\\Sigma m(1, 2, 5, 6, 7)\\)",
      "E) \\(\\Sigma m(0, 3, 4, 5, 6, 7)\\)"
    ],
    "gabarito": "C",
    "solucao": "Primeiramente, devemos simplificar a função dada utilizando as propriedades da álgebra booleana. A função F(A,B,C) = AC + ABC + A(B + C) pode ser simplificada para F(A,B,C) = AC + AB. Agora, devemos representar essa função na forma canônica da soma de mintermos. Para isso, devemos listar todas as combinações de A, B e C que resultam em 1. Essas combinações são: (A=1, B=1, C=0), (A=1, B=1, C=1), (A=1, B=0, C=1). Convertendo essas combinações para a notação decimal, temos os mintermos 4, 5 e 6. Portanto, a representação canônica da soma de mintermos da função F(A,B,C) é Σ m(4, 5, 6, 7).",
    "area": "Circuitos Digitais",
    "subarea": "Minimização e Otimização de Funções Combinatórias",
    "dificuldade": "Média"
  },
  {
    "id": "2024-31",
    "edicao": "2024",
    "numero": 31,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Dada a função \\(F(W, X, Y, Z)\\) composta dos termos mínimos (minterm) = \\(\\{4, 8, 9, 10, 13, 14\\}\\) e dos termos não essenciais (don’t care) = \\(\\{5, 6, 7\\}\\), simplifique essa função como produto de somas.",
    "alternativas": [
      "A) \\((W+X) \\cdot (\\overline{W} + \\overline{X} + Y + Z) \\cdot (\\overline{Y} + \\overline{Z})\\)",
      "B) \\((W+ \\overline{X} + \\overline{Z}) \\cdot (W+X+ \\overline{Z}) \\cdot (\\overline{W} + \\overline{X}) \\cdot (\\overline{Y} + Z)\\)",
      "C) \\((\\overline{W} + X) \\cdot (W+Y+ \\overline{Z}) \\cdot (W+ \\overline{Y} + Z) \\cdot (W+ \\overline{X} + \\overline{Y})\\)",
      "D) \\((W+X) \\cdot (\\overline{W} + \\overline{Y} + \\overline{Z})\\)",
      "E) \\((W+X) \\cdot (\\overline{W} + \\overline{Y} + \\overline{Z}) \\cdot (\\overline{W} + \\overline{X} + Y + Z)\\)"
    ],
    "gabarito": "A",
    "solucao": "Para simplificar a função como produto de somas, primeiramente, é necessário representar os minterms e os termos não essenciais em uma tabela de verdade. Os minterms são representados por 1 e os termos não essenciais por X. Em seguida, é preciso realizar o mapa de Karnaugh, agrupando os 1s e os Xs em grupos de 2, 4 ou 8, se possível. Para a função dada, os grupos formados são: (W, X) e (W, X, Y, Z). Portanto, a função simplificada é (W+X)(W + X + Y + Z).",
    "area": "Circuitos Digitais",
    "subarea": "Minimização e Otimização de Funções Combinatórias",
    "dificuldade": "Média"
  },
  {
    "id": "2024-32",
    "edicao": "2024",
    "numero": 32,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Analise a figura abaixo:\n\n[Figura não representada]\n\nQual é o tipo da máquina de estados finitos apresentada e o que faz o circuito correspondente à máquina de estados finitos?",
    "alternativas": [
      "A) Máquina de Mealy que computa um somador serial.",
      "B) Máquina de Mealy que detecta dois 1’s seguidos.",
      "C) Máquina de Moore que detecta quando as entradas são diferentes.",
      "D) Máquina de Moore que computa um somador serial.",
      "E) Máquina de Moore que detecta dois 1’s seguidos."
    ],
    "gabarito": "A",
    "solucao": "A questão pede para identificar o tipo da máquina de estados finitos apresentada na figura e o que faz o circuito correspondente à máquina de estados finitos. Como a figura não é representada, não podemos explicar o passo a passo da resposta correta. No entanto, com base no gabarito, a resposta correta é 'Máquina de Mealy que computa um somador serial'. Uma Máquina de Mealy é um tipo de máquina de estados finitos onde a saída é determinada pelo estado atual e a entrada atual. Um somador serial é um circuito que realiza a soma de dois números binários bit a bit.",
    "area": "Circuitos Digitais",
    "subarea": "Modelo de Máquinas de Estado Finito (FSM)",
    "dificuldade": "Média"
  },
  {
    "id": "2024-33",
    "edicao": "2024",
    "numero": 33,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Analise o código em Linguagem C (Compilador Ansi C) abaixo:\n\n```c\nint main() {\n    int valor1 = 12;\n    int *valor2;\n    int cont = 0;\n    valor2 = &valor1;\n\n    do{\n    valor1 >>= 1;\n    cont++;\n    }while (*valor2>0);\n    printf (\"%d\",cont);\n}\n```\n\nA saída do programa na tela é o número:",
    "alternativas": [
      "A) 2.",
      "B) 3.",
      "C) 4.",
      "D) 5.",
      "E) 6."
    ],
    "gabarito": "C",
    "solucao": "O código em C apresentado realiza uma operação de deslocamento de bits para a direita (>>= 1) no valor1, que inicialmente é 12 (em binário, 1100). A cada iteração do loop, o valor1 é dividido por 2 (ou seja, um bit é deslocado para a direita), até que o valor1 seja 0. O contador 'cont' é incrementado a cada iteração. Portanto, o valor de 'cont' será o número de vezes que a operação de deslocamento de bits pode ser realizada em 12 até que ele se torne 0. Em binário, 12 é 1100, então a operação de deslocamento de bits pode ser realizada 4 vezes até que 12 se torne 0. Portanto, a saída do programa será 4.",
    "area": "Algoritmos e Estrutura de Dados",
    "subarea": "Comandos de uma Linguagem de Programação",
    "dificuldade": "Média"
  },
  {
    "id": "2024-34",
    "edicao": "2024",
    "numero": 34,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Analise o código em Linguagem C (Compilador Ansi C) abaixo:\n\n```c\nint f_rec(char s[]) {\n    if (s[0] == '\\0') {\n    return 0;\n    }\n    return 1 + f_rec(s + 1);\n}\n\nint main() {\n    char str[] = \"Ola mundo!\";\n    int var = f_rec(str);\n    double resultado = var / 2;\n    printf(\"%f\n\", resultado);\n    return 0;\n}\n```\n\nConsiderando o código apresentado, assinale a alternativa correta.",
    "alternativas": [
      "A) A saída é o número de caracteres de “str” dividido por 2, mostrado como um número de ponto flutuante.",
      "B) A saída é o número de caracteres de “str” dividido por 2, mostrado como um inteiro.",
      "C) O código tem um erro de tipos porque a função f_rec não pode aceitar um char array.",
      "D) O código tem um erro de tipos porque var é um inteiro, mas é usado em uma operação de divisão com double.",
      "E) O código tem um erro de tipos porque a função printf está usando o especificador de formato errado."
    ],
    "gabarito": "A",
    "solucao": "O código apresentado define uma função recursiva 'f_rec' que conta o número de caracteres em uma string até encontrar o caractere nulo (indicando o fim da string). A função 'main' define uma string 'str', chama a função 'f_rec' para contar o número de caracteres na string e armazena o resultado na variável 'var'. Em seguida, 'var' é dividido por 2 e o resultado é armazenado na variável 'resultado'. Finalmente, 'resultado' é impresso na tela. Portanto, a saída do programa é o número de caracteres na string 'str' dividido por 2, mostrado como um número de ponto flutuante.",
    "area": "Algoritmos e Estrutura de Dados",
    "subarea": "Recursividade: Conceito e Implementação",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-35",
    "edicao": "2024",
    "numero": 35,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Analise o seguinte diagrama de classes da UML (Linguagem de Modelagem Unificada) e assinale a alternativa que contém o(s) elemento(s) polimórfico(s).\n\n[Diagrama de classes não representado]",
    "alternativas": [
      "A) A relação entre as classes Ponto e Quadro.",
      "B) Os atributos -x e -y da classe Ponto.",
      "C) Os métodos +getX() e +getY() da classe Ponto.",
      "D) Os métodos +printf() das classes Ponto e Círculo.",
      "E) O método +setRaio() da classe Círculo."
    ],
    "gabarito": "D",
    "solucao": "O polimorfismo é um conceito da programação orientada a objetos que permite que objetos de diferentes classes compartilhem a mesma interface, ou seja, tenham métodos com a mesma assinatura. No diagrama de classes UML, isso é representado quando diferentes classes têm métodos com o mesmo nome. Portanto, a alternativa correta é a 'D) Os métodos +printf() das classes Ponto e Círculo.', pois esses métodos compartilham a mesma assinatura e estão presentes em mais de uma classe.",
    "area": "Linguagens de Programação",
    "subarea": "Polimorfismo",
    "dificuldade": "Média"
  },
  {
    "id": "2024-36",
    "edicao": "2024",
    "numero": 36,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Qual das seguintes linguagens pode ser gerada por uma gramática regular?",
    "alternativas": [
      "A) \\(\\{w \\in\\{a, b\\}^* |\\) o número de \\(a\\)’s em \\(w\\) é maior que o número de \\(b\\)’s \\(\\}\\).",
      "B) \\(\\{w \\in\\{a, b\\}^* | \\) o número de \\( a \\)’s em \\( w \\) é o dobro do número de \\( b \\)’s\\(\\}\\).",
      "C) \\(\\{w \\in\\{a, b\\}^* | \\) o número de \\( a \\)’s em \\( w \\) é divisível por 3 e o número de \\( b \\)’s é ímpar\\(\\}\\).",
      "D) \\(\\{w \\in\\{a, b\\}^* | \\, w \\) contém o mesmo número de \\( a \\)’s e \\( b \\)’s\\(\\}\\).",
      "E) \\(\\{w \\in\\{a, b\\}^* | \\, w \\) contém números diferentes de \\( a \\)’s e \\( b \\)’s\\(\\}\\)."
    ],
    "gabarito": "C",
    "solucao": "A alternativa correta é a C. A linguagem descrita na alternativa C pode ser gerada por uma gramática regular. A gramática regular pode gerar palavras onde o número de 'a' é divisível por 3 e o número de 'b' é ímpar. As outras alternativas descrevem linguagens que não podem ser geradas por gramáticas regulares, pois elas exigem uma contagem precisa dos caracteres 'a' e 'b', o que não é possível com uma gramática regular.",
    "area": "Linguagens Formais, Autômatos e Computabilidade",
    "subarea": "Gramáticas",
    "dificuldade": "Média"
  },
  {
    "id": "2024-37",
    "edicao": "2024",
    "numero": 37,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Sobre as linguagens formais, os autômatos e a computabilidade, analise as assertivas abaixo:\n\nI. Um autômato finito não determinístico pode ter transições vazias (\\(\\epsilon\\)-transições), enquanto um autômato finito determinístico não pode.\n\nII. As Máquinas de Turing são sempre determinísticas.\n\nIII. O autômato com pilha aceita a classe de linguagens regulares.\n\nIV. Os problemas NP-completos são um subconjunto dos problemas NP.\n\nQuais estão corretas?",
    "alternativas": [
      "A) Apenas I.",
      "B) Apenas IV.",
      "C) Apenas I e II.",
      "D) Apenas II e III.",
      "E) Apenas III e IV."
    ],
    "gabarito": "E",
    "solucao": "",
    "area": "",
    "subarea": "",
    "dificuldade": ""
  },
  {
    "id": "2024-38",
    "edicao": "2024",
    "numero": 38,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "O _____, de _____, demonstra limitações dos sistemas formais e a impossibilidade de provar certas afirmações dentro deles. Já o _____, de _____, pergunta se um determinado programa irá eventualmente parar ou entrar em um loop infinito para uma entrada dada. Ambos os resultados destacam a existência de limites fundamentais para o que podemos provar em sistemas formais ou calcular em sistemas computacionais.",
    "alternativas": [
      "A) Teorema da Incompletude – Alan Turing – Problema da Parada – Kurt Gödel",
      "B) Teorema da Incompletude – Kurt Gödel – Problema da Parada – Alan Turing",
      "C) Problema da Parada – Alan Turing – Teorema da Incompletude – Kurt Gödel",
      "D) Problema da Parada – Kurt Gödel – Teorema da Incompletude – Alonzo Church",
      "E) Teorema da Incompletude – Alonzo Church – Problema da Parada – Alan Turing"
    ],
    "gabarito": "B",
    "solucao": "A questão se refere a dois conceitos importantes da teoria da computação. O Teorema da Incompletude foi proposto por Kurt Gödel, que demonstra que existem afirmações verdadeiras em qualquer sistema formal que não podem ser provadas dentro desse sistema. O Problema da Parada foi proposto por Alan Turing, que questiona se é possível determinar, a partir de uma descrição de um programa e uma entrada, se o programa irá parar ou continuar para sempre. Portanto, a alternativa correta é a 'B) Teorema da Incompletude – Kurt Gödel – Problema da Parada – Alan Turing'.",
    "area": "Linguagens Formais, Autômatos e Computabilidade",
    "subarea": "Teorema da Incompletude de Gödel",
    "dificuldade": "Média"
  },
  {
    "id": "2024-39",
    "edicao": "2024",
    "numero": 39,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Considerando o conceito de arquivos e registros, assinale a alternativa correta sobre a estrutura de armazenamento e recuperação de informações em memória secundária.",
    "alternativas": [
      "A) Um arquivo é um conjunto de dados de diferentes tipos, e cada item individual de informação dentro de um arquivo é chamado de byte.",
      "B) Um programa não pode ser considerado um arquivo, pois ele é executável e não segue a mesma estrutura de arquivos de dados.",
      "C) Na memória secundária, o sistema operacional armazena informações em grupos, chamados blocos, para aumentar a eficiência na transferência de dados entre a memória secundária e a memória principal.",
      "D) A estrutura de armazenamento em memória secundária não utiliza o conceito de arquivos e registros, mas sim páginas e segmentos.",
      "E) Na memória secundária, os dados são armazenados exclusivamente em formato não hierárquico, o que impede a organização dos arquivos em pastas ou diretórios."
    ],
    "gabarito": "C",
    "solucao": "A alternativa correta é a C. Na memória secundária, o sistema operacional armazena informações em grupos, chamados blocos, para aumentar a eficiência na transferência de dados entre a memória secundária e a memória principal. Isso ocorre porque a transferência de um grande bloco de dados de uma vez só é mais eficiente do que a transferência de muitos pequenos blocos de dados individualmente. A alternativa A está incorreta porque um arquivo é um conjunto de dados do mesmo tipo, e cada item individual de informação dentro de um arquivo é chamado de registro, não de byte. A alternativa B está incorreta porque um programa pode ser considerado um arquivo, pois ele é armazenado em memória secundária como qualquer outro arquivo. A alternativa D está incorreta porque a estrutura de armazenamento em memória secundária utiliza o conceito de arquivos e registros, além de páginas e segmentos. A alternativa E está incorreta porque na memória secundária, os dados podem ser armazenados em formato hierárquico, o que permite a organização dos arquivos em pastas ou diretórios.",
    "area": "Organização de Arquivos e Dados",
    "subarea": "Estrutura e Operação de Arquivos",
    "dificuldade": "Média"
  },
  {
    "id": "2024-40",
    "edicao": "2024",
    "numero": 40,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Considerando a compressão de dados, assinale a alternativa correta.",
    "alternativas": [
      "A) A compressão de dados pode ser alcançada atribuindo descrições curtas aos resultados mais frequentes da fonte de dados e necessariamente descrições mais longas aos resultados menos frequentes.",
      "B) A compressão de dados pode ser alcançada atribuindo descrições de comprimento uniforme a todos os resultados da fonte de dados.",
      "C) A desigualdade de Kraft afirma que os comprimentos dos códigos não precisam seguir qualquer padrão específico.",
      "D) A codificação de Huffman é uma técnica fundamental em compressão de dados que minimiza o tamanho da mensagem codificada, porém tem perda de informação.",
      "E) A compressão de dados sempre resulta em uma perda de qualidade, independentemente do algoritmo utilizado."
    ],
    "gabarito": "A",
    "solucao": "A compressão de dados é uma técnica utilizada para reduzir o tamanho dos dados, permitindo que eles sejam armazenados ou transmitidos de forma mais eficiente. A alternativa A está correta pois uma das formas de alcançar a compressão de dados é através da atribuição de descrições curtas aos resultados mais frequentes da fonte de dados. Isso é conhecido como codificação de Huffman, que é uma técnica de compressão sem perda de dados que utiliza frequências de ocorrência de dados para atribuir códigos mais curtos aos dados mais frequentes. As outras alternativas estão incorretas: a alternativa B está errada porque a atribuição de descrições de comprimento uniforme a todos os resultados não resultaria em compressão; a alternativa C está errada porque a desigualdade de Kraft estabelece um limite para os comprimentos dos códigos em uma codificação prefixa; a alternativa D está errada porque a codificação de Huffman é uma técnica de compressão sem perda de dados; e a alternativa E está errada porque nem todos os algoritmos de compressão resultam em perda de qualidade.",
    "area": "Organização de Arquivos e Dados",
    "subarea": "Compressão de Dados",
    "dificuldade": "Média"
  },
  {
    "id": "2024-41",
    "edicao": "2024",
    "numero": 41,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Considerando o papel de um esquema de classificação em sistemas de gestão de registros, analise as assertivas abaixo e assinale a alternativa correta.\n\nI. O esquema apenas determina a identidade dos arquivos em sistemas baseados em papel.\nII. Esquemas de classificação são irrelevantes para a conformidade regulatória e legal em sistemas de gestão de registros.\nIII. O esquema determina a identidade e o lugar de cada arquivo, tanto em sistemas baseados em papel quanto em sistemas de registros eletrônicos, e em sistemas híbridos onde ambos existem.\nIV. A classificação em sistemas de gestão de registros é realizada apenas no momento da criação do registro e nunca é revisada ou atualizada posteriormente.\nV. Todos os sistemas de gestão de registros utilizam exclusivamente métodos manuais para a classificação de documentos, garantindo assim maior precisão e controle.",
    "alternativas": [
      "A) Todas as assertivas estão corretas.",
      "B) Todas as assertivas estão incorretas.",
      "C) Apenas a assertiva III está correta.",
      "D) Apenas a assertiva V está correta.",
      "E) Apenas as assertivas II e IV estão corretas."
    ],
    "gabarito": "C",
    "solucao": "A assertiva I está incorreta, pois o esquema não apenas determina a identidade dos arquivos em sistemas baseados em papel, mas também em sistemas de registros eletrônicos e híbridos. A assertiva II está incorreta, pois esquemas de classificação são essenciais para a conformidade regulatória e legal em sistemas de gestão de registros. A assertiva III está correta, pois define corretamente o papel de um esquema de classificação em sistemas de gestão de registros. A assertiva IV está incorreta, pois a classificação em sistemas de gestão de registros pode ser revisada e atualizada após a criação do registro. A assertiva V está incorreta, pois nem todos os sistemas de gestão de registros utilizam exclusivamente métodos manuais para a classificação de documentos.",
    "area": "Organização de Arquivos e Dados",
    "subarea": "Estrutura e Operação de Arquivos",
    "dificuldade": "Média"
  },
  {
    "id": "2024-42",
    "edicao": "2024",
    "numero": 42,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "No sistema operacional, o gerenciamento de E/S é implementado em várias camadas. Um dispositivo de E/S notifica que realizou uma operação se comunicando diretamente com a camada de _____, usualmente via APIC, a qual informa a camada de _____ sobre o resultado da operação. Quando o sistema operacional precisa programar o dispositivo de E/S para realizar uma operação, a camada de _____ se comunica diretamente com o dispositivo.",
    "alternativas": [
      "A) controladores de dispositivo – chamada de sistemas – tratadores de interrupção",
      "B) tratadores de interrupção – controladores de dispositivo – chamada de sistemas",
      "C) software independente de dispositivo – tratadores de interrupção – controladores de dispositivo",
      "D) controladores de dispositivo – software independente de dispositivo – chamada de sistemas",
      "E) tratadores de interrupção – controladores de dispositivo – controladores de dispositivo"
    ],
    "gabarito": "E",
    "solucao": "O gerenciamento de E/S em um sistema operacional é feito em várias camadas. Quando um dispositivo de E/S realiza uma operação, ele notifica a camada de tratadores de interrupção, geralmente via APIC (Advanced Programmable Interrupt Controller). A camada de tratadores de interrupção então informa a camada de controladores de dispositivo sobre o resultado da operação. Quando o sistema operacional precisa programar o dispositivo de E/S para realizar uma operação, a camada de controladores de dispositivo se comunica diretamente com o dispositivo. Portanto, a resposta correta é a alternativa E) tratadores de interrupção – controladores de dispositivo – controladores de dispositivo.",
    "area": "Sistemas Operacionais",
    "subarea": "Gerenciamento de Dispositivos de Entrada/Saída",
    "dificuldade": "Média"
  },
  {
    "id": "2024-43",
    "edicao": "2024",
    "numero": 43,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Analise a execução a seguir considerando que todos os arquivos de cabeçalho necessários estão inclusos no tempo de compilação e que o programa executa ininterruptamente do início até o seu término.\n\n```c\nint lbm = 0;\n\nvoid * func(void *i){  lbm = lbm + 1; }\n\nint main (void){\n    int i;\n    pthread_t t[10];\n\n    for(i=0;i<10;i++){\n    pthread_create(&t[i], NULL, func, NULL);\n\n    for(i=0;i<10;i++){\n    pthread_join(t[i], NULL);\n\n    printf(\"%d\", lbm);\n}\n```\n\nAssinale a alternativa que melhor representa o resultado da execução do programa acima.",
    "alternativas": [
      "A) lbm = 1",
      "B) lbm = 9",
      "C) lbm ≤ 10",
      "D) lbm = 10",
      "E) lbm ≥ 10"
    ],
    "gabarito": "C",
    "solucao": "O programa cria 10 threads, cada uma incrementando a variável global 'lbm' em 1. No entanto, a operação de incremento não é atômica, o que significa que ela não é executada de uma só vez. Ela é composta por três operações: leitura do valor atual de 'lbm', incremento do valor lido e gravação do novo valor em 'lbm'. Se duas threads executarem essas operações ao mesmo tempo, elas podem ler o mesmo valor de 'lbm', incrementá-lo e gravar o mesmo novo valor em 'lbm', resultando em um incremento de apenas 1 em vez de 2. Portanto, o valor final de 'lbm' pode ser qualquer valor entre 1 e 10, dependendo de como as threads são agendadas para execução. Assim, a resposta correta é 'lbm ≤ 10'.",
    "area": "Sistemas Operacionais",
    "subarea": "Comunicação, Concorrência e Sincronização de Processos",
    "dificuldade": "Média"
  },
  {
    "id": "2024-44",
    "edicao": "2024",
    "numero": 44,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Um computador precisa ter seu disco atual, formatado com uma única partição, substituído por outro disco. Antes de realizar a troca, foi realizada uma análise do tamanho dos arquivos armazenados no disco atual, cujo resultado indicou que 98% dos arquivos possuem tamanho entre 1.000 bytes e 2.030 bytes (mediana de 1.515 bytes). Assinale a alternativa que lista os parâmetros de formação do novo disco e que resulte no menor desperdício de espaço físico e menor probabilidade de fragmentação do disco.",
    "alternativas": [
      "A) Tamanho de bloco = 1.024 bytes e sistema de arquivos baseado em alocação encadeada.",
      "B) Tamanho de bloco = 1.024 bytes e sistema de arquivos baseado em alocação contígua.",
      "C) Tamanho de bloco = 1.024 bytes e sistema de arquivos baseado em alocação indexada.",
      "D) Tamanho de bloco = 2.048 bytes e sistema de arquivos baseado em alocação encadeada.",
      "E) Tamanho de bloco = 2.048 bytes e sistema de arquivos baseado em alocação contígua."
    ],
    "gabarito": "D",
    "solucao": "A questão trata da alocação de arquivos em um disco. O tamanho de bloco ideal deve ser maior ou igual ao tamanho médio dos arquivos para evitar a fragmentação e o desperdício de espaço. Como 98% dos arquivos possuem tamanho entre 1.000 bytes e 2.030 bytes (mediana de 1.515 bytes), o tamanho de bloco ideal é de 2.048 bytes, pois é o menor tamanho que comporta a maioria dos arquivos. Quanto ao sistema de arquivos, a alocação encadeada é a mais adequada, pois permite a utilização eficiente do espaço em disco, uma vez que cada arquivo ocupa exatamente o número de blocos que necessita, independentemente do tamanho do bloco. Portanto, a alternativa correta é a D) Tamanho de bloco = 2.048 bytes e sistema de arquivos baseado em alocação encadeada.",
    "area": "Sistemas Operacionais",
    "subarea": "Gerenciamento de Arquivos",
    "dificuldade": "Média"
  },
  {
    "id": "2024-45",
    "edicao": "2024",
    "numero": 45,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Sobre os tipos de dados básicos, assinale a alternativa correta.",
    "alternativas": [
      "A) As variáveis do tipo inteiro são utilizadas para armazenar valores que pertencem ao conjunto de números naturais (sem parte fracionária) positivos e negativos.",
      "B) O tipo caractere permite armazenar strings ou conjuntos de caracteres em uma variável do tipo caracter.",
      "C) Por padrão, uma variável do tipo inteiro admite somente valores positivos. Caso se deseje que a variável contenha valores negativos, é necessário utilizar o comando da linguagem de programação para incluir sinal.",
      "D) As variáveis do tipo vetor são utilizadas para armazenar valores numéricos com parte fracionária.",
      "E) O conjunto de operações disponível para o tipo caractere inclui soma, subtração, multiplicação, divisão inteira e resto da divisão."
    ],
    "gabarito": "A",
    "solucao": "A alternativa correta é a 'A' pois as variáveis do tipo inteiro são utilizadas para armazenar valores que pertencem ao conjunto de números naturais (sem parte fracionária) positivos e negativos. As demais alternativas estão incorretas pois: na alternativa 'B', o tipo caractere não permite armazenar strings ou conjuntos de caracteres, ele armazena apenas um único caractere; na alternativa 'C', uma variável do tipo inteiro admite tanto valores positivos quanto negativos, não sendo necessário nenhum comando especial para incluir sinal; na alternativa 'D', as variáveis do tipo vetor não são utilizadas para armazenar valores numéricos com parte fracionária, elas são utilizadas para armazenar uma sequência de elementos do mesmo tipo; na alternativa 'E', o conjunto de operações disponível para o tipo caractere não inclui soma, subtração, multiplicação, divisão inteira e resto da divisão, essas operações são aplicáveis a tipos numéricos.",
    "area": "Algoritmos e Estrutura de Dados",
    "subarea": "Tipos de Dados Básicos e Estruturados",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-46",
    "edicao": "2024",
    "numero": 46,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Analise as assertivas abaixo sobre estruturas em linguagens de programação:\n\nI. Uma estrutura é um conjunto de uma ou mais variáveis agrupadas sob um único nome, de forma a facilitar a sua referência.\nII. A declaração de uma estrutura corresponde unicamente à definição de um novo tipo (isto é, da sua estrutura), e não à declaração de variáveis do tipo da estrutura.\nIII. Uma estrutura pode conter, na sua definição, variáveis simples, vetores, ponteiros ou mesmo outras estruturas.\nIV. As estruturas permitem agrupar diversos componentes em uma única variável, que podem ser definidos com tipos distintos.",
    "alternativas": [
      "A) Apenas I e II.",
      "B) Apenas III e IV.",
      "C) Apenas I, II e III.",
      "D) Apenas II, III e IV.",
      "E) I, II, III e IV."
    ],
    "gabarito": "E",
    "solucao": "As quatro assertivas estão corretas. I. Uma estrutura é um conjunto de uma ou mais variáveis agrupadas sob um único nome, de forma a facilitar a sua referência. Isso é verdade, pois as estruturas permitem agrupar variáveis relacionadas sob um único nome. II. A declaração de uma estrutura corresponde unicamente à definição de um novo tipo (isto é, da sua estrutura), e não à declaração de variáveis do tipo da estrutura. Isso também é verdade, pois a declaração de uma estrutura apenas define um novo tipo de dados, não cria variáveis desse tipo. III. Uma estrutura pode conter, na sua definição, variáveis simples, vetores, ponteiros ou mesmo outras estruturas. Isso é verdade, pois as estruturas podem conter qualquer tipo de dados, incluindo outros tipos de estruturas. IV. As estruturas permitem agrupar diversos componentes em uma única variável, que podem ser definidos com tipos distintos. Isso é verdade, pois as estruturas permitem agrupar variáveis de diferentes tipos em uma única variável.",
    "area": "Algoritmos e Estrutura de Dados",
    "subarea": "Tipos de Dados Básicos e Estruturados",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-47",
    "edicao": "2024",
    "numero": 47,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Analise o texto a seguir, que descreve um programa que solicita um salário ao usuário e mostra o imposto a pagar:\n\n- Se o salário for negativo ou zero, mostre o erro respectivo.\n- Se o salário for maior que 1000, paga 10% de imposto, se não paga apenas 5%.\n\nPara resolver o problema descrito acima, qual instrução deve ser utilizada?",
    "alternativas": [
      "A) Laço encadeado.",
      "B) Atribuição composta.",
      "C) Laço infinito.",
      "D) Condicional encadeada.",
      "E) Atribuição simples."
    ],
    "gabarito": "D",
    "solucao": "Para resolver o problema descrito, deve-se utilizar uma instrução condicional encadeada. Primeiro, verifica-se se o salário é negativo ou zero, caso seja, exibe-se o erro respectivo. Caso contrário, verifica-se se o salário é maior que 1000, se for, calcula-se 10% de imposto, caso contrário, calcula-se 5% de imposto.",
    "area": "Algoritmos e Estrutura de Dados",
    "subarea": "Comandos de uma Linguagem de Programação",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-48",
    "edicao": "2024",
    "numero": 48,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Um mapa de cidade pode ser modelado como um grafo cujos vértices são cruzamentos ou finais de ruas e cujas arestas podem ser trechos de ruas sem cruzamento. Esse grafo tem arestas não dirigidas, representando ruas de dois sentidos, e arestas dirigidas, correspondendo a trechos de um único sentido. Assim, um grafo que representa as ruas de uma cidade é um:",
    "alternativas": [
      "A) Dígrafo.",
      "B) Grafo completo.",
      "C) Grafo misto.",
      "D) Bígrafo.",
      "E) Grafo simétrico."
    ],
    "gabarito": "C",
    "solucao": "Um grafo que representa as ruas de uma cidade é um grafo misto. Isso porque ele pode conter arestas não dirigidas, que representam ruas de dois sentidos, e arestas dirigidas, que representam trechos de um único sentido. Portanto, o grafo não é apenas um dígrafo (que só tem arestas dirigidas) nem apenas um grafo não dirigido (que só tem arestas não dirigidas), mas uma combinação dos dois, ou seja, um grafo misto.",
    "area": "Teoria dos Grafos",
    "subarea": "Grafos orientados e não-orientados",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-49",
    "edicao": "2024",
    "numero": 49,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "A definição de um grafo agrupa arestas como uma coleção, não como um conjunto, permitindo que duas arestas não dirigidas tenham os mesmos pontos finais e que duas arestas dirigidas tenham a mesma origem e o mesmo destino. Tais arestas são chamadas de:",
    "alternativas": [
      "A) Paralelas.",
      "B) Laços.",
      "C) Adjacentes.",
      "D) Incidentes.",
      "E) Finais."
    ],
    "gabarito": "A",
    "solucao": "Em teoria dos grafos, quando duas arestas não dirigidas têm os mesmos pontos finais ou duas arestas dirigidas têm a mesma origem e o mesmo destino, essas arestas são chamadas de paralelas. Portanto, a resposta correta é a alternativa A) Paralelas.",
    "area": "Teoria dos Grafos",
    "subarea": "Grafos orientados e não-orientados",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-50",
    "edicao": "2024",
    "numero": 50,
    "area_conhecimento": "Fundamentos da Computação",
    "enunciado": "Um _____ é um caminho em que os vértices de início e fim são os mesmos.",
    "alternativas": [
      "A) arco",
      "B) ciclo",
      "C) caminho simples",
      "D) laço",
      "E) k-cubo"
    ],
    "gabarito": "B",
    "solucao": "Um ciclo em teoria dos grafos é um caminho que começa e termina no mesmo vértice. Portanto, a alternativa correta é a B) ciclo.",
    "area": "Teoria dos Grafos",
    "subarea": "Caminhos",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-51",
    "edicao": "2024",
    "numero": 51,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Em um banco de dados relacional, considere um esquema de relação para um conjunto de itens, que define uma hierarquia pertinente à composição de peças de uma máquina, a saber: ITEM (Id, Nome, Fk); o atributo ID é a chave primária de ITEM; o atributo Nome rotula o item; o atributo Fk é uma chave estrangeira em ITEM, que determina o item ascendente imediato na hierarquia. Em determinado momento, o conjunto de tuplas em ITEM é: (1, 'Item 1', NULL); (2, 'Item 2', 1); (3, 'Item 3', 1); (4, 'Item 4', 3). Seja uma consulta escrita em SQL, conforme apresentada abaixo:\n\n```sql\nSELECT FILHO.Id, FILHO.Nome, PAI.Id, PAI.Nome\nFROM ITEM AS FILHO RIGHT OUTER JOIN ITEM AS PAI ON FILHO.Fk = PAI.Id\n```\n\nAo executar essa consulta, a relação resultante possui:",
    "alternativas": [
      "A) 2 tuplas.",
      "B) 3 tuplas.",
      "C) 4 tuplas.",
      "D) 5 tuplas.",
      "E) 6 tuplas."
    ],
    "gabarito": "D",
    "solucao": "A consulta SQL apresentada realiza um RIGHT OUTER JOIN entre a tabela ITEM e ela mesma, renomeando uma delas como FILHO e a outra como PAI, com base na chave estrangeira Fk da tabela FILHO e a chave primária Id da tabela PAI. O resultado dessa consulta será uma tabela que combina as linhas de FILHO e PAI que possuem Fk e Id correspondentes, respectivamente, além de todas as linhas de PAI que não possuem correspondência em FILHO. Analisando as tuplas apresentadas, temos: (1, 'Item 1', NULL) que não possui correspondência em FILHO, portanto aparecerá sozinho; (2, 'Item 2', 1) e (3, 'Item 3', 1) que correspondem ao 'Item 1' em PAI, portanto aparecerão juntos; (4, 'Item 4', 3) que corresponde ao 'Item 3' em PAI, portanto aparecerá junto. Assim, teremos um total de 5 tuplas no resultado da consulta.",
    "area": "Banco de Dados",
    "subarea": "Linguagens de Consulta",
    "dificuldade": "Média"
  },
  {
    "id": "2024-52",
    "edicao": "2024",
    "numero": 52,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Deadlock (impasse) de transações de banco de dados ocorre quando, em um conjunto de n (n>1) transações ativas, é caracterizado um ciclo de espera: T1 espera por T2; T2 espera por T3; ...; Tn-1 espera por Tn; e Tn espera por T1. Entre as estratégias de tratamento de deadlock a seguir, aquela que é um protocolo de detecção (em vez de prevenção) é denominada:",
    "alternativas": [
      "A) Espera cautelosa.",
      "B) Grafo de espera.",
      "C) Sem espera.",
      "D) Esperar ou morrer.",
      "E) Ferir ou esperar."
    ],
    "gabarito": "B",
    "solucao": "A questão trata de um problema de deadlock em transações de banco de dados, onde um ciclo de espera é formado por transações ativas. Entre as opções apresentadas, a única que se refere a um protocolo de detecção de deadlock (em vez de prevenção) é o 'Grafo de espera'. Este protocolo é utilizado para detectar ciclos de espera em transações, o que indica a ocorrência de um deadlock.",
    "area": "Banco de Dados",
    "subarea": "Sistemas de Gerenciamento de Bancos de Dados (SGBD): Arquitetura, Segurança, Integridade, Concorrência, Recuperação após Falha, Gerenciamento de Transações",
    "dificuldade": "Média"
  },
  {
    "id": "2024-53",
    "edicao": "2024",
    "numero": 53,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Árvores B e B+ são árvores de busca empregadas à implementação de estruturas de indexação, conforme a literatura na área de banco de dados. Essencialmente, a pesquisa nessas árvores objetiva encontrar o(s) endereço(s) do(s) bloco(s) de dados onde estão os dados que atendem ao predicado de busca. Em outras palavras, há o ponteiro de árvore, que define a hierarquia entre os nós da arvore, e o ponteiro de dados, que possui o endereço de bloco de dados. Quanto à estrutura das árvores B e B+, é possível abstrair quatro tipos de nós:\n\nI. Nós internos na árvore B.\nII. Nós folha na árvore B.\nIII. Nós internos na árvore B+.\nIV. Nós folha na árvore B+.\n\nEntre os tipos apresentados, são nós que possuem ponteiros de dados:",
    "alternativas": [
      "A) Apenas I, II e III.",
      "B) Apenas I, II e IV.",
      "C) Apenas I, III e IV.",
      "D) Apenas II, III e IV.",
      "E) I, II, III e IV."
    ],
    "gabarito": "B",
    "solucao": "As árvores B e B+ são usadas para indexação de dados em bancos de dados. Em ambas as estruturas, os nós folha contêm ponteiros de dados, que apontam para o bloco de dados real no disco. Na árvore B, os nós internos também contêm ponteiros de dados, enquanto na árvore B+, os nós internos não contêm ponteiros de dados, apenas chaves e ponteiros para outros nós. Portanto, os nós que possuem ponteiros de dados são os nós internos e os nós folha na árvore B e os nós folha na árvore B+, que correspondem às opções I, II e IV.",
    "area": "Banco de Dados",
    "subarea": "Sistemas de Gerenciamento de Bancos de Dados (SGBD): Arquitetura, Segurança, Integridade, Concorrência, Recuperação após Falha, Gerenciamento de Transações",
    "dificuldade": "Média"
  },
  {
    "id": "2024-54",
    "edicao": "2024",
    "numero": 54,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "No contexto da construção de compiladores, um Esquema de Tradução é um(a):",
    "alternativas": [
      "A) Grafo que relaciona atributos entre regras de produção diferentes de uma gramática livre de contexto.",
      "B) Sequência de ações que descreve informalmente o funcionamento de todas as etapas do compilador.",
      "C) Técnica de recuperação de erros que consiste em obter estruturas de controle semanticamente equivalentes às definidas pelo programador.",
      "D) Forma de análise semântica, que considera o tipo das variáveis dos programas, de forma a evitar erros nos programas gerados.",
      "E) Gramática livre de contexto na qual fragmentos de programas (ações) são inseridos nos lados direitos das regras de produção."
    ],
    "gabarito": "E",
    "solucao": "Um Esquema de Tradução é uma gramática livre de contexto na qual fragmentos de programas (ações) são inseridos nos lados direitos das regras de produção. Isso é usado para descrever a tradução de uma linguagem de origem para uma linguagem de destino. As ações são geralmente especificadas como fragmentos de código em uma linguagem de programação como C ou Java. Quando uma regra de produção é usada durante a análise, as ações associadas a essa regra são executadas, resultando na tradução do programa de origem.",
    "area": "Compiladores",
    "subarea": "Esquemas de Tradução",
    "dificuldade": "Média"
  },
  {
    "id": "2024-55",
    "edicao": "2024",
    "numero": 55,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Sobre representação intermediária no contexto da construção de compiladores, análise as assertivas abaixo:\n\nI. Árvores sintáticas e código de três endereços são dois tipos de representações intermediárias.\nII. Os enunciados que aparecem no código de três endereços têm a forma geral x : = y op z, nos quais x, y e z são nomes, constantes ou objetos temporários criados pelo compilador. Outras formas podem também ser usadas, incluindo desvios condicionais e incondicionais, entre outros tipos de enunciados.\nIII. Representações intermediárias podem ser produzidas usando Definições Dirigidas pela Sintaxe.\nIV. Autômatos finitos são usados na definição de representações intermediárias, sendo que os estados do autômato representam as variáveis do programa e as transições representam instruções do código intermediário.",
    "alternativas": [
      "A) Apenas I.",
      "B) Apenas I e II.",
      "C) Apenas II e IV.",
      "D) Apenas I, II e III.",
      "E) I, II, III e IV."
    ],
    "gabarito": "D",
    "solucao": "A assertiva I está correta, pois árvores sintáticas e código de três endereços são dois tipos de representações intermediárias usadas na compilação. A assertiva II também está correta, pois descreve corretamente a forma geral dos enunciados que aparecem no código de três endereços. A assertiva III também está correta, pois as representações intermediárias podem ser produzidas usando Definições Dirigidas pela Sintaxe. No entanto, a assertiva IV está incorreta, pois autômatos finitos são usados na análise léxica e sintática, não na definição de representações intermediárias. Portanto, a resposta correta é a alternativa D, que afirma que apenas as assertivas I, II e III estão corretas.",
    "area": "Compiladores",
    "subarea": "Representação Intermediária",
    "dificuldade": "Média"
  },
  {
    "id": "2024-56",
    "edicao": "2024",
    "numero": 56,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Análise as matrizes de transformações geométricas A e B.\n\n \\[ A:\\begin{bmatrix} x' \\\\ y' \\\\ 1 \\end{bmatrix} =\\begin{bmatrix} \\cos(\\theta) & -\\sin(\\theta) & 0 \\\\ \\sin(\\theta) & \\cos(\\theta) & 0 \\\\ 0 & 0 & 1 \\end{bmatrix} \\cdot \\begin{bmatrix} x \\\\ y \\\\ 1 \\end{bmatrix}\\]\n \\[ B:\\begin{bmatrix} x' \\\\ y' \\\\ 1 \\end{bmatrix} =\\begin{bmatrix} E_x & 0 & T_x \\\\ 0 & E_y & T_y \\\\ 0 & 0 & 1 \\end{bmatrix} \\cdot \\begin{bmatrix} x \\\\ y \\\\ 1 \\end{bmatrix}\\]\n\nConsiderando que Ex e Ey são fatores de escala, Tx e Ty são fatores de translação e que θ representa um ângulo de rotação, analise as assertivas a seguir:\n\nI. A transformação A rotaciona o objeto com pivô no centro de massa do próprio objeto.\nII. A transformação B primeiro escala e depois translada o objeto.\nIII. O uso da coordenada homogênea tanto para a transformação A quanto para B é necessário, pois sem ela não é possível a realização de tais transformações.",
    "alternativas": [
      "A) Apenas I.",
      "B) Apenas II.",
      "C) Apenas I e III.",
      "D) Apenas II e III.",
      "E) I, II e III."
    ],
    "gabarito": "B",
    "solucao": "A questão pede para analisar duas matrizes de transformações geométricas, A e B, mas não fornece as matrizes explicitamente. Assim, a solução depende de uma compreensão geral de como essas transformações funcionam. A alternativa I não pode ser confirmada sem informações específicas sobre a matriz A. A alternativa III é falsa, pois é possível realizar transformações geométricas sem o uso de coordenadas homogêneas, embora elas facilitem o processo. A alternativa II é verdadeira, pois é comum que uma transformação geométrica envolva uma escala seguida de uma translação.",
    "area": "Computação Gráfica",
    "subarea": "Transformações Geométricas em Duas e Três Dimensões: Coordenadas Homogêneas e Matrizes de Transformação",
    "dificuldade": "Média"
  },
  {
    "id": "2024-57",
    "edicao": "2024",
    "numero": 57,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Analise as assertivas abaixo sobre técnicas de renderização e iluminação e assinale a alternativa correta.\n\nI. Ray Tracing é uma técnica que visa simular a propagação da luz no ambiente, avaliando a sua interação com os objetos que o compõem e considerando a interação da luz com as suas superfícies. Esta técnica é frequentemente utilizada em jogos digitais, dado o seu grau de realismo e o fato de a velocidade de renderização ser eficiente para aplicações de tempo real.\nII. Z-Buffer é uma técnica que visa armazenar a profundidade dos objetos em relação à câmera, fazendo com que se grave, para cada pixel, qual objeto está mais distante. Essa técnica é utilizada para reduzir o tempo de rendering, especialmente para aplicações que exigem muito do hardware, como no caso das cenas ultrarrealistas geradas no âmbito cinematográfico, uma vez que essa técnica representa o estado da arte da geração de cenas tridimensionais ultrarrealistas.\nIII. O Modelo de Reflexão de Phong é utilizado para renderização da iluminação de objetos. Sua característica principal é a combinação da reflexão difusa, especular e ambiente para formar uma iluminação mais realista. Como esta é uma técnica de iluminação global e considera o cálculo tanto da incidência de luz direta quanto indireta, não é muito utilizada em jogos digitais ou aplicações de tempo real, devido ao seu alto custo de tempo de processamento.",
    "alternativas": [
      "A) Todas as assertivas estão corretas.",
      "B) Todas as assertivas estão incorretas.",
      "C) Apenas as assertivas I e II estão corretas.",
      "D) Apenas as assertivas I e III estão corretas.",
      "E) Apenas as assertivas II e III estão corretas."
    ],
    "gabarito": "B",
    "solucao": "A assertiva I está incorreta porque, embora o Ray Tracing seja uma técnica que simula a propagação da luz e sua interação com objetos, ela não é frequentemente utilizada em jogos digitais devido ao seu alto custo computacional, tornando-a ineficiente para aplicações em tempo real. A assertiva II está incorreta porque o Z-Buffer armazena a profundidade dos objetos em relação à câmera, gravando para cada pixel qual objeto está mais próximo, e não o mais distante. Além disso, essa técnica não é considerada o estado da arte para geração de cenas tridimensionais ultrarrealistas. A assertiva III está incorreta porque o Modelo de Reflexão de Phong é uma técnica de iluminação local, e não global, e é amplamente utilizado em jogos digitais e aplicações de tempo real devido ao seu baixo custo de tempo de processamento.",
    "area": "Computação Gráfica",
    "subarea": "O Processo de 'Rendering': Fontes de Luz, Remoção de Linhas e Superfícies Ocultas",
    "dificuldade": "Difícil"
  },
  {
    "id": "2024-58",
    "edicao": "2024",
    "numero": 58,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "De acordo com o livro “Engenharia de Software – Uma Abordagem Profissional”, de Roger S. Pressman e Bruce R. Maxim, a qualidade de software pode ser definida como “uma gestão de qualidade efetiva aplicada de modo a criar um produto útil que forneça valor mensurável para aqueles que o produzem e para aqueles que o utilizam”. O resultado final de termos um software de alta qualidade, segundo os autores, são os seguintes, EXCETO:",
    "alternativas": [
      "A) Aumentar a complexidade dos processos de negócios.",
      "B) Gerar maior receita pelo produto de software.",
      "C) Obter maior rentabilidade, quando uma aplicação suporta um processo de negócio.",
      "D) Obter maior disponibilidade de informações cruciais para o negócio.",
      "E) Obter menor exigência de manutenção, menos correções de erros e menos suporte ao cliente."
    ],
    "gabarito": "A",
    "solucao": "A questão aborda a definição de qualidade de software e seus resultados finais, de acordo com o livro 'Engenharia de Software – Uma Abordagem Profissional'. A alternativa A é a correta, pois a qualidade de software não aumenta a complexidade dos processos de negócios, pelo contrário, ela busca simplificar e otimizar esses processos. As demais alternativas (B, C, D e E) estão corretas, pois são benefícios diretos de um software de alta qualidade: geração de maior receita, maior rentabilidade, maior disponibilidade de informações cruciais e menor exigência de manutenção e suporte ao cliente.",
    "area": "Engenharia de Software",
    "subarea": "Qualidade de Software",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-59",
    "edicao": "2024",
    "numero": 59,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "De acordo com o livro “Engenharia de Software”, de Ian Sommerville, “um processo de software é um conjunto de atividades relacionadas que levam à produção de um sistema de software”. De acordo com o autor, a definição abaixo refere-se a qual das quatro atividades fundamentais de engenharia de software?\n\n- “É o processo de entender e definir quais serviços são exigidos do sistema e identificar as restrições na operação e no desenvolvimento do sistema”.",
    "alternativas": [
      "A) Desenvolvimento de software.",
      "B) Validação de software.",
      "C) Evolução de software.",
      "D) Especificação de software.",
      "E) Projeto de software."
    ],
    "gabarito": "D",
    "solucao": "A questão está pedindo para identificar a atividade de engenharia de software que corresponde à descrição dada. A descrição fala sobre entender e definir os serviços que o sistema deve fornecer e identificar as restrições na operação e desenvolvimento do sistema. Isso corresponde à atividade de 'Especificação de software', que é o processo de estabelecer o que os serviços do sistema devem ser e as restrições em sua operação e desenvolvimento. Portanto, a resposta correta é a opção D) 'Especificação de software'.",
    "area": "Engenharia de Software",
    "subarea": "Engenharia de Requisitos",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-60",
    "edicao": "2024",
    "numero": 60,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Sobre gerenciamento de configuração de software, de acordo com o livro “Engenharia de Software – Uma Abordagem Profissional”, de Roger S. Pressman e Bruce R. Maxim, analise as assertivas abaixo e assinale a alternativa correta.\n\nI. Os elementos que constituem todas as informações geradas durante o processo de software são conhecidos coletivamente como configuração de software.\nII. À medida que o trabalho de engenharia de software progride, forma-se uma hierarquia de itens de configuração de software.\nIII. O gerenciamento de configuração de software consiste em um conjunto de atividades realizadas para administrar as mudanças ao longo de todo o ciclo de vida de um software.",
    "alternativas": [
      "A) Todas as assertivas estão corretas.",
      "B) Todas as assertivas estão incorretas.",
      "C) Apenas as assertivas I e II estão corretas.",
      "D) Apenas as assertivas I e III estão corretas.",
      "E) Apenas as assertivas II e III estão corretas."
    ],
    "gabarito": "A",
    "solucao": "A questão aborda o tema de gerenciamento de configuração de software, que é um conjunto de atividades realizadas para administrar as mudanças ao longo de todo o ciclo de vida de um software. Os elementos que constituem todas as informações geradas durante o processo de software são conhecidos coletivamente como configuração de software. À medida que o trabalho de engenharia de software progride, forma-se uma hierarquia de itens de configuração de software. Portanto, todas as assertivas estão corretas.",
    "area": "Engenharia de Software",
    "subarea": "Gerenciamento de Configuração de Software",
    "dificuldade": "Média"
  },
  {
    "id": "2024-61",
    "edicao": "2024",
    "numero": 61,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Em um Algoritmo Genético (AG), é correto afirmar que o operador de crossover é responsável por:",
    "alternativas": [
      "A) Avaliar a aptidão de cada indivíduo na população.",
      "B) Manter os melhores indivíduos de uma geração para a próxima.",
      "C) Modificar aleatoriamente os genes de um indivíduo para explorar novas soluções.",
      "D) Selecionar os indivíduos que participarão do processo de reprodução.",
      "E) Combinar partes dos cromossomos de dois pais para criar descendentes."
    ],
    "gabarito": "E",
    "solucao": "No Algoritmo Genético, o operador de crossover é responsável por combinar partes dos cromossomos de dois pais para criar descendentes. Este é um dos principais mecanismos pelos quais o AG explora o espaço de soluções, gerando novos indivíduos que possuem características de ambos os pais. O objetivo é que esses novos indivíduos possam herdar as 'boas' características de ambos os pais, aumentando assim a chance de melhorar a solução.",
    "area": "Inteligência Artificial",
    "subarea": "Árvores de Decisão, Redes Neurais e Algoritmos Genéticos",
    "dificuldade": "Média"
  },
  {
    "id": "2024-62",
    "edicao": "2024",
    "numero": 62,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Em relação aos Sistemas Especialistas, assinale a alternativa que melhor descreve o papel do motor de inferência.",
    "alternativas": [
      "A) O motor de inferência atua principalmente na otimização de algoritmos de aprendizado de máquina dentro do sistema.",
      "B) O motor de inferência é responsável por gerenciar a interface de usuário do sistema, garantindo uma interação eficiente com especialistas humanos.",
      "C) O motor de inferência utiliza as regras definidas na base de conhecimento para derivar conclusões a partir de fatos específicos, simulando o raciocínio humano especializado.",
      "D) O motor de inferência substitui a necessidade de uma base de conhecimento, operando com base em dados brutos e estatísticas.",
      "E) O motor de inferência serve exclusivamente para a manutenção e atualização automática da base de dados, sem envolvimento direto no processo de raciocínio."
    ],
    "gabarito": "C",
    "solucao": "O motor de inferência é uma parte crucial dos sistemas especialistas. Ele utiliza as regras definidas na base de conhecimento para derivar conclusões a partir de fatos específicos. Isso é feito através de um processo de raciocínio que simula a maneira como um especialista humano pensaria sobre o problema. O motor de inferência não é responsável pela otimização de algoritmos de aprendizado de máquina, gerenciamento da interface do usuário, substituição da base de conhecimento ou manutenção da base de dados. Portanto, a alternativa C é a correta.",
    "area": "Inteligência Artificial",
    "subarea": "Sistemas Especialistas",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-63",
    "edicao": "2024",
    "numero": 63,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Após a captura de uma imagem por sensores, uma imagem digital é criada a partir do processo de digitalização, que envolve duas etapas: a _____, que realiza a discretização das coordenadas no domínio espacial, e a _____, que realiza a discretização dos valores de amplitude dos pixels.",
    "alternativas": [
      "A) interpolação – ampliação",
      "B) modulação – codificação",
      "C) quantização – amostragem",
      "D) amostragem – quantização",
      "E) codificação – modulação"
    ],
    "gabarito": "D",
    "solucao": "A digitalização de uma imagem envolve duas etapas. A primeira é a amostragem, que é o processo de discretização das coordenadas no domínio espacial. Isso significa que a imagem é dividida em pequenos quadrados ou pixels. A segunda etapa é a quantização, que é o processo de discretização dos valores de amplitude dos pixels. Isso significa que cada pixel recebe um valor que representa sua cor ou intensidade de cinza. Portanto, a resposta correta é a opção D) amostragem – quantização.",
    "area": "Processamento de Imagens",
    "subarea": "Amostragem e Quantização de Imagens",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-64",
    "edicao": "2024",
    "numero": 64,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Analise as assertivas abaixo sobre filtragem de imagens digitais:\n\nI. A aplicação de um filtro espacial de média em uma imagem digital resulta na sua suavização.\nII. A aplicação de um filtro de frequência do tipo passa-baixa em uma imagem digital resulta no seu agugamento.\nIII. A aplicação de um filtro espacial utilizando o operador laplaciano em uma imagem digital resulta no seu agugamento.\nIV. Para a suavização de uma imagem digital, são utilizados apenas filtros no domínio espacial e para o agugamento de uma imagem digital, são utilizados apenas filtros do domínio das frequências.",
    "alternativas": [
      "A) Apenas I e II.",
      "B) Apenas I e III.",
      "C) Apenas II e III.",
      "D) Apenas II e IV.",
      "E) I, II, III e IV."
    ],
    "gabarito": "B",
    "solucao": "A questão trata sobre a aplicação de filtros em imagens digitais. A assertiva I está correta, pois a aplicação de um filtro espacial de média em uma imagem digital resulta na sua suavização. A assertiva II está incorreta, pois a aplicação de um filtro de frequência do tipo passa-baixa em uma imagem digital resulta na sua suavização e não no seu agugamento. A assertiva III está correta, pois a aplicação de um filtro espacial utilizando o operador laplaciano em uma imagem digital resulta no seu agugamento. A assertiva IV está incorreta, pois tanto filtros no domínio espacial quanto no domínio das frequências podem ser utilizados para suavização e agugamento de uma imagem digital. Portanto, a alternativa correta é a B) Apenas I e III.",
    "area": "Processamento de Imagens",
    "subarea": "Filtragem e Restauração",
    "dificuldade": "Média"
  },
  {
    "id": "2024-65",
    "edicao": "2024",
    "numero": 65,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Um roteador recebe um pacote com IP de origem 13.1.2.3 e IP de destino 11.1.2.5. Em qual rota ele encaminhará o pacote?",
    "alternativas": [
      "A) 13.0.0.0/8",
      "B) 13.1.0.0/16",
      "C) 11.1.0.0/16",
      "D) 13.1.2.0/24",
      "E) 11.1.2.0/24"
    ],
    "gabarito": "E",
    "solucao": "O roteador encaminha o pacote para o IP de destino. Portanto, o pacote será encaminhado para a rota que corresponde ao IP de destino 11.1.2.5. A única alternativa que corresponde a essa rota é a alternativa E) 11.1.2.0/24. As outras alternativas correspondem ao IP de origem, que não é relevante para determinar a rota do pacote.",
    "area": "Redes de Computadores",
    "subarea": "Interconexão de Redes",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-66",
    "edicao": "2024",
    "numero": 66,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Assinale a alternativa correta.",
    "alternativas": [
      "A) O protocolo IP é baseado em datagramas e orientado à conexão.",
      "B) O protocolo IP funciona segundo melhor esforço possível garantindo a entrega de mensagens.",
      "C) O protocolo IP é conhecido como a cola da Internet porque ele permite que outros protocolos sejam usados no seu lugar.",
      "D) Várias cópias de um pacote IP podem ser entregues.",
      "E) O datagrama IP identifica o destinatário através dos campos porta de destino e número IP de destino."
    ],
    "gabarito": "D",
    "solucao": "O protocolo IP é um protocolo de comunicação usado para encaminhar pacotes de dados na Internet. É um protocolo sem conexão, o que significa que os pacotes são enviados independentemente uns dos outros e podem chegar fora de ordem ou serem perdidos durante a transmissão. Portanto, várias cópias de um pacote IP podem ser entregues, o que torna a alternativa D correta.",
    "area": "Redes de Computadores",
    "subarea": "Protocolos e Serviços de Comunicação",
    "dificuldade": "Média"
  },
  {
    "id": "2024-67",
    "edicao": "2024",
    "numero": 67,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Qual protocolo da camada de transporte o DNS (Domain Name Service) utiliza para consultas regulares?",
    "alternativas": [
      "A) TCP",
      "B) TCP/IP",
      "C) HTTP",
      "D) CoAP",
      "E) UDP"
    ],
    "gabarito": "E",
    "solucao": "O DNS (Domain Name Service) utiliza o protocolo UDP (User Datagram Protocol) para consultas regulares. Isso ocorre porque o UDP é um protocolo de transporte que não requer uma conexão estabelecida, o que torna as consultas DNS mais rápidas e eficientes. No entanto, para transferências de zona ou quando a resposta é maior que 512 bytes, o DNS usa TCP.",
    "area": "Redes de Computadores",
    "subarea": "Protocolos e Serviços de Comunicação",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-68",
    "edicao": "2024",
    "numero": 68,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Os programas dos clientes não devem conhecer a distribuição de arquivos. Um único conjunto de operações é fornecido para acesso a arquivos locais e remotos. Os programas escritos para operar sobre arquivos locais são capazes de acessar arquivos remotos sem modificação. Qual é o requisito de transparência descrito para os serviços de arquivos em sistemas distribuídos?",
    "alternativas": [
      "A) Localização.",
      "B) Acesso.",
      "C) Mobilidade.",
      "D) Desempenho.",
      "E) Mudança de escala."
    ],
    "gabarito": "B",
    "solucao": "A questão refere-se a um conceito de transparência em sistemas distribuídos, onde os programas dos clientes não precisam saber a localização dos arquivos, podendo acessá-los local ou remotamente sem necessidade de modificação. Esse conceito é conhecido como transparência de acesso, que permite que os arquivos sejam acessados de maneira uniforme e independente de sua localização ou implementação.",
    "area": "Sistemas Distribuídos",
    "subarea": "Sistemas Operacionais Distribuídos: Sistemas de Arquivos, Servidores de Nomes, Memória Compartilhada, Segurança",
    "dificuldade": "Média"
  },
  {
    "id": "2024-69",
    "edicao": "2024",
    "numero": 69,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "Uma falha _____ ocorre quando um servidor para abruptamente, mas estava funcionando corretamente até parar. Um aspecto importante é que, uma vez que o servidor pare, nada mais se ouve dele. Um exemplo típico é um sistema operacional que para de repente e para o qual só há uma única solução: reinicializá-lo.",
    "alternativas": [
      "A) por omissão",
      "B) de temporização",
      "C) de resposta",
      "D) arbitrária",
      "E) por queda"
    ],
    "gabarito": "E",
    "solucao": "A questão descreve uma situação em que um servidor para de funcionar abruptamente e não retorna mais, necessitando ser reiniciado. Isso é conhecido como uma falha por queda. Portanto, a resposta correta é a alternativa E) por queda.",
    "area": "Sistemas Distribuídos",
    "subarea": "Tolerância a Falhas",
    "dificuldade": "Fácil"
  },
  {
    "id": "2024-70",
    "edicao": "2024",
    "numero": 70,
    "area_conhecimento": "Tecnologia de Computação",
    "enunciado": "O algoritmo de exclusão mútua _____ requer apenas três mensagens para entrar e sair de uma região crítica: uma requisição, uma permissão para entrar e uma liberação para sair.\n\nAssinale a alternativa que preenche corretamente a lacuna do trecho acima.",
    "alternativas": [
      "A) centralizado",
      "B) descentralizado",
      "C) distribuído",
      "D) token-ring",
      "E) relógios vetoriais"
    ],
    "gabarito": "A",
    "solucao": "O algoritmo de exclusão mútua centralizado é um método que utiliza um único processo (ou nó) para controlar o acesso à região crítica. Neste método, um processo precisa enviar uma mensagem de requisição ao processo central para entrar na região crítica. O processo central, por sua vez, envia uma mensagem de permissão para o processo solicitante, permitindo que ele entre na região crítica. Quando o processo termina sua execução na região crítica, ele envia uma mensagem de liberação para o processo central, indicando que a região crítica está agora disponível para outros processos. Portanto, o algoritmo de exclusão mútua centralizado requer apenas três mensagens para entrar e sair de uma região crítica: uma requisição, uma permissão para entrar e uma liberação para sair.",
    "area": "Sistemas Distribuídos",
    "subarea": "Problemas Básicos em Computação Distribuída: Coordenação e Sincronização de Processos, Exclusão Mútua, Difusão de Mensagens",
    "dificuldade": "Média"
  }
];

console.log(problems.map(problem => problem.solucao).slice(0, 21))