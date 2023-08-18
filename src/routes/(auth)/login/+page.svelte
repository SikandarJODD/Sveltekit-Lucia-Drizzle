<script>
	import { enhance } from '$app/forms';
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="card flex-shrink-0 w-full max-w-sm bg-base-100 shadow-lg">
		<div class="card-body">
			<div class="prose prose-h2:text-3xl text-center">
				<h2>Log In to Continue</h2>
			</div>
			<form method="POST" use:enhance>
				<div class="form-control">
					<label class="label" for="email">
						<span class="label-text">Email</span>
					</label>
					<input
						type="text"
						placeholder="email"
						class="input hover:border-gray-400 border-gray-300"
						id="email"
						name="email"
						autofocus
					/>
				</div>
				<div class="form-control">
					<label class="label" for="password">
						<span class="label-text">Password</span>
					</label>
					<input
						type="password"
						placeholder="password"
						class="input hover:border-gray-400 border-gray-300"
						id="password"
						name="password"
					/>
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-outline" type="submit">Login</button>
				</div>
			</form>
			<div class="form-control mt-2 ml-1">
				<div>No Account? <a href="/signup" class="underline text-primary">Sign Up</a></div>
			</div>
		</div>
	</div>
</div>
