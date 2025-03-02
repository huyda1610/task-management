declare global {
  interface ImportMeta {
    env: {
      VITE_HOST: string;
      VITE_CLIENT_HOST: string;
      VITE_BASENAME: string;
      VITE_REACT_STRICT_MODE: string;
    };
  }
}
