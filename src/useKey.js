import { useEffect } from "react";
export function useKey(key, action) {
  useEffect(
    function () {
      function useCallback(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", useCallback);

      return function () {
        document.removeEventListener("keydown", useCallback);
      };
    },
    [key, action]
  );
}
