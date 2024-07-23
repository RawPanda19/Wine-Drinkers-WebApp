<script lang="ts">
    import {Modal} from "flowbite-svelte";

    export let showModal: boolean;
    export let modalType: string = "";

    const paragraphStyling: string = "max-w-[80vw] text-wrap text-base leading-relaxed sm:max-w-[60vw]"
</script>

<Modal classHeader="bg-dark_pink" classBody="bg-dark_pink" title="Three-Dices game" bind:open={showModal} autoclose>


    {#if modalType === "threedices"}
        <p class="{paragraphStyling}">The three dices game/tracker. <br> At this game you will try to throw all the
            combinations,
            listed below, in the at least amount of points possible.</p>
        <ul class=""></ul>
    {:else }
        <p class="{paragraphStyling}">Place to insert the explanation of a game here.</p>
    {/if}
</Modal>

