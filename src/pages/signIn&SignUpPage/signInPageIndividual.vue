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
          <!-- <a class="block text-blue-600" href="#">
            <span class="sr-only">Home</span>
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
          </a> -->

          <h1
            class="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl flex"
          >
            Welcome Back!
            
          </h1>

          <p class="mt-4 leading-relaxed text-gray-500">
            We're glad to see you again. 
            Log in to stay connected with our community, manage your contributions, and learn about our latest initiatives. 
            Your support helps us provide a loving home and brighter future for the children. If you're new, please register here to join our cause and make a difference.
          </p>

          <form action="#" class="mt-8 p-10 grid grid-cols-6 gap-6 border-2 border-solid border-black rounded-md">
            <!-- <div class="col-span-6 sm:col-span-3">
              <label
                for="FirstName"
                class="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>

              <input
                type="text"
                id="FirstName"
                name="first_name"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div> -->

            <!-- <div class="col-span-6 sm:col-span-3">
              <label
                for="LastName"
                class="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>

              <input
                type="text"
                id="LastName"
                name="last_name"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div> -->
            <h1 class="col-span-6 text-center m-2.5 text-3xl">Sign in to your account</h1>
            <div class="col-span-6">
              <!-- <label
                for="Email"
                class="block text-sm font-medium text-gray-700"
              >
                Email
              </label> -->

              <input
                type="email"
                id="Email"
                name="email"
                class=" p-5 w-full rounded-md border-1 border-solid border-black bg-green text-sm text-gray-500 shadow-sm "
                placeholder="Enter Email"

              />
            </div>

            <div class="col-span-6 col-span-6">
              <!-- <label
                for="Password"
                class="block text-sm font-medium text-gray-700"
              >
                Password
              </label> -->

              <input
                type="password"
                id="Password"
                name="password"
                class="m-1 p-5 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                placeholder="Enter Password"
              />
            </div>

            <!-- <div class="col-span-6 sm:col-span-3">
              <label
                for="PasswordConfirmation"
                class="block text-sm font-medium text-gray-700"
              >
                Password Confirmation
              </label>

              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div> -->

            <div class="col-span-6 m-3">
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

            <!-- <div class="col-span-6">
              <p class="text-sm text-gray-500">
                By creating an account, you agree to our
                <a href="#" class="text-gray-700 underline">
                  terms and conditions
                </a>
                and
                <a href="#" class="text-gray-700 underline">privacy policy</a>.
              </p>
            </div> -->

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4 sm:justify-center m-3">
              <button
                class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
              >
                Create an account
              </button>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                Don't have an account yet?
                <a href="#" class="text-gray-700 underline">Sign Up</a>.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>
