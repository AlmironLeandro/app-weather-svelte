<script>
	import getWeather from '../services/weather.service';
	import BoxData from '../Components/Box-data.svelte';

	getWeather();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Home weather app" />
</svelte:head>

<div class="content-app">
	<img
		class="img-weather"
		src="https://images.unsplash.com/photo-1558486012-817176f84c6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8d2VhdGhlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
		alt=""
	/>

	<section class="header-section">
		<div>
			<h1>Aplication weather</h1>
			<h4>
				This app was made on <a class="link-api" href="https://openweathermap.org/api"
					>Weather-api</a
				>
			</h4>
			<p>Loading</p>
		</div>
	</section>
	<main class="main-app">
		{#await getWeather()}
			<p class="loading">...loading</p>
		{:then weather}
			<div class="content-data">
				<div class="box-shadow">
					<h1>{weather.country}</h1>
					<h3>{weather.name}</h3>
				</div>
				<div class="children-container">
					<BoxData
						dataWeather={[
							`Temperature: ${weather.temp_c} °`,
							`Feels like: ${weather.feelslike_c} °`
						]}
					/>
					<BoxData
						dataWeather={[
							`Humidity: ${weather.humidity}%`,
							`Wind: ${weather.vis_km} km/h`,
							`Precipitation: ${weather.precip_in}`
						]}
					/>
				</div>
				<div class="weather">
					<p>{weather.text}</p>
					<img class="img-weather-png" src={weather.icon} alt="" />
				</div>
			</div>
		{/await}
	</main>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@1,300&display=swap');

	.img-weather-png {
		border-radius: 10%;
		width: 25%;
		height: 25%;
		object-fit: cover;
		position: absolute;
		z-index: -1;
	}

	.content-data {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 80%;
	}
	.weather {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: 3rem;
	}
	.children-container {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.box-child p {
		font-size: 1.2rem;
		color: #000;
		width: 100%;
		padding: 10px;
	}

	.box-shadow {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: 2rem;
	}
	.content-app {
		color: #fff;
		margin: auto;
		position: relative;
		width: 35%;
		height: 95vh;
		margin-top: 2vh;
	}
	.img-weather {
		border-radius: 10%;
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		z-index: -1;
	}
	.main-app {
		height: 100%;
	}

	/* Header and loading */

	.header-section {
		z-index: 1;
		background-color: rgb(1, 1, 1);
		width: 100%;
		height: 100%;
		position: absolute;
		font-family: 'IBM Plex Sans';
		text-align: center;
		text-transform: capitalize;
		display: flex;
		justify-content: center;
		align-items: center;
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
		animation: forwards show 4s;
	}

	@keyframes show {
		to {
			clip-path: polygon(50% 0, 50% 0, 50% 100%, 50% 100%);
		}
	}
	.header-section h1,
	h3,
	h4,
	p {
		font-family: 'IBM Plex Sans';
		font-size: 3rem;
		text-align: center;
		padding: 50px;
	}

	.link-api {
		text-decoration: none;
	}
	.link-api:visited {
		color: rgb(185, 185, 228);
	}

	@media screen and (max-width: 1170px) {
		.content-app {
			color: #fff;
			margin: auto;
			position: relative;
			width: 80%;
		}
	}

	@media screen and (max-width: 541px) {
		.content-app {
			color: #fff;
			margin: none;
			position: relative;
			width: 100%;
			height: 100vh;
		}
		.img-weather {
			border-radius: 0;
		}
	}

	@media screen and (max-width: 424px) {
		.children-container {
			flex-direction: column;
			gap: 2rem;
		}
	}
</style>
