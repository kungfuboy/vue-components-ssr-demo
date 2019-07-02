import VueButton from "./components/Button";

VueButton.install = Vue => {
  Vue.component(VueButton.name, VueButton);
};
const components = [VueButton];

const install = Vue => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== void 666 && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  VueButton
};

export { VueButton };
