import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setToken} from "../redux/store";

export function useToken() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.__token__ !== "undefined") {
      dispatch(setToken(window.__token__));
    }
  }, []);
}