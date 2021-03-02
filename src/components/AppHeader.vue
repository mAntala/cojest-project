<template>
    <header class="app-header">
        <h1 class="app-title">Čo Jesť</h1>
    </header>
</template>

<script>
export default {
    name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
.app-header {
    background-color: $main;
    padding: 1rem 0;
    text-align: center;
    position: relative;
}

.app-title {
    font-size: 1rem;
    font-weight: 600;
    color: $dark;
    margin: 0;
}
</style>