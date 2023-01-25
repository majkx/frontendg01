//@@viewOn:imports
import { createComponent } from "uu5g05";
import Config from "./config/config.js";
import TicketsProvider from "../bricks/tickets/tickets-provider";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const Tickets = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "Tickets",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    const { children } = props;
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return <TicketsProvider />;
    //@@viewOff:render

  },
});

//@@viewOn:exports
export { Tickets };
export default Tickets;
//@@viewOff:exports
