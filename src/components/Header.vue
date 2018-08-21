<template>
  <header class="fn fl-ns w-50-ns pr4-ns">
    <h1 class="mb3 mt0 lh-title"> {{ blurb }}</h1>
    <time class="f6 ttu tracked gray">{{ author }}</time>
  </header>
</template>

<script>
export default {
  props: ['blurb', 'author']
}
</script>
