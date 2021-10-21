import axios from "axios";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../redux/store";

interface IUserData {
  name?: string;
  iconImg?: string;
}

type UserData = {
  name?: string;
  icon_img?: string;
}

export function useUserData (): IUserData {
  const token = useSelector<RootState, string>(state => state.token);
  const [data, setData] = useState<IUserData>({})

  useEffect(() => {
    if (token) {
      axios.get<UserData>(
        'https://oauth.reddit.com/api/v1/me',
        {
          headers: {Authorization: `bearer ${token}`}
        }
      )
      .then((res) => {
        const userData = res.data;
        setData({name: userData.name, iconImg: userData.icon_img});
      })
      .catch(console.log)
    }
  }, [token])

  return data;
}