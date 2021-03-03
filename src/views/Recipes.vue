<template>
    <section class="content">
        <recipes-categories></recipes-categories>
        <content-feed :content="posts"></content-feed>
    </section>
</template>

<script>
import ContentFeed from '@/components/ContentFeed';
import AppButton from '@/components/AppButton';
import RecipesCategories from '@/components/RecipesCategories'

export default {
    name: 'Recipes',
    components: {
        ContentFeed,
        AppButton,
        RecipesCategories
    },
    data() {
        return {
            posts: null,
            perPage: 10,
            offset: 0,
            page: 1
        }
    },
    created() {
        const request = fetch(`https://www.cojest.sk/wp-json/cojest/v1/recipes?per_page=${this.perPage}&offset=${this.offset}`, { method: 'GET' }).then(response => response.json());
        const data = request.then(data => {
            this.posts = data.data;
            this.perPage += 10;
            this.offset += 10;
        });
    }
}
</script>