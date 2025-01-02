$ are commands you executed
cd means change directory
cd x moves in one level
cd .. moves out one level
cd / switches the current directory to the outermost directory, /.
ls means list. prints out all of the files and directories in current directory:
123 abc means that the current dir contains a file named abc with size 123.
dir xyz means that the current dir contains a dir named xyz.

$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k

- / (dir)
  - a (dir)
    - e (dir)
      - i (file, size=584)
    - f (file, size=29116)
    - g (file, size=2557)
    - h.lst (file, size=62596)
  - b.txt (file, size=14848514)
  - c.dat (file, size=8504156)
  - d (dir)
    - j (file, size=4060174)
    - d.log (file, size=8033020)
    - d.ext (file, size=5626152)
    - k (file, size=7214296)

const data = [
{
name: "Parent",
totalSize: 0,
size: 10,
children: [
{
name: "Child 1",
totalSize: 0,
size: 5,
children: [
{
name: "Grandchild 1",
totalSize: 0,
size: 2,
children: []
}
]
},
{
name: "Child 2",
totalSize: 0,
size: 3,
children: []
}
]
}
];