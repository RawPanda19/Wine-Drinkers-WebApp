<script lang="ts">


    import Button from "$lib/components/Button.svelte";

    export let title: string;
</script>


<div id="header" class="h-fit w-full flex flex-row justify-center items-start gap-x-6">

    <div id="title">
        <h1>{title}</h1>
    </div>
<!-- NavBar-->
    <Button buttonText="Login" />
</div>