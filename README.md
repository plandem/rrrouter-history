#Purpose
Session manager for history.

#Installation
```
npm install --save rrrouter-history
```

#How to create own?
Just create class that has following methods:

| Method      | Description    |
|-------------|----------------|
| subscribe(callback) | Add a listener for changes, where **callback** is callback that will be called in case of _inside_ changes. E.g.: go(-1) |
| unsubscribe | Remove a listener |
| update(href, navigate) | Update a history, where **href** is a new href and **navigate** is a flag about type of update: **TRUE** - navigate to a new location, **FALSE** - replace current location |
| go(page) | Move forward/backward in browser history, where **page** is number of pages to move. |
