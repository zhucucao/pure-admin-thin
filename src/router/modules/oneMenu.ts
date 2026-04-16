export default {
  path: "/oneMenu",
  meta: {
    title: "一级菜单测试",
    rank: 1,
    showLink: true,
    icon: "flowbite:address-book-outline"
  },
  redirect: "/oneMenu/index",
  children: [
    {
      path: "/oneMenu/index",
      name: "oneMenu",
      component: () => import("@/views/oneMenu/index.vue"),
      meta: {
        title: "一级菜单测试",
        icon: "flowbite:address-book-outline",
        showParent: false
      }
    }
  ]
} as RouteConfigsTable;
