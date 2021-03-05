<template>
    <div>
        <app-post v-if="post != null" :post="post"></app-post>
        <p v-else>Načítavam...</p>
    </div>
</template>

<script>
import AppPost from '@/components/AppPost';

export default {
    name: 'Recipe',
    components: {
        AppPost
    },
    data() {
        return {
            post: null
        }
    },
    created() {
        const request = fetch(`https://www.cojest.sk/wp-json/cojest/v1/recipes/${this.$route.params.id}`).then(response => response.json());
        const data = request.then(data => {
            this.post = data[0];
        })
    }
}
</script>