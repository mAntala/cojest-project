<template>
    <section class="content">
        <h2 class="content--title">Všetky recepty</h2>
        <recipes-categories :active="active" @activate-category="categoryActivate"></recipes-categories>

        <recipes-tabs></recipes-tabs>

        <keep-alive>
            <content-feed v-if="!activeCategory" :content="posts"></content-feed>
            <div v-else-if="filterPosts.length === 0">Hmmm, v tejto kategórií nie sú žiadne recepty</div>
            <content-feed v-else :content="filterPosts"></content-feed>
        </keep-alive>

        <app-button :disabled="!canLoadMore || loading" @click.native="loadMore" :style="'margin-top: 1rem;'" :fullWidth="true">
            <span v-if="loading">Načítavam</span>
            <span v-else-if="!canLoadMore">To je všetko</span>
            <span v-else>Načítať viac receptov</span>
        </app-button>
    </section>
</template>

<script>
import ContentFeed from '@/components/ContentFeed';
import AppButton from '@/components/AppButton';
import RecipesCategories from '@/components/RecipesCategories';
import RecipesTabs from '@/components/RecipesTabs';

export default {
    name: 'Recipes',
    components: {
        ContentFeed,
        AppButton,
        RecipesCategories,
        RecipesTabs
    },
    data() {
        return {
            posts: null,
            perPage: 10,
            offset: 0,
            active: null,
            activeCategory: null,
            canLoadMore: true,
            loading: false
        }
    },
    created() {
        const request = fetch(`https://www.cojest.sk/wp-json/cojest/v1/recipes?per_page=${this.perPage}&offset=${this.offset}`, { method: 'GET' }).then(response => response.json());
        const data = request.then(data => {
            this.posts = data.data;
            this.offset += 10;
        });
    },
    methods: {
        categoryActivate(value) {
            if(this.active === value.index) {
                this.active = null;
                this.activeCategory = '';
                return;
            }

            this.activeCategory = value.category;
            this.active = value.index;
        },
        loadMore() {
            this.loading = true;
            const request = fetch(`https://www.cojest.sk/wp-json/cojest/v1/recipes?per_page=${this.perPage}&offset=${this.offset}`, { method: 'GET' }).then(response => response.json());
            const data = request.then(data => {

                if(data.data.length < this.perPage) {
                    this.canLoadMore = false;
                }

                data.data.forEach(post => this.posts.push(post));

                this.offset += 10;
                this.loading = false;
            });
        }
    },
    computed: {
        filterPosts() {
            if(!this.posts) {
                return;
            }

            return this.posts.filter(post => {
                return post.category === this.activeCategory
            });
        }
    }
}
</script>