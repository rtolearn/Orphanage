<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
// import NavigationBar from "./NavigationBar.vue";
// import NavBar from "./NavBar.vue";
import NavBar from "@/pages/HomePage/NavBar.vue"

import Introduction from "@/pages/HomePage/IntroductionSection.vue";
import AboutUs from "@/pages/HomePage/AboutUs.vue";
import VisionAndMission from "@/pages/HomePage/VisionAndMission.vue";
import SponsorAndDonation from "@/pages/HomePage/Sponsor&Donation.vue";
import MarketPlace from "@/pages/HomePage/MarketPlace.vue";
import AdoptionProgram from "@/pages/HomePage/AdoptionProgram.vue";
import FooterSection from "@/pages/HomePage/FooterSection.vue";
</script>

<template>
  <div class="max-w-[1440px] mx-auto max-h-auto
  ">
    <NavBar />
    <Introduction />
    <AboutUs />
    <VisionAndMission />
    <!--<contentOrphanage />-->
    <SponsorAndDonation />
    <MarketPlace />
    <AdoptionProgram />

    <FooterSection />
  </div>
</template>
