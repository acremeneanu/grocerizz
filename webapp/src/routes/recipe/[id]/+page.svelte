<script>
	export let data;
</script>

{#await data}
	<p>loading</p>
{:then}
	<a href="\"> Go back</a>
	<div>
		<h1>{data.attributes.title}</h1>
		<h2>{data.attributes.description}</h2>
	</div>
{/await}
