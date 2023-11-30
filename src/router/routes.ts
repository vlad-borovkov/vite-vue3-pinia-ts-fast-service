import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
    {
        path: "/:pathMatch(.*)*",
        name: "NotFoundPage",
        component: () => import("../pages/404.vue"),
    },
    {
        path: "/",
        name: 'SearchDelivery',
        component: () => import("../pages/SearchDelivery.vue"),
    },
];
