<template>
  <BNavbar toggleable="lg" variant="primary" v-b-color-mode="'light'">
    <BNavbarBrand href="/">NavBar</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <!-- <BNavItem href="/">Home</BNavItem> -->
        <!-- <BNavItem href="#" disabled>Disabled</BNavItem> -->
        <BNavItem href="/todo">todo</BNavItem>
        <BNavItem href="/json">json</BNavItem>
        <BNavItem href="/setup">Setup</BNavItem>
        <BNavItem href="/dark">Dark & Light Mode</BNavItem>
        <BNavItem href="/board">Board</BNavItem>
        <BNavItem href="/write">write</BNavItem>
        <BNavItem href="/setup">Setup</BNavItem>
        <BNavItem href="/about">About</BNavItem>

        <!-- 회원가입 -->
        <BNavItem href="/signup">signup</BNavItem>
        <!-- 로그인 -->
        <BNavItem href="/login">login</BNavItem>
        <!-- 모달 -->
        <BNavItem href="/modal">modal</BNavItem>



      </BNavbarNav>
      <!-- Right aligned nav items -->
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavItemDropdown text="Lang" right>
          <BDropdownItem href="#">EN</BDropdownItem>
          <BDropdownItem href="#">ES</BDropdownItem>
          <BDropdownItem href="#">RU</BDropdownItem>
          <BDropdownItem href="#">FA</BDropdownItem>
        </BNavItemDropdown>
        <BNavItemDropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <BDropdownItem href="#">Profile</BDropdownItem>
          <BDropdownItem href="#">Sign Out</BDropdownItem>

        </BNavItemDropdown>
      </BNavbarNav>
      <BNavForm class="d-flex">
        <BFormInput class="me-2" placeholder="Search" />
        <BButton type="submit" variant="outline-success">Search</BButton>
      </BNavForm>
    </BCollapse>
  </BNavbar>





  
</template>

<script setup>
// import {vBColorMode} from 'bootstrap-vue-next'
// const currentColor = ref<'light' | 'dark'>('dark')
// const changeColor = () => {
//   currentColor.value = currentColor.value === 'dark' ? 'light' : 'dark'
// }
</script>

<style lang="scss" scoped>
</style>