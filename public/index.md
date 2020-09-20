<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>smallURL - URL Shortener</title>
    <link rel="stylesheet" href="https://jenil.github.io/bulmaswatch/lumen/bulmaswatch.min.css">
    <link rel="stylesheet" href="./style.css">
</head>

<body>
    <!-- <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
         //nav anchor tags go here!//
        </div>
    </nav> -->

    <section class="hero is-medium is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">
                    URL Shortner!
                </h1>
                <h2 class="subtitle">
                    Make unique URL's for your links!
                </h2>
            </div>
        </div>
    </section>

    <main id='app'>
        <form @submit.prevent='create_nURL'>
            <div class="is-centered columns">
                <div class="is-two-thirds control ">
                    <div class=" column field has-addons">
                        <div class="control">
                            <input v-model='url' class="input is-large linkName" type="text"
                                placeholder="Add your custom URL here!" required>
                        </div>
                        <!-- <div class="control ">
                        <a class="button is-info is-medium">
                            Custom Link
                        </a>
                    </div> -->
                    </div>
                    <div class=" column field has-addons">
                        <div class="control">
                            <input v-model='name' class="input is-large urlLink" type="text"
                                placeholder="Paste URL Here!" required>
                        </div>

                    </div>
                    <div class="control column">
                        <button type="submit" class="button is-info is-medium">
                            Shorten!
                        </button>
                    </div>
        </form>


        </div>
        </div>
        <!-- 
        <div class="">
            <input class="input" type="text" placeholder="Normal input">
        </div>

        <div class="control columns ">
            <input class="input" type="text" placeholder="Normal input">
        </div> -->


        <section class='columns is-multiline is-centered is-mobile'>

        </section>

        <section class='columns is-multiline  is-centered is-mobile'>

        </section>
    </main>

    <script src='https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js'></script>
    <script src='main.js'></script>
</body>

</html>