<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="increase">Click me if you dare</button>
    <p>
     And what a test is this {{count}}
    </p>

<!--    <h1 class="text-3xl dark:bg-slate-800 font-bold underline">-->
<!--      Hello world!-->
<!--    </h1>-->
    <router-link to="/home">Home</router-link>|
    <router-link to="/live">Live Draw</router-link>|
    <router-link to="/auth">Auth</router-link>
    <LayoutComponent><router-view/></LayoutComponent>

  </div>
</template>

<script>
import LayoutComponent from "./structure/LayoutComponent";

export default {
  name: 'HelloWorld',
  components:{LayoutComponent},
  props: {
    msg: String
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increase () {
      this.$store.commit("increment")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
