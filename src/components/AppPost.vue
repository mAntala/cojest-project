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
                        <svg fill="#FFA000" v-if="post.ID === 304 || post.ID === 302" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 18l2 1V3c0-1.1-.9-2-2-2H8.99C7.89 1 7 1.9 7 3h10c1.1 0 2 .9 2 2v13zM15 5H5c-1.1 0-2 .9-2 2v16l7-3 7 3V7c0-1.1-.9-2-2-2z"/></svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"/></svg>
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

            <section class="single-post--tags">
                <span class="single-post--tag" v-for="(ingredient, index) in post.ingredients" :key="index">{{ ingredient.name }}</span>
            </section>

            <app-button :style="'margin-bottom: 1rem;'" @click="shareRecipe()" :fullWidth="true">Zdieľať recept</app-button>

            <section class="reviews">
                <h3 class="reviews--title">Hodnotenie receptu</h3>

                <div class="reviews--rating">
                    <div class="reviews--stars">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z"/></g></g></g></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                    </div>

                    <span>40 recenzií</span>
                </div>

                <section class="reviews--content">
                    <div
                        v-for="(comment, index) in comments"
                        :key="index"
                        class="comment">

                        <header class="comment--header">
                            <img :src="comment.authorImage" :title="comment.authorName" :alt="comment.authorName" />
                            <div class="comment--author">
                                <p class="comment--author-name">{{ comment.authorName }}</p>
                                <p class="comment--public-date">{{ comment.date }}</p>
                            </div>
                        </header>

                        <aside class="comment--rating">
                            <div class="comment--stars">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0"/></g><g><g><g><path d="M22,9.24l-7.19-0.62L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27L18.18,21l-1.63-7.03L22,9.24z M12,15.4V6.1 l1.71,4.04l4.38,0.38l-3.32,2.88l1,4.28L12,15.4z"/></g></g></g></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>
                            </div>
                        </aside>

                        <main class="comment--content">
                            <p>{{ comment.content }}</p>
                        </main>
                    </div>
                </section>
            </section>
        </main>
    </article>
</template>

<script>
import AppButton from './AppButton';

export default {
    name: 'AppPost',
    components: {
        AppButton
    },
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            comments: [
                {
                    authorImage: require('@/assets/imgs/picture.png'),
                    authorName: 'Nika',
                    date: '2. feburára 2021',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh odio, finibus non metus quis, condimentum hendrerit libero. Fusce pretium, felis eu fermentum tristique, mi justo faucibus neque, in tincidunt turpis est eu nisl. Duis vehicula lobortis tellus ac ultrices. Mauris porta venenatis ipsum, et euismod metus ultricies sed.'
                },
                {
                    authorImage: require('@/assets/imgs/picture.png'),
                    authorName: 'Nika',
                    date: '2. feburára 2021',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh odio, finibus non metus quis, condimentum hendrerit libero. Fusce pretium, felis eu fermentum tristique, mi justo faucibus neque, in tincidunt turpis est eu nisl. Duis vehicula lobortis tellus ac ultrices. Mauris porta venenatis ipsum, et euismod metus ultricies sed.'
                },
                {
                    authorImage: require('@/assets/imgs/picture.png'),
                    authorName: 'Nika',
                    date: '2. feburára 2021',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh odio, finibus non metus quis, condimentum hendrerit libero. Fusce pretium, felis eu fermentum tristique, mi justo faucibus neque, in tincidunt turpis est eu nisl. Duis vehicula lobortis tellus ac ultrices. Mauris porta venenatis ipsum, et euismod metus ultricies sed.'
                },
                {
                    authorImage: require('@/assets/imgs/picture.png'),
                    authorName: 'Nika',
                    date: '2. feburára 2021',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh odio, finibus non metus quis, condimentum hendrerit libero. Fusce pretium, felis eu fermentum tristique, mi justo faucibus neque, in tincidunt turpis est eu nisl. Duis vehicula lobortis tellus ac ultrices. Mauris porta venenatis ipsum, et euismod metus ultricies sed.'
                },
                {
                    authorImage: require('@/assets/imgs/picture.png'),
                    authorName: 'Nika',
                    date: '2. feburára 2021',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nibh odio, finibus non metus quis, condimentum hendrerit libero. Fusce pretium, felis eu fermentum tristique, mi justo faucibus neque, in tincidunt turpis est eu nisl. Duis vehicula lobortis tellus ac ultrices. Mauris porta venenatis ipsum, et euismod metus ultricies sed.'
                }
            ]
        }
    },
    computed: {
        canPrint() {
            return 'print' in window;
        }
    },
    methods: {
        async shareRecipe() {
            console.log('Share');
            const share = {
                title: document.title,
                text: this.post.post_title,
                url: this.post.url
            };

            await navigator.share(share);
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

    &--tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 0.5rem;
    }

    &--tag {
        border: 1px solid $main;
        border-radius: $border-radius;
        padding: 0.25rem 0.5rem;
        margin: 0 0.5rem 0.5rem 0;
    }
}

.reviews {
    &--title {
        font-weight: 500;
        font-size: 1.25rem;
        margin-bottom: 1rem;
        margin-top: 0;
    }

    &--rating {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1rem;

        & > span {
            font-weight: 500;
        }
    }

    &--stars {
        margin-right: 0.5rem;

        & > svg {
            width: 24px;
            height: 24px;
            fill: $main;
            margin-right: 0.125rem;

            &:last-of-type {
                margin-right: 0;
            }
        }
    }
}

.comment {
    padding: 0.5rem;
    box-shadow: $shadow;
    border-radius: $border-radius;
    margin-bottom: 1rem;

    &--header {
        display: flex;
        margin-bottom: 1rem;

        & > img {
            height: 40px;
            width: 40px;
            margin-right: 0.5rem;
        }
    }

    &--author {
        display: block;
    }

    &--author-name {
        margin: 0;
        font-size: 1rem;
        color: $dark;
        font-weight: 500;
        margin-bottom: 0.25rem;
        line-height: 1;
    }

    &--public-date {
        margin: 0;
        font-size: 0.875rem;
        color: rgba($dark, 0.75);
    }

    &--stars {
        margin-bottom: 0.5rem;

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

    &--content {
        & > p {
            margin-bottom: 0;
        }
    }
}
</style>