<template>
  <div>
    <m-progress  :percentage="60"></m-progress>
    <br />
    <m-progress  status="success" :stroke-width="20" :percentage="60"></m-progress>
    <br />
    <m-progress :time="5000" type="circle"  :percentage="60"></m-progress>
  </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
</style>