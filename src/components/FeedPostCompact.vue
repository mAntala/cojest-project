<template>
    <router-link :to="{ path: '/recept/' + post.ID }" class="feed-post--link">
        <article class="feed-post feed-post__compact">

            <header class="feed-post--thumbnail">
                <img :src="post.post_thumbnails.square.small_square" :title="post.post_title" :alt="post.post_thumbnails.alt" />
            </header>

            <main class="feed-post--content">
                <h1 class="feed-post--title">{{ post.post_title }}</h1>

                <section class="feed-post--meta">
                    <div class="feed-post--rating">
                        <div class="feed-post--stars">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z"/></g></g></g></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                        </div>

                        <span>40 recenzií</span>
                    </div>

                    <div class="feed-post--prep-time">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M11 17c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1zm0-14v4h2V5.08c3.39.49 6 3.39 6 6.92 0 3.87-3.13 7-7 7s-7-3.13-7-7c0-1.68.59-3.22 1.58-4.42L12 13l1.41-1.41-6.8-6.8v.02C4.42 6.45 3 9.05 3 12c0 4.97 4.02 9 9 9 4.97 0 9-4.03 9-9s-4.03-9-9-9h-1zm7 9c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1 1-.45 1-1zM6 12c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1-1 .45-1 1z"/></svg>
                        <span>{{ post.prep_time }} minút</span>
                    </div>
                </section>
            </main>

        </article>
    </router-link>
</template>

<script>
export default {
    name: 'FeedPostCompact',
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
    display: flex;
    flex-flow: row;

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
        border-bottom-left-radius: $border-radius;
        margin-right: 0.5rem;
        display: flex;

        & img {
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
            width: 80px;
            height: 80px;
        }
    }

    &--content {
        padding: 0.5rem 0;
    }

    &--title {
        font-size: 1rem;
        font-weight: 600;
        margin: 0 0 0.5rem;
        color: $dark;
    }

    &--meta {
        display: flex;
    }

    &--rating {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-right: 0.75rem;

        & > span {
            color: $dark;
            font-weight: 400;
            font-size: 0.875rem;
        }
    }

    &--stars {
        margin-right: 0.25rem;

        & > svg {
            width: 16px;
            height: 16px;
            fill: $main;
            margin-right: 0.125rem;

            &:last-of-type {
                margin-right: 0;
            }
        }
    }

    &--prep-time {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        & > svg {
            width: 16px;
            height: 16px;
            fill: $main;
            margin-right: 0.25rem;
        }

        & > span {
            color: $dark;
            font-size: 0.875rem;
        }
    }
}
</style>