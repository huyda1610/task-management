import AntButton from "@components/Antd/Button";
import { ShareSearchProps } from "@components/Search/type";
import { FormInstance } from "antd";
import { useState } from "react";
import DrawerSearch from "../Drawer/Drawer";

type SearchMoreProps = ShareSearchProps & {
  handleResetFilter?: () => void;
  formSearch: FormInstance<any>;
};

export default function SearchMore({ searchItems, values, handleResetFilter, formSearch }: SearchMoreProps) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AntButton onClick={showDrawer} color="primary" variant="outlined">
        Filter
      </AntButton>

      <DrawerSearch
        values={values}
        handleResetFilter={handleResetFilter}
        searchItems={searchItems}
        open={open}
        onClose={onClose}
        prefixCls=""
        formSearch={formSearch}
      />
    </>
  );
}
