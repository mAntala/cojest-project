<template>
    <app-post :post="{}"></app-post>
</template>

<script>
import AppPost from '@/components/AppPost';

export default {
    name: 'Recipe',
    components: {
        AppPost
    }
}
</script>