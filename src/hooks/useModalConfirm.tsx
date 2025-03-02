import { ShareIcon } from "@components/Svg";
import { Modal, ModalFuncProps } from "antd";
import { useState } from "react";

type ModalProps = ModalFuncProps;

const closeButtonIcon = <ShareIcon.SolarCloseCircle className="mt-1" />;
const okButtonIcon = <ShareIcon.SolarCheckCircle className="mt-1" />;

const useModalConfirm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const confirm = (props?: ModalProps): void => {
    if (isVisible) {
      return;
    }
    setIsVisible(true);
    Modal.confirm({
      ...props,
      cancelButtonProps: props?.cancelButtonProps ?? {
        icon: closeButtonIcon,
      },
      okButtonProps: props?.okButtonProps ?? {
        icon: okButtonIcon,
        className: "bg-primary hover:!bg-primary-light",
      },
      styles: {
        header: {
          padding: "16px",
        },
        body: {
          padding: "16px",
        },
      },
      title: props?.title ?? "Xác nhận!",
      content: props?.content ?? "Bạn muốn thực hiện hành động này?",
      centered: true,
      afterClose: () => {
        if (props?.afterClose) props?.afterClose();
        setIsVisible(false);
      },
    });
  };

  const warning = (props?: ModalProps): void => {
    if (isVisible) {
      return;
    }
    setIsVisible(true);
    Modal.warning({
      ...props,
      cancelButtonProps: props?.cancelButtonProps ?? { icon: closeButtonIcon },
      okButtonProps: props?.okButtonProps ?? { icon: okButtonIcon },
      title: props?.title ?? "Cảnh báo!",
      content: props?.content ?? "Hành động này có thể nguy hiểm",
      centered: true,
      afterClose: () => {
        if (props?.afterClose) props?.afterClose();
        setIsVisible(false);
      },
    });
  };

  const info = (props?: ModalProps): void => {
    if (isVisible) {
      return;
    }
    setIsVisible(true);
    Modal.info({
      ...props,
      cancelButtonProps: props?.cancelButtonProps ?? { icon: closeButtonIcon },
      okButtonProps: props?.okButtonProps ?? { icon: okButtonIcon },
      title: props?.title ?? "Thông tin!",
      content: props?.content ?? "Hành động đang được xử lý vui lòng chờ trong giây lát!",
      centered: true,
      afterClose: () => {
        if (props?.afterClose) props?.afterClose();
        setIsVisible(false);
      },
    });
  };

  const error = (props?: ModalProps): void => {
    if (isVisible) {
      return;
    }
    setIsVisible(true);
    Modal.error({
      ...props,
      cancelButtonProps: props?.cancelButtonProps ?? { icon: closeButtonIcon },
      okButtonProps: props?.okButtonProps ?? { icon: okButtonIcon },
      title: props?.title ?? "Xảy ra lỗi!",
      content: props?.content ?? "Quá trình xử lý gặp lỗi, Vui lòng quay lại sau!",
      centered: true,
      afterClose: () => {
        if (props?.afterClose) props?.afterClose();
        setIsVisible(false);
      },
    });
  };

  return {
    confirm,
    warning,
    info,
    error,
  };
};

export default useModalConfirm;
