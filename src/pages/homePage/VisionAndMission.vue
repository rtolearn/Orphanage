<template>
	<div class="bg-white" id="vision&mission">
		<div class="text-center w-full m-auto p-5 block">
			<h1 class="font-[Poppins] text-2xl font-bold p-5">Vision & Mission</h1>
			<h5 class="font-[Poppins] text-sm">
				Our vision is a world where every child, regardless of their background
				or circumstances, has the opportunity to thrive. We strive to break the
				cycle of poverty, abandonment, and despair by ensuring that all children
				in our care grow up in an environment filled with love, compassion, and
				opportunities. We envision a future where each child can realize their
				full potential and contribute positively to society.
			</h5>
		</div>
		<!-- Display item via loop -->
		<div
			class="w-full p-5 flex flex-col md:flex-row justify-center gap-4 text-center"
		>
			<div
				v-for="item in displayContent"
				:key="item.id"
				class="w-full block rounded-xl bg-green-100 py-4 sm:py-10 px-3 shadow-inner-custom hover:cursor-pointer"
			>
				<img
					:src="item.img"
					alt="Icon 1"
					class="w-[4rem] h-[4rem] mb-5 m-auto block"
				/>
				<h4
					class="w-full h-auto text-sm text-center font-bold rounded border border-green-400 bg-green-800 text-white px-3"
				>
					{{ item.title }}
				</h4>
				<p class="px-auto mt-1 text-xs sm:text-base text-white-500">
					{{ item.content }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import icon1 from "@/images/vision&mission_icon1.svg";
import icon2 from "@/images/vision&mission_icon2.svg";
import icon3 from "@/images/vision&mission_icon3.svg";

const displayContent = [
	{
		img: icon1,
		title: "Provide Comprehensive Care",
		content: `We are committed to offering a safe and nurturing environment where
    every child’s basic needs—such as shelter, nutrition, and
    healthcare—are met with care and compassion. Our goal is to ensure
    that each child feels secure and supported, allowing them to focus on
    growing and thriving.`,
	},
	{
		img: icon2,
		title: "Empower Through Education",
		content: ` Education is the key to breaking the cycle of poverty and providing a
          brighter future. We strive to equip our children with quality
          education and life skills, enabling them to pursue their dreams and
          become confident, self-reliant individuals who can positively impact
          their communities.`,
	},
	{
		img: icon3,
		title: "Foster a Sense of Belonging",
		content: `We believe that every child deserves a place to call home and a
          community that cares. By cultivating a supportive and loving
          environment, we help our children build lasting relationships, develop
          a strong sense of self-worth, and create a foundation for a hopeful
          and fulfilling future.`,
	},
];
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
