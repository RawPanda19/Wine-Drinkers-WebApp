<script lang="ts">
    import DiceInput from "../../../components/DiceInput.svelte";
    import ExplanationModal from "../../../components/modals/ExplanationModal.svelte";

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

    <ExplanationModal showModal={showModal} modalType="threedices"/>
</div>