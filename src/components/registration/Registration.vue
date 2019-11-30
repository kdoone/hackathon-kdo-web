<template>
    <div>
      Registration
      <ClientData />
        
    </div>
</template>

<script>
import ClientData from "../client/ClientData.vue";

export default {
    components: {
      ClientData,
    },
    data() {
        return {
           formData: {
             email: ""
           } 
        };
    },
};
</script>

<style lang="scss">

</style>
