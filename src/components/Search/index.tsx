import AntForm from "@components/Antd/Form";
import ShareRenderIf from "@components/RenderIf";
import { cn } from "@core/utils/cn";
import { convert } from "@core/utils/convert";
import { Form, FormProps } from "antd";
import { useEffect, useMemo } from "react";
import SearchItems from "./components/Search/Items";
import SearchMore from "./components/Search/More";
import ResultSearch from "./components/Search/Result";
import { ShareSearchProps } from "./type";

let timeoutId: any | undefined;

function ShareSearch({
  searchItems,
  totalResult,
  className,
  values,
  onValuesChange,
  defaultValues = {},
  showResult = true,
}: ShareSearchProps) {
  const [formSearch] = Form.useForm();
  const formWatch = Form.useWatch([], formSearch);
  const result = useMemo(() => formWatch, [formWatch]);

  useEffect(() => {
    formSearch.setFieldsValue(defaultValues);
  }, []);

  useEffect(() => {
    if (!values) return;
    formSearch.setFieldsValue(values);
  }, [values]);

  useEffect(() => {
    // Hủy bỏ timeout khi component unmount
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const handleChangeValue = (changedValues: any, allValues: any) => {
    if (!onValuesChange) return;
    onValuesChange(convert.trimStringsInObject(allValues), changedValues);
  };

  const onValuesChangeForm: FormProps["onValuesChange"] = (changedValues, allValues) => {
    //Write Debouce 300ms
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    // Thiết lập một timeout mới
    timeoutId = setTimeout(() => {
      // Sau khi timeout kết thúc, cập nhật request
      handleChangeValue(changedValues, allValues);
    }, 300);
  };

  const handleRemoveFilter = (key: string, value: string | number) => {
    const isExistInObject = Object.keys(defaultValues).some((item) => item === key);
    const valueIsArray = Array.isArray(result[key]);

    // Value có default value, reset về default value
    if (isExistInObject) {
      handleChangeValue(defaultValues[key], { ...result, [key]: defaultValues[key] });
      return formSearch.setFieldValue(key, defaultValues[key]);
    }

    // Form value là array
    if (valueIsArray) {
      const remainValue: (string | number)[] = result[key].find((item: string) => item === value);
      formSearch.setFieldValue(key, remainValue?.length ? remainValue : null);
      return handleChangeValue(value, { ...result, [key]: remainValue?.length ? remainValue : null });
    }

    handleChangeValue(null, { ...result, [key]: null });
    formSearch.resetFields([key]);
  };

  const handleResetAll = () => {
    formSearch.resetFields();
    //Reset to default value
    formSearch.setFieldsValue(defaultValues);
    if (onValuesChange) onValuesChange({}, defaultValues);
  };

  return (
    <article className="mb-4 flex flex-col">
      <AntForm
        autoComplete="off"
        form={formSearch}
        defaultValue={defaultValues}
        onValuesChange={onValuesChangeForm}
        className={cn("flex w-fit flex-col", className)}
        preserve={false}
      >
        {/*/!* Filter *!/*/}
        <section className="search flex flex-row items-center gap-2">
          {/* Input Search */}
          <SearchItems searchItems={searchItems.filter((item) => !item.isDrawer)} />
          {/* End Input Search */}

          {/* More */}
          <ShareRenderIf ifTrue={searchItems.filter((item) => item.isDrawer).length > 0}>
            <SearchMore
              values={result}
              searchItems={searchItems.filter((item) => item.isDrawer)}
              handleResetFilter={handleResetAll}
              formSearch={formSearch}
            />
          </ShareRenderIf>
          {/* End More */}
        </section>
        {/*/!* End Filter *!/*/}
      </AntForm>

      {/*/!* Result Filter *!/*/}
      <ShareRenderIf ifTrue={showResult}>
        <ResultSearch
          totalResult={totalResult}
          searchItems={searchItems}
          values={result}
          handleRemoveFilter={handleRemoveFilter}
          handleResetFilter={handleResetAll}
        />
      </ShareRenderIf>
    </article>
  );
}

export default ShareSearch;
