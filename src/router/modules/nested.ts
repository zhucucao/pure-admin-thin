// // 最简代码，也就是这些字段必须有
// export default {
//   path: "/nested",
//   meta: {
//     title: "三级菜单测试"
//   },
//   children: [
//     {
//       path: "/nested/menu1",
//       meta: {
//         title: "菜单1"
//       },
//       children: [
//         {
//           path: "/nested/menu1/menu1-1",
//           component: () => import("@/views/nested/menu1/menu1-1/index.vue"),
//           name: "Menu1-1",
//           meta: {
//             title: "菜单1-1",
//             // 通过设置showParent为true，显示父级
//             showParent: true
//           }
//         }
//       ]
//     }
//   ]
// };
// 最简代码，也就是这些字段必须有
export default {
  path: "/nested",
  meta: {
    title: "多级菜单",
    rank: 3,
    icon: "flowbite:address-book-outline"
  },
  children: [
    {
      path: "/nested/menu1",
      meta: {
        title: "菜单1"
      },
      children: [
        {
          path: "/nested/menu1/menu1-1",
          component: () => import("@/views/nested/menu1/menu1-1/index.vue"),
          name: "Menu1-1",
          meta: {
            title: "菜单1-1",
            showLink: true,
            icon: "flowbite:bell-ring-solid"
          }
        },
        {
          path: "/nested/menu1/menu1-2",
          component: () => import("@/views/nested/menu1/menu1-2/index.vue"),
          name: "Menu1-2",
          meta: {
            title: "菜单1-2",
            icon: "flowbite:bug-solid"
          }
        }
      ]
    }
  ]
};
