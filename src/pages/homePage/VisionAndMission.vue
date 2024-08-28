<template>
  <div class="bg-green-100" id="vision&mission">
    <div class="text-center w-full m-auto p-5 block">
      <h1 class="font-[Poppins] text-2xl font-bold p-5">Vision & Mission</h1>
      <h5 class="font-[Poppins] text-sm">
        Our vision is a world where every child, regardless of their background
        or circumstances, has the opportunity to thrive. We strive to break the
        cycle of poverty, abandonment, and despair by ensuring that all children
        in our care grow up in an environment filled with love, compassion, and
        opportunities. We envision a future where each child can realize their
        full potential and contribute positively to society.
      </h5>
    </div>
    <div
      class="w-full h-auto p-5 sm:flex sm:justify-center sm:items-center gap-5"
    >
      <!-- First -->
      <div
        class="w-4/5  sm:w-1/3 h-auto m-auto mb-5 block rounded-xl bg-green-200 py-4 px-3 shadow-inner-custom  hover:cursor-pointer "
      >
        <img :src="icon1" alt="Icon 1" class="w-[4rem] h-[4rem] mb-5  m-auto block"  />
        <h4
          class="w-fit h-auto font-[Poppins] text-md sm:text-sm font-bold rounded border border-green-400 bg-green-800 text-white p-1 "
        >
          Provide Comprehensive Care
        </h4>
        <p class="mt-1 sm:text-xs text-md text-white-500">
          We are committed to offering a safe and nurturing environment where
          every child’s basic needs—such as shelter, nutrition, and
          healthcare—are met with care and compassion. Our goal is to ensure
          that each child feels secure and supported, allowing them to focus on
          growing and thriving.
        </p>
      </div>

      <!-- Second -->
      <div
        class="w-4/5 sm:w-1/3 h-auto m-auto mb-5 block rounded-xl bg-green-200 py-4 px-3 shadow-inner-custom  hover:cursor-pointer "
      >
        <img :src="icon2" alt="Icon 2" class="w-[4rem] h-[4rem] mb-5  m-auto block" />
        <h4
          class="w-fit h-auto font-[Poppins] text-md sm:text-sm font-bold rounded border border-green-400 bg-green-800 text-white p-1"
        >
          Empower Through Education
        </h4>
        <p class="mt-1 sm:text-xs text-md text-white-500">
          Education is the key to breaking the cycle of poverty and providing a
          brighter future. We strive to equip our children with quality
          education and life skills, enabling them to pursue their dreams and
          become confident, self-reliant individuals who can positively impact
          their communities.
        </p>
      </div>

      <!-- Third -->
      <div
        class="w-4/5  sm:w-1/3 h-auto m-auto mb-5 block rounded-xl bg-green-200 py-4 px-3 shadow-inner-custom hover:cursor-pointer  "
      >
        <img :src="icon3" alt="Icon 3" class="w-[4rem] h-[4rem] mb-5  m-auto block" />
        <h4
          class="w-fit h-auto font-[Poppins] text-md sm:text-sm font-bold rounded border border-green-400 bg-green-800 text-white p-1  "
        >
          Foster a Sense of Belonging
        </h4>
        <p class="mt-1 sm:text-xs text-md text-white-500 ">
          We believe that every child deserves a place to call home and a
          community that cares. By cultivating a supportive and loving
          environment, we help our children build lasting relationships, develop
          a strong sense of self-worth, and create a foundation for a hopeful
          and fulfilling future.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import icon1 from "@/images/vision&mission_icon1.svg";
import icon2 from "@/images/vision&mission_icon2.svg";
import icon3 from "@/images/vision&mission_icon3.svg";
</script>

<style scoped></style>
