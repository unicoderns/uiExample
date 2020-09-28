import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import AlertComponent from "@/components/AlertComponent.vue";

describe("AlertComponent.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(AlertComponent, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });
});
