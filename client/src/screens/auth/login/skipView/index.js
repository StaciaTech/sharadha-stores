import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { ContinueButton } from "@otherComponents";
import images from "@utils/images";
import styles from "./styles";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import { TouchableOpacity } from "react-native-gesture-handler";
export default skipView = ({ onPress }) => {
  React.useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "323778747839-4e0g91eg4mpp4vucqgolcmh5mm78o9vs.apps.googleusercontent.com",
        
      // offlineAccess: true,
    });
  }, []);

  const GoogleSingUp = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken, accessToken } = await GoogleSignin.signIn();
      console.log("idToken:", idToken, accessToken);
      if (!idToken) {
        throw new Error("Google Sign-In did not return an idToken.");
      }
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(
        googleCredential
      );
      console.log("User Info:", userCredential.user);
      Alert.alert(
        "Login Successful!",
        `Welcome ${userCredential.user.displayName}`
      );
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      Alert.alert("Error", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await GoogleSignin.signOut();
      console.log("User signed out");
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  }

  return (
    <View>
      <View style={styles.skipContainer}>
        <Image source={images.divider} style={styles.divider} />
        {/* <Text style={styles.skipText}>Skip For Now</Text> */}
      </View>
      {/* <ContinueButton text={"Continue As Guest"} onPress={onPress} /> */}
      <TouchableOpacity onPress={GoogleSingUp}>
        <Text style={{ color: '#000000', textAlign: 'center', fontSize: 20 }}>Google</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={{ color: '#000000', textAlign: 'center', fontSize: 20 }}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};
