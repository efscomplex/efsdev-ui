import React from "../../_snowpack/pkg/react.js";
import {Header} from "./Header.js";
export default {
  title: "Example/Header",
  component: Header
};
const Template = (args) => /* @__PURE__ */ React.createElement(Header, {
  ...args
});
export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {}
};
export const LoggedOut = Template.bind({});
LoggedOut.args = {};
