# <%= name %>

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
