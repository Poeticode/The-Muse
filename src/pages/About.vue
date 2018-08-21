<template>
  <page v-bind:content="this.content">
    <p class="lh-copy measure mt4 mt0-ns">
      The Muse is both a community and a weekly workshop. We'll engage in short creative activities to promote lateral thinking and hold discussions on a wide range of topics with people you'd likely otherwise never meet.
    </p>
    <p class="lh-copy measure">
      As its name implies, the ultimate goal is to serve as a source of inspiration. Some artists feel that they can only create as they're suffering, or when they escape out into the wilderness, or while under the influence of various substances, or all of the above.
    </p>
    <p class="1h-copy measure">
      The Muse is proof that none of those things are necessary.
    </p>
  </page>
</template>
<script>
export default {
  data() {
    return {
      content: {
        blurb: '"What\'s this all about?"',
        author: "— Silas Tippens"
      }
    }
  }
}
</script>