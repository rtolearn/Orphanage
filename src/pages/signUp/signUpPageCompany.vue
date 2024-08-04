<template>
  <!--
        Heads up! 👋
      
        Plugins:
          - @tailwindcss/forms
      -->

  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <aside
        class="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
      >
        <img
          alt=""
          src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </aside>

      <main
        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div class="max-w-xl lg:max-w-3xl">
          <svg
            width="35"
            height="40"
            viewBox="0 0 35 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8"
          >
            <path
              d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
              fill="var(--p-primary-color)"
            />
            <path
              d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
              fill="var(--p-text-color)"
            />
          </svg>

          <h1
            class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
          >
            Join Our Community
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500">
            Welcome! We're excited to have you with us. +By creating an account,
            you'll be able to support our mission, stay updated on our
            activities, and connect with a community dedicated to helping
            children in need. Your involvement makes a real difference in the
            lives of the children we serve. Please fill out the form below to
            get started and become a valued member of our cause.
          </p>

          <form
            action="#"
            class="mt-8 p-10 grid grid-cols-6 gap-6 border-2 border-solid border-black rounded-md"
          >
            <h1 class="col-span-6 text-center m-2.5 text-3xl">
              Sign Up an Account
            </h1>
            <div class="col-span-6 sm:col-span-6">
              <input
                type="text"
                id="CompanyName"
                name="company_name"
                class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Company Name"
              />
            </div>

            <div
              class="col-span-6 sm:col-span-6 flex justify-between items-center"
            >
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="LastName"
                  class="block text-sm font-medium text-gray-700"
                >
                  Company started at:
                </label>

                <input
                  type="date"
                  id="LastName"
                  name="last_name"
                  class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  placeholder="Company start at"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <select
                  name="industrySelect"
                  id="industrySelect"
                  class="mt-1.5 p-2 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
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
            </div>

            <div
              class="col-span-6 sm:col-span-6 flex justify-between items-center"
            >
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="statesSelect"
                  class="text-sm font-medium text-gray-900"
                >
                  State / Region
                </label>

                <select
                  name="statesSelect"
                  id="statesSelect"
                  class="mt-1.5 p-2 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                >
                  <option value="">Please select</option>
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

              <div class="col-span-6 sm:col-span-3">
                <span class="background-gray"> Malaysia </span>
              </div>
            </div>

            <div class="col-span-6">
              <input
                type="email"
                id="Email"
                name="email"
                class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Email"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <input
                type="password"
                id="Password"
                name="password"
                class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Password"
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Password Confirmation"
              />
            </div>

            <div class="col-span-6">
              <input
                type="email"
                id="Email"
                name="email"
                class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Office Number"
              />
            </div>

            <div class="col-span-6">
              <input
                type="email"
                id="Email"
                name="email"
                class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Company SSN"
              />
            </div>

            <div class="col-span-6">
              <input
                type="email"
                id="Email"
                name="email"
                class="mt-1 p-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Address"
              />
            </div>
            <div class="col-span-6">
              <label for="MarketingAccept" class="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  class="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                />

                <span class="text-sm text-gray-700">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>

            <div class="col-span-6">
              <p class="text-sm text-gray-500">
                By creating an account, you agree to our
                <a href="#" class="text-gray-700 underline">
                  terms and conditions
                </a>
                and
                <a href="#" class="text-gray-700 underline">privacy policy</a>.
              </p>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Create an account
              </button>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <a href="#" class="text-gray-700 underline">Log in</a>.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>
