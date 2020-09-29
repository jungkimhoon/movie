<template>
  <div>
      <div class="backImg">
      <app-header></app-header>
      <div style="height: 200px;"></div>
          <transition name="slide" mode="out-in">
              <router-view :key="$route.fullPath"></router-view>
          </transition>
      </div>
      <div style="clear:both"><app-footer></app-footer></div>
  </div>
</template>

<script>
import Header from './components/common/header.vue';
import Footer from './components/common/footer.vue';

export default {
    components: {
        'app-header': Header,
        'app-footer': Footer
    },
}
</script>

<style>
.slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
    from{
        transform: translateY(-30px);
        opacity: 0;
    }
    to{
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from{
        transform: translateY(0);
        opacity: 1;
    }
    in{
        transform: translateY(-30px);
        opacity: 0;
    }
}
.backImg{
    background-image: url("./image/dark_knight_ver2.jpg");
    min-width: 502px;
    min-height: 900px;
}
</style>
