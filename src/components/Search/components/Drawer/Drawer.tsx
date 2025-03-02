import { CloseOutlined, RedoOutlined } from "@ant-design/icons";
import { Badge, Button, Drawer, FormInstance } from "antd";
import { DrawerPanelProps } from "antd/es/drawer/DrawerPanel";
import DrawerContentSearch from "./DrawerContent";
import { B2BSearchItem } from "@core/components/B2BSearch/type";

type DrawerSearchProps = DrawerPanelProps & {
  searchItems: B2BSearchItem[];
  open: boolean;
  values: any;
  onClear?: () => void;
  handleResetFilter?: () => void;
  formSearch: FormInstance<any>;
};

export default function DrawerSearch({
  open,
  onClose,
  handleResetFilter,
  searchItems,
  values,
  formSearch,
  ...restprops
}: DrawerSearchProps) {
  return (
    <Drawer
      {...restprops}
      forceRender
      rootStyle={{ background: "none" }}
      title={
        <div className="flex flex-row items-center justify-between">
          <span className="text-lg font-bold leading-[28px] ">Bộ lọc</span>

          <div className="flex flex-row gap-2">
            <Button
              type="text"
              onClick={handleResetFilter}
              icon={
                <Badge dot={values ? Object.values(values).some((value) => !!value) : undefined}>
                  <RedoOutlined />
                </Badge>
              }
            />
            <Button
              type="text"
              onClick={onClose}
              rootClassName="border-none flex justify-center items-center p-2"
              icon={<CloseOutlined />}
            />
          </div>
        </div>
      }
      styles={{
        header: { padding: "20px 8px 16px 20px" },
      }}
      placement={"right"}
      closable={false}
      onClose={onClose}
      width={320}
      open={open}
      key={"search-drawer"}
    >
      <DrawerContentSearch formSearch={formSearch} searchItems={searchItems} values={values} />
    </Drawer>
  );
}
