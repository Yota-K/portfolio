<script lang="ts">
	import SectionRoot from '$lib/components/sections/SectionRoot.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<SectionRoot heading="Contact">
	<p>お問い合わせは以下のフォームよりお願いします。</p>
	<form class="mt-4" action="">
		<div class="flex flex-col gap-4">
			<div>
				<label class="block text-gray-700 text-sm font-bold mb-2 dark:text-white" for="name"
					>お名前</label
				>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="name"
					name="name"
					type="text"
					required
				/>
			</div>
			<div>
				<label class="block text-gray-700 text-sm font-bold mb-2 dark:text-white" for="email"
					>メールアドレス</label
				>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="email"
					name="email"
					type="email"
					required
				/>
			</div>
			<div>
				<label class="block text-gray-700 text-sm font-bold mb-2 dark:text-white" for="content"
					>お問い合わせ内容</label
				>
				<textarea
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
					id="content"
					name="content"
					cols="30"
					rows="10"
					required
				/>
			</div>
			<div class="text-center">
				<Button
					class="bg-blue-600 text-white lg:w-80 w-full"
					fontSize="text-xl"
					fontWeight="font-bold">送信</Button
				>
			</div>
		</div>
	</form>
</SectionRoot>
