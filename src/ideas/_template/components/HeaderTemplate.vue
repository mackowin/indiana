<template>
    <!-- Start Navbar Area -->
    <header id="header" :class="['headroom', {'is-sticky': isSticky}]">
        <div class="startp-nav">
            <div class="container">
                <nav class="navbar navbar-expand-md navbar-light">
                    <router-link class="navbar-brand" to="/">
                        <img width="110px" src="./../resources/template-logo.svg"/>
                    </router-link>

                    <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>


                    <b-collapse class="collapse navbar-collapse mean-menu" id="navbarSupportedContent" is-nav>
                        <ul class="navbar-nav nav ml-auto">

                            <li class="nav-item">
                                <a href="/" class="nav-link" v-scroll-to="'#home'">Home</a>
                            </li>

                            <li class="nav-item">
                                <a href="/" class="nav-link" v-scroll-to="'#solutions'">Solutions</a>
                            </li>
                            <li class="nav-item">
                                <a href="/" class="nav-link" v-scroll-to="'#pricing'">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a href="/" class="nav-link" v-scroll-to="'#contact'">Contact</a>
                            </li>
                        </ul>
                    </b-collapse>

                    <div class="others-option">

                    </div>
                </nav>
            </div>
        </div>
    </header>
    <!-- End Navbar Area -->
</template>

<script>
export default {
    name: 'HeaderTemplate',
    data(){
        return {
            isSticky: false
        }
    },

    mounted() {
        const that = this;
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY;
            // eslint-disable-next-line no-console
            if(scrollPos >= 100){
                that.isSticky = true;
            } else {
                that.isSticky = false;
            }
        })
    }
}
</script>
