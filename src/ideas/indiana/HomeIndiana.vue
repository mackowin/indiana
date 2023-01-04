<template>

  <div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <HeaderIndiana v-else></HeaderIndiana>
    <PreLoaderIndiana v-if="isLoading" />
    <div>
      <BannerIndiana></BannerIndiana>
      <ServicesIndiana></ServicesIndiana>
      <ProcessIndiana></ProcessIndiana>
      <BioIndiana></BioIndiana>
      <ContactIndiana></ContactIndiana>
    </div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <FooterIndiana v-else></FooterIndiana>
  </div>

</template>


<script>
  import BannerIndiana from './components/BannerIndiana';
  import ServicesIndiana from './components/ServicesIndiana';
  import ProcessIndiana from './components/ProcessIndiana';
  import BioIndiana from './components/BioIndiana';
  import ContactIndiana from './components/ContactIndiana';
  import HeaderIndiana from "./components/HeaderIndiana";
  import FooterIndiana from "./components/FooterIndiana";
  import PreLoaderIndiana from "./components/PreLoaderIndiana";



  export default {
    name: 'HomeIndiana',
    components: {
      BannerIndiana,
      ServicesIndiana,
      ProcessIndiana,
      BioIndiana,
      ContactIndiana,
      HeaderIndiana,
      FooterIndiana,
      PreLoaderIndiana
    },
    data() {
      return {
        isLoading: true,
        currentUrl: ''
      }
    },

    watch: {
      '$route'(pathUrl){
        this.currentUrl = pathUrl.path;
        this.isLoading = true;
        setTimeout(() => { this.isLoading = false }, 1500);
      }
    },

    mounted() {
      this.currentUrl = window.location.pathname;
      setTimeout(() => {
        this.isLoading = false
      }, 2000);
    }
  }
</script>
