import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import Forms from "./component/Forms";
import Header from "./component/Header";

export default function App() {
  return (
    <View style={styles.container}>
      {/* top bar */}
      <Header />

      {/* body */}
     <Forms />

      {/* footer */}
      <View style={{ backgroundColor: "green" }}>
        <Text>Footer component</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    backgroundColor: "blue",
    color: "#fff",
    padding: 5,
    paddingHorizontal: 20,
  },

});
