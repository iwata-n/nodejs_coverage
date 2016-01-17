# node.jsでテストのカバレッジを取る
node.js+expressで作ったコードをテストした際にカバレッジを取るための設定

# tool
package.jsonに一通り書いてあるが、guplとistanbulとmochaを使う。

```
  "devDependencies": {
    "gulp": "^3.9.0",
    "gulp-istanbul": "^0.10.3",
    "gulp-mocha": "^2.2.0",
    "should": "^8.1.1",
    "supertest": "^1.1.0"
  }
```

# gulpfile.js
ほぼ、 `gulp-istanbul` のサンプルのままだが、pre-test時にroutesを指定している。
ちゃんとlibとかで分けて実装してるのであればそちらのディレクトリも指定する。
このプロジェクト内ではexpress-generatorを使って吐き出したコードをほぼそのまま使っている。

# 実行
`gulp test` で実行される。

```
$ gulp test
[16:53:47] Using gulpfile ~/hoge/gulpfile.js
[16:53:47] Starting 'pre-test'...
[16:53:47] Finished 'pre-test' after 50 ms
[16:53:47] Starting 'test'...


  GET /users
GET /users 200 7.133 ms - 8
    ✓ no param (40ms)


  1 passing (45ms)

-----------|----------|----------|----------|----------|----------------|
File       |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------|----------|----------|----------|----------|----------------|
 routes/   |    76.92 |       50 |       50 |    76.92 |                |
  index.js |       80 |      100 |        0 |       80 |              6 |
  users.js |       75 |       50 |      100 |       75 |            7,8 |
-----------|----------|----------|----------|----------|----------------|
All files  |    76.92 |       50 |       50 |    76.92 |                |
-----------|----------|----------|----------|----------|----------------|


=============================== Coverage summary ===============================
Statements   : 76.92% ( 10/13 )
Branches     : 50% ( 1/2 )
Functions    : 50% ( 1/2 )
Lines        : 76.92% ( 10/13 )
================================================================================
[16:53:47] 'test' errored after 336 ms
[16:53:47] Error in plugin 'gulp-istanbul'
```