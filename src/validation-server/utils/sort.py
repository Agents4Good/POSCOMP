import json

def sort_json_by_id(path):
    with open(path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    data = sorted(data, key=lambda x: x['id'] if 'id' in x else '')
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

sort_json_by_id('final.json')
sort_json_by_id('skip.json')