Images found at: https://snippets.khromov.se/stock-photo-archive-zip-77-images/

`App.js` lists image `require(...)`s in separate blocks that can be commented in
or out. Packager decides based on whether they are in bundle (after deletion of
comments) so testing this way.

# With `exp`

Clone anywhere,

In one terminal,
```
exp r --localhost
```

In another terminal,
```
exp build:ios -t simulator
exp build:status
```

When done, copy `.tar.gz` URL, `wget` it, extract, install `.app` in Simulator (by dragging and dropping), try launching when offline.

# With `expu`

Clone under `universe/apps/`,

In one terminal,
```
bootstrap .
export EXPO_STAGING=1
expu r --localhost
```

In another terminal,
```
export EXPO_STAGING=1
expu build:ios -t simulator
expu build:status
```

When done, copy `.tar.gz` URL, `wget` it, extract, install `.app` in Simulator (by dragging and dropping), try launching when offline.

Expected: Launches, shows images.

Actual: Stuck on splash screen. Even stuck on splash screen if not offline.
