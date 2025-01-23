export interface Problem {
  id: string;
  statement: string;
  options: string[];
  answer: number;
}

export const problems: Problem[] = [
  {
    id: "1",
    statement: 'Qual é o principal objetivo do padrão GRASP "Expert"?',
    options: ["Atribuir responsabilidades de criação de objetos", "Atribuir responsabilidades de controle de fluxo", "Atribuir responsabilidades de validação de objetos", "Atribuir responsabilidades de atualização de objetos", "Atribuir responsabilidades de conhecimento"],
    answer: 4,
  },
  {
    id: "2",
    statement: 'Qual é o conceito fundamental abordado pelo algoritmo de Kruskal?',
    options: [
      "Ordenação de vértices em um grafo", "Encontrar a Árvore de Extensão Mínima em um grafo ponderado", "Identificar ciclos em um grafo", "Realizar a busca em largura em um grafo", "Calcular a distância entre dois vértices em um grafo"
    ],
    answer: 1,
  },
  {
    id: "3",
    statement: "Qual é a abordagem principal do algoritmo de Kruskal para encontrar a Árvore de Extensão Mínima?",
    options: [
      "Abordagem Aleatória", "Abordagem de Força Bruta", "Abordagem Gulosa", "Abordagem de Divisão e Conquista", "Abordagem Heurística"
    ],
    answer: 2,
  },
  {
    id: "4",
    statement: "Como o algoritmo de Kruskal decide qual aresta adicionar à Árvore de Extensão Mínima?",
    options: [
      "Escolhendo a aresta mais longa",
      "Escolhendo a aresta mais curta",
      "Verificando se a aresta forma um ciclo",
      "Adicionando arestas aleatórias",
      "Ignorando todas as arestas"
    ],
    answer: 2
  },
  {
    id: "5",
    statement: "Qual estrutura de dados é comumente utilizada no algoritmo de Kruskal para detectar ciclos em um grafo?",
    options: [
      "Pilha",
      "Fila",
      "Lista Encadeada",
      "Árvore Binária",
      "Union-Find"
    ],
    answer: 4
  },
  {
    id: "6",
    statement: "Qual é a definição de Padrões de Projeto de Software?",
    options: [
      "São modelos de design exclusivos para cada projeto.",
      "São soluções reutilizáveis para problemas comuns no desenvolvimento de software.",
      "São algoritmos complexos para otimizar o código.",
      "São métodos de programação específicos para linguagens de baixo nível.",
      "São técnicas de depuração de software."
    ],
    answer: 1
  },
  {
    id: "7",
    statement: "Qual é o objetivo da análise assintótica na avaliação de algoritmos?",
    options: ["Considerar apenas entradas pequenas",
      "Ignorar constantes e expoentes de menor magnitude", "Comparar funções de tempo de execução de forma complexa", "Determinar a ordem exata de crescimento das funções",
      "Reduzir a eficiência dos algoritmos"],
    answer: 1,
  },
  {
    id: "8",
    statement: "Qual é a principal finalidade da análise assintótica na determinação da classe de complexidade de uma função?",
    options: ["Aumentar a eficiência do algoritmo", "Reduzir a ordem de crescimento da função", "Comparar constantes das funções", "Determinar a classe de complexidade de acordo com o tamanho da entrada",
      "Ignorar as funções de referência"],
    answer: 3
  },
  {
    id: "9",
    statement: "Como são representados os digrafos em um diagrama?",
    options: ["Apenas com vértices.", "Apenas com arestas.", "Com pontos representando vértices e linhas ligando os vértices, sem setas.", "Com pontos representando vértices e linhas ligando os vértices, com setas indicando a direção.", "Com setas representando vértices e pontos indicando a direção."
    ],
    answer: 3
  },
  {
    id: "10",
    statement: "Por que a análise assintótica é utilizada na comparação entre funções?",
    options: ["Para aumentar a complexidade das funções", "Para considerar apenas constantes", "Para simplificar a comparação entre funções", "Para diminuir a ordem de crescimento das funções", "Para tornar as funções menos eficientes"],
    answer: 2
  }
];

