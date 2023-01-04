<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80" style="background: #F9F6F6; padding-top: 7rem">
        <SectionFour id="indianapolis"/>
        <div class="container">
            <div class="section-title" style="margin-bottom: 0rem">
                <h2>Why Indianapolis?</h2>
                <div class="bar"></div>
                <div class="paragraph">
                    <p style="font-weight: 600">Look for a landlord-friendly state</p>
                    <p style="text-align: justify; text-justify: inter-word;">Owning a rental property in politically conservative real estate markets is critical to protect your wealth. Never compromise on giving away control. In certain states, it might take months to evict tenants (California) vs. only days in others (Indianapolis in Indiana).</p>
                    <p style="text-align: justify; text-justify: inter-word; margin-top: 10px">Imagine that your tenants stop paying rent while you still need to deliver on mortgage payments! It's best to be able to act quickly. Remember, you can always provide rent assistance to your tenants if you feel it is the right thing to do and your financial position allows for that.</p>
                </div>

                <div class="paragraph" style="margin-top: 20px">
                    <p style="font-weight: 600">Cash-flow rich market</p>
                    <p style="text-align: justify; text-justify: inter-word;">Living in another state and never heard of Indianapolis real estate? That's exactly the reason that makes Indianapolis a cash-flow-rich market: relatively low property prices vs. rent that you receive.</p>
                    <p style="text-align: justify; text-justify: inter-word; margin-top: 10px">Let's say that you buy a house in California for $1.5m which generates $3,000 rent a month (rent to price ratio => 3k / 1m = 0.3%). While to invest in Indianapolis you require as little as $100-200k per house which generates $1,000-$1,700 rent a month (rent to price ratio => 1k / 100k = 1%)</p>
                    <p style="text-align: justify; text-justify: inter-word; margin-top: 10px">Much better return, right? Of course, Indianapolis' growth prospects are far from California, but financial freedom is being built on regular cash flow.</p>
                </div>

                <PriceOffer></PriceOffer>

            </div>
        </div>

        <div class="shape7"><img src="../../../assets/img/shape4.svg"></div>
    </section>
    <!-- End Pricing Area -->
</template>

<script>

import PriceOffer from "./PriceOffer.vue";

export default {
    name: 'PricingGreenCard',
    components: {
          PriceOffer
    }
}
</script>
