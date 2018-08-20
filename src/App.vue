<template>
  <div id="app">
    <div class="wrapper">
      <main-nav />
      <router-view/>
    </div>
    <div class="push"></div>
    <mailchimp />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.wrapper {
  min-height: 100vh;
  margin-bottom: -200px;
}

.push {
  height: 200px;
}
@media screen and (min-width: 768px) {
    .wrapper{
      margin-bottom: -160px;
    }
    .push {
      height: 160px;
    }
}
html, body {
  height: 100%;
  margin: 0;
}
a {
  opacity: 1;
  transition: color .15s ease-in;
  transition: opacity .15s ease-in;
  color: #777;
  font-family: helvetica;
  text-decoration: none;
}

a:hover {
  opacity: .5;
  color: #ef3f3f;
  text-decoration: underline;
}

a:active {
  color: black;
}

a:visited {
  color: #777;
}
</style>
