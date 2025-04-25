import json

# Campos que queremos preencher
CAMPOS_PARA_PREENCHER = ["area", "subarea", "dificuldade", "gabarito", "solucao"]

# Abrir os arquivos JSON
with open("pending.json", "r", encoding="utf-8") as f:
    final_data = json.load(f)

with open("poscomp-questions-first-version.json", "r", encoding="utf-8") as f:
    referencia_data = json.load(f)

# Criar um dicionário de referência por enunciado
referencia_dict = {q["id"]: q for q in referencia_data}

# Preencher os campos em branco
for questao in final_data:
    id = questao.get("id")
    if id in referencia_dict:
        ref_questao = referencia_dict[id]
        for campo in CAMPOS_PARA_PREENCHER:
            if questao.get(campo, "") == "":
                questao[campo] = ref_questao.get(campo, "")

# Salvar o resultado no mesmo ou em outro arquivo
with open("pending_preenchido.json", "w", encoding="utf-8") as f:
    json.dump(final_data, f, ensure_ascii=False, indent=2)

print("Campos preenchidos com sucesso.")