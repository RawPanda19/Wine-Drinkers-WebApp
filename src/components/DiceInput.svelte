<script>
    import Button from "./Button.svelte";

    export let diceCount;
</script>

<form class="flex flex-col gap-[3vh]
        sm:gap-[4vh]">
    <div class="flex flex-col gap-[3vh]
        sm:flex-row sm:flex-wrap sm:gap-[3vw]">
        {#each Array(diceCount) as _, i}
            <label class="flex flex-row items-center gap-[2vw] sm:gap-1">
                Dice {i + 1}
                <input name="dice_{i + 1}" type="number"
                       class="border-beige max-w-[15vw] max-h-[3vh] sm:max-w-[5vw] sm:max-h-[4vh]">
            </label>
        {/each}
    </div>
    <Button buttonText="Submit"/>
</form>