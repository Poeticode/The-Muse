<template>
  <div class="main-nav">
    <nav class="pa3 pa4-ns">
      <a ref="title" class="link title b f1 f-headline-ns tc db mb3 mb4-ns" href="/" title="Home">The Muse</a>
      <div class="tc pb3">
        <a class="link dim links f6 f5-ns dib mr3" href="/about" title="About">About</a>
        <a class="link dim links f6 f5-ns dib mr3" href="/newsletter" title="Newsletter">Newsletter</a>
        <a class="link dim links f6 f5-ns dib mr3" href="/contact" title="Contact">Contact</a>
        <a class="link dim links f6 f5-ns dib" href="https://www.meetup.com/The-Muse/" title="Meetup">Meetup</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      site: 'The Muse',
      title: null,
      r: {
        value: Math.random() * 255,
        reverse: false
      },
      g: {
        value: Math.random() * 255,
        reverse: false
      },
      b: {
        value: Math.random() * 255,
        reverse: false
      },
    }
  },
  mounted() {
    this.title = this.$refs.title;
    this.init();
  },
  methods: {
    init: function() {
      this.Update();
    },
    Update: function() {
      window.requestAnimationFrame(this.Update);

      if (this.r.reverse) {
        if (this.r.value - 1 < 0) {
          this.r.reverse = false;
        }
      } else {
        if (this.r.value + 1 > 255) {
          this.r.reverse = true;
        }
      }

      if (this.g.reverse) {
        if (this.g.value - 1 < 0) {
          this.g.reverse = false;
        }
      } else {
        if (this.g.value + 1 > 255) {
          this.g.reverse = true;
        }
      }

      if (this.b.reverse) {
        if (this.b.value - 1 < 0) {
          this.b.reverse = false;
        }
      } else {
        if (this.b.value + 1 > 255) {
          this.b.reverse = true;
        }
      }

      this.r.value = this.r.reverse ? this.r.value - 1 : this.r.value + 1;
      this.g.value = this.g.reverse ? this.g.value - 1 : this.g.value + 1;
      this.b.value = this.b.reverse ? this.b.value - 1 : this.b.value + 1;

      this.title.style.color = 'rgb(' + this.r.value + ", " + this.g.value + ", " + this.b.value + ")";
    }
  }
}
</script>
<style module>
.db {
    display: block;
}

.dib {
    display: inline-block;
}

.b {
    font-weight: bold;
}

.link {
    text-decoration: none;
}

.links {
  transition: color .15s ease-in;
}

.links:link, .links:visited {
    transition: color .15s ease-in;
}

.links:hover {
    transition: color .15s ease-in;
}

.links:active {
    transition: color .15s ease-in;
}
.links:focus {
    transition: color .15s ease-in;
    outline: 1px dotted currentColor;
}

.title {
    color: rgb(111, 0, 255);
}

.links {
    color: #777;
}

.pa3 {
    padding: 1rem;
}

.pb3 {
    padding-bottom: 1rem;
}

.mr3 {
    margin-right: 1rem;
}

.mb3 {
    margin-bottom: 1rem;
}

.tc {
    text-align: center;
}

.f1 {
    font-size: 3rem;
}

.f6 {
    font-size: .875rem;
}

.links.dim {
    opacity: 1;
    transition: opacity .15s ease-in;
}

.links.dim:hover, .links.dim:focus {
    opacity: .5;
    transition: opacity .15s ease-in;
}

.links.dim:active {
    opacity: .8;
    transition: opacity .15s ease-out;
}

@media screen and (min-width: 30em) {
    .pa4-ns {
        padding: 2rem;
    }

    .mb4-ns {
        margin-bottom: 2rem;
    }

    .f-headline-ns {
        font-size: 6rem;
    }

    .f5-ns {
        font-size: 1rem;
    }
}
</style>