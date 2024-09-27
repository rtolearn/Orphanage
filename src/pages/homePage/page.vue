<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
// import NavigationBar from "./NavigationBar.vue";
// import NavBar from "./NavBar.vue";
import NavBar from "./NavBar.vue"

import Introduction from "./IntroductionSection.vue";
import AboutUs from "./AboutUs.vue";
import VisionAndMission from "./VisionAndMission.vue";
import SponsorAndDonation from "./Sponsor&Donation.vue";
import MarketPlace from "./MarketPlace.vue";
import AdoptionProgram from "./AdoptionProgram.vue";
import FooterSection from "./FooterSection.vue";
</script>

<template>
  <div class="max-w-[1440px] mx-auto max-h-auto
  ">
    <NavBar />
    <Introduction />
    <AboutUs />
    <VisionAndMission />
    <SponsorAndDonation />
    <MarketPlace />
    <AdoptionProgram />

    <FooterSection />
  </div>
</template>
