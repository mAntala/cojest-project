<template>
    <section class="login container">
        <div class="content">
            <h2 class="content--title">Registrovať sa</h2>

            <form class="login--form" method="POST">
                <app-input :data="inputName"></app-input>
                <app-input :data="inputEmail"></app-input>
                <app-input :data="inputPass"></app-input>
            </form>

            <app-button :fullWidth="true">Vytvoriť účet</app-button>

            <p class="login--divider">alebo</p>

            <router-link :to="'/prihlasenie'">
                <app-button :type="'button__secondary'" :fullWidth="true">Prejsť na prihlásenie</app-button>
            </router-link>
        </div>
    </section>
</template>

<script>
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';

export default {
    name: 'Register',
    components: {
        AppButton,
        AppInput
    },
    data() {
        return {
            inputName: {
                type: 'text',
                placeholder: null,
                name: 'user-name',
                required: true,
                value: null,
                haveLabel: true,
                label: 'Celé meno:'
            },
            inputEmail: {
                type: 'email',
                placeholder: null,
                name: 'user-email',
                required: true,
                value: null,
                haveLabel: true,
                label: 'E-mail:'
            },
            inputPass: {
                type: 'password',
                originalType: 'password',
                placeholder: null,
                name: 'user-password',
                required: true,
                value: null,
                haveLabel: true,
                label: 'Heslo:'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    &--divider {
        text-align: center;
        margin: 1.5rem 0;
    }
}
</style>