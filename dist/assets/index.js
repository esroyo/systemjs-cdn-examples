System.register(["vue"], function(exports, module) {
  "use strict";
  var __vite_style__ = document.createElement("style");
  __vite_style__.textContent = ":root {\n  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;\n  line-height: 1.5;\n  font-weight: 400;\n\n  color-scheme: light dark;\n  color: rgba(255, 255, 255, 0.87);\n  background-color: #242424;\n\n  font-synthesis: none;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-text-size-adjust: 100%;\n}\n\na {\n  font-weight: 500;\n  color: #646cff;\n  text-decoration: inherit;\n}\na:hover {\n  color: #535bf2;\n}\n\nbody {\n  margin: 0;\n  display: flex;\n  place-items: center;\n  min-width: 320px;\n  min-height: 100vh;\n}\n\nh1 {\n  font-size: 3.2em;\n  line-height: 1.1;\n}\n\nbutton {\n  border-radius: 8px;\n  border: 1px solid transparent;\n  padding: 0.6em 1.2em;\n  font-size: 1em;\n  font-weight: 500;\n  font-family: inherit;\n  background-color: #1a1a1a;\n  cursor: pointer;\n  transition: border-color 0.25s;\n}\nbutton:hover {\n  border-color: #646cff;\n}\nbutton:focus,\nbutton:focus-visible {\n  outline: 4px auto -webkit-focus-ring-color;\n}\n\n.card {\n  padding: 2em;\n}\n\n#app {\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 2rem;\n  text-align: center;\n}\n\n@media (prefers-color-scheme: light) {\n  :root {\n    color: #213547;\n    background-color: #ffffff;\n  }\n  a:hover {\n    color: #747bff;\n  }\n  button {\n    background-color: #f9f9f9;\n  }\n}\n\n.read-the-docs[data-v-5ef15e4b] {\n  color: #888;\n}\n\n.logo[data-v-d33f54d8] {\n  height: 6em;\n  padding: 1.5em;\n  will-change: filter;\n  transition: filter 300ms;\n}\n.logo[data-v-d33f54d8]:hover {\n  filter: drop-shadow(0 0 2em #646cffaa);\n}\n.logo.vue[data-v-d33f54d8]:hover {\n  filter: drop-shadow(0 0 2em #42b883aa);\n}\n";
  document.head.appendChild(__vite_style__);
  var defineComponent, ref, openBlock, createElementBlock, Fragment, createElementVNode, toDisplayString, pushScopeId, popScopeId, createTextVNode, createVNode, version, createApp;
  return {
    setters: [(module2) => {
      defineComponent = module2.defineComponent;
      ref = module2.ref;
      openBlock = module2.openBlock;
      createElementBlock = module2.createElementBlock;
      Fragment = module2.Fragment;
      createElementVNode = module2.createElementVNode;
      toDisplayString = module2.toDisplayString;
      pushScopeId = module2.pushScopeId;
      popScopeId = module2.popScopeId;
      createTextVNode = module2.createTextVNode;
      createVNode = module2.createVNode;
      version = module2.version;
      createApp = module2.createApp;
    }],
    execute: function() {
      const style = "";
      const _withScopeId$1 = (n) => (pushScopeId("data-v-5ef15e4b"), n = n(), popScopeId(), n);
      const _hoisted_1$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("h3", null, [
        /* @__PURE__ */ createTextVNode("served over "),
        /* @__PURE__ */ createElementVNode("strong", null, [
          /* @__PURE__ */ createElementVNode("a", { href: "https://systemjs.sh" }, "systemjs.sh CDN")
        ])
      ], -1));
      const _hoisted_2 = { class: "card" };
      const _hoisted_3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("p", null, [
        /* @__PURE__ */ createTextVNode(" Edit "),
        /* @__PURE__ */ createElementVNode("code", null, "components/HelloWorld.vue"),
        /* @__PURE__ */ createTextVNode(" to test HMR ")
      ], -1));
      const _hoisted_4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("p", null, [
        /* @__PURE__ */ createTextVNode(" Check out "),
        /* @__PURE__ */ createElementVNode("a", {
          href: "https://vuejs.org/guide/quick-start.html#local",
          target: "_blank"
        }, "create-vue"),
        /* @__PURE__ */ createTextVNode(", the official Vue + Vite starter ")
      ], -1));
      const _hoisted_5 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("p", null, [
        /* @__PURE__ */ createTextVNode(" Install "),
        /* @__PURE__ */ createElementVNode("a", {
          href: "https://github.com/vuejs/language-tools",
          target: "_blank"
        }, "Volar"),
        /* @__PURE__ */ createTextVNode(" in your IDE for a better DX ")
      ], -1));
      const _hoisted_6 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("p", { class: "read-the-docs" }, "Click on the Vite and Vue logos to learn more", -1));
      const _sfc_main$1 = /* @__PURE__ */ defineComponent({
        __name: "HelloWorld",
        props: {
          msg: {}
        },
        setup(__props) {
          const count = ref(0);
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [
              createElementVNode("h1", null, toDisplayString(_ctx.msg), 1),
              _hoisted_1$1,
              createElementVNode("div", _hoisted_2, [
                createElementVNode("button", {
                  type: "button",
                  onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
                }, "count is " + toDisplayString(count.value), 1),
                _hoisted_3
              ]),
              _hoisted_4,
              _hoisted_5,
              _hoisted_6
            ], 64);
          };
        }
      });
      const HelloWorld_vue_vue_type_style_index_0_scoped_5ef15e4b_lang = "";
      const _export_sfc = (sfc, props) => {
        const target = sfc.__vccOpts || sfc;
        for (const [key, val] of props) {
          target[key] = val;
        }
        return target;
      };
      const HelloWorld = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5ef15e4b"]]);
      const _withScopeId = (n) => (pushScopeId("data-v-d33f54d8"), n = n(), popScopeId(), n);
      const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", null, [
        /* @__PURE__ */ createElementVNode("a", {
          href: "https://vitejs.dev",
          target: "_blank"
        }, [
          /* @__PURE__ */ createElementVNode("img", {
            src: "https://vitejs.dev/logo.svg",
            class: "logo",
            alt: "Vite logo"
          })
        ]),
        /* @__PURE__ */ createElementVNode("a", {
          href: "https://vuejs.org/",
          target: "_blank"
        }, [
          /* @__PURE__ */ createElementVNode("img", {
            src: "https://vuejs.org/logo.svg",
            class: "logo vue",
            alt: "Vue logo"
          })
        ])
      ], -1));
      const _sfc_main = /* @__PURE__ */ defineComponent({
        __name: "App",
        setup(__props) {
          const msg = `Vite + Vue (${version})`;
          return (_ctx, _cache) => {
            return openBlock(), createElementBlock(Fragment, null, [
              _hoisted_1,
              createVNode(HelloWorld, { msg })
            ], 64);
          };
        }
      });
      const App_vue_vue_type_style_index_0_scoped_d33f54d8_lang = "";
      const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d33f54d8"]]);
      createApp(App).mount("#app");
    }
  };
});
