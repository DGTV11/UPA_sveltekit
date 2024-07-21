<section>
	<h2>Authentication</h2>
	<form method="POST" action="?/login">
		<label for="email">Email</label>
		<input id="email" name="email" type="email" />
		<label for="password">Password</label>
		<input id="password" name="password" type="password" />

		<input type="submit" value="Login" />
		<input type="submit" value="Sign up" formaction="?/signup" />
	</form>
</section>