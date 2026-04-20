// 模拟后端动态生成路由
import { defineFakeRoute } from "vite-plugin-fake-server/client";

/**
 * roles：页面级别权限，这里模拟二种 "admin"、"common"
 * admin：管理员角色
 * common：普通角色
 */
const permissionRouter = {
  path: "/permission",
  meta: {
    title: "权限管理",
    icon: "ep:lollipop",
    rank: 10
  },
  children: [
    {
      path: "/permission/page/index",
      name: "PermissionPage",
      meta: {
        title: "页面权限",
        roles: ["admin", "common"]
      }
    },
    {
      path: "/permission/button",
      meta: {
        title: "按钮权限",
        roles: ["admin", "common"]
      },
      children: [
        {
          path: "/permission/button/router",
          component: "permission/button/index",
          name: "PermissionButtonRouter",
          meta: {
            title: "路由返回按钮权限",
            auths: [
              "permission:btn:add",
              "permission:btn:edit",
              "permission:btn:delete"
            ]
          }
        },
        {
          path: "/permission/button/login",
          component: "permission/button/perms",
          name: "PermissionButtonLogin",
          meta: {
            title: "登录接口返回按钮权限"
          }
        }
      ]
    }
  ]
};
// path模式
// const dynamicOneRouter = {
//   path: "/dynamic",
//   meta: {
//     title: "动态路由一级菜单",
//     icon: "ep:promotion",
//     rank: 11,
//     roles: ["admin", "common"]
//   },
//   children: [
//     {
//       path: "/dynamic/one/index",
//       name: "DynamicOneIndex",
//       // 与 permission 菜单一致：显式指定 views 下路径，避免仅靠 path 匹配 glob 失败导致 component 为空、路由卡死
//       // component: "dynamic/one/index",
//       meta: {
//         title: "comeOn",
//         roles: ["admin", "common"]
//         // showParent: true
//       }
//     }
//   ]
// };

// path  component 模式
const dynamicOneRouter = {
  path: "/dynamic",
  meta: {
    title: "动态路由一级菜单-component模式",
    icon: "ep:promotion",
    rank: 11,
    roles: ["admin", "common"]
  },
  children: [
    {
      // path随便写，但前面必须有个 `/`
      path: "/dynamic/first",
      name: "DynamicOneIndex",
      // component对应的值前不需要加 / 值对应的是实际业务 `.vue` 或 `.tsx` 代码路径
      component: "dynamic/one/index",
      meta: {
        title: "comeOn",
        roles: ["admin", "common"],
        showParent: true
      }
    }
  ]
};

// 最简代码，也就是这些字段必须有
const frameRouter = {
  path: "/iframe",
  meta: {
    title: "内嵌 iframe 和外链"
  },
  children: [
    // 内嵌 iframe
    {
      path: "/iframe/pure",
      // name必须写，写法随意
      name: "anything",
      meta: {
        title: "内嵌 iframe",
        // 需要内嵌页面的地址
        frameSrc: "https://pure-admin.cn",
        // 内嵌的iframe页面是否开启首次加载动画，默认true，下面可以不写，如果内嵌的iframe页面已经存在首加载动画，可以将frameLoading设为false
        // frameLoading: true
        keepAlive: true
      }
    },
    // 外链
    {
      // path必须写，必须以 / 开头，推荐格式 / 后跟随意单词，不同的外链path不要重复哦
      path: "/anything",
      // 外链地址写在name属性里
      name: "https://pure-admin.cn",
      meta: {
        title: " 外链"
      }
    }
  ]
};

export default defineFakeRoute([
  {
    url: "/get-async-routes",
    method: "get",
    response: () => {
      return {
        success: true,
        data: [permissionRouter, dynamicOneRouter, frameRouter]
      };
    }
  }
]);
