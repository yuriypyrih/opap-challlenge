<template>
  <div style="min-height:100vh">
  <HeaderComponent/>
  <router-view/>
  </div>
  <FooterComponent/>
</template>

<script>

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';


export default {
  name: 'LayoutComponent',
  components: {
    HeaderComponent,FooterComponent
  }

}
</script>