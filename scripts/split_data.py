from sys import argv

assert len(argv) == 3, 'Provide arguments input file and output directory'

in_file = argv[1].strip()
out_dir = argv[2].strip()
