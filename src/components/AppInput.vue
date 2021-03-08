<template>
    <div class="form-input" :class="{ 'input--password': data.originalType == 'password' }">
        <label class="input--label" v-if="data.haveLabel" :for="data.name">{{ data.label }}</label>
        <input
            :type="data.type"
            :placeholder="data.placeholder"
            :name="data.name"
            :value="data.value"
            class="input"
            ref="input"
        />

        <button @click="showPassword" v-if="data.originalType == 'password'" class="eye-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
            <div class="eye-icon--cross" :class=" { 'hidden': data.type === 'password' }"></div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'AppInput',
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    methods: {
        showPassword(event) {
            event.preventDefault();

            this.data.value = this.$refs.input.value;

            const inputType = this.$refs.input.type;
            inputType === 'password' ? this.data.type = 'text' : this.data.type = 'password';
        }
    }
}
</script>

<style lang="scss" scoped>
.input {
    width: calc(100% - 24px - 2px);
    height: auto;
    padding: 0.875rem 0.75rem;
    border: 1px solid rgba($dark, 0.1);
    border-radius: $border-radius;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    color: $dark;
    font-size: 1rem;
    line-height: 1;
    margin-top: 0.25rem;
    margin-bottom: 1rem;

    &--label {
        font-size: 0.875rem;
    }

    &--password {
        position: relative;
    }
}

.eye-icon {
    width: 49px;
    height: 49px;
    position: absolute;
    bottom: 16px;
    right: 0;
    border: none;
    background-color: transparent;
    outline: none;
    fill: rgba($dark, 0.55);

    &--cross {
        position: absolute;
        width: 2px;
        height: 24px;
        top: 11px;
        left: 24px;
        transform: rotate(-45deg);
        border-radius: $border-radius;
        background-color: $dark;
        transition: opacity .2s ease-in-out;
        opacity: 1;

        &.hidden {
            opacity: 0;
        }
    }
}
</style>