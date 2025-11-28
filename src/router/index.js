import { createRouter, createWebHistory } from "vue-router"; 
const router = createRouter({  
    history: createWebHistory(""),  
    routes: [    {      
        path: "/",      
        name: "main",      
        component: () => import("../components/main_test.vue"),    
    },    
    {      
        path: "/test",      
        name: "test",      
        component: () => import("../components/test_test.vue"),    
    },  
],
}); 

export default router;
