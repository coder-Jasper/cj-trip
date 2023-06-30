<script setup>
import tabBarItems from '@/assets/data/tab-bar-items'
import { getTabBarImgURL } from '@/utils/get_vite_url'
</script>

<template>
  <div class="tab-bar">
    <div class="tab-bar-item" v-for="item in tabBarItems">
      <img :src="getTabBarImgURL(item.imgName)" alt="" />
      <span class="label">{{ item.label }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;

  border-top: 1px solid #f3f3f3;
  height: 50px;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 36px;
    }

    .label {
      margin-top: 2px;

      font-size: 12px;
    }
  }
}
</style>
