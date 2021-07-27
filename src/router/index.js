import Vue from "vue";
import VueRouter from "vue-router";
import IndividualLogin from "../components/IndividualLogin.vue"
import Ilanlar from "../components/Ilanlar.vue"
Vue.use(VueRouter);

const routes = [
    
    {
        path: "/login",
        name: "IndividualLogin",
        component: IndividualLogin,
        meta: {
            title: 'IndividualLogin'
        }
    },
    {
        path: "/ilanlar",
        name: "Ilanlar",
        component: Ilanlar,
        meta: {
            title: 'Ilanlar'
        }
    },
    
];
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} |VOID1F`
    next();
});

export default router;