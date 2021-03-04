<template>
    <article class="single-post">
        <header class="single-post--thumbnail">
            <img :src="post.post_thumbnails.regular.small" :title="post.post_title" :alt="post.post_thumbnails.alt" />
        </header>

        <main class="single-post--content content">
            <h1 class="single-post--title">{{ post.post_title }}</h1>

            <section class="single-post--meta">
                <section class="single-post--author">
                    <img src="@/assets/imgs/picture.png" class="profile-picture" title="Nika Foo" alt="nika.foo" />
                    <div class="author">
                        <p class="author--name">nika.foo</p>
                        <p class="author--post-date">15. februára 2021</p>
                    </div>
                </section>

                <section class="single-post--actions">
                    <button class="action save">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg>
                    </button>
                    <button v-if="canPrint" class="action print">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
                    </button>
                </section>
            </section>

            <p>Dobra prípravy jedla: <strong>{{ post.prep_time }} minút</strong></p>

            <p v-html="post.content"></p>

            <h2 class="single-post--sub-title">Ingrediencie</h2>
            <section class="single-post--table">
                <p class="row" v-for="(ingredient, index) in post.ingredients" :key="index">
                    <span>{{ ingredient.name }}</span>
                    <span>{{ ingredient.amount }}</span>
                </p>
            </section>

            <h2 class="single-post--sub-title">Postup</h2>
            <section class="single-post--directions" v-html="post.directions"></section>

            <h2 class="single-post--sub-title">Nutričné hodnoty</h2>
            <section class="single-post--table">
                <p class="row" v-for="(fact, index) in post.nutrition" :key="index">
                    <span>{{ fact.name }}</span>
                    <span>{{ fact.amount }}</span>
                </p>
            </section>

            <p>Zdroj: <router-link :to="'https://cojest.sk'">Čojesť.sk</router-link></p>
            <p>Titulná fotka: <router-link :to="'https://cojest.sk'">Čojesť.sk</router-link></p>
        </main>
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
    },
    computed: {
        canPrint() {
            return 'print' in window;
        }
    }
}
</script>

<style lang="scss" scoped>
.single-post {
    &--thumbnail {
        display: flex;
        margin-bottom: 1rem;

        & > img {
            width: 100%;
        }
    }

    &--content {
        padding-top: 0;
        padding-bottom: 0;
    }

    &--title {
        font-size: 1.25rem;
        font-weight: 600;
        color: $dark;
        margin-bottom: 1rem;
        margin-top: 0;
    }

    &--meta {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    &--author {
        display: flex;
        align-items: center;

        & .profile-picture {
            width: 40px;
            height: 40px;
            margin-right: 0.5rem;
        }

        & .author {
            &--name {
                font-weight: 500;
                line-height: 1;
                margin: 0 0 0.25rem 0;
                color: $dark;
            }

            &--post-date {
                font-size: 0.875rem;
                color: rgba($dark, 0.65);
                margin: 0;
            }
        }
    }

    &--actions {
        & .action {
            width: 40px;
            height: 40px;
            background-color: rgba($dark, 0.02);
            border-radius: $border-radius;
            border: none;
            outline: none;

            &.save {
                margin-right: 0.75rem;
            }
        }
    }

    &--sub-title {
        font-size: 1rem;
        font-weight: 500;
        margin: 0 0 1rem 0;
        color: $dark;
    }

    &--table {
        display:flex;
        flex-wrap: wrap;
        margin-bottom: 1rem;

        & .row {
            flex: 1 0 calc(100% - 2rem);
            margin: 0;
            display: flex;
            justify-content: space-between;
            padding: 1.25rem 1rem;
            border-left: 1px solid rgba($dark, 0.1);
            border-right: 1px solid rgba($dark, 0.1);
            border-bottom: 1px solid rgba($dark, 0.1);

            &:first-of-type {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
                border-top: 1px solid rgba($dark, 0.1);
            }

            &:last-of-type {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
    }

    &--directions {
        /deep/ ol {
            margin: 0;
            padding: 0;

            & li {
                list-style-type: none;
                position: relative;
                padding-left: 2.5rem;
                counter-increment: cojest-directions-number;
                margin-bottom: 1rem;

                &::before {
                    content: counter(cojest-directions-number) ".";
                    color: rgba($main, 0.5);
                    position: absolute;
                    left: 0.25rem;
                    top: 0;
                    font-size: 2rem;
                }
            }
        }
    }
}
</style>