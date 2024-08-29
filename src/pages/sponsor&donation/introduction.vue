<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div>
    <h1>Become our Sponsor or Donor</h1>
  </div>
  <div class="flex justify-center items-center gap-10">
    <Card
      style="width: 20rem; height: auto; overflow: hidden"
      class="hover:scale-105 hover:shadow-2xl shadow-"
    >
      <template #header>
        <img alt="user header" :src="SponsorPic" class="w-full h-auto" />
      </template>
      <template #title>Sponsor</template>
      <template #subtitle>
        <ol>
          <li>Equipment / Daily Necessary</li>
          <li>Scholarship</li>
        </ol>
      </template>
      <!-- <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
          <Button label="Save" class="w-full" />
        </div>
      </template> -->
    </Card>
    <Card
      style="width: 20rem; height: auto; overflow: hidden"
      class="hover:scale-105 hover:shadow-2xl shadow-"
    >
      <template #header>
        <img alt="user header" :src="SponsorPic" class="w-full h-auto" />
      </template>
      <template #title>Donor</template>
      <template #subtitle>
        <ol>
          <li>Used Items</li>
          <li>Fund</li>
        </ol>
      </template>
      <!-- <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex gap-4 mt-1">
          <Button label="Cancel" severity="secondary" outlined class="w-full" />
          <Button label="Save" class="w-full" />
        </div>
      </template> -->
    </Card>
  </div>
</template>

<script setup>
import SponsorPic from "@/images/AboutUsImages.svg";

import Card from "primevue/card";
</script>
