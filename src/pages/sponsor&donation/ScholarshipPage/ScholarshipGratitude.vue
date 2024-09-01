<template>
  <div class="flex flex-col w-fit h-auto m-5">
    <div
      class="text-center border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 font-medium"
    >
      <div class="m-auto w-[23.5rem] h-auto py-3">
        <h1 class="text-center text-base">Thank you</h1>
        <div class="text-gray-500 text-sm">
          <p>
            Thank you for participating in this program. Your generousity is
            highly appreciated.
          </p>
          <p>
            We will contact you within a week for future discussion and
            procedures
          </p>
        </div>
      </div>
      <div class="py-6 flex gap-2">
          <Button severity="secondary" label="Back" @click="handleClick(3)"/>
          <Button label="Complete" @click="handleClick(4)"/>
        </div>
    </div>
  </div>
</template>

<script setup>


const emit = defineEmits(['currentStep']);
const handleClick = (value) =>{
  emit('currentStep', value)
}

</script>