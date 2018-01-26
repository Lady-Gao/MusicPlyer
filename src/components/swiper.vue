<style scoped lang='stylus'>
	img{
		width: 100%;
	}

</style>
<template>
    <swiper :options="swiperOption" ref="mySwiper"> 
        <swiper-slide v-for="item in imgArr" :key="item.id">
        	<img :src="item.url" alt="">
        </swiper-slide> 
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
export default {
	props:["imgArr"],
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    }
}

</script>
