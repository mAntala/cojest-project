<template>
    <article class="single-post">
        {{ $route.params.id }}
    </article>
</template>

<script>
export default {
    name: 'AppPost',
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>