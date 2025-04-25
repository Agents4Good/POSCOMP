import json

def sort_json_by_id(path):
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    #data = sorted(data, key=lambda x: x['id'] if 'id' in x else '') crescente 
    data = sorted(data, key=lambda x: x['id'] if 'id' in x else '', reverse=True) #decrescente
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)


# paths = ['big-fixes.json', 'final.json', 'ok.json', 'pending.json', 'poscomp-questions-first-version.json', 'skip.json', 'small-fixes.json']
paths = ['pending.json']

for p in paths:
    sort_json_by_id(p)