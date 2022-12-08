<script>
export default {
    data() {
        return {
            data: "Hello"
        }
    }
}
</script>

<style lang="scss" scoped>
.btn {
    position: absolute;
    z-index: 99;
    width: 35vw;
    height: 99vh;
}

.left {
    left: 0px;
}

.right {
    right: 0px;
}
.content{
    z-index: 1;
}
iframe{
    width: 50vw;
    height: 50vh;
}
</style>

<template>
    <div class="left btn"></div>
    <div class="content">
        {{data}}
    </div>
    <div class="right btn"></div>
</template>