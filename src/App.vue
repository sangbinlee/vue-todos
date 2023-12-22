
<script setup>
import { useDark, useToggle } from "@vueuse/core";
import { onMounted, ref } from "vue";
import { RouterView, useRoute, useRouter } from "vue-router";

import { useBreadcrumb, useColorMode } from "bootstrap-vue-next";

import Header from "./components/Header.vue";
import Footer from "./views/layout/FooterView.vue";
const isDark = useDark();
console.log("isDark.value=", isDark.value);
// const isDark = useDark({
//   selector: 'body',
//   attribute: 'color-scheme',
//   valueDark: 'dark',
//   valueLight: 'light',
// })

const toggleDark = useToggle(isDark);

const root = ref(null);
// const root = ref<HTMLElement | null>(null)
console.log("root", root.value);
const mode = useColorMode({
    selector: root,
});

const changeColor = () => {
    mode.value = mode.value === "dark" ? "light" : "dark";
};

// lifecycle hooks
onMounted(() => {
    console.log(`The root is ${root.value}.`);
    console.log(root.value);
});

const breadcrumb = useBreadcrumb();

const items = [
    {
        text: "Home",
        href: "https://google.com",
    },
    {
        text: "Posts",
        to: { name: "home" },
    },
    {
        text: "Another Story",
        active: true,
    },
];

const addItem = () => {
    breadcrumb.items = items;
    // breadcrumb.items.push(path)
    // inputValue.value = ''
};

const route = useRoute();
const router = useRouter();
console.log("route===============", route);
console.log("router===============", router);
console.log(
    "router.currentRoute.value===============",
    router.currentRoute.value
);
console.log("route.name===============", route.name);

const pathname = location.pathname;
console.log("pathname===============", pathname);
const breadcrumbStringArray = [
    { href: "/", text: "Home" },
    { href: pathname, text: pathname.replace("/", "") },
];
</script>













