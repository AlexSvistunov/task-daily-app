import Auth from "../Auth/Auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../utils/routes";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addUserToDataBase = async (email) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        mail: email
      });
    
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const onClickAuth = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userDetails) => {
        console.log(userDetails);
        dispatch(setUser({ email }));
        navigate(ROUTES.LANDINGPAGE);
        addUserToDataBase(email);
        navigate(ROUTES.TODOAPP)
      })

      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <Auth propWord={"Sign Up"} onClickAuth={onClickAuth} />
    </>
  );
};

// redux persist

export default SignUp;
