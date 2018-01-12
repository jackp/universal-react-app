import React from "react";
import { storiesOf } from "@storybook/react";
import { View } from "react-native";

import Input from ".";

storiesOf("Atoms", module).addWithChapters("Input", {
  chapters: [
    {
      sections: [
        {
          title: "Default",
          sectionFn: () => <Input />,
        },
        {
          title: "Autofocus",
          sectionFn: () => <Input autoFocus />,
        },
      ],
    },
  ],
});
