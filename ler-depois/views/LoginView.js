import React from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

export function LoginView({ navigation }) {

    
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const onPressSignIn = async () => {
    console.log("Trying sign in with user: " + email);
    try {
      await signIn(email, password);
    } catch (error) {
      const errorMessage = `Failed to sign in: ${error.message}`;
      console.error(errorMessage);
      Alert.alert(errorMessage);
    }
  };

  const onPressSignUp = async () => {
    console.log("Trying signup with user: " + email);
    try {
      await signUp(email, password);
      signIn(email, password);
    } catch (error) {
      const errorMessage = `Failed to sign up: ${error.message}`;
      console.error(errorMessage);
      Alert.alert(errorMessage);
    }
  };
  
  return (
    <View>
      <Text>Sign Up or Sign In:</Text>
      <View>
        <TextInput          
          placeholder="email"
          autoCapitalize="none"
        />
      </View>
      <View>
        <TextInput
          placeholder="password"
          secureTextEntry
        />
      </View>
      <Button title="Sign In" />
      <Button title="Sign Up" />
    </View>
  );
}