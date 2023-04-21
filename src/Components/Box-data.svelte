<script>
	/**
	 * @type {any}
	 */
	export let dataWeather;
</script>

<div class="box-child">
	{#each dataWeather as data}
		<p>{data}</p>
	{/each}
</div>

<style>
	.box-child {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		border-radius: 10px;
		background-color: #ffffff7f;
		height: 190px;
		width: 200px;
		color: #000;
	}
</style>
