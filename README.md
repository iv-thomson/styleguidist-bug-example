# styleguidist-bug
Small repo that demonstrates that overwriting PropsRenderer in `styleguideComponents` does not work.
There are two rsg components being overwritten. First is LinkRenderer, which works fine, second is PropsRenderer which does not work.
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn styleguide
```
