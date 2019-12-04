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
            name: "layout",
            component: () => import("../components/layout/Layout.vue"),
            children: [
                {
                    path: "/categories",
                    name: "categories",
                    component: () => import("../components/categories/Categories.vue"),
                },
                {
                    path: "/programs",
                    name: "programs",
                    component: () => import("../components/programs/Programs.vue")
                },
                {
                    path: "/client-data",
                    name: "client-data",
                    component: () => import("../components/client/ClientData.vue")
                },
                {
                    path: "/thanks",
                    name: "thanks",
                    component: () => import("../components/thanks/Thanks.vue")
                },
                {
                  path: "/home-target",
                  name: "home-target",
                  component: () => import("../components/home/HomeTarget.vue")
              },
            ]
        },
    ]
});