<template>

    <div ref="root">
        <button @click="toggleDark()">
            <span class="ml-2">{{ isDark ? "Dark" : "Light" }} mode</span>
            <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
        </button>

        <button @click="changeColor()">
            <span class="ml-2">{{ isDark ? "Dark" : "Light" }} mode</span>
            <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
        </button>
        <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

        <div
            class="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle"
        >
            <button
                class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                id="bd-theme"
                type="button"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                aria-label="Toggle theme (auto)"
            >
                <svg class="bi my-1 theme-icon-active" width="1em" height="1em">
                    <use href="#circle-half"></use>
                </svg>
                <span class="visually-hidden" id="bd-theme-text"
                    >Toggle theme</span
                >
            </button>
            <ul
                class="dropdown-menu dropdown-menu-end shadow"
                aria-labelledby="bd-theme-text"
                style=""
            >
                <li>
                    <button
                        type="button"
                        class="dropdown-item d-flex align-items-center"
                        data-bs-theme-value="light"
                        aria-pressed="false"
                    >
                        <svg
                            class="bi me-2 opacity-50 theme-icon"
                            width="1em"
                            height="1em"
                        >
                            <use href="#sun-fill"></use>
                        </svg>
                        Light
                        <svg class="bi ms-auto d-none" width="1em" height="1em">
                            <use href="#check2"></use>
                        </svg>
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        class="dropdown-item d-flex align-items-center"
                        data-bs-theme-value="dark"
                        aria-pressed="false"
                    >
                        <svg
                            class="bi me-2 opacity-50 theme-icon"
                            width="1em"
                            height="1em"
                        >
                            <use href="#moon-stars-fill"></use>
                        </svg>
                        Dark
                        <svg class="bi ms-auto d-none" width="1em" height="1em">
                            <use href="#check2"></use>
                        </svg>
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        class="dropdown-item d-flex align-items-center active"
                        data-bs-theme-value="auto"
                        aria-pressed="true"
                    >
                        <svg
                            class="bi me-2 opacity-50 theme-icon"
                            width="1em"
                            height="1em"
                        >
                            <use href="#circle-half"></use>
                        </svg>
                        Auto
                        <svg class="bi ms-auto d-none" width="1em" height="1em">
                            <use href="#check2"></use>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>

        <Header />
        <BBreadcrumb :items="breadcrumbStringArray" />
        

  
        <div class="container-fluid">
  <div class="row">
    <div class="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu" aria-labelledby="sidebarMenuLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="sidebarMenuLabel">Company name</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="يغلق"></button>
        </div>
        <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2 active" aria-current="page" href="#">
                <svg class="bi"><use xlink:href="#house-fill"></use></svg>
                لوحة القيادة
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <svg class="bi"><use xlink:href="#file-earmark"></use></svg>
                الطلبات
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <svg class="bi"><use xlink:href="#cart"></use></svg>
                المنتجات
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <svg class="bi"><use xlink:href="#people"></use></svg>
                الزبائن
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <svg class="bi"><use xlink:href="#graph-up"></use></svg>
                التقارير
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <svg class="bi"><use xlink:href="#puzzle"></use></svg>
                التكاملات
              </a>
            </li>
          </ul>

          <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>التقارير المحفوظة</span>
            <a class="link-secondary" href="#" aria-label="إضافة تقرير جديد">
              <svg class="bi"><use xlink:href="#plus-circle"></use></svg>
            </a>
          </h6>
          <ul class="nav flex-column mb-auto">
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <svg class="bi"><use xlink:href="#file-earmark-text"></use></svg>
                الشهر الحالي
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <svg class="bi"><use xlink:href="#file-earmark-text"></use></svg>
                الربع الأخير
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <svg class="bi"><use xlink:href="#file-earmark-text"></use></svg>
                التفاعل الإجتماعي
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <svg class="bi"><use xlink:href="#file-earmark-text"></use></svg>
                مبيعات نهاية العام
              </a>
            </li>
          </ul>

          <hr class="my-3">

          <ul class="nav flex-column mb-auto">
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <svg class="bi"><use xlink:href="#gear-wide-connected"></use></svg>
                إعدادات
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link d-flex align-items-center gap-2" href="#">
                <svg class="bi"><use xlink:href="#door-closed"></use></svg>
                خروج
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">لوحة القيادة</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">مشاركة</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">تصدير</button>
          </div>
          <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1">
            <svg class="bi"><use xlink:href="#calendar3"></use></svg>
            هذا الأسبوع
          </button>
        </div>
      </div>

      <canvas class="my-4 w-100" id="myChart" width="1152" height="486" style="display: block; box-sizing: border-box; height: 486px; width: 1152px;"></canvas>

      <h2>عنوان القسم</h2>
      <div class="table-responsive small">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">عنوان</th>
              <th scope="col">عنوان</th>
              <th scope="col">عنوان</th>
              <th scope="col">عنوان</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>بيانات</td>
              <td>عشوائية</td>
              <td>تثري</td>
              <td>الجدول</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>تثري</td>
              <td>مبهة</td>
              <td>تصميم</td>
              <td>تنسيق</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>عشوائية</td>
              <td>غنية</td>
              <td>قيمة</td>
              <td>مفيدة</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>معلومات</td>
              <td>تثري</td>
              <td>توضيحية</td>
              <td>عشوائية</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>الجدول</td>
              <td>بيانات</td>
              <td>تنسيق</td>
              <td>قيمة</td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>قيمة</td>
              <td>مبهة</td>
              <td>الجدول</td>
              <td>تثري</td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>قيمة</td>
              <td>توضيحية</td>
              <td>غنية</td>
              <td>عشوائية</td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>تثري</td>
              <td>مفيدة</td>
              <td>معلومات</td>
              <td>مبهة</td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>بيانات</td>
              <td>عشوائية</td>
              <td>تثري</td>
              <td>الجدول</td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>تثري</td>
              <td>مبهة</td>
              <td>تصميم</td>
              <td>تنسيق</td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>عشوائية</td>
              <td>غنية</td>
              <td>قيمة</td>
              <td>مفيدة</td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>معلومات</td>
              <td>تثري</td>
              <td>توضيحية</td>
              <td>عشوائية</td>
            </tr>
            <tr>
              <td>1,012</td>
              <td>الجدول</td>
              <td>تثري</td>
              <td>تنسيق</td>
              <td>قيمة</td>
            </tr>
            <tr>
              <td>1,013</td>
              <td>قيمة</td>
              <td>مبهة</td>
              <td>الجدول</td>
              <td>تصميم</td>
            </tr>
            <tr>
              <td>1,014</td>
              <td>قيمة</td>
              <td>توضيحية</td>
              <td>غنية</td>
              <td>عشوائية</td>
            </tr>
            <tr>
              <td>1,015</td>
              <td>بيانات</td>
              <td>مفيدة</td>
              <td>معلومات</td>
              <td>الجدول</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div> 
        
        
        
        <RouterView />
        <Footer />
    </div>
</template>


 