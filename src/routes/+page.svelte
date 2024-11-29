<script>
    import GroupImage from "$lib/images/GroupImage.jpg";
</script>

<div class="flex min-h-full flex-col justify-content px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src={GroupImage} alt="">
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">The Wine Drinkers</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
            <div>
                <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
                <div class="mt-2">
                    <input id="email" name="email" type="email" autocomplete="email" required
                           class="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm/6">
                </div>
            </div>
        </form>
    </div>


</div>


<!--<div id="titleAndNav" class="flex flex-row justify-center">-->
<!--    <h1>The Wine Drinkers</h1>-->
<!--</div>-->

<!--<div id="wrapper" class="flex flex-col justify-center items-center gap-[5vh] min-h-[70vh]-->
<!--                        md:gap-[15vh]">-->
<!--    <div class="max-w-[30vw] max-h-[30vh]-->
<!--                md:max-w-[12vw] md:max-h-[12vh]">-->
<!--        <img src="/Group%20Image.jpg" alt="">-->
<!--    </div>-->

<!--    <form method="POST" action="?/login" class="flex flex-col gap-[3vh] w-[40vw]-->
<!--                                             md:w-[25vw]">-->
<!--        <label class="flex flex-col gap-[1vh]">-->
<!--            Username:-->
<!--            <input name="username" type="text" placeholder="Enter your username ..." class="h-[5vh]">-->
<!--        </label>-->
<!--        <label class="flex flex-col gap-[1vh]">-->
<!--            Password:-->
<!--            <input name="password" type="password" placeholder="Enter your password ..." class="h-[5vh]">-->
<!--        </label>-->
<!--        <Button buttonText="log in"/>-->
<!--    </form>-->
<!--</div>-->


