<template>
  <page v-bind:content="this.content">
      <p class="lh-copy measure mt4 mt0-ns">
After we have our first few sessions, The Muse will begin to send out a monthly newsletter featuring the work of our members. Submissions can include, but is not limited to, digital art, poetry, and short stories.
      </p>
      <p class="lh-copy measure">
If you're interested in submitting your work, you can either send it via <a href="mailto:admin@chattymuse.com">email</a>, or talk to a leader after a Monday Muse session.
      </p>
  </page>
</template>

<script>
export default {
  data() {
    return {
      content: {
        blurb: '"Breaking News!"',
        author: "— Society"
      }
    }
  }
}
</script>