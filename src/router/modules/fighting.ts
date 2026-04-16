// 最简代码，也就是这些字段必须有
// export default {
//   path: "/fighting",
//   redirect: "/fighting/index",
//   meta: {
//     title: "加油"
//   },
//   children: [
//     {
//       path: "/fighting/index",
//       name: "Fighting",
//       component: () => import("@/views/fighting/index.vue"),
//       meta: {
//         title: "加油哦",
//         showParent: false
//       }
//     }
//   ]
// };
// 最简代码，也就是这些字段必须有
// export default {
//   path: "/fighting",
//   meta: {
//     title: "二级菜单测试",
//     rank: 2
//   },
//   children: [
//     {
//       path: "/fighting/index",
//       name: "Fighting",
//       component: () => import("@/views/fighting/index.vue"),
//       meta: {
//         title: "加油"
//       }
//     },
//     {
//       path: "/fighting/effort",
//       name: "Effort",
//       component: () => import("@/views/fighting/effort.vue"),
//       meta: {
//         title: "努力"
//       }
//     }
//   ]
// };
export default {
  path: "/fighting",
  meta: {
    title: "二级菜单测试",
    rank: 2,
    showLink: true
  },
  children: [
    {
      path: "/fighting/index",
      name: "Fighting",
      component: () => import("@/views/fighting/index.vue"),
      meta: {
        title: "加油"
      }
    },
    {
      path: "/fighting/effort",
      name: "Effort",
      component: () => import("@/views/fighting/effort.vue"),
      meta: {
        title: "努力"
      }
    }
  ]
} as RouteConfigsTable;
