import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./../config/routes.config";

const history = createWebHistory();

const router = createRouter({
	history,
	routes,
});

export default router;