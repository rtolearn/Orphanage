<template>
  <div class="flex flex-col w-full p-5">
    <div
      class="p-3 border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 dark:bg-surface-950"
    >
      <div>
        <h1 class="font-bold text-lg mb-2">To-Do List</h1>
        <input
          v-model="toDoList.newTask"
          type="text"
          class="border rounded p-2 w-full"
          placeholder="Enter a new requirement for the scholarship"
        />
        <button
          @click="addTask"
          class="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
        <ol class="mt-4 pl-6 list-decimal">
          <li
            v-for="(task, index) in toDoList.tasks"
            :key="index"
            class="flex justify-between items-center mb-2"
          >
            <div>{{ index + 1 }}. {{ task.text }}</div>
            <button
              @click="removeTask(index)"
              class="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        </ol>
        <div class="py-6 flex gap-2">
          <Button severity="secondary" label="Back" @click="handleClick(`1`)" />
          <Button label="Next" @click="handleClick(`3`)" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";

const emit = defineEmits(["currentStep", "collectDataRequirement"]);

const handleClick = (value) => {
  if(toDoList.tasks.length >= 3){
    emit("collectDataRequirement", [...toDoList.tasks]);
  emit("currentStep", value);
  }
  else{
    alert("At least three requirements are listed")
  }
  
};

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
