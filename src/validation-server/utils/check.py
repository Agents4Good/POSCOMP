import json
from collections import Counter, defaultdict
from typing import List, Dict, Set

def carregar_dados(caminho: str, origem: str) -> List[Dict]:
    with open(caminho, 'r', encoding='utf-8') as f:
        dados = json.load(f)
        for item in dados:
            item['origem'] = origem
        return dados

def agrupar_por_edicao(dados: List[Dict]) -> Dict[int, List[Dict]]:
    agrupados = defaultdict(list)
    for item in dados:
        edicao = item.get('edicao')
        if edicao:
            agrupados[edicao].append(item)
    return agrupados

def analisar_ano(ano: int, questoes: List[Dict], final_data: List[Dict], skip_data: List[Dict]) -> None:
    print(f"\n=== {ano} ===")

    id_checagem = {f"{ano}-{i:02}" for i in range(1, 71)}
    ids_todos = [item['id'] for item in questoes if 'id' in item]

    final_ids = [item['id'] for item in final_data if item.get('edicao') == ano]
    skip_ids = [item['id'] for item in skip_data if item.get('edicao') == ano]

    ids_faltando = sorted(id_checagem - set(ids_todos), key=lambda x: int(x.split('-')[1]))
    contador_ids = Counter(ids_todos)
    duplicados = [id_ for id_, count in contador_ids.items() if count > 1]

    origem_duplicados = defaultdict(set)
    for item in questoes:
        id_ = item.get('id')
        if id_ in duplicados:
            origem_duplicados[id_].add(item['origem'])

    print(f"Total de questões do ano: {len(questoes)}")
    print(f" - Em final.json: {len(final_ids)}")
    print(f" - Em skip.json: {len(skip_ids)}")

    if ids_faltando:
        print(f"IDs faltando ({len(ids_faltando)}): {', '.join(ids_faltando)}")
    else:
        print("Nenhum ID faltando.")

    if duplicados:
        print(f"IDs duplicados ({len(duplicados)}):")
        for id_ in sorted(duplicados, key=lambda x: int(x.split('-')[1])):
            origens = ', '.join(sorted(origem_duplicados[id_]))
            print(f" - {id_} (origem: {origens})")
    else:
        print("Nenhum ID duplicado.")

def main():
    final_data = carregar_dados('final.json', 'final')
    skip_data = carregar_dados('skip.json', 'skip')
    todos_dados = final_data + skip_data

    print("\n=== RESUMO GERAL ===")
    print(f"Total de questões validadas: {len(final_data)}")
    print(f"Total de questões skipadas (Tabelas e Imagens): {len(skip_data)}")
    print(f"Total de questões: {len(todos_dados)}")

    dados_por_ano = agrupar_por_edicao(todos_dados)
    for ano in range(2013, 2018):
        questoes_ano = dados_por_ano.get(ano, [])
        analisar_ano(ano, questoes_ano, final_data, skip_data)

if __name__ == "__main__":
    main()
