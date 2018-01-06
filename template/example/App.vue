<template>
  <div id="app">
    <<%= componentName %> />
  </div>
</template>

<script>
import <%= pascalCasedComponentName %> from '../src'

export default {
  components: {
    <%= pascalCasedComponentName %>
  }
}
</script>
