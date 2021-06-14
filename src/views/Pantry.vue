<template>
    <section class="container">
        <div class="content">
            <h2 class="content--title">Moja špajza</h2>

            <app-input :data="{haveLabel: false, placeholder: 'Hľadať ingredienciu'}"></app-input>

            <div class="pantry-nav">

                <div class="pantry-nav__pantry">
                    <span class="pantry-nav__number">0</span>
                    Moja špajza
                </div>

                <div class="pantry-nav__cta">
                    Nájsť recept
                </div>

            </div>

            <div class="group open">
                <p class="group__title">Populárne ingrediencie</p>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
            </div>

            <div class="group__content">
                    <span class="item">Kuracie prsia</span>
                    <span class="item">Kukurica</span>
                    <span class="item">Mrkva</span>
                    <span class="item">Tofu</span>
                    <span class="item">Brokolica</span>
                    <span class="item">Losos</span>
                    <span class="item">Paradajky</span>
                    <span class="item">Kuracie stehná</span>
                    <span class="item">Bravčová panenka</span>
                </div>

            <div class="group">
                <p class="group__title">Mäso</p>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
            </div>

            <div class="group">
                <p class="group__title">Zelenina</p>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
            </div>

            <div class="group">
                <p class="group__title">Ovocie</p>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
            </div>
        </div>
    </section>
</template>

<script>
import AppInput from '@/components/AppInput';

export default {
    name: 'Pantry',
    components: {
        AppInput
    }
}
</script>

<style lang="scss" scoped>
.group {
    padding: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(17, 21, 23, 0.04);
    border-radius: 4px;
    box-shadow: 0px 2px 2px rgba(17, 21, 23, 0.25);
    margin-bottom: 16px;

    &.open {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        margin-bottom: 0;
        box-shadow: none;
    }

    &__content {
        margin-bottom: 16px;
        border-radius: 4px;
        box-shadow: 0px 2px 2px rgba(17, 21, 23, 0.25);
        padding: 8px;
        background-color: #FFF;

        & .item {
            padding: 0 16px 8px 0;
            display: inline-block;
            font-size: 16px;
            text-decoration: underline;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }

    &__title {
        font-weight: 500;
        font-size: 16px;
        margin: 0;
    }

    & > svg {
        width: 24px;
        height: 24px;
    }
}

.pantry-nav {
    position: fixed;
    bottom: 57px;
    left: 0;
    width: 100%;
    height: 48px;
    background-color: #F3F3F3;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__pantry {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 0 50%;
        height: 100%;
        font-size: 16px;
    }

    &__cta {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1 0 50%;
        height: 100%;
        background-color: #FFA000;
        font-size: 16px;
    }

    &__number {
        background-color: #FFA000;
        padding: 4px;
        border-radius: 4px;
        margin-right: 4px;
    }
}
</style>
