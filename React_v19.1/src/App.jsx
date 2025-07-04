import { JsxSyntax } from "./components/01-jsx-syntax";
import { EmbeddingExpression } from "./components/02-embedding-expression";
import { FunctionalComponents } from "./components/03-functional-components";
import { ClassComponents } from "./components/04-class-components";
import { Props } from "./components/05-props";
import { UseStateHook } from "./components/Hooks/useState";
import { EventHandling } from "./components/06-event-handling";
import { ConditionalRendering } from "./components/07-conditional-rendering";
import { ListsKeys } from "./components/08-lists-&-keys";
import { ControlledComponent } from "./components/09-controlled-components";
import { UnControlledComponents } from "./components/10-uncontrolled-components";
import { UseStateForm } from "./components/11-useState-form";
import { FormValidation } from "./components/12-form-validation";
import { UseEffect } from "./components/Hooks/useEffect";
import { UseRef } from "./components/Hooks/useRef";
import { UseMemo } from "./components/Hooks/useMemo";
import { UseCallback } from "./components/Hooks/useCallback";
import { Parent } from "./components/Hooks/context/parent";
import { UseReducer } from "./components/Hooks/useReducer";
import { ChildrenProps } from "./components/13-children-props";
import withLoader from "./components/14-HOC";

const ChildrenPropsWithLoader = withLoader(ChildrenProps);

export default function App() {
  return (
    <div className="w-full min-h-screen bg-zinc-800 flex items-center justify-center flex-col py-10">
      <JsxSyntax />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <EmbeddingExpression />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <FunctionalComponents />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <ClassComponents />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <Props name="rafay" />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <UseStateHook />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <EventHandling />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <ConditionalRendering />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <ListsKeys />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <ControlledComponent />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <UnControlledComponents />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <UseStateForm />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <FormValidation />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <UseEffect />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <UseRef />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <UseMemo />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <UseCallback />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <Parent />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <UseReducer />
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <ChildrenProps>
        <p className="text-white font-medium">I am children prop...</p>
      </ChildrenProps>
      <hr className="h-1 my-5 bg-red-800 w-96" />
      <ChildrenPropsWithLoader>
        <p className="text-white font-medium">I am children prop...</p>
      </ChildrenPropsWithLoader>
    </div>
  );
}
