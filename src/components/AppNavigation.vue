<template>
    <nav class="app-nav">
        <router-link
            v-for="(link, index) in links"
            :key="index"
            :to="link.url"
            class="app-nav--link">
            <span class="icon" v-html="link.icon"></span>
            <span class="text">{{ link.text }}</span>
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            links: [
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
                    text: 'Domov',
                    url: '/'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"/></svg>',
                    text: 'Recepty',
                    url: '/recepty'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 18l2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13zM15 5H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"/></svg>',
                    text: 'Obľúbené',
                    url: '/oblubene'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.app-nav {
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    border-top: 1px solid rgba($dark, 0.25);
    background-color: $light;
    z-index: 9999;

    &--link {
        color: rgba($dark, 0.55);
        text-decoration: none;
        font-size: 0.75rem;
        display: flex;
        flex-wrap: wrap;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        padding: 0.5rem 0.75rem 0.75rem;

        & .icon {
            fill: rgba($dark, 0.55);
            width: 24px;
            height: 24px;
        }

        & .text {
            line-height: 1;
        }

        &.router-link-exact-active {
            color: $main;

            & .icon {
                fill: $main;
            }
        }
    }
}
</style>