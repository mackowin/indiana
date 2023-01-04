<template>
    <!-- Start Main Banner -->
    <div class="main-banner" style="padding-top: 5rem; margin-top: 2rem; padding-bottom: 3rem">
        <SectionOne id="home"/>
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="row h-100 justify-content-center align-items-center">
                        <div class="col-xl-6 col-lg-7">
                            <div class="hero-content">
                                <div class="row">
                                    <div class="col-lg-11">
                                        <h1>Starter Kit for <br><span style="color: #0b5345">Real Estate Investors</span></h1>
                                        <h5>Build financial freedom, invest in Indianapolis</h5>

                                        <div class="tick-section">
                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" style="color: #DDAC4A" icon="check-square" />
                                                    <p class="tick-input">15-factor checklist to screen positive cash flow properties (state-neutral)</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" style="color: #DDAC4A" icon="check-square" />
                                                        <p class="tick-input">15-factor checklist to screen positive cash flow properties (state-neutral)</p>                                                    </div>
                                                </div>
                                            
                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" style="color: #DDAC4A" icon="check-square" />
                                                    <p class="tick-input">Evaluate neighborhood quality (Indianapolis)</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" style="color: #DDAC4A" icon="check-square" />
                                                        <p class="tick-input">Evaluate neighborhood quality (Indianapolis)</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" style="color: #DDAC4A" icon="check-square" />
                                                    <p class="tick-input">Tips how to place an offer and negotiate a deal</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" style="color: #DDAC4A" icon="check-square" />
                                                        <p class="tick-input">Tips how to place an offer and negotiate a deal</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" style="color: #DDAC4A" icon="check-square" />
                                                    <p class="tick-input">Investors community<img src="../resources/discord-logo.svg" style="width: 120px; margin-left: 10px" /></p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" style="color: #DDAC4A" icon="check-square" />
                                                        <p class="tick-input">Investors community<img src="../resources/discord-logo.svg" style="width: 120px; margin-left: 10px" /></p>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="col-xl-6 col-lg-5 video" style="margin-top: 2rem">
                            <div class="row">

                                <div class="d-block d-lg-none">
                                    <img src="../resources/cash-flow.png" style="border-radius: 3%">
                                </div>

                                <div class="d-none d-lg-block" style="radius: 10%">
                                    <img src="../resources/cash-flow.png" style="border-radius: 3%">
                                </div>
                            </div>
                        </div>
                    </div>

                    <PriceOffer></PriceOffer>

                </div>
            </div>
        </div>

        <div class="shape1"><img src="../../../assets/img/shape1.png" ></div>
        <div class="shape3"><img src="../../../assets/img/shape3.svg" ></div>
        <div class="shape4"><img src="../../../assets/img/shape4.svg" ></div>
        <div class="shape5"><img src="../../../assets/img/shape5.png"></div>
        <div class="shape6 rotateme"><img src="../../../assets/img/shape4.svg" ></div>
        <div class="shape7"><img src="../../../assets/img/shape4.svg" ></div>
        <div class="shape8 rotateme"><img src="../../../assets/img/shape2.svg" ></div>
    </div>
    <!-- End Main Banner -->
</template>


<script>

import PriceOffer from "./PriceOffer.vue";

    export default {
        name: 'BannerIndiana',
        components: {
          PriceOffer
        },
        data() {
            return {
                fired: false
            }
        }
    }

</script>
