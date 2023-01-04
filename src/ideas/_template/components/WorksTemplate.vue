<template>
    <!-- Start Works Area -->
    <section class="works-area" style="background: white">

        <b-modal ref="modal-zoom" :modal-class="modalZoom" static :return-focus="this.$parent" size="lg" hide-footer>
            <template #modal-title>
               {{modalProperties[index].title}}
            </template>
            <img :src="getImgUrl()" />
        </b-modal>

        <div class="works-slides" style="margin-top: 3rem">
            <carousel
                :autoplay = "true"
                :paginationEnabled = "false"
                :loop = "true"
                :autoplaySpeed = "true"
                :autoplayTimeout = "5000"
                :perPageCustom = "[[0, 1],[768, 2],[1200, 3], [1500, 4]]"
            >
                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/template1.png">
                        <a v-if="windowWidth > 767" @click="index = 0;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Aggregate feedback into actionable reports</a></h3>
                            <p>At first glance you know which areas to prioritize</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/template6.png">
                        <a v-if="windowWidth > 767" @click="index = 1;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Resolve unclear or conflicting feedback</a></h3>
                            <p>It has never been more obvious which feedback to implement</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/template5.png" >
                        <a v-if="windowWidth > 767" @click="index = 2;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Capture your visitors emotions</a></h3>
                            <p>Choose the emojis that better capture feedback in your project</p>
                        </div>
                    </div>
                </slide>

                <slide>
                    <div class="single-works carousel-green-hover">
                        <img src="../resources/template4.png" >
                        <a v-if="windowWidth > 767" @click="index = 3;$refs['modal-zoom'].show()" style="cursor: pointer;" class="icon"><feather type="zoom-in"></feather></a>

                        <div class="works-content">
                            <h3><a href="#">Collect visual feedback</a></h3>
                            <p>Spend less time collecting and organizing feedback</p>
                        </div>
                    </div>
                </slide>
            </carousel>
        </div>
        <div class="shape4"><img src="../../../assets/img/shape4.svg"></div>
    </section>
    <!-- End Works Area -->
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'WorksTemplate',
    components: { Carousel, Slide },
    data() {
        return {
            modalZoom: ['modal-zoom'],
            windowWidth: window.innerWidth,
            index: 0,
            modalProperties: [
                {
                   title : "Aggregate feedback into actionable reports",
                   img: "./template1.png"
                },
                {
                    title : "Resolve unclear or conflicting feedback",
                    img: "./template6.png"
                },
                {
                    title : "Capture your visitors emotions",
                    img: "./template5.png"
                },
                {
                    title : "Collect visual feedback",
                    img: "./template4.png"
                }

            ]
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth
        },
        getImgUrl() {
            var images = require.context('../resources/', false, /\.png$/)
            return images(this.modalProperties[this.index].img)
        }
    }
}
</script>
