
# create-vue-component

[![NPM version](https://img.shields.io/npm/v/create-vue-component.svg?style=flat)](https://npmjs.com/package/create-vue-component) [![NPM downloads](https://img.shields.io/npm/dm/create-vue-component.svg?style=flat)](https://npmjs.com/package/create-vue-component) [![CircleCI](https://circleci.com/gh/vue-land/create-vue-component/tree/master.svg?style=shield)](https://circleci.com/gh/vue-land/create-vue-component/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate) [![chat](https://img.shields.io/badge/chat-on%20discord-7289DA.svg?style=flat)](https://chat.egoist.moe)

## Install

```bash
yarn global add create-vue-component
```

## Usage

```js
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
- `yarn example:build`: Build the demo for your component
- `yarn build`: Build your component
- `yarn test`: Test your component

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
