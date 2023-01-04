<template>

  <div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <HeaderTemplate v-else></HeaderTemplate>
    <PreLoaderTemplate v-if="isLoading" />
    <div>
      <BannerTemplate></BannerTemplate>
      <ServicesTemplate></ServicesTemplate>
      <WorksTemplate></WorksTemplate>
      <PricingTemplate></PricingTemplate>
      <ContactTemplate></ContactTemplate>
    </div>
    <div v-if="currentUrl == '/not-found' || currentUrl == '/coming-soon'"></div>
    <FooterTemplate v-else></FooterTemplate>
  </div>

</template>


<script>
  import BannerTemplate from './components/BannerTemplate';
  import ServicesTemplate from './components/ServicesTemplate';
  import PricingTemplate from './components/PricingTemplate';
  import ContactTemplate from './components/ContactTemplate';
  import HeaderTemplate from "./components/HeaderTemplate";
  import FooterTemplate from "./components/FooterTemplate";
  import PreLoaderTemplate from "./components/PreLoaderTemplate";
  import WorksTemplate from "./components/WorksTemplate";



  export default {
    name: 'HomeTemplate',
    components: {
      BannerTemplate,
      ServicesTemplate,
      PricingTemplate,
      ContactTemplate,
      HeaderTemplate,
      FooterTemplate,
      PreLoaderTemplate,
      WorksTemplate
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
