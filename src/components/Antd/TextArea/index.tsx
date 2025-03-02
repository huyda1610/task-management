import TextArea from "antd/es/input/TextArea";
import { TextAreaProps } from "antd/lib/input";
import { formGetPlaceholder } from "../Form/utils";

type AntTextAreaProps = TextAreaProps & {};

function AntTextArea({ ...props }: AntTextAreaProps) {
  return (
    <TextArea
      {...props}
      showCount={props?.showCount ?? true}
      maxLength={props?.maxLength ?? 512}
      rows={props?.rows ?? 4}
      placeholder={formGetPlaceholder(props?.placeholder, "Nhập")}
    />
  );
}

export default AntTextArea;
