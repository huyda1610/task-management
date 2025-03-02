import useTitle from "@hooks/useTitle";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function ForbiddenPage() {
  useTitle("Page 403");
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/`);
  };

  return (
    <div className="relative m-auto bg-white">
      <div className="flex flex-col items-center justify-center gap-5">
        <h3 className="text-[40px] text-[#FF9500]">Opps! Giới hạn truy cập ...</h3>
        <img src="./am/images/apps/403_image.svg" alt="403_img" className="h-auto w-full max-w-[500px]" />
        <span className="text-[24px] text-textSecondary">
          Bạn không có quyền truy cập trang này, vui lòng liên hệ ISC hỗ trợ!
        </span>
        <Button onClick={goHome} size="large" type="primary" className="mt-[24px] bg-info-darker hover:opacity-80">
          Quay lại trang chủ
        </Button>
      </div>
    </div>
  );
}
