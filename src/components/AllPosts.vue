<template>
    <div class="all-posts">
        <router-link to="/">All Posts</router-link>
    </div>
</template>

<style lang="stylus">
.all-posts {
    position: relative;
    top: -1rem;
    text-align: center;
    > a {
        color: #BDBDBD;
        border: 1px solid;
        border-radius: 5px;
        padding: .5em 1em;
        &:hover {
            color: $accentColor;
        }
    }
}
</style>
