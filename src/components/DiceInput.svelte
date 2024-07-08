<script>
    import Button from "./Button.svelte";

    export let diceCount;
</script>

<form class="flex flex-col gap-[3vh]
        sm:gap-[4vh]">
    <div class="flex flex-col gap-[3vh]
        sm:flex-row sm:flex-wrap sm:gap-[3vw]">
        {#each Array(diceCount) as _, i}
            <label>
                Dice {i + 1}
                <input name="dice_{i + 1}" type="number" class="max-w-[20vw] sm:max-w-[5vw]">
            </label>
        {/each}
    </div>
    <Button buttonText="Submit"/>
</form>