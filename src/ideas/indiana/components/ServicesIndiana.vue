<template>
    <!-- Start Design & Development Services -->
    <section class="services-area ptb-80" style="background: white; padding-bottom: 40px;">

        <div class="col-12" style="margin-bottom: 7rem">
            <div class="row">
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <img src="../resources/image1.jpeg">
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <img src="../resources/image2.jpeg">
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <img src="../resources/image3.jpeg">
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <img src="../resources/image4.jpeg">
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <img src="../resources/image6.jpeg">
                </div>
                <div class="col-sm-2 col-4" style="padding: 0px 5px">
                    <img src="../resources/image7.jpeg">
                </div>
            </div>
        </div>
        
        <SectionThree id="kit"/>
        <div class="container">
            <div class="section-title">
                <h2>What Real Estate Investor Kit Includes</h2>
                <div class="bar"></div>
            </div>

            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-xl-4 col-lg-4 col-md-4 col-6">
                    <img src="../resources/re-kit.svg">
                </div>

                <div class="col-xl-6 col-lg-7 col-md-12 services-content">

                    <div class="d-block d-sm-none">
                        <div class="row">
                            <div class="col-12">
                                <div class="box">
                                    <feather type="layout"></feather> 15-factor checklist to let you screen real estate thoroughly before placing an offer (state-neutral)
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="box">
                                    <feather type="pen-tool"></feather> Resources to evaluate neighborhood quality and crime level in Indianapolis neighborhoods
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="box">
                                    <feather type="message-circle"></feather>  Tips how to find high-return potential properties you would have missed, place an offer and negotiate a deal
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="box">
                                    <feather type="code"></feather> Exclusive <img src="../resources/discord-logo.svg" style="width: 90px; margin-left: 5px; margin-right: 5px"/> for real estate investors
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="d-none d-sm-block">
                        <div class="row">
                            <div class="col-12">
                                <div class="box">
                                    <feather type="layout"></feather> 15-factor checklist to let you screen real estate thoroughly before placing an offer (state-neutral)
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="box">
                                    <feather type="pen-tool"></feather> Resources to evaluate neighborhood quality and crime level in Indianapolis neighborhoods
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="box">
                                    <feather type="message-circle"></feather> Tips how to find high-return potential properties you would have missed, place an offer and negotiate a deal
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="box">
                                    <feather type="code"></feather> Exclusive <img src="../resources/discord-logo.svg" style="width: 90px; margin-left: 5px; margin-right: 5px"/> for real estate investors
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

             <div class="section-title" style="margin-top: 8rem">
                <div class="bar"></div>
                <div class="paragraph">
                    <p style="font-weight: 600">Seeking properties with high cash flow?</p>
                    <p>Indianapolis is your #1 place</p>
                </div>
                <div class="paragraph">
                    <p style="font-weight: 600">Want to learn how to secure hidden gems?</p>
                    <p>Understand which Indianapolis neighborhoods are the best to invest.</p> 
                    <p>Find out what returns you can get, how much capital is required...</p>
                    <p style="margin-top: 10px">... and finally, make sure you screen deals using our comprehensive list of factors to avoid unpleasant surprises and win negotiations.</p>
                </div>
            </div>

            <PriceOffer></PriceOffer>

            <div class="website-example funfacts-area">
                <img src="../../../assets/img/map.png" class="map-bg" style="left: -50%">
                <div class="shape2-services rotateme"><img src="../../../assets/img/shape2.svg"></div>
                <div class="shape3-services"><img src="../../../assets/img/shape3.svg" ></div>
                <div class="shape4-services"><img src="../../../assets/img/shape4.svg" ></div>
                <div class="shape5-services"><img src="../../../assets/img/shape5.png" ></div>
            </div>
        </div>
    </section>
    <!-- End Design & Development Services -->
</template>

<script>

import PriceOffer from "./PriceOffer.vue";

export default {
    name: 'ServicesIndiana',
    components: {
          PriceOffer
    },
}
</script>
