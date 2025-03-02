import useTitle from "@hooks/useTitle";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  useTitle("Page 404");
  const navigate = useNavigate();
  const goHome = () => {
    navigate(`/`);
  };

  return (
    <div className="flex-container">
      <div className="text-center">
        <h1>
          <span className="fade-in" id="digit1">
            4
          </span>
          <span className="fade-in" id="digit2">
            0
          </span>
          <span className="fade-in" id="digit3">
            4
          </span>
        </h1>
        <h3 className="fadeIn">KHÔNG TÌM THẤY TRANG NÀY</h3>
        <button type="button" name="button" onClick={goHome}>
          Trang chủ
        </button>
      </div>
    </div>
  );
}
