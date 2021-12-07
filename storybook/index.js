// if you use expo remove this line
import { withKnobs } from "@storybook/addon-knobs";
import {
  addDecorator,
  configure,
  getStorybookUI,
} from "@storybook/react-native";
import { AppRegistry } from "react-native";
import "./rn-addons";
import { loadStories } from "./storyLoader";

// enables knobs for all stories
addDecorator(withKnobs);

// import stories
configure(() => {
  loadStories();
}, module);

// Refer to https://github.com/storybookjs/react-native/tree/master/app/react-native#getstorybookui-options
// To find allowed options for getStorybookUI
export const StorybookUIRoot = getStorybookUI({});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you should remove this line.
AppRegistry.registerComponent("%APP_NAME%", () => StorybookUIRoot);
