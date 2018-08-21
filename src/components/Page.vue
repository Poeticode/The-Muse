<template>
  <article class="cf ph3 ph5-ns pv3 pv5-ns about fn-ns fl-s">
    <page-header v-bind:blurb="content.blurb" v-bind:author="content.author" />
    <div class="fn fl-ns w-50-ns">
      <slot></slot>
    </div>
  </article>
</template>
<script>
export default {
  props: ['content'],
}
</script>

<style lang="scss" scoped>
.cf:before, .cf:after {
    content: " ";
    display: table;
}

.cf:after {
    clear: both;
}

.cf {
    *zoom: 1;
}

.fn {
    float: none;
}
.fl {
    float: left;
}

.tracked {
    letter-spacing: .1em;
}

.lh-title {
    line-height: 1.25;
}

.lh-copy {
    line-height: 1.5;
}

.gray {
    color: #777;
}

.pv5-ns {
    padding-top: 4rem;
    padding-bottom: 4rem;
}

.pv3 {
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.ph3 {
    padding-left: 1rem;
    padding-right: 1rem;
}

.mb3 {
    margin-bottom: 1rem;
}

.mt0 {
    margin-top: 0;
}

.mt4 {
    margin-top: 2rem;
}

.ttu {
    text-transform: uppercase;
}

.f6 {
    font-size: .875rem;
}

.measure {
    max-width: 30em;
}

@media screen and (max-width: 30em) {
    .fl-s {
        float: left;
        _display: inline;
    }
}

@media screen and (min-width: 30em) {
    .fl-ns {
        float: left;
        _display: inline;
    }

    .fn-ns {
        float: none;
    }

    .w-50-ns {
        width: 50%;
    }

    .pr4-ns {
        padding-right: 2rem;
    }

    .ph5-ns {
        padding-left: 4rem;
        padding-right: 4rem;
    }

    .mt0-ns {
        margin-top: 0;
    }
}
</style>