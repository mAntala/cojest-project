<template>
    <section class="recipes-tabs">
        <span
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ 'active': index == activeTab }"
            @click="changeTab(index)"
            class="recipes-tabs--tab">
            {{ tab.text }}
        </span>
    </section>
</template>

<script>
export default {
    name: 'RecipesTabs',
    data() {
        return {
            tabs: [
                {
                    text: 'Najnovšie recepty'
                },
                {
                    text: 'Najlepšie recepty'
                }
            ],
            activeTab: 0
        }
    },
    methods: {
        changeTab(index) {
            this.activeTab = index;
        }
    }
}
</script>

<style lang="scss" scoped>
.recipes-tabs {
    display: flex;
    margin-bottom: 1rem;

    &--tab {
        flex: 1 0 50%;
        text-align: center;
        color: rgba($dark, 0.55);
        padding: 0.25rem 0;
        font-size: 0.875rem;
        transition: all .2s ease-in-out;
        border-bottom: 1px solid transparent;

        &.active {
            color: $dark;
            border-bottom: 1px solid $main;
        }
    }
}
</style>