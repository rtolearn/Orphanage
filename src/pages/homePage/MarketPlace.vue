<template>
  <!--
      Heads up! 👋
    
      This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
    -->

  <section
    class="overflow-hidden bg-white sm:grid sm:grid-cols-2 sm:items-center"
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
          class="hidden sm:block text-center sm:text-left text-gray-500 md:mt-4 md:block text-left"
        >
          Our marketplace offers a selection of handcrafted items made by the
          children and local artisans. By purchasing from our marketplace,
          you’re not just acquiring a beautiful product—you’re directly
          contributing to the well-being and future of our children. All
          proceeds go towards funding our programs and supporting the orphanage.
          The revenue generated from our marketplace goes directly into
          providing better care, education, and opportunities for the children.
          It also helps to sustain the orphanage’s day-to-day operations,
          ensuring that we can continue our mission of transforming lives.
        </p>

        <div class="mt-4 md:mt-8">
          <router-link to="/market">
            <button
              class="inline-block sm:flex sm:justify-left rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Shop Now
            </button></router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
