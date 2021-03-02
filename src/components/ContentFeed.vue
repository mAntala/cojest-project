<template>
    <section class="feed">
        <h2 class="content--title" v-if="title.length > 0">{{ title }}</h2>

        <div v-if="size === 'big'">
            <feed-post-big v-for="post in content" :key="post.ID" :post="post"></feed-post-big>
        </div>
        <div v-else>
            <feed-post-compact v-for="post in content" :key="post.ID" :post="post"></feed-post-compact>
        </div>
    </section>
</template>

<script>
import FeedPostBig from '@/components/FeedPostBig';
import FeedPostCompact from '@/components/FeedPostCompact'

export default {
    name: 'ContentFeed',
    components: {
        FeedPostBig,
        FeedPostCompact
    },
    props: {
        content: {
            type: Array
        },
        size: {
            type: String,
            default: 'big'
        },
        title: {
            type: String,
            default: ''
        }
    }
}
</script>