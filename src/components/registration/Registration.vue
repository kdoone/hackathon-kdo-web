<template>
    <div>
        <router-link to="/categories">
            <Categories />
        </router-link>
        <router-link to="/programs">
            <Programs />
        </router-link>
        <router-link to="/client-data">
            <ClientData />
        </router-link>
    </div>
</template>

<script>
import Categories from "../categories/Categories.vue";
import Programs from "../programs/Programs.vue";
import ClientData from "../client/ClientData.vue";


export default {
    components: {
        Categories,
        Programs,
        ClientData,
    }
}
</script>

