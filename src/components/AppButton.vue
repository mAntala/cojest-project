<template>
    <button class="button" :class="[type, size, { 'button__full': fullWidth }]" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        type: {
            type: String,
            default: 'button__primary'
        },
        size: {
            type: String,
            default: 'button__big'
        },
        fullWidth: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
.button {
    border-radius: $border-radius;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
    color: $dark;

    &:disabled {
        background-color: rgba($dark, 0.2) !important;
        cursor: not-allowed;
    }

    &__primary {
        background-color: $main;

        &:hover {
            background-color: lighten($main, 15%);
        }

        &:focus {
            background-color: darken($main, 3%);
        }
    }

    &__secondary {
        background-color: rgba($dark, 0.02);
        border: 1px solid $main;

        &:hover {
            background-color: $light;
        }

        &:focus {
            background-color: rgba($dark, 0.05);
        }
    }

    &__big {
        padding: 0.875rem 1rem;
    }

    &__medium {
        padding: 0.625rem 1rem;
    }

    &__small {
        padding: 0.375 1rem;
    }

    &__full {
        width: 100%;
    }
}
</style>