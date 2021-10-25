import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getToken} from "../redux/store";

export function useToken() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken())
  }, []);
}