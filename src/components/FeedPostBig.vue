<template>
    <router-link :to="{ path: '/recept/' + post.ID }" class="feed-post--link">
        <article class="feed-post feed-post__big">

            <header class="feed-post--thumbnail">
                <img :src="post.post_thumbnails.regular.small" :title="post.post_title" :alt="post.post_thumbnails.alt" />
            </header>

            <main class="feed-post--content">
                <span class="feed-post--category">{{ post.category }}</span>
                <h1 class="feed-post--title">{{ post.post_title }}</h1>
            </main>

        </article>
    </router-link>
</template>

<script>
export default {
    name: 'FeedPostBig',
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.feed-post {
    border-radius: $border-radius;
    box-shadow: $shadow;

    &--link {
        margin-bottom: 1rem;
        text-decoration: none;
        display: inherit;

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    &--thumbnail {
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
        margin-bottom: 1rem;

        & img {
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
            width: 100%;
        }
    }

    &--content {
        padding: 0 1rem 1rem;
    }

    &--category {
        color: rgba($dark, 0.75);
        font-size: 0.875rem;
    }

    &--title {
        font-size: 1rem;
        font-weight: 600;
        margin: 0.5rem 0 1rem;
        color: $dark;
    }
}
</style>