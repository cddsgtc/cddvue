
//组件模版

// const Foo = {template:'<div>foo</div>'};
// const Bar = {template:'<div>bar</div>'};
const User = {
    template: `
    <div class="user">
      <h2>用户： {{ $route.params.id }}</h2>
      <router-view></router-view>
    </div>
  `
};

const UserHome = { template: '<div>Home</div>' };
const UserProfile = { template: '<div>Profile</div>' };
const UserPosts = { template: '<div>Posts</div>' };

const routes = [
    {path:'/user/:id', component: User,
        children:[
            {path:'',component: UserHome},
            {path:'profile',component: UserProfile},
            {path:'posts',component: UserPosts}
        ]
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el:'#app',
    router
});
// const app = new Vue({ router }).$mount('#app')
console.log('finish');