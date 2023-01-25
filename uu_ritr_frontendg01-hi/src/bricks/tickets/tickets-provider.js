//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g05";
import UU5 from "uu5g04";
import Config from "./config/config.js";
import Calls from "../../calls";
import TicketsView from "../tickets/tickets-view";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:helpers
//@@viewOff:helpers

const TicketsProvider = createComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TicketsProvider",
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

    function ticketsList(){
      return Calls.ticketsList();
    }

    function ticketCreate(data){
      console.log(data);
      return Calls.ticketCreate(data);
    }

    //@@viewOff:private

    //@@viewOn:hooks
    const callResult = useDataObject({
      handlerMap: {
        load: ticketsList,
        create: ticketCreate
      }
    })
    //@@viewOff:hooks

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const { state, data, handlerMap, errorData } = callResult;

    switch(state){
      case "pendingNoData":
      case "pending" :
        return "Loading"
      case "ready" :
      case "readyNoData":
        return <TicketsView data={data} onCreate={handlerMap.create}/>
    }

    //@@viewOff:render
  },
});

//@@viewOn:exports
export { TicketsProvider };
export default TicketsProvider;
//@@viewOff:exports
