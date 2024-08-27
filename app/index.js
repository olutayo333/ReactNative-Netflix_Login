import { StyleSheet, Text, View } from "react-native";
import Appp from "../App";
import SectionList from "../Components/SectionList";
import Flat_List from "../Components/Flat_List";
import { store } from "../store";
import { Provider } from "react-redux";

export default function Page() {
  return (
    <View style={styles.container}>
        <Provider store={store}>
          <Appp />
          {/* <SectionList />
          <Flat_List /> */}
        </Provider>
       {/* <Appp/> */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    //padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
