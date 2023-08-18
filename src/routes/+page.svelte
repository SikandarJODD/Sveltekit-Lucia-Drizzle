<script lang="ts">
	import { enhance } from '$app/forms';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="p-10 md:p-20">
	<div class="prose">
		<div class="md:w-[80vw] prose-h1:md:text-5xl">
			<h1>
				Auth Using <span
					class="from-sky-600 to-sky-500 bg-gradient-to-b bg-clip-text text-transparent"
					>Lucia - Supabase - Drizzle ORM</span
				>
			</h1>
		</div>
	</div>
	<div class="flex justify-center md:justify-start">
		<div class="border p-4 gap-4 flex w-fit rounded-md border-slate-400">
			<a href="/login" class="btn-sm btn capitalize btn-outline">Login</a>
			<a href="/signup" class="btn-sm btn capitalize btn-outline">Create Account</a>
		</div>
	</div>
	<div>
		<h1>Profile</h1>
		<!-- <p>User id: {data.userId}</p> -->
		<p>Email: {data.username}</p>
		<form method="post" action="?/logout" use:enhance>
			<input type="submit" class="btn btn-sm btn-outline my-3 capitalize" value="Sign out" />
		</form>
	</div>
</div>
