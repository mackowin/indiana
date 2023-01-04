<template>
    <!-- Start Footer Area -->
    <footer class="footer-area bg-f7fafd">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <a href="/">
                                <img width="120px" src="../resources/indy-invest-logo.svg"/>
                            </a>
                        </div>
                        <p style="font-weight: 600">Build financial freedom</p>
                        <p>Purchase cash-flowing properties</p>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget pl-5">
                        <h3>Company</h3>
                        <ul class="list">
                            <li><a href="/"  v-scroll-to="'#home'">Home</a></li>
                            <li><a href="/"  v-scroll-to="'#kit'">Investor Kit</a></li>
                            <li><a href="/"  v-scroll-to="'#indianapolis'">Indianapolis</a></li>
                            <li><a href="/"  v-scroll-to="'#about'">About us</a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Support</h3>
                        <ul class="list">
                            <li><a href="/" v-scroll-to="'#contact'" >Contact Us</a></li>
                        </ul>
                    </div>
                </div>



                <div class="col-lg-12 col-md-12">
                    <div class="copyright-area">
                        <p>Copyright &copy;2022 House Hack Indiana. All Rights Reserved</p>
                        <div style="text-align: justify; text-justify: inter-word;">
                            <p style="font-size: 10px">All statements are subject to certain conditions, subject to change, may be outdated, may not apply to your personal situation and may be limited in timespan, and are not legally or fiscally binding. House Hack Indiana does not warrant the accuracy or validity of the information, and hereby disclaims any liability to any person for any loss or damage caused by errors or omissions. House Hack Indiana also is not responsible for any material or information contained in the sites provided. The information presented should not be construed to be formal advice and is provided purely for educational purposes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <img src="../../../assets/img/map.png" class="map" >
        <div class="shape1"><img src="../../../assets/img/shape1.png" ></div>
        <div class="shape8 rotateme"><img src="../../../assets/img/shape2.svg" ></div>

        <back-to-top bottom="50px" right="50px">
            <div class="go-top"><feather type="arrow-up"></feather></div>
        </back-to-top>
    </footer>
    <!-- End Footer Area -->
</template>

<script>
import BackToTop from 'vue-backtotop'
export default {
    name: 'FooterIndiana',
    components: { BackToTop }
}
</script>
