
<h1 align="center">EtherPush: Push Your Token On Ethereum</h1>

<p align="center">
  <img src="https://cdn.rawgit.com/etherpush/logo/master/logo-large.png" width="300"/>
  <br />
  <a href="https://img.shields.io/badge/branch-master-brightgreen.svg?style=flat-square">
    <img src="https://img.shields.io/badge/branch-master-brightgreen.svg?style=flat-square" />
  </a>
  <a href="https://img.shields.io/badge/license-MIT-blue.svg">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
  </a>
</p>

---

> [etherpush.io](https://etherpush.io) &nbsp;&middot;&nbsp;
> GitHub [@etherpush](https://github.com/etherpush) &nbsp;&middot;&nbsp;
> Twitter [@etherpush](https://twitter.com/etherpush)

---

# sol-loader

The webpack loader (sol-loader) is simply used at [etherpush.io](https://etherpush.io) to load ethereum solidity contract.

# install

```
npm install --save-dev sol-loader
```

# config

The webpack config is as the following:

```js
{
    loaders: [
    {
        test: /\.sol$/,
        loaders: ["sol-loader"]
    },
  ]
}
```
