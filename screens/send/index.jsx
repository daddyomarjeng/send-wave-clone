import {
  ActivityIndicator,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import BigList from "react-native-big-list";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useContacts from "../../hooks/useContacts";
import { COLORS } from "../../constant/colors";
import ContactItem from "../../components/ContactItem";
import AppHeader from "../../components/AppHeader";
import SendMoneyLayout from "../../layouts/SendMoneyLayout";

const SendMoneyScreen = () => {
  const contacts = useContacts();
  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [showModal, setShowModal] = useState([]);
  const searchInput = useRef(null);
  const [inputBorderColor, setInputBorderColor] = useState("#111");

  const handleSearch = (text) => {
    setSearch(text);
    const searchResult = contacts.filter(
      (contact) =>
        (contact.phoneNumbers &&
          contact.phoneNumbers[0].number.split(" ").join("").includes(text)) ||
        contact.name.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredContacts(searchResult);
  };

  useEffect(() => {
    if (!contacts) return;
    setFilteredContacts(contacts);
    return () => {
      setFilteredContacts([]);
    };
  }, [contacts]);

  return (
    // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    //   <View style={styles.container}>
    //     <AppHeader title="Send Money" />
    <SendMoneyLayout>
      {!contacts && <ActivityIndicator size="large" color={COLORS.primary} />}
      <View style={styles.contactsContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            ref={searchInput}
            style={[
              styles.searchInput,
              {
                borderColor: inputBorderColor,
                // searchInput?.current?.isFocused() && COLORS.primary,
                // borderColor: searchInput?.current?.onBlur() && "#111",
              },
            ]}
            onBlur={() => setInputBorderColor("#111")}
            onFocus={() => setInputBorderColor(COLORS.primary)}
            placeholder={"TO:"}
            value={search}
            onChangeText={handleSearch}
            autoFocus
          />
        </View>
        <BigList
          //   data={filteredContacts}
          data={filteredContacts}
          ListEmptyComponent={() => <Text>No Contacts found...</Text>}
          renderItem={({ item, index }) => (
            <ContactItem item={item} onPress={() => {}} />
          )}
          itemHeight={60}
          keyExtractor={(item) => item.id.toString()}
          renderHeader={() => (
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <View style={styles.row}>
                <View style={styles.addButton}>
                  <MaterialCommunityIcons name="plus" size={36} color="#FFF" />
                </View>
                <Text style={styles.h1}>Enter a new number</Text>
              </View>
            </TouchableOpacity>
          )}
          headerHeight={80}
        />
      </View>
    </SendMoneyLayout>
    //   </View>
    // </TouchableWithoutFeedback>
  );
};

export default SendMoneyScreen;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   paddingHorizontal: 15,
  //   paddingTop: 30,
  //   backgroundColor: "#fff",
  // },
  contactsContainer: {
    flex: 1,
    // backgroundColor: "red",
  },
  searchContainer: {
    width: "90%",
    maxWidth: 380,
    alignSelf: "center",
  },
  searchInput: {
    paddingVertical: 13,
    // backgroundColor: "#fff",
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginRight: 15,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
