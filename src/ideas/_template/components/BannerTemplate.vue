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
                                        <h1>Let users comment directly on your website</h1>
                                        <h5>Visual and actionable feedback</h5>

                                        <div class="tick-section">
                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Comments & upvotes</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Comments & upvotes</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Reactions</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Reactions</p>
                                                    </div>
                                                </div>

                                            <div class="d-block d-sm-none">
                                                <div class="tick-row">
                                                    <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                    <p class="tick-input">Easy aggregation</p>
                                                </div>
                                            </div>

                                                <div class="d-none d-sm-block">
                                                    <div class="tick-row">
                                                        <font-awesome-icon class="fa-2x tick-icon" icon="check-square" />
                                                        <p class="tick-input">Easy aggregation</p>
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
                                    <vue-plyr ref="plyr">
                                        <video
                                                controls
                                                crossorigin
                                                playsinline
                                                poster="../resources/template2.png" style="background: white;">
                                            <source src="../resources/template3.mp4" type="video/mp4">
                                            Your browser does not support the video tag
                                        </video>
                                    </vue-plyr>
                                </div>

                                <div class="d-none d-lg-block">
                                    <vue-plyr ref="plyr">
                                        <video
                                                controls
                                                crossorigin
                                                playsinline
                                                poster="../resources/template2.png" style="background: white;">
                                            <source src="../resources/template3.mp4" type="video/mp4">
                                            Your browser does not support the video tag
                                        </video>
                                    </vue-plyr>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="margin: 6rem 25px 3rem">
                        <div class="row">
                            <div class="col-lg-6 col-sm-8 col-10 offset-lg-3 offset-sm-2 offset-1">
                                <img src="../../../assets/img/123.svg" style="margin-bottom: 1rem"/>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-8 col-sm-10 col-12 offset-lg-2 offset-sm-1">
                                <div class="row">
                                    <div class="col-4" style="text-align: center; padding: 0">Select elements <br> for users to comment on</div>
                                    <div class="col-4" style="text-align: center; padding: 0 10px">Get comments, <br> upvotes & reactions</div>
                                    <div class="col-4" style="text-align: center; padding: 0">Aggregate feedback <br>into actionable reports</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row banner-action-btns">
                        <div class="col-xl-7 col-lg-9">
                            <div class="row justify-content-center">
                                <div class="col-sm-8 col-10">
                                    <a href="/register" class="btn btn-primary btn-register btn-profile">GET STARTED NOW</a>
                                </div>
                            </div>
                        </div>

                    </div>

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

    export default {
        name: 'BannerTemplate',
        data() {
            return {
                fired: false
            }
        },
        mounted () {
            this.$refs.plyr.player.volume = 0.5;
        }
    }


/* JS FOR SIGNUP
    data() {
        return {
            email: '',
            message: ''
        }
    },
    methods: {
         addEmail(email) {
            if (!email) return;
            var noticeMessage = "🎉 Your account has been saved  🎉";
             const url = `/api/lead`;
             const requestOptions = {
                 method: "POST",
                 headers: {"Content-Type" : "application/json"},
                 body: JSON.stringify({ email: email })
             };
             fetch(url, requestOptions).then(async response => {
                 if (response.ok) {
                     this.$refs['modal-1'].show();
                     this.$store.commit('popup/setSeen');
                 } else {
                     noticeMessage = "This email address is already registered";
                 }
                 this.message = noticeMessage;
                 this.email = '';
             });
        },
        randomPassword(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
    }
}
*/

</script>
