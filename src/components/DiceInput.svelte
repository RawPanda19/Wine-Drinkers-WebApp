<script>
    import Button from "./Button.svelte";

    export let diceCount;
</script>

<form class="flex flex-col gap-[2vh] ">
    <div class="flex flex-row flex-wrap gap-[3vw]">
        {#each Array(diceCount) as _, i}
            <label>
                Dice {i + 1}
                <input name="dice_{i + 1}" type="number" class="max-w-[5vw]">
            </label>
        {/each}
    </div>
    <Button buttonText="Submit"/>
</form>