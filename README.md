`App.js` lists image `require(...)`s in separate blocks that can be commented in
or out. Packager decides based on whether they are in bundle (after deletion of
comments) so testing this way.

Under `universe/apps/`,

In one terminal:
```
bootstrap .
export EXPO_STAGING=1
expu r --localhost
```

In another terminal,
```
expu build:ios -t simulator
expu build:status
```

When done, copy `.tar.gz` URL, extract, install `.app` in Simulator (by dragging and dropping), try launching when offline.

Expected: Launches, shows images.

Actual: Stuck on splash screen. Even stuck on splash screen if not offline.
