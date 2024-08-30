<template>
	<nav class="">
		<ul class="flex flex-col gap-8 lg:flex-row lg:gap-12">
			<li>
				<a
					:class="{ 'font-bold': isRootPath && currentSection === 'home' }"
					:href="isRootPath ? '#home' : '/'"
					>Home</a
				>
			</li>
			<li>
				<a
					:class="{ 'font-bold': currentSection === 'about' }"
					:href="isRootPath ? '#about' : '/#about'"
					>About</a
				>
			</li>
			<li>
				<a
					:class="{
						'font-bold':
							currentSection === 'donations' || currentPath === '/donations',
					}"
					:href="isRootPath ? '#donations' : '/donations'"
					>Donations</a
				>
			</li>
			<li>
				<a
					:class="{
						'font-bold':
							currentSection === 'marketplace' ||
							currentPath === '/marketplace',
					}"
					:href="isRootPath ? '#marketplace' : '/marketplace'"
					>Marketplace</a
				>
			</li>
			<li>
				<a
					:class="{
						'font-bold':
							currentSection === 'adoption' || currentPath === '/adoption',
					}"
					:href="isRootPath ? '#adoption' : '/adoption'"
					>Adoption</a
				>
			</li>
		</ul>
	</nav>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

export default {
	setup() {
		const route = useRoute();
		const currentPath = route.path;
		const isRootPath = route.path === "/";

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
			if (isRootPath) {
				window.addEventListener("scroll", onScroll);
				onScroll();
			}
		});

		onUnmounted(() => {
			if (isRootPath) {
				window.removeEventListener("scroll", onScroll);
			}
		});

		return { isRootPath, currentPath, currentSection };
	},
};
</script>

<style></style>
