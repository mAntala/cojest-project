<template>
    <aside class="app-sidebar content">
        <content-feed :title="'Zaujímavé recepty'" :content="posts" :size="'compact'"></content-feed>
    </aside>
</template>

<script>
import ContentFeed from '@/components/ContentFeed';

export default {
    name: 'AppAside',
    components: {
        ContentFeed
    },
    data() {
        return {
            posts: null
        }
    },
    created() {
        const request = fetch('https://www.cojest.sk/wp-json/cojest/v1/recipes?per_page=5', { method: 'GET' }).then(response => response.json());
        const data = request.then(data => this.posts = data.data);
    }
}
</script>

<style lang="scss" scoped>
</style>