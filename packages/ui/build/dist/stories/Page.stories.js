import React from "../../_snowpack/pkg/react.js";
import {Page} from "./Page.js";
import * as HeaderStories from "./Header.stories.js";
export default {
  title: "Example/Page",
  component: Page
};
const Template = (args) => /* @__PURE__ */ React.createElement(Page, {
  ...args
});
export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args
};
export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args
};
