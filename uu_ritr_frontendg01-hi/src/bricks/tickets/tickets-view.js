//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState, useRef } from "uu5g05";
import Uu5Tiles from "uu5tilesg02";
import Uu5Elements from "uu5g05-elements";
import Uu5TilesElements from "uu5tilesg02-elements";
import Plus4u5Elements from "uu_plus4u5g02-elements";
import TicketsForm from "./tickets-form";
import Config from "./config/config.js";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:css
const Css = {
  main: () => Config.Css.css({}),
};
//@@viewOff:css

//@@viewOn:helpers
//@@viewOff:helpers

const TicketsView = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TicketsView",
  nestingLevel: ["areaCollection", "area"],
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
    let [open, setOpen] = useState(false);
    const modalRef = useRef();
    const COLUMN_LIST = [
      { value: "name", header: "Názov ticketu" },
      { value: "desc", header: "Popis" },
      { value: "date", header: "Dátum" },
      { header: "Akcie", type:"actionList" }

    ]

    function getActionList(){
      let actionList = [
        {
          icon: "mdi-plus",
          tooltip: "Pridat novy ticket",
          onClick: () => addNewTicket()
        }
      ]
      return actionList;
    }

    function getTileActionList({rowList,data}) {
      let itemList = [
        {
          icon: "mdi-minus",
          tooltip: "Odobrat ticket",
          onClick: () => removeTicket()
        }
      ]
      return itemList;
    }

    function removeTicket(data){
      console.log()
    }

    function addNewTicket(){
      setOpen(true);
    }

    function closeModal(){
      setOpen(false);
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, TicketsView);
    return currentNestingLevel ? (
      <div {...attrs}>
        <Plus4u5Elements.IdentificationBlock header={"Zoznam ticketov"} actionList={getActionList()} headerSeparator={true} card={"full"}>
          <Uu5TilesElements.List getActionList={getTileActionList} view={"grid"} columnList={COLUMN_LIST} data={props.data.itemList} />
        </Plus4u5Elements.IdentificationBlock>

        <Uu5Elements.Modal header={"Vytvorenie noveho ticketu"} open={open} closeOnEsc={true} closeOnOverlayClick={true} closeOnButtonClick={true}>
          <TicketsForm onSave={props.onCreate} onClose={closeModal}/>
        </Uu5Elements.Modal>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { TicketsView };
export default TicketsView;
//@@viewOff:exports
