<script lang>
	// export let data;
	export let form;
</script>

<section>
	<h2>Login</h2>
	<form method="POST">
		{#if form?.invalidUser}<p class="error">Invalid credentials!</p>{/if}
		<label for="username">Username:</label>
		<input type="text" id="username" name="username" value={form?.username ?? ''} />
		<label for="password">Password:</label>
		<input type="password" id="password" name="password" />
		<input type="submit" value="submit" />
	</form>
</section>
