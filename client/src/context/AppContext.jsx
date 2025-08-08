import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const navigate = useNavigate();
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const { isSignedIn } = useUser();
  const { getToken } = useAuth();
  const { openSignIn } = useClerk();

  const loadCreditData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: { token },
      });
      console.log(data)
      if (data.success) {
        setCredit(data.credits);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeBg = async (image) => {
    try {
      if (!isSignedIn) {
        return openSignIn();
      }
      setImage(image);
      setResultImage(false);
      navigate("/result");

      const token = await getToken();
      const formData = new FormData();
      if (image) formData.append("image", image);

      const { data } = await axios.post(
        `${backendUrl}/api/image/remove-bg`,
        formData,
        { headers: { token } }
      );

      if (data.success) {
        setResultImage(data.resultImage);
        data.creditBalance && setCredit(data.creditBalance);
      } else {
        toast.error(data.message);
        data.creditBalance && setCredit(data.creditBalance);
        if(data.creditBalance === 0){
        navigate("/buy");
        }
      }
    } catch (error) {
      console.log(error);
      toast(error.message);
    }
  };
  {console.log(credit)}
  const value = {
    credit,
    setCredit,
    loadCreditData,
    backendUrl,
    image,
    setImage,
    resultImage,
    setResultImage,
    removeBg,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
