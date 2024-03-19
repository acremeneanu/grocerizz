<script lang="ts" context="module">
	let recipes = [];

	const load = async () => {
		const res = await fetch('http://localhost:1337/api/recipes');
		const response = await res.json();
		console.log(response);
		return response.data;
	};
</script>

<script lang="ts">
	// export let recipes: any;
</script>

<div class="my-4">
	<h1 class="text-center text-3xl font-bold">My wonderful recipes</h1>
</div>

{#await load()}
	<p>Loading...</p>
{:then recipes}
	<ul>
		{#each recipes as recipe}
			<li>
				<a href="/recipe/{recipe.id}">{recipe.attributes.title}</a>
			</li>
		{/each}
	</ul>
{/await}
