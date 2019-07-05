<template>
    <header class="bb-navbar">
            <router-link :to="$localePath" class="home-link">
                <h1
                    class="site-name"
                    v-if="$siteTitle"
                >{{ $siteTitle }}</h1>
            </router-link>
    </header>
</template>

<style lang="stylus">
@import '../styles/config.styl';
@import url('https://fonts.googleapis.com/css?family=Nothing+You+Could+Do&display=swap');

.bb-navbar {
    margin: auto;
    max-width: 740px;
    padding: 2rem 2.5rem;
    box-sizing: border-box;
    border-bottom: 2px solid $textColor;

    a {
        display: inline-block;
        color: $textColor;
        &:hover {
            text-decoration: none;
        }
    }

    .site-name {
        font-family: 'Nothing You Could Do', cursive;
        font-size: 3rem;
        font-weight: 600;
        line-height: 1.5;
        color: $textColor;
        margin: 0;
    }
}

@media (max-width: $MQMobile) {
    .bb-navbar {
        padding: 2rem;
    }
}

@media (max-width: $MQMobileNarrow) {
    .bb-navbar {
        padding: 2rem 1.5rem;
        .site-name {
            font-size: 2rem;
        }
    }
}
</style>
