<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="reveal">
      <md-app-toolbar class="md-primary">

        <div class="md-layout md-gutter">
          <div class="md-layout-item md-size-15">


          </div>
          <div class="md-layout-item">

            <span class="md-title">My Title</span>
          </div>
          <div class="md-layout-item md-size-15">

            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon class="md-alignment-top-right">menu</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-layout md-gutter">
          <div class="md-layout-item"></div>
          <div class="md-layout-item"></div>
          <div class="md-layout-item">
            

          </div>
        </div>


      



      


        
        
      </md-app-toolbar>

      <md-app-drawer class="md-right" :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
       menuVisible: false
    }
  }
}
</script>

<style>
body {
    height: 100%;
    margin: 0;
    padding: 0;
}


.page-container {
  height:100%;
  min-height: 100%;
}
.md-app {
  height:100%;
  min-height: 100%;
  border: none;
}

.md-drawer {
  background: white;
  width: 230px;
  max-width: calc(100vw - 125px);
}

.md-layout-item {
  height: 40px;
}

.md-layout-item:after {
  width: 100%;
  height: 100%;
  display: block;
  background: #ef9a9a;
  content: " ";
}
</style>
