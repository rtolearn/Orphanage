<template>

  

    <div class="card md:flex md:m-5">
        <div class="md:m-5 w-1/3 h-full self-center sm:m-auto sm:display-block image">
            <img :src="AboutUsImages"  alt="About Us picture" class="self-center" />
        </div>
        <Divider layout="vertical" />

        <div class="md:m-5 md:text-left w-2/3 h-auto sm:m-auto sm:display-block sm:text-center">
            <div> 
                <h1 class="font-sans font-black mb-5 text-2xl mt-5">About Us</h1>
            </div>
            <div>
                <div>
                    <h3 class="font-sans font-bold mb-2.5 text-lg">Welcome to [Orphanage Name]</h3>
                    <p class="font-sans mb-3 w-4.5/5 text-center"> 
                        At [Orphanage Name], we believe that every child deserves a loving and supportive environment to grow and thrive. 
                        Our mission is to provide a safe haven for children in need, offering them not just shelter, but a home filled with warmth, compassion, and 
                        opportunities for a brighter future.
                    </p>
                </div>
                <div>
                    <h3 class="font-sans font-bold mb-2.5 text-lg">Our Story</h3>
                    <p class="font-sans mb-10 w-4.5/5 text-center">
                        Founded in [Year], [Orphanage Name] was established with the vision of creating a nurturing community where children can find hope and happiness. 
                        Over the years, we have grown into a dedicated team of caregivers, educators, and volunteers who work tirelessly to ensure that 
                        each child receives the care and attention they need.
                    </p>
                </div>
               
            </div>
            <div >
                <h5 class="italic font-light text-base">You can find us via: </h5>
                <!-- Icon of Facebook, instagram LinkedIn, Email and Whatsapp,  -->
                <div class="flex justify-center align-item-center mt-5 mb-5 p-0">
                    <img class="mx-2" width="50" height="50" src="https://img.icons8.com/clouds/100/new-post.png" alt="new-post"/>
                    <img class="mx-2" width="50" height="50" src="https://img.icons8.com/clouds/100/facebook.png" alt="facebook"/>
                    <img class="mx-2" width="50" height="50" src="https://img.icons8.com/clouds/100/instagram-new--v3.png" alt="instagram-new--v3"/>
                    <img class="mx-2" width="50" height="50" src="https://img.icons8.com/clouds/100/linkedin.png" alt="linkedin"/>
                    <img class="mx-2" width="50" height="50" src="https://img.icons8.com/clouds/100/whatsapp.png" alt="whatsapp"/>
                </div>
            </div>
            

        </div>

    </div>





</template>


<script setup>
import AboutUsImages from '../AboutUsImages.svg'




</script>
