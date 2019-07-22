<template>
    <ul class="prolist">
        <li class="item" v-for="item of prolist" :key="item.id" @click="goDetail(item.id)">
            <div class="img">
                <img :src="item.image_url_set.dx_image.url['320']" alt="">
            </div>
            <div class="info">
                <p>{{item.name}}</p>
                <div class="price">
                    <span>￥{{item.market_price}}</span>
                </div>
                <div class="comment">
                    <span>{{item.product_desc}}</span>

                </div>

            </div>

        </li>
    </ul>
</template>

<script>
export default {
    props: ['prolist'],
    methods: {
        goDetail(id) {
            
            this.$router.push({ name: 'detail',params: {id } })

        }

    }
}
</script>

<style lang="scss" scoped>
.prolist {
    width: 98%;
    margin: 0.1rem 1%;
    // height: 1000px;
    background-color: #F5F5F5;
    overflow: auto;
    display: flex;
    flex-direction: column;
.item{
        width: 100%;
        height: 2rem;
        display: flex;
        flex-direction: row;
        background-color: #fff;
        margin-bottom: .2rem;
        .img{
            width: 30%;
            height: 99%;
            // border: 1px solid red;


        }
        .info{
            width: 60%;
            margin-left: 8%;
            p{
                font-size: 14px;
             
                
            }
            .price{
                margin-top: 0.4rem;
                span{
                    font-size:18px;
                    color: #FE4070;
                }
            }
            .comment{
                color: #cccccc;
            }
        }
    }


   
}
</style>



