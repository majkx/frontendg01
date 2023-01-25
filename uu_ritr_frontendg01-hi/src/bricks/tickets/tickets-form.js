//@@viewOn:imports
import { createVisualComponent, Utils, Content, useState } from "uu5g05";
import Config from "./config/config.js";
import Uu5Forms from "uu5g05-forms";
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

const TicketsForm = createVisualComponent({
  //@@viewOn:statics
  uu5Tag: Config.TAG + "TicketsForm",
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
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");

    function onSubmit() {
      let data = {
        name,
        desc
      }
      props.onSave(data);
    }

    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    const attrs = Utils.VisualComponent.getAttrs(props, Css.main());
    const currentNestingLevel = Utils.NestingLevel.getNestingLevel(props, TicketsForm);

    return currentNestingLevel ? (
      <div {...attrs}>
        <Uu5Forms.Form.Provider onSubmit={onSubmit}>
          <Uu5Forms.Form.View>
            <div
              className={Config.Css.css({
                display: "grid",
                rowGap: 8,
                columnGap: 32,
                gridAutoFlow: "column",
                gridTemplateRows: "repeat(4, auto)",
                marginBottom: 8,
              })}
            >
              {"Názov ticketu"}
              <Uu5Forms.Text.Input value={name} name={"name"} type={"text"} onChange={(value) => setName(value.data.value)} />
              {"Popis ticketu"}
              <Uu5Forms.TextArea.Input value={desc} name={"desc"} type={"text"} onChange={(value) => setDesc(value.data.value)} />
              <Uu5Forms.CancelButton onClick={props.onClose}/>
              <Uu5Forms.SubmitButton> Vytvoriť ticket </Uu5Forms.SubmitButton>
            </div>
          </Uu5Forms.Form.View>
        </Uu5Forms.Form.Provider>
      </div>
    ) : null;
    //@@viewOff:render
  },
});

//@@viewOn:exports
export { TicketsForm };
export default TicketsForm;
//@@viewOff:exports
