<template>
  <div
    id="about"
    class="card bg-neutral-200 m-auto block text-center w-full h-auto sm:flex"
  >
    <div class=" w-[15rem] sm:w-[25rem] h-auto  p-5 m-auto block">
      <img :src="AboutUsImages" alt="About Us picture" />
    </div>

    <div class="w-full sm:w-3/5 h-auto m-auto p-5 block text-center sm:text-left font-['Poppins']">
      <div>
        <h1 class=" text-gray-400 font-medium mb-1 text-lg sm:text-xl">
          Welcome to [orphanage name]
        </h1>
      </div>
      <div>
        <h1 class=" font-bold text-2xl sm:text-3xl w-full h-auto mb-2">
          Dedicated to Nurturing Hope, Love, and a Brighter Future for Every
          Child.
        </h1>
        <p class="mb-3">
          At [Orphanage Name], we believe that every child deserves a safe and
          loving environment to grow, learn, and thrive. Founded on the
          principles of compassion and community, our orphanage is more than
          just a shelter; it is a place where vulnerable children find hope,
          security, and a sense of belonging. With the support of generous
          donors and volunteers, we are able to provide essential care,
          education, and opportunities for these children to build brighter
          futures.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AboutUsImages from '@/images/AboutUsImages.svg'




</script>
