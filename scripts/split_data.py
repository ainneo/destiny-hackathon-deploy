from json import load, dump
from sys import argv

assert len(argv) == 4, 'Provide arguments input file, output directory, object size'

in_file = argv[1].strip()
out_dir = argv[2].strip()
size = None
try:
    size = int(argv[3])
except:
    assert size != None, 'Provide object size as integer'
print(in_file, out_dir, size)

i = 1
map_ = dict()
data = load(open(in_file))
export_data = list()
for item in data:
    print('.', end=' ')
    export_data.append(item)
    map_[item['animal']['id']] = str(i)
    if len(export_data) >= size:
        print('\nexporting', i)
        with open(f'{out_dir}/data_{str(i)}.json', 'w') as outfile:
            dump(export_data, outfile, sort_keys=True, indent=4)
        i += 1
        export_data = list()
if len(export_data) > 0:
    print('\nexporting', i)
    with open(f'{out_dir}/data_{str(i)}.json', 'w') as outfile:
            dump(export_data, outfile, sort_keys=True, indent=4)
master = {
    'count': i,
    'map': map_
}
with open(f'{out_dir}/master.json', 'w') as outfile:
    dump(master, outfile, sort_keys=True, indent=4)