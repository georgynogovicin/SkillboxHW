import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserAsync} from "../../../../../redux/me/actions";
import {MeState} from "../../../../../redux/me/meStore";
import {RootState} from "../../../../../redux/store";

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData () {
  const token = useSelector<RootState, string>(state => state.token);
  const data = useSelector<RootState, MeState>(state => state.me);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(getUserAsync())
  }, [token])

  return data;
}