# <%= name %>

[![NPM version](https://img.shields.io/npm/v/<%= name %>.svg?style=flat)](https://npmjs.com/package/<%= name %>) [![NPM downloads](https://img.shields.io/npm/dm/<%= name %>.svg?style=flat)](https://npmjs.com/package/<%= name %>) [![CircleCI](https://circleci.com/gh/<%= gitUser %>/<%= name %>/tree/master.svg?style=shield)](https://circleci.com/gh/<%= gitUser %>/<%= name %>/tree/master)

<%- description %>

## Install

```bash
yarn add <%= name %>
```

CDN: [UNPKG](https://unpkg.com/<%= name %>/) | [jsDelivr](https://cdn.jsdelivr.net/npm/<%= name %>/) (available as `window.<%= pascalCasedComponentName %>`)

## Usage

```vue
<template>
  <<%= componentName %>></<%= componentName %>>
</template>

<script>
import <%= pascalCasedComponentName %> from '<%= name %>'

export default {
  components: {
    <%= pascalCasedComponentName %>
  }
}
</script>
```

## License

MIT &copy; [<%= author %>](<%= website %>)
