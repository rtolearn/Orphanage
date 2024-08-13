<!-- eslint-disable vue/multi-word-component-names -->
<!-- for the selection option, use the form onsubmit to verify it, the rest are validated individually -->
<template>
  <section class="bg-white" id="sign-in-form">
    <Introduction />
    <!-- Part of the form to sign in -->
    <Accordion value="0" class="w-full h-auto m-auto block">
      <AccordionPanel value="0">
        <AccordionHeader>
          <div class="w-full">
            <h1>Male</h1>
            <!-- Implement the progression bar -->
            <ProgressBar :value="progressionBarMale">
              {{ progressionBarMale }}/100
            </ProgressBar>
          </div>
        </AccordionHeader>
        <AccordionContent class="w-full lg:w-3/5 h-full m-auto block mt-5">
          <div>
            <!-- For the form of Male information -->
            <formMale v-model="progressionBarMale" />
          </div>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="1">
        <AccordionHeader
          >Female
          <div class="card flex justify-center">
            <Knob v-model="valueMarriageProve" disabled />
          </div>
        </AccordionHeader>
        <AccordionContent>
          <div class="w-4/5 lg:w-3/5 h-full m-auto block mt-5">
            <!-- For the form of Company -->

            <form
              action="#"
              class="mt-8 p-5 grid grid-cols-6 gap-6 border-2 border-solid border-black rounded-md"
            >
              <h1 class="col-span-6 text-center m-2.5 text-lg sm:text-xl">
                Personal Information
              </h1>
              <Message class="col-span-6">Credential Information</Message>
              <div class="col-span-6 sm:col-span-6">
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Name"
                  required
                />
              </div>
              <div class="col-span-6 sm:col-span-6">
                <input
                  type="text"
                  id="IC_number"
                  name="IC_number"
                  class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="IC Number"
                />
              </div>

              <div
                class="col-span-6 sm:col-span-6 border border-solid border-gray-350 flex justify-between items-center"
              >
                <div class="col-span-6 sm:col-span-3">
                  <select
                    name="statesSelect"
                    id="statesSelect"
                    class="m-1 p-1 w-4/5 rounded-sm border border-solid border-gray-450 text-gray-700 sm:text-sm"
                  >
                    <option value="">State / Region</option>
                    <optgroup label="J">
                      <option value="Johor">Johor</option>
                    </optgroup>

                    <optgroup label="K">
                      <option value="Kedah">Kedah</option>
                      <option value="Kelantan">Kelantan</option>
                    </optgroup>

                    <optgroup label="M">
                      <option value="Malacca">Malacca</option>
                    </optgroup>

                    <optgroup label="N">
                      <option value="Negeri Sembilan">Negeri Sembilan</option>
                    </optgroup>

                    <optgroup label="P">
                      <option value="Pahang">Pahang</option>
                      <option value="Penang">Penang</option>
                      <option value="Perak">Perak</option>
                      <option value="Perlis">Perlis</option>
                    </optgroup>

                    <optgroup label="S">
                      <option value="Sabah">Sabah</option>
                      <option value="Sarawak">Sarawak</option>
                      <option value="Selangor">Selangor</option>
                    </optgroup>

                    <optgroup label="T">
                      <option value="Terengganu">Terengganu</option>
                    </optgroup>

                    <optgroup label="F">
                      <option value="Kuala Lumpur">Kuala Lumpur</option>
                      <option value="Putrajaya">Putrajaya</option>
                      <option value="Labuan">Labuan</option>
                    </optgroup>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-3 m-1 p-1">
                  <span class="background-gray"> Malaysia </span>
                </div>
              </div>

              <div class="col-span-6">
                <input
                  type="email"
                  id="Email"
                  name="email"
                  class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Email"
                />
              </div>

              <div class="col-span-6">
                <input
                  type="email"
                  id="contact_number"
                  name="contact_number"
                  class="mt-1 p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Contact Number"
                />
              </div>

              <div class="col-span-6 w-full">
                <select
                  v-model="careerStatus"
                  name="careerStatus"
                  id="careerStatus"
                  class="w-full rounded-sm p-1 border border-solid border-gray-350 text-gray-700 sm:text-sm"
                  placeholder="Career Status"
                >
                  <option value="">Career Status</option>
                  <option value="employed_full_time">
                    Employed (Full-Time)
                  </option>
                  <option value="employed_part_time">
                    Employed (Part-Time)
                  </option>
                  <option value="self_employed">Self-Employed</option>
                  <option value="freelancer">Freelancer</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="retired">Retired</option>
                  <option value="homemaker">Homemaker</option>
                  <option value="on_leave">
                    On Leave (e.g., maternity, medical)
                  </option>
                  <option value="seeking_employment">Seeking Employment</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="other">Other (with a space to specify)</option>
                </select>
              </div>
              <div class="col-span-6" v-if="careerStatus === 'other'">
                <input
                  type="text"
                  id="career_status_other"
                  name="career_status_other"
                  class="p-3 w-full rounded-md border border-solid border-gray-350 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Others:....."
                />
              </div>

              <div
                class="p-1 col-span-6 w-full border border-solid border-gray-350"
                v-if="careerStatus !== '' && careerStatus !== 'retired'"
              >
                <select
                  name="industrySelect"
                  id="industrySelect"
                  class="w-full rounded-sm border-gray-300 text-gray-700 sm:text-sm"
                >
                  <option value="">Select Industry</option>
                  <option value="technology">Technology</option>
                  <option value="environment">Environment</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="construction">Construction</option>
                  <option value="retail">Retail</option>
                  <option value="transportation">Transportation</option>
                  <option value="energy">Energy</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="real_estate">Real Estate</option>
                  <option value="telecommunications">Telecommunications</option>
                  <option value="hospitality">Hospitality</option>
                  <option value="media">Media</option>
                  <option value="legal">Legal</option>
                  <option value="nonprofit">Nonprofit</option>
                  <option value="government">Government</option>
                </select>
              </div>
              <Message class="col-span-6">Health Condition</Message>
              <div class="col-span-6">
                <div>
                  <h1>Medical Check (physically):</h1>
                </div>
                <div
                  class="col-span-6 flex flex-col sm:flex-row mt-3.5 gap-6 items-center justify-center"
                >
                  <Toast />
                  <FileUpload
                    ref="fileupload"
                    mode="basic"
                    name="demo[]"
                    url="/api/upload"
                    accept="image/*"
                    :maxFileSize="100000000000000"
                    @upload="onUpload"
                  />
                  <Button label="Upload" @click="upload" severity="contrast">
                  </Button>
                </div>
              </div>

              <div class="col-span-6">
                <div>
                  <h1>Medical Check (mentally):</h1>
                </div>
                <div
                  class="col-span-6 flex flex-col sm:flex-row mt-3.5 gap-6 items-center justify-center"
                >
                  <Toast />
                  <FileUpload
                    ref="fileupload"
                    mode="basic"
                    name="demo[]"
                    url="/api/upload"
                    accept="image/*"
                    :maxFileSize="100000000000000"
                    @upload="onUpload"
                    required
                  />
                  <Button label="Upload" @click="upload" severity="contrast">
                  </Button>
                </div>
              </div>

              <Message class="col-span-6">Financial Condition</Message>
              <div class="col-span-6">
                <div>
                  <h1>Salary Slip:</h1>
                </div>
                <div
                  class="col-span-6 flex flex-col sm:flex-row mt-3.5 gap-6 items-center justify-center"
                >
                  <Toast />
                  <FileUpload
                    ref="fileupload"
                    mode="basic"
                    name="demo[]"
                    url="/api/upload"
                    accept="image/*"
                    :maxFileSize="100000000000000"
                    @upload="onUpload"
                  />
                  <Button label="Upload" @click="upload" severity="contrast">
                  </Button>
                </div>
              </div>
              <div class="col-span-6 flex justify-center items-center p-5 m-5">
                <Button label="Submit"> </Button>
              </div>
            </form>
          </div>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel value="2">
        <AccordionHeader>
          <div>Prove of Marriage</div>
          <div class="card flex justify-enditems-center">
            <Knob v-model="valueMarriageProve" disabled />
          </div>
        </AccordionHeader>

        <AccordionContent>
          <div class="w-4/5 lg:w-3/5 h-full m-auto block mt-5">
            <!-- For the form of Company -->

            <form
              action="#"
              class="mt-8 p-5 grid grid-cols-6 gap-6 border-2 border-solid border-black rounded-md"
            >
              <h1 class="col-span-6 text-center m-2.5 text-lg sm:text-xl">
                Marriage
              </h1>
              <Message class="col-span-6">Marriage Certificate</Message>
              <div class="col-span-6">
                <div>
                  <h1>Cert:</h1>
                </div>
                <div
                  class="w-full h-auto m-auto block mt-2.5 mb-2.5 sm:flex sm:items-center sm:justify-center text-xs"
                >
                  <Toast />
                  <FileUpload
                    name="salary_slip"
                    url="/api/upload"
                    @upload="onAdvancedUpload($event)"
                    :multiple="true"
                    accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
                    :maxFileSize="1000000"
                    class="text-xs sm:text-md"
                  >
                    <template #empty>
                      <span>Drag and drop files to here to upload.</span>
                    </template>
                  </FileUpload>
                </div>
              </div>
              <div class="col-span-6 flex justify-center items-center p-5 m-5">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
    <div class="col-span-6 flex justify-center items-center p-5 m-5">
      <!-- Here we need to apply some logic to check for all the value of the knob before we can click this button
       1) Disable this button first before all the necessaary information have been filled in -->
      <router-link to="">
        <button label="Complete" @click="applicationProgression"></button>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Accordion from "primevue/accordion";
import AccordionPanel from "primevue/accordionpanel";
import AccordionHeader from "primevue/accordionheader";
import AccordionContent from "primevue/accordioncontent";
import Message from "primevue/message";
import formMale from "./formMale.vue";
import Introduction from "./introduction.vue";

import ProgressBar from "primevue/progressbar";

let progressionBarMale = ref(0);
console.log(progressionBarMale.value)
</script>
