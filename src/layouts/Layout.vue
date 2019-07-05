<template>
    <div class="theme-container no-sidebar">
        <Navbar />
        <Home v-if="isHome" />
        <page v-else :sidebar-items="sidebarItems"></page>
        <AllPosts v-if="!isHome" />
    </div>
</template>

<script>
import Home from "@theme/components/Home.vue";
import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";
import AllPosts from '@theme/components/AllPosts.vue';
import { resolveSidebarItems } from "../util";

export default {
    components: { Home, Page, Navbar, AllPosts },
    computed: {
        sidebarItems() {
            return resolveSidebarItems(
                this.$page,
                this.$page.regularPath,
                this.$site,
                this.$localePath
            );
        },
        isHome () {
            const {path, frontmatter} = this.$page;
            return path === '/' && frontmatter.home === true;
        },
        isNotHome () {
            return !this.isHome;
        }
    }
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="stylus">
.theme-container {
    .theme-default-content.content__default {
        box-sizing: border-box;
        padding-top: 0;
    }
    footer.page-edit {
        box-sizing border-box
    }
}
</style>
