<template>
    <div class="sidebar">
        <div class="sidebar__menu">
            <ul>
                <li>
                    <router-link
                        class="sidebar__link"
                        active-class="active"
                        to="/"
                        >
                            <img src="../../assets/img/menu-1.png" alt="">
                        </router-link
                    >
                </li>
                <li>
                    <router-link
                        class="sidebar__link"
                        active-class="active"
                        to="/"
                        >
                            <img src="../../assets/img/menu-2.png" alt="">
                        </router-link
                    >
                </li>
                <li>
                    <router-link
                        class="sidebar__link"
                        active-class="active"
                        to="/"
                        >
                            <img src="../../assets/img/menu-3.png" alt="">
                        </router-link
                    >
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        text: String
    },
    components: {  },    
};
</script>

<style lang="scss">
.sidebar {
    max-width: 100px;
    width: 100%;
    background: #008B8A;
    padding: 40px 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &__link {
        display: block;        
    }
}

ul {
    margin: 0;
    padding: 0;
    li {
        list-style: none;
    }
}
</style>
