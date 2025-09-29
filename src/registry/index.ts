import type { Registry } from "shadcn/schema";

import { blocks } from "./registry-blocks";
import { components } from "./registry-components";
import { examples } from "./registry-examples";
import { hook } from "./registry-hook";
import { lib } from "./registry-lib";

export const registry = {
  name: "tarunpreetsingh",
  homepage: "https://tarunpreetsingh.com/components",
  items: [
    ...lib,
    ...hook,
    ...components,
    ...blocks,

    // Internal use only
    ...examples,
  ],
} satisfies Registry;
