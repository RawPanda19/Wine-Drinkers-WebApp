<script>
    import Button from "../components/Button.svelte";
</script>

<div id="titleAndNav" class="flex flex-row justify-center">
    <h1>The Wine Drinkers</h1>
</div>

<div id="wrapper" class="flex flex-col justify-center items-center gap-[5vh] min-h-[70vh]
                        md:gap-[15vh]">
    <div class="max-w-[30vw] max-h-[30vh]
                md:max-w-[12vw] md:max-h-[12vh]">
        <img src="/Group%20Image.jpg" alt="">
    </div>

    <form method="POST" class="flex flex-col gap-[3vh] w-[40vw]
                        md:w-[25vw]">
        <label class="flex flex-col gap-[1vh]">
            Username:
            <input name="username" type="text" placeholder="Enter your username ..." class="h-[5vh]">
        </label>
        <label class="flex flex-col gap-[1vh]">
            Password:
            <input name="password" type="password" placeholder="Enter your password ..." class="h-[5vh]">
        </label>
        <Button buttonText="log in"/>
    </form>
</div>