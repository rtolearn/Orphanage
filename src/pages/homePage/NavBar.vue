<template>
	<div
		class="sticky top-0 h-[62px] flex items-center px-6 justify-between bg-white z-50"
	>
		<div class="flex">
			<!-- Logo -->
			<div class="w-[50px] h-[50px]">
				<a href="/">
					<img
						class="w-full h-full object-contain"
						src="@/images/logo.png"
						alt="Logo"
					/>
				</a>
			</div>
			<!-- Mobile Side Menu -->
			<div class="card flex justify-center lg:hidden">
				<Drawer v-model:visible="visible" header="Menu" class="!w-[15rem]">
					<NavLinks />
				</Drawer>
				<Button icon="pi pi-bars" @click="visible = true" text />
			</div>
		</div>
		<!-- Menu -->
		<NavLinks class="hidden lg:block" />
		<!-- Log In / Sign Up -->
		<div class="flex gap-4">
			
			<Button label="Log In" as="router-link" to="/sign-in" outlined />
			<Button label="Sign Up" as="router-link" to="/sign-up" />
		</div>
	</div>
</template>

<script>
import { ref } from "vue";
import NavLinks from "./NavLinks.vue";

export default {
	components: { NavLinks },
	setup() {
		const visible = ref(false);

		return { visible };
	},
};
</script>

<style></style>
