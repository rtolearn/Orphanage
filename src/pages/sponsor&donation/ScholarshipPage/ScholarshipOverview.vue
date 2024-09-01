<template>
  <div class="flex flex-col h-auto m-5">
    <div
      class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 font-medium"
    >
    <div class="m-5">
      <div class="flex justify-left items-center gap-5 m-1">
        <img :src="ScholarshipIcon" class="w-[2.5rem] h-auto" />
        <h1>Scholarship</h1>
      </div>
      <hr class="border-black border-t-2" />
      <div>
        <div>
          <h1
            class="font-bold text-sm sm:text-base md:text-lg lg:text-1xl xl:text-2xl"
          >
            Overview
          </h1>
          <hr class="border-black border-t-2" />
          <p class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl my-2">
            At [Organization Name], we believe in the power of education to
            change lives. Our Scholarship Program supports deserving students,
            helping them achieve academic success and contribute to society.
          </p>
        </div>
        <hr class="border-black border-t-2" />
        <div>
          <h1
            class="font-bold text-sm sm:text-base md:text-lg lg:text-1xl xl:text-2xl"
          >
            Why ?
          </h1>
          <hr class="border-black border-t-2" />
          <ul
            class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl my-2"
          >
            <li>
              <strong>Support Excellence: </strong>Ease students' financial
              burdens and help them excel
            </li>
            <li>
              <strong>Foster Leadership:</strong> Empower future leaders to make
              a difference.
            </li>
            <li>
              <strong>Leave a Legacy:</strong> Create a lasting impact on future
              generations.
            </li>
          </ul>
        </div>
        <hr class="border-black border-t-2" />
        <div>
          <h1
            class="font-bold text-sm sm:text-base md:text-lg lg:text-1xl xl:text-2xl"
          >
            Benefits:
          </h1>
          <hr class="border-black border-t-2" />
          <ul
            class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl my-2"
          >
            <li>
              <strong> Recognition:</strong> Acknowledge your contribution
              across our platforms.
            </li>
            <li>
              <strong>Engagement: </strong>Connect with and mentor the students
              you support.
            </li>
            <li>
              <strong>Brand Alignment:</strong> Showcase your commitment to
              education.
            </li>
          </ul>
        </div>
      </div>
    


      
    </div>
  </div>
  </div>
</template>

<script setup>
import ScholarshipIcon from "@/images/scholarship.png";
</script>
