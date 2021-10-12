import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {tokenContext} from "../../../../context/tokenContext";

interface IUserData {
  name?: string;
  iconImg?: string;
}

type UserData = {
  name?: string;
  icon_img?: string;
}

export function useUserData (): IUserData {
  const token = useContext(tokenContext);
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