<template>
  <page v-bind:content="this.content">
    <p class="lh-copy measure mt4 mt0-ns">
      For general inquiries, you can send us <a href="mailto:admin@chattymuse.com">an email</a>. You should receive a response within 24 hours.
    </p>
  </page>
</template>

<script>
export default {
  data() {
    return {
      content: {
        blurb: '"Who you gonna call?"',
        author: "— Ray Parker Jr."
      }
    }
  }
}
</script>