<script lang="ts">
    import DiceInput from "../../../components/DiceInput.svelte";
    import {Modal} from 'flowbite-svelte';

    let showModal: boolean = false;
</script>

<h1>3 Dice Tracker/Game</h1>

<div id="tracker" class="flex flex-col gap-[3vh]">
    <DiceInput diceCount={3}/>
</div>

<div class="max-w-[80vw] flex flex-col flex-wrap gap-[2vh] items-center
        sm:max-w-[50vw]">
    <p>Playing for the first time? Or did you forget how this game works?</p>
    <p>Click
        <button class="underline italic text-lightblue" on:click={() => (showModal = true)}>here</button>
        for the explanation
    </p>

    <Modal title="Three-Dices game" bind:open={showModal} autoclose>
        <p class="max-w-[80vw] text-wrap text-base leading-relaxed
                sm:max-w-[60vw]">Testing the modal to see how it's formatted. Later the official explanation will have
            to be added</p>
        <svelte:fragment slot="footer">
            <p>This part can be used for and I understand button or not, probably not really necessary</p>
        </svelte:fragment>
    </Modal>
</div>