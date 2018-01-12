import React from "react";
import { storiesOf } from "@storybook/react";
import { Text, View } from "react-native";

import Button from ".";

storiesOf("Atoms", module).addWithChapters("Button", {
  chapters: [
    {
      sections: [
        {
          title: "Default",
          sectionFn: () => (
            <Button>
              <Text>Default</Text>
            </Button>
          ),
        },
      ],
    },
  ],
});
