<template>
	<div
		v-for="dino in dinos"
		:key="dino.id"
		class="card mb-10 shadow-xl w-full bg-slate-700 lg:w-1/2 lg:ml-1"
	>
		<figure class="bg-white">
			<img
				:src="dino._embedded['wp:featuredmedia']['0'].source_url"
				:alt="dino.title"
			/>
		</figure>
		<div class="card-body">
			<h2 class="justify-center card-title">{{ dino.title.rendered }}</h2>
			<div class="card-actions justify-center">
				<a :href="`dinos/${dino.slug}`" target="_blank" class="btn btn-primary"
					>Read more</a
				>
			</div>
		</div>
	</div>
</template>

<script>
import { getDinos } from '~/lib/api';
import { ref } from 'vue';
export default {
	async setup() {
		const dinos = ref([]);

		dinos.value = await getDinos();

		return {
			dinos,
		};
	},
};
</script>
