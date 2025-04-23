import json
from collections import Counter, defaultdict

def carregar_dados(caminho, origem):
    with open(caminho, 'r', encoding='utf-8') as f:
        dados = json.load(f)
        for item in dados:
            item['origem'] = origem
        return dados

final_data = carregar_dados('final.json', 'final')
skip_data = carregar_dados('skip.json', 'skip')
dados = final_data + skip_data

dados_por_ano = defaultdict(list)
for item in dados:
    edicao = item.get('edicao')
    if edicao:
        dados_por_ano[edicao].append(item)

# Processa os anos
for ano in range(2013, 2018):
    print(f"\n=== {ano} ===")

    id_checagem = {f"{ano}-{i:02}" for i in range(1, 71)}
    questoes_ano = dados_por_ano.get(ano, [])
    ids = [item['id'] for item in questoes_ano if 'id' in item]

    final_ids = [item['id'] for item in final_data if item.get('edicao') == ano]
    skip_ids = [item['id'] for item in skip_data if item.get('edicao') == ano]

    ids_faltando = sorted(id_checagem - set(ids), key=lambda x: int(x.split('-')[1]))

    contador_ids = Counter(ids)
    duplicados = [id_ for id_, count in contador_ids.items() if count > 1]

    origem_duplicados = defaultdict(set)
    for item in questoes_ano:
        id_ = item.get('id')
        if id_ in duplicados:
            origem_duplicados[id_].add(item['origem'])

    print(f"Total de questões do ano: {len(questoes_ano)}")
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
