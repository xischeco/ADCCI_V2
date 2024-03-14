import fileHTML from "../templates/templ-ADCCI-NEW.html";
import fileHTMLRTL from "../templates/templ-ADCCI-NEW-rtl.html";
import { storiesOf } from '@storybook/html';

storiesOf("Components|ADCCI-NEW", module)
  .add("Contents", () => fileHTML, {
  })
  .add("Contents RTL", () => fileHTMLRTL, {
  })

