# lighthouse-plugin-yt
Lighthouse plugin to audit YouTube embeds.

## Run!

```shell
$ lighthouse https://google.com/ --plugins=lighthouse-plugin-yt --only-categories=lighthouse-plugin-yt --view
```

1. Clone this repo.
1. `yarn`
1. `yarn lighthouse https://paulirish.github.io/lite-youtube-embed/ --plugins=. --only-categories=lighthouse-plugin-yt --view`

note, the above relieas on a lighthouse PR not yet merged. if using regular lighthouse, do this:

1. Clone this repo.
1. `yarn`
1. `$ yarn link && yarn link lighthouse-plugin-yt` Link this package
1. `yarn lighthouse https://paulirish.github.io/lite-youtube-embed/ --plugins=lighthouse-plugin-yt --only-categories=lighthouse-plugin-yt --view`
