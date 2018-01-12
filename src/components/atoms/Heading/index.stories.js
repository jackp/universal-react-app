import React from "react";
import { storiesOf } from "@storybook/react";
import { View } from "react-native";

import Heading from ".";

storiesOf("Atoms", module).addWithChapters("Heading", {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <View>
              <Heading level={1}>Primary Heading</Heading>
              <Heading level={2}>Secondary Heading</Heading>
              <Heading level={3}>Tertiary Heading</Heading>
              <Heading>Default Heading</Heading>
            </View>
          ),
        },
      ],
    },
  ],
});
