import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";

import "@ant-design/v5-patch-for-react-19";
import { store } from "@stores/index.js";
import { themes } from "@themes/index.js";
import { ConfigProvider } from "antd";
import viVN from "antd/es/locale/vi_VN";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import React from "react";
import { Provider } from "react-redux";

// Adding custom methods to Array, Number, and String
import { SidebarProvider } from "@core/provider/sidebar-provider/index.js";
import "@core/type/array";
import "@core/type/env";
import "@core/type/number";
import "@core/type/string";

dayjs.locale("vi");
dayjs.extend(utc);
dayjs.extend(timezone);

const isStrictMode = import.meta.env.VITE_REACT_STRICT_MODE === "true";

createRoot(document.getElementById("root")!).render(
  isStrictMode ? (
    <React.StrictMode>
      <ConfigProvider locale={viVN} theme={{ ...themes.default }}>
        <Provider store={store}>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </Provider>
      </ConfigProvider>
    </React.StrictMode>
  ) : (
    <ConfigProvider locale={viVN} theme={{ ...themes.default }}>
      <Provider store={store}>
        <SidebarProvider>
          <App />
        </SidebarProvider>
      </Provider>
    </ConfigProvider>
  ),
);

