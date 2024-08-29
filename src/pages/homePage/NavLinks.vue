<template>
	<nav class="">
		<ul class="flex flex-col gap-8 lg:flex-row lg:gap-12">
			<li>
				<a :class="{ 'font-bold': currentSection === 'home' }" href="#home"
					>Home</a
				>
			</li>
			<li>
				<a :class="{ 'font-bold': currentSection === 'about' }" href="#about"
					>About</a
				>
			</li>
			<li>
				<a
					:class="{ 'font-bold': currentSection === 'donations' }"
					href="#donations"
					>Donations</a
				>
			</li>
			<li>
				<a
					:class="{ 'font-bold': currentSection === 'marketplace' }"
					href="#marketplace"
					>Marketplace</a
				>
			</li>
			<li>
				<a
					:class="{ 'font-bold': currentSection === 'adoption' }"
					href="#adoption"
					>Adoption</a
				>
			</li>
		</ul>
	</nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
	setup() {
		const currentSection = ref("home");

		const onScroll = () => {
			const sections = [
				"home",
				"about",
				"donations",
				"marketplace",
				"adoption",
			];
			for (let i = sections.length - 1; i >= 0; i--) {
				const section = sections[i];
				const element = document.getElementById(section);
				if (element && window.scrollY >= element.offsetTop - 62) {
					currentSection.value = section;
					break;
				}
			}
		};

		onMounted(() => {
			window.addEventListener("scroll", onScroll);
			onScroll();
		});

		onUnmounted(() => {
			window.removeEventListener("scroll", onScroll);
		});

		return { currentSection };
	},
};
</script>

<style></style>
