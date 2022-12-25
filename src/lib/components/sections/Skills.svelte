<script lang="ts">
	import SectionRoot from '$lib/components/sections/SectionRoot.svelte';
	import Button from '$lib/components/Button.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import { All_SKILLS } from '$lib/data/allSkills';

	type SkillInfo = typeof All_SKILLS[0]['skills'][0];

	let isOpen = false;
	let skillInfo: SkillInfo = {
		title: '',
		yearsOfExperience: '',
		content: ''
	};

	const openSkillInModal = (skill: SkillInfo) => {
		skillInfo = {
			...skillInfo,
			title: skill.title,
			yearsOfExperience: skill.yearsOfExperience,
			content: skill.content
		};
		isOpen = true;
	};
</script>

<SectionRoot heading="Skills">
	{#each All_SKILLS as item}
		<div class="mb-4">
			<h3 class="text-xl font-bold mb-2">{item.heading}</h3>
			<ul class="flex gap-4 flex-wrap">
				{#each item.skills as skill}
					<li>
						<Button
							class="bg-blue-100 text-blue-900 hover:bg-blue-200"
							on:click={() => openSkillInModal(skill)}
						>
							{skill.title}
						</Button>
					</li>
				{/each}
			</ul>
		</div>
	{/each}

	<Modal
		title={skillInfo.title}
		subTitle={skillInfo.yearsOfExperience}
		content={skillInfo.content}
		{isOpen}
		closeModal={() => (isOpen = false)}
	/>
</SectionRoot>
