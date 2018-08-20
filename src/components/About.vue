<template>
  <article class="cf ph3 ph5-ns pv5">
    <header class="fn fl-ns w-50-ns pr4-ns">
      <h1 class="mb3 mt0 lh-title">"What's this all about?"</h1>
      <time class="f6 ttu tracked gray">— Silas Tippens</time>
    </header>
    <div class="fn fl-ns w-50-ns">
      <p class="lh-copy measure mt4 mt0-ns">
        The Muse is both a community and a weekly workshop. We'll engage in short creative activities to promote lateral thinking and hold discussions on a wide range of topics with people you'd likely otherwise never meet.
      </p>
      <p class="lh-copy measure">
        As its name implies, the ultimate goal is to serve as a source of inspiration. Some artists feel that they can only create as they're suffering, or when they escape out into the wilderness, or while under the influence of various substances, or all of the above.
      </p>
      <p class="1h-copy measure">
        The Muse is proof that none of those things are necessary.
      </p>
    </div>
  </article>
</template>

<style scope>
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

.pv5 {
    padding-top: 4rem;
    padding-bottom: 4rem;
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

@media screen and (min-width: 30em) {
    .fl-ns {
        float: left;
        _display: inline;
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