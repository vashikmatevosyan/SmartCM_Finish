import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import img from "../../../assets/images/img.png";
import style from "./style";
import PeopleSvg from "../../../assets/svges/PeopleSvg";
import PasSvg from "../../../assets/svges/PasSvg";
import EyeSvg from "../../../assets/svges/EyeSvg";
import PhoneSvg from '../../../assets/svges/PhoneSvg'
import FbSvg from "../../../assets/svges/FbSvg";
import { useDispatch, useSelector } from "react-redux";
import { getLoginData, getLoginRequest } from "../../../store/actions/user";
import size from "../../../utils/Size";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk-next";
import { requestUserPermission, notificationServices } from "../../../services/notification";
import GoogleSvg from "../../../assets/svges/GoogleSvg";


function Index({ navigation }) {

  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const [page, setPage] = useState("phone");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loginData, setLoginData] = useState({ emailValue: "", passValue: "" });
  const {login} = useSelector((state) => state.user);
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState("");
  const myName = 'Armen Matevosyan'
  const onPressLogin = () => {
    navigation.navigate("ForgotPass");
  };
  const hideAndShow = () => {
    setShow(!show);
  };
  //=================Phone sign in======================================================================================
  const handleLogin  = async () => {
     dispatch(getLoginRequest(true))
    dispatch(getLoginData(myName));
    if (page === "email") {
      navigation.navigate("TabNavigation" , {screen: 'Home'});
    } else if (!confirm) {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      console.log(phoneNumber);
      setConfirm(confirmation);
    } else if (confirm) {
      try {
        console.log('start');
        await confirm.confirm(code);
        dispatch(getLoginData('' + phoneNumber));
        console.log('end');
        navigation.navigate("TabNavigation" , {screen: 'Home'});
      } catch (error) {
        console.log("Invalid code.");
      }
    }
  };
  //=================Google sign in=====================================================================================
  GoogleSignin.configure({
    webClientId: "158772461802-9bp55fm2ohqm42ur538v70h8n85fde3b.apps.googleusercontent.com",
  });
  const signInWithGoogleAsync = async () => {
    dispatch(getLoginRequest(true))
    const { idToken } = await GoogleSignin.signIn();

    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    const user_sign_in = auth().signInWithCredential(googleCredential);

    user_sign_in.then((user) => {
      dispatch(getLoginData(user.additionalUserInfo.profile.name));
      navigation.navigate("TabNavigation" , {screen: 'Home'});
    })
      .catch((error) => {
        console.log(error);
      });
  };
  //=================Facebook sign in=====================================================================================
  const facebookLogin = async () => {
    dispatch(getLoginRequest(true))
    const result = await LoginManager.logInWithPermissions(["public_profile", "email"]);
    if (result.isCancelled) {
      throw "User cancelled the login process";
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw "Something went wrong obtaining access token";
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    const user_sign_in = auth().signInWithCredential(facebookCredential);
    navigation.navigate("TabNavigation" , {screen: 'Home'});
    return user_sign_in;
  };

  function onAuthStateChanged(user) {
    if (user && login){
      if (user.displayName){
    dispatch(getLoginData(user.displayName));
    }
    }
  }
  useEffect(() => {
    requestUserPermission();
    notificationServices();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.container}
    >
      <View style={style.body}>
        <Image
          style={style.image}
          source={img}
        />
        <Text style={style.login}>Log in</Text>
        <View style={{ flexDirection: "row", width: size.size328, justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => setPage("phone")} style={page === "phone" ? {
            ...style.button,
            width: size.size150,
            backgroundColor: "white",
          } : { ...style.button, width: size.size150 }}>
            <Text style={page === "phone" ? { ...style.buttonText, color: "#11493E" } : { ...style.buttonText }}>Phone
              number</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setPage("email")} style={page === "email" ? {
            ...style.button,
            width: size.size150,
            backgroundColor: "white",
          } : { ...style.button, width: size.size150 }}>
            <Text style={page === "email" ? { ...style.buttonText, color: "#11493E" } : { ...style.buttonText }}>Email
              password</Text>
          </TouchableOpacity>
        </View>
        {page === "phone" && !confirm ?
          <View style={style.inputBlock}>
            <PhoneSvg/>
            <TextInput value={phoneNumber} onChangeText={(number) => setPhoneNumber(number)}
                       style={style.email} placeholder="Phone number"></TextInput>
          </View> : page === "phone" && confirm ?
            <View style={style.inputBlock}>
              <TextInput value={code} onChangeText={text => setCode(text)}
                         style={style.email} placeholder="Confirm code"></TextInput>
            </View> :
            <>
              <View style={style.inputBlock}>
                <PeopleSvg />
                <TextInput value={loginData.emailValue}
                           onChangeText={(email) => setLoginData({ ...loginData, emailValue: email })}
                           style={style.email} placeholder="Email"></TextInput>
              </View>
              <View style={style.inputBlock}>
                <PasSvg />
                <TextInput value={loginData.passValue}
                           onChangeText={(pass) => setLoginData({ ...loginData, passValue: pass })}
                           secureTextEntry={show} style={style.pass} placeholder="Password"></TextInput>
                <EyeSvg onPress={hideAndShow} />
              </View>
            </>
        }
        <TouchableOpacity
          onPress={handleLogin}
          style={style.button}
        >
          <Text style={style.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={style.forgetBlock}>
          <Text style={style.forget} onPress={onPressLogin}>Forgot password?</Text>
        </View>
        <View style={page === "phone" ? { ...style.iconsBlock } : { ...style.iconsBlock, height: size.size59 }}>
          <TouchableOpacity onPress={signInWithGoogleAsync}>
            <GoogleSvg/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => facebookLogin()}>
            <FbSvg/>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Index;

