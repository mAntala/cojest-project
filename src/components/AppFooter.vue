<template>
    <footer class="app-footer content">
        <h1 class="app-footer--title">Navigácia</h1>
        <nav class="app-footer--navigation">
            <router-link
                v-for="(link, index) in links"
                :key="index"
                :to="link.url"
                class="app-footer--link">
                {{ link.text }}
            </router-link>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            links: [
                {
                    text: 'Domov',
                    url: '/'
                },
                {
                    text: 'Recepty',
                    url: '/recepty'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.app-footer {
    &--title {
        font-size: 1.25rem;
        font-weight: 500;
        margin: 0 0 1rem;
    }

    &--link {
        color: $dark;
        text-decoration: none;
        margin-bottom: 1rem;
        display: block;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

}
</style>