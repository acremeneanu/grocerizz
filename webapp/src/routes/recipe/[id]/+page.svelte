<script>
	export let data;
</script>

{#await data}
	<p>loading</p>
{:then}
	<div class="card-actions justify-start m-4">
		<a href="/" class="btn btn-primary">Go back</a>
	</div>

	<div class="hero bg-base-100 px-20">
		<div class="hero-content flex-col lg:flex-row">
			<img
				src={'http://localhost:1337' + data.attributes.main_picture.data.attributes.url}
				class="max-w-sm rounded-lg shadow-2xl"
				alt={data.attributes.main_picture.data.attributes.url}
			/>
			<div>
				<h1 class="text-5xl font-bold">{data.attributes.title}</h1>
				<p class="py-6">
					{'   ' + data.attributes.description}
				</p>
			</div>
		</div>
	</div>

	<div class="h-56 grid grid-auto-flow grid-cols-3 content-start">
		<div class="col-span-1 px-20">
			<h1 class="text-2xl">Ingredients</h1>
			<ul class="list-disc m-4">
				{#each data.attributes.ingredients as ingredient}
					{#each ingredient.children as child}
						<li class="list-inside">{child.text}</li>
					{/each}
				{/each}
			</ul>
		</div>

		{#if data.attributes.instructions}
			<div class="col-span-2 px-20">
				<h1 class="text-2xl">Instructions</h1>
				<ul class="list-decimal m-4">
					{#each data.attributes.instructions as instruction}
						{#each instruction.children as child}
							<li class="list-inside mt-4">{child.text}</li>
						{/each}
					{/each}
				</ul>
			</div>
		{/if}
	</div>
{/await}
