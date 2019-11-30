import Router from "vue-router";
// import { store } from "../store";

export const router = new Router({
    linkActiveClass: "active",
    mode: "history",
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [
        {
            path: '/',
            name: 'home-page',
            component: () => import('../components/home-page/HomePage.vue')
        },
        {
          path: "/login",
          name: "login",
          component: () => import("../components/login/Login.vue")
        },
        {
            path: "/registration",
            name: "registration",
            component: () => import("../components/registration/Registration.vue"),
            children: [
              // {
              //     path: "/registration/categories",
              //     name: "categories",
              //     component: () => import("../components/categories/Categories.vue"),
              // },
              {
                  path: "programs",
                  name: "programs",
                  component: () => import("../components/programs/Programs.vue")
              },
              {
                  path: "registration/clien-data",
                  name: "clien-data",
                  component: () => import("../components/client/ClientData.vue")
              },
          ]
        },
    ]
});

// router.beforeEach((to, from, next) => {
//     const accessToken = store.getters["auth/accessToken"];

//     if (
//         to.path === "/login" ||
//         to.path === "/registration" ||
//         to.path === "/forget"
//     ) {
//         return accessToken ? next("/profile") : next();
//     }

//     return accessToken ? next() : next("/login");
// });
