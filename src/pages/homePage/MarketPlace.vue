<template>
	<!--
      Heads up! 👋
    
      This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
    -->

  <section
    class="overflow-hidden bg-blue-200 sm:grid sm:grid-cols-2 sm:items-center"
    id="marketplace"
  >
    <img
      alt=""
      src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      class="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
    />
    <div class="p-8 md:p-12 lg:px-16 lg:py-24">
      <div
        class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
      >
        <p
          class="text-sm text-center sm:text-left text-gray-500 md:mt-4 md:block text-left"
        >
          Shop with a Purpose
        </p>
        <h2
          class="text-center sm:text-left text-2xl font-bold text-gray-900 md:text-3xl text-left"
        >
          Market Place
        </h2>

        <p
          class="text-center sm:text-left text-gray-500 md:mt-4 md:block text-left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
          tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
          et fermentum, augue. Aliquet amet volutpat quisque ut interdum
          tincidunt duis.
        </p>

        <div class="mt-4 md:mt-8">
          <router-link to="/market">
            <button
              class="items-left inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </button></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
