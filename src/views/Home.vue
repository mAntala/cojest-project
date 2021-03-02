<template>
    <div class="container">
        <section class="content">
            <content-feed :content="posts" :title="'Najnovšie recepty'"></content-feed>
        </section>

        <section class="content pantry-info">
            <h2 class="content--title">Moja špajza</h2>
            <p>Pomocou špajze si môžeš navariť jedlo, na ktoré máš doma suroviny. Nemusíš viac utekať do obchodu, ak ti niečo chýba.</p>
            <app-button :fullWidth="true">Prejsť do špajze</app-button>
        </section>

        <section class="content">
            <content-feed :content="slovakPosts" :title="'Slovenské recepty'"></content-feed>
            <app-button :style="'margin-top: 1rem'" :full-width="true">Zobraziť viac receptov</app-button>
        </section>
    </div>
</template>

<script>
import ContentFeed from '@/components/ContentFeed';
import AppButton from '@/components/AppButton';

export default {
    name: 'Home',
    components: {
        ContentFeed,
        AppButton
    },
    data() {
        return {
            posts: null,
            slovakPosts: null
        }
    },
    created() {
        const request = fetch('https://www.cojest.sk/wp-json/cojest/v1/recipes?per_page=10', { method: 'GET' }).then(response => response.json());
        const data = request.then(data => this.posts = data.data);

        const requestTwo = fetch('https://www.cojest.sk/wp-json/cojest/v1/recipes?per_page=10&offset=10', { method: 'GET' }).then(response => response.json());
        const dataTwo = request.then(data => this.slovakPosts = data.data);
    }
}
</script>

<style lang="scss" scoped>
.pantry-info {
    background-color: rgba($dark, 0.03);
}
</style>