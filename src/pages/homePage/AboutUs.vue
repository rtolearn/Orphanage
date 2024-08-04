<template>
    <div id="aboutus" class="card bg-yellow-200 m-auto block text-center w-full md:flex ">
        <div class="w-4/5 p-5 h-auto m-auto block ">
            <img :src="AboutUsImages" alt="About Us picture" />
        </div>
        <Divider layout="vertical" />

        <div class="w-4/5
         h-auto m-auto block text-center md:text-left">
            <div> 
                <h1 class=" font-sans font-black mb-5 text-2xl  ">About Us</h1>
            </div>
            <div>
                <div>
                    <h3 class="font-sans font-bold mb-2.5 text-lg ">Welcome to [Orphanage Name]</h3>
                    <p class="font-sans mb-3"> 
                        At [Orphanage Name], we believe that every child deserves a loving and supportive environment to grow and thrive. 
                        Our mission is to provide a safe haven for children in need, offering them not just shelter, but a home filled with warmth, compassion, and 
                        opportunities for a brighter future.
                    </p>
                </div>
                <div>
                    <h3 class="font-sans font-bold mb-2.5 text-lg">Our Story</h3>
                    <p class="font-sans mb-10 ">
                        Founded in [Year], [Orphanage Name] was established with the vision of creating a nurturing community where children can find hope and happiness. 
                        Over the years, we have grown into a dedicated team of caregivers, educators, and volunteers who work tirelessly to ensure that 
                        each child receives the care and attention they need.
                    </p>
                </div>
               
            </div>
            <div >
                <h5 class="italic font-light text-base">You can find us via: </h5>
                <!-- Icon of Facebook, instagram LinkedIn, Email and Whatsapp,  -->
                <div class="flex justify-center items-center   p-8">
                    <img class="mx-2 hover:scale-150 transition-transform duration-100 w-1/5 h-auto"  src="https://img.icons8.com/clouds/100/new-post.png" alt="new-post"/>
                    <img class="mx-2 hover:scale-150 transition-transform duration-100 w-1/5 h-auto"  src="https://img.icons8.com/clouds/100/facebook.png" alt="facebook"/>
                    <img class="mx-2 hover:scale-150 transition-transform duration-100 w-1/5 h-auto"  src="https://img.icons8.com/clouds/100/instagram-new--v3.png" alt="instagram-new--v3"/>
                    <img class="mx-2 hover:scale-150 transition-transform duration-100 w-1/5 h-auto"  src="https://img.icons8.com/clouds/100/linkedin.png" alt="linkedin"/>
                    <img class="mx-2 hover:scale-150 transition-transform duration-100 w-1/5 h-auto"  src="https://img.icons8.com/clouds/100/whatsapp.png" alt="whatsapp"/>
                </div>
            </div>
        </div>

    </div>





</template>


<script setup>
import AboutUsImages from '../AboutUsImages.svg'




</script>
