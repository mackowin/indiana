<template>
    <!-- Start Pricing Area -->
    <section class="pricing-area ptb-80" style="background: #F9F6F6">
        <SectionFour id="pricing"/>
        <div class="container">
            <div class="section-title">
                <h2>Pricing Plans</h2>
                <div class="bar"></div>
                <div class="paragraph">
                    <p>Try BLEND Feedback for <a href="/register" style="font-weight: 600">FREE</a> for 14 days</p>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="pricing-table">
                        <div class="pricing-header">
                            <h3>Basic Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup></sup>$19<span> monthly</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">1 user</li>
                                <li class="active">$15/user/mo for more users</li>
                                <li class="active">100 guest reviewers</li>
                                <li class="active">1000 commenting limits</li>
                                <li class="active">File attachment in comments</li>
                                <li class="active">Pause commenting</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/register" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="pricing-table active-plan">
                        <div class="pricing-header">
                            <h3>Pro Plan</h3>
                        </div>

                        <div class="price">
                            <span><sup></sup>$89<span> monthly</span></span>
                        </div>

                        <div class="pricing-features">
                            <ul>
                                <li class="active">5 users</li>
                                <li class="active">$15/user/mo for more users</li>
                                <li class="active">Unlimited guest reviewers</li>
                                <li class="active">No commenting limits</li>
                                <li class="active">File attachment in comments</li>
                                <li class="active">Pause commenting</li>
                            </ul>
                        </div>

                        <div class="pricing-footer">
                            <a href="/register" class="btn btn-primary">Select Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="shape7"><img src="../../../assets/img/shape4.svg" ></div>
    </section>
    <!-- End Pricing Area -->
</template>

<script>
export default {
    name: 'PricingTemplate'
}
</script>
