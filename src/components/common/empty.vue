<template>
  <div class="empty_container">
    <img class="tip_image" src="@/assets/images/myShan/empty_icon.png" mode=""></img>
    <div class="title_1">{{ tipTitle1 }}</div>
    <div class="title_2">{{ tipTitle2 }}</div>
  </div>
</template>

<script>
export default {
  props: {
    tipImage: '',
    tipTitle1: '',
    tipTitle2: ''
  }
}
</script>

<style lang="less" scoped>
.empty_container {
  width: 100%;
  height: 500px;
  color: #84899D;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    height: 150px;
    margin-bottom: 25px;
  }

  .title_1 {
    font-size: 16px;
    margin-bottom: 5px;
  }

  .title_2 {
    font-size: 14px;
  }
}
</style>
