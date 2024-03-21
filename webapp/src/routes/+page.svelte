<script lang="ts">
	export let data;

	function truncateText(text: string, maxLength: number) {
		if (text.length > maxLength) {
			return text.slice(0, maxLength) + '...';
		} else {
			return text;
		}
	}
</script>

<div class="my-4">
	<h1 class="text-center text-3xl font-bold">Hello my wonderful recipes!</h1>
</div>

{#await data}
	<p>Loading...</p>
{:then}
	<div class="flex flex-wrap p-20">
		{#each data.data as recipe}
			<div class="card w-full bg-primary text-primary-content mx-20 my-5">
				<div class="card-body">
					<h2 class="card-title">{recipe.attributes.title}</h2>
					<p>{truncateText(recipe.attributes.description, 160)}</p>
					<div class="card-actions justify-end">
						<a href="/recipe/{recipe.id}" class="btn">Cook Now</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/await}
