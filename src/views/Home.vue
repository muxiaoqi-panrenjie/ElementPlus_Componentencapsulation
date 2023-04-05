<template>
  <div class="home">
    <div class="container">
        <!-- <Menu /> -->
        <div>1111</div>
    </div>
    <div class="right">
        33
        <!-- <div class="header">
            <div class="icon" @click="">
                <el-icon><ArrowLeft /></el-icon>
            </div>
        </div> -->
        <!-- <div class="container"></div> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
// import Menu from "@/components/menu/index.vue"
console.log(1);



</script>

<style lang="scss" scoped>
.home{
    width: 100%;
    height: 100%;
    display: flex;
    .container{
        width: 20%;
        height: 100%;
        border-right: 1px solid #ccc;
    }
    .right{
        width: 80%;
        height: 200px;
        .header{
            padding-top: 5%;
            padding-left:10% ;
            width:100% ;
            height: 30%;
            border: 1px solid #eee;
            .icon{
                cursor: pointer;
            }
        }
        .container{
            width: 100%;
            height: 70%;
        }
    }

}
</style>
