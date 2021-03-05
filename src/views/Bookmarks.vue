<template>
    <div class="container">
        <section class="content">
            <content-feed :content="posts" :title="'Obľúbené recepty'"></content-feed>
        </section>
    </div>
</template>

<script>
import ContentFeed from '@/components/ContentFeed';

export default {
    name: 'Bookmarks',
    components: {
        ContentFeed
    },
    data() {
        return {
            posts: null
        }
    },
    created() {
        const request = fetch('https://www.cojest.sk/wp-json/cojest/v1/recipes?per_page=2', { method: 'GET' }).then(response => response.json());
        const data = request.then(data => this.posts = data.data);
    }
}
</script>