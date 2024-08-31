<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="card flex justify-center items-center font-[Poppins]">
      <Stepper value="1" class="w-4/5 h-auto">
        <StepList class="w-full h-auto">
          <Step value="1" class="text-xs">Introduction</Step>
          <Step value="2" class="text-xs">Description</Step>
          <Step value="3" class="text-xs">Others</Step>
          <Step value="4" class="text-xs">hahah</Step>
        </StepList>
  
        <StepPanels>
          <StepPanel v-slot="{ activateCallback }" value="1">
            <div class="flex w-full h-fit">
              <div
                class="p-3 border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950"
              >
                <!-- Introduce the scholarship a little bit -->
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
                      At [Organization Name], we believe in the power of education
                      to change lives. Our Scholarship Program supports deserving
                      students, helping them achieve academic success and
                      contribute to society.
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
                        <strong>Support Excellence: </strong>Ease students'
                        financial burdens and help them excel
                      </li>
                      <li>
                        <strong>Foster Leadership:</strong> Empower future leaders
                        to make a difference.
                      </li>
                      <li>
                        <strong>Leave a Legacy:</strong> Create a lasting impact
                        on future generations.
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
                    <ul class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl my-2">
                      <li>
                        <strong> Recognition:</strong> Acknowledge your
                        contribution across our platforms.
                      </li>
                      <li>
                        <strong>Engagement: </strong>Connect with and mentor the
                        students you support.
                      </li>
                      <li>
                        <strong>Brand Alignment:</strong> Showcase your commitment
                        to education.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="flex pt-6 justify-end">
              <Button
                label="Start"
                icon="pi pi-arrow-right"
                iconPos="right"
                @click="activateCallback('2')"
              />
            </div>
          </StepPanel>
  
          <StepPanel v-slot="{ activateCallback }" value="2">
            <div class="flex flex-col w-full">
              <div class="p-3 border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950">
                <!-- To-Do List Component -->
                <div>
                  <h1 class="font-bold text-lg mb-2">To-Do List</h1>
                  <input
                    v-model="toDoList.newTask"
                    type="text"
                    class="border rounded p-2 w-full"
                    placeholder="Enter a new requirement for the scholarship"
                  />
                  <button @click="addTask" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                    Add Task
                  </button>
                  <ol class="mt-4 pl-6 list-decimal">
                    <li
                      v-for="(task, index) in toDoList.tasks"
                      :key="index"
                      class="flex justify-between items-center mb-2"
                    >
                      <div >
               
                      {{index+1}}.{{ task.text }}
                      </div>
                      <button
                        @click="removeTask(index)"
                        class="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
  
            <div class="flex pt-6 justify-between">
              <Button
                label="Back"
                severity="secondary"
                icon="pi pi-arrow-left"
                @click="activateCallback('1')"
              />
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                @click="activateCallback('3')"
              />
            </div>
          </StepPanel>
  
          <StepPanel v-slot="{ activateCallback }" value="3">
            <div class="flex flex-col h-48">
              <div
                class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
              >
                Content III
              </div>
            </div>
            <div class="pt-6">
              <Button
                label="Back"
                severity="secondary"
                icon="pi pi-arrow-left"
                @click="activateCallback('2')"
              />
              <Button
                label="Next"
                icon="pi pi-arrow-right"
                iconPos="right"
                @click="activateCallback('4')"
              />
            </div>
          </StepPanel>
  
          <StepPanel v-slot="{ activateCallback }" value="4">
            <div class="flex flex-col h-48">
              <div
                class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950 flex-auto flex justify-center items-center font-medium"
              >
                Content IV
              </div>
            </div>
            <div class="pt-6">
              <Button
                label="Back"
                severity="secondary"
                icon="pi pi-arrow-left"
                @click="activateCallback('3')"
              />
            </div>
          </StepPanel>
        </StepPanels>
      </Stepper>
    </div>
  </template>
  
  <script setup>
  import { reactive } from "vue";
  import Stepper from "primevue/stepper";
  import StepList from "primevue/steplist";
  import StepPanels from "primevue/steppanels";
  import Step from "primevue/step";
  import StepPanel from "primevue/steppanel";
  import Button from "primevue/button";
  import ScholarshipIcon from "@/images/scholarship.png";
  
  const toDoList = reactive({
    newTask: "",
    tasks: [],
  });
  
  function addTask() {
    if (toDoList.newTask.trim() !== "") {
      toDoList.tasks.push({ text: toDoList.newTask });
      toDoList.newTask = "";
    }
  }
  
  function removeTask(index) {
    toDoList.tasks.splice(index, 1);
  }
  </script>
  
  <style>
  
  </style>
  