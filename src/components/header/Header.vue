<template>
    <div>
        <header class="header">
            <a href="" class="logo">
                <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="@/assets/logo.svg"
                transition="scale-transition"
                
                height="50"
                style="padding-top: 15px;"
                />
            </a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
                <li v-for="item in userHeaders" :key="item.name"><a  @click.prevent="goTo(item.route)" :class="{'active' :  item.route === getPath}"><i :class="item.icon" class="mt-1 mr-2"></i> {{item.name}}</a></li>
            </ul>
        </header>
    </div>
</template>
<script>
import { userHeaders } from "@/utils/headers";
export default {
    name: "Header",
    data: () => ({
      homed: false,
      userHeaders,
    }),
    computed: {
        getPath() {
          return this.$route.path;
        }
    },
    created() {},
    methods: {
      goTo(url) {
        switch (url) {
            case '/':
              this.$router.push({ name: 'Home' }).catch(() => {});
               break;
            case '/users':
               this.$router.push({ name: 'Users' }).catch(() => {});
               break;
            case '/about-us':
               this.$router.push({ name: 'About' }).catch(() => {});
               break;
            case '/contacts':
              this.$router.push({ name: 'Contacts' }).catch(() => {});
              break;
         }
      },
    }
}
</script>
<style>
.header {
  background-color: #E8EAF2;
  box-shadow: 1px 1px 4px 0 rgba(0,0,0,.1);
  position: fixed;
  width: 100%;
  z-index: 9999;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #E8EAF2;
}

.header li a {
  display: flex;
  padding: 20px 20px;
  border-right: 1px solid #E8EAF2;
  text-decoration: none;
  color:#8A8FA6;
  font-weight: bold;
  left: 0;
}
.header li a.active {
  color:#3C5DE3;
}

.header li a:hover,
.header .menu-btn:hover {
  color: #3C5DE3;
}
.header li a:active,
.header .menu-btn:active {
  color: #3C5DE3;
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 10px 20px;
  text-decoration: none;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height .2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 32px 20px;
  position: relative;
  user-select: none;
  color: #335CA2;
  
}

.header .menu-icon .navicon {
  background: #335CA2;
  display: block;
  height: 2px;
  position: relative;
  transition: background .2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #335CA2;
  content: '';
  display: block;
  height: 100%;
  position: absolute;
  transition: all .2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 390px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .header li {
    float: left;
  }
  .header li a {
    padding: 20px 30px;
  }
  .header .menu {
    clear: none;
    float: left;
    max-height: none;
  }
  .header .menu-icon {
    display: none;
  }
  .llogin {
    display: none;
  }
}
@media screen and (min-width: 300px) and (max-width: 500px) {
  .llogin {
    display: flex;
  }
  .actions {
    display: none;
  }
  #lang {
    position: absolute;
    top: 0px;
    right: 50px !important;
  }
}
#lang {
    position: absolute;
    top: 0;
    right: 0;
  }
</style>