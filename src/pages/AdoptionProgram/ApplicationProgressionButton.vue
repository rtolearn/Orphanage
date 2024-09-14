<template>
  <div class="sm:flex items-center w-full h-auto my-10">
    <p class="w-1/5 font-bold text-base sm:text-lg">Result:</p>

    <router-link
      to="/adoptionProgression"
      class="sm:w-4/5 col-span-6 flex justify-center items-center py-1.5"
    >
      <Button
        value="Submit"
        class="bg-green-400 w-full h-auto cursor-pointer hover:text-white"
      >
        Application Progression
      </Button>
    </router-link>
  </div>

  <p class="text-center italic">
    Based on the current policy, the children to be adopted is limited for the
    sake of taking care both parties.
  </p>
</template>
