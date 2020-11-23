# Japanese latest(?) slang dictionary/現代語(?)辞典

このリポジトリは Code Chrysalis の生徒であるときに作成しました（This was created during my time as a student at Code Chrysalis）

若者と話したいけど俗語が多くて気後れしているあなた！or you! hard to understand what teen Japanese are saying? Try this api!この API があれば若者の最新の俗語とその意味を表示してくれるのでとっても便利！さらにあなたが追加したい単語や意味も追加することができます！
This API can show/add/modify/delete the latest slangs!

この API でできることとエンドポイント

1.現在の辞典全ての情報が見たい時

```
GET /terms
```

2.新たに辞典に単語を追加したい時

```
POST /terms
```

3.単語の情報を修正したい時(単語にある id で指定)

```
PATCH /terms/:id
```

4.単語を削除したい時(単語にある id で指定)

```
DELETE /terms/:id
```
