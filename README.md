
# create-vue-component

[![NPM version](https://img.shields.io/npm/v/cvc.svg?style=flat)](https://npmjs.com/package/cvc) [![NPM downloads](https://img.shields.io/npm/dm/cvc.svg?style=flat)](https://npmjs.com/package/cvc) [![CircleCI](https://circleci.com/gh/vue-land/create-vue-component/tree/master.svg?style=shield)](https://circleci.com/gh/vue-land/create-vue-component/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Install

```bash
yarn global add cvc
```

Another package `create-vue-component` on npm does not belong to us.

## Usage

```bash
create-vue-component vue-xxx
# or type less
cvc vue-xxx

# you can also create component in place
mkdir vue-xxx && cd vue-xxx
cvc
```

You won't believe how clean the folder struture of generated project is (no config files!):

<img src="https://i.loli.net/2017/10/13/59e086bd9f6a8.png" width="500" alt="preview">

## Documentation

### folder structure

- `src/index.js`: Your fancy component
- `example/index.js`: Entry file of your demo

### npm scripts

- `yarn example`: Run the demo for your component (with [Poi](https://poi.js.org))
- `yarn example:build`: Build the demo for your component (with [Poi](https://poi.js.org))
- `yarn build`: Build your component (with [Bili](https://github.com/egoist/bili))
- `yarn test`: Lint and test your component (with [Tyu](https://github.com/egoist/tyu))
- `yarn lint`: Lint only.

### badges

The generated `README.md` in your project contains the badges of `npm version`, `npm downloads` and `circleci status`.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**create-vue-component** © [EGOIST](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by EGOIST with help from contributors ([list](https://github.com/vue-land/create-vue-component/contributors)).

> [github.com/egoist](https://github.com/egoist) · GitHub [@EGOIST](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
