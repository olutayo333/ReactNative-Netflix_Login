import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, selectCount } from './counterSlice';
import { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, Pressable, Switch, TouchableOpacity, ScrollView, Platform, Modal, Button,
  StatusBar, ActivityIndicator, KeyboardAvoidingView, RefreshControl,
  Alert,
  FlatList
} from 'react-native';
import { router } from 'expo-router';
//import Home from './Components/Home';
import SectionList from './Components/SectionList';
import Flat_List from './Components/Flat_List';

export default function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const [upswitch, setupswitch] = useState(false)
  const [modal, setmodal] = useState(false);
  const [loading, setloading] = useState(false);

  const [name, setname] = useState(""); const [email, setemail] = useState("");
  const [phonenumber, setphonenumber] = useState(""); const [pin, setpin] = useState("");
  const [address, setaddress] = useState(""); const [password, setpassword] = useState("");


  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 5000)
  }, [])

  // REFRESHING A PAGE
  const [refreshing, setrefreshing] = useState(false);
  const onRefresh = () => {
    setrefreshing(true);
    setTimeout(() => {
      Alert.alert("I am refreshed")

      setrefreshing(false)
    }, 2000)
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='position'>
      <View >
        <StatusBar backgroundColor={"red"} barStyle={Platform.OS === "android" ? "light-content" : "dark-content"} />

        {
          loading ?
            (
              <ActivityIndicator color={"red"} size={90} animating={loading} />
            ) :
            (
              <ScrollView showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
              >

                <Text style={{ fontSize: 25, color: "white", fontWeight: 900, marginVertical: 5 }}>Sign In</Text>

                <TextInput placeholder='Name' onChange={(e) => setname(e.target.value)} style={styles.inputStyle} autoComplete="additional-name" autoCapitalize='words' placeholderTextColor={"#ffff"} />
                <TextInput placeholder='Email' onChange={(e) => setemail(e.target.value)} style={styles.inputStyle} keyboardType='email-address' placeholderTextColor={"#ffff"} />
                <TextInput placeholder='Phone number' onChange={(e) => setphonenumber(e.target.value)} style={styles.inputStyle} keyboardType='phone-pad' placeholderTextColor={"#ffff"} />
                <TextInput placeholder='Pin' onchange={(e) => setpin(e.target.value)} style={styles.inputStyle} keyboardType='number-pad' placeholderTextColor={"#ffff"} />
                <TextInput placeholder='Address' onChange={(e) => setaddress(e.target.value)} style={styles.inputStyle} placeholderTextColor={"#ffff"} />
                <TextInput placeholder='Password' onChange={(e) => setpassword(e.target.value)} style={styles.inputStyle} secureTextEntry={true} placeholderTextColor={"#ffff"} />

                <TouchableOpacity onPress={() => setmodal(true)} style={{ backgroundColor: 'red', borderRadius: 5, padding: 10, marginVertical: 5 }}>
                  <Text style={{ color: 'white', textAlign: 'center', fontWeight: '500' }} > Sign in </Text>
                </TouchableOpacity>
                <Text style={{ textAlign: 'center', fontWeight: 50 }}> OR </Text>
                <TouchableOpacity style={{ alignItems: 'center', backgroundColor: '#333333', padding: 10, borderRadius: 5, marginVertical: 5, }}>
                  <Text style={{ color: 'white' }}> Use a Sign-In Code </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ alignItems: 'center', }}>
                  <Text style={{ color: "white" }}> Forgot password?</Text>
                </TouchableOpacity>

                <View style={styles.viewFlex}>
                  <Text style={{ color: "white" }}> Remember me</Text>
                  <Switch thumbColor={"grey"} trackColor={{ true: "white", false: "grey" }} style={{ alignItems: 'center' }} value={upswitch} onValueChange={() => { upswitch === false ? setupswitch(true) : setupswitch(false) }}></Switch>
                </View>

                {/* REDUX */}
                <Text style={{color:"white"}}>Count: {count}</Text>
                <Button title="Increment" onPress={() => dispatch(increment())} />
                <Button title="Decrement" onPress={() => dispatch(decrement())} />

                <Text>New to Netflix? Sign up now.</Text>
                <Text style={{ marginTop: 20, fontSize: 10 }}>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</Text>
                <Button onPress={()=>router.push("/sectionlist")} title="Go to next" /> 
                
                
                {/* MODAL */}
                <Modal visible={modal} animationType='slide' presentationStyle='pageSheet' onRequestClose={() => setmodal(false)}>
                 {/* <Home/> */}
                 <SectionList/>
                  <Flat_List/>
                  <Text> Modal Works </Text>
                  <TouchableOpacity onPress={() => setmodal(false)} style={{ backgroundColor: 'red', borderRadius: 5, padding: 10, marginVertical: 5 }}>
                    <Text style={{ color: 'white', textAlign: 'center', fontWeight: '500' }} > Close </Text>
                  </TouchableOpacity>
                  {/* <Button onPress={()=>setmodal(false)}> Close </Button> */}
                </Modal>
              </ScrollView>
            )
        }
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 20,
    //opacity:0.9,
    //alignItems: 'center',
    justifyContent: 'center',
    //marginTop:50,

  },

  inputStyle: {
    color: 'white', borderRadius: 5, alignItems: 'center',
    borderWidth: 1, padding: 10, marginVertical: 5, borderColor: 'white',
  },

  viewFlex: {
    flexDirection: 'row', gap: 20, alignItems: 'center',
  }
});
