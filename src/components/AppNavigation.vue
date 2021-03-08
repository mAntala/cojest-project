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
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 2.01L6 2c-1.1 0-2 .89-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.11-.9-1.99-2-1.99zM18 20H6v-9.02h12V20zm0-11H6V4h12v5zM8 5h2v3H8zm0 7h2v5H8z"/></svg>',
                    text: 'Špajza',
                    url: '/spajza'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 18l2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13zM15 5H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"/></svg>',
                    text: 'Obľúbené',
                    url: '/oblubene'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"/></svg>',
                    text: 'Účet',
                    url: '/prihlasenie'
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
    justify-content: space-evenly;
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