# PSYCHOLOG

Toki's components library.

docs(pages): https://psycholog-studio.github.io/psycholog/

## How to install ui packages

### npm

`.npmrc`

```
//npm.pkg.github.com/:_authToken="<authToken>"
@tokileecy:registry=https://npm.pkg.github.com
```

### yarn berry

`~/.yarnrc.yml`
```
npmRegistries:
  "https://npm.pkg.github.com":
    npmAuthToken: <authToken>

npmScopes:
  tokileecy:
    npmRegistryServer: "https://npm.pkg.github.com"
    npmAuthToken: <authToken>
```

`yarn add @tokeleecy/psycholog-ui`