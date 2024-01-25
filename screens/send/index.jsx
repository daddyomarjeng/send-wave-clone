import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import BigList from "react-native-big-list";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useContacts from "../../hooks/useContacts";
import { COLORS } from "../../constant/colors";
import ContactItem from "../../components/ContactItem";
import AppHeader from "../../components/AppHeader";

const SendMoneyScreen = () => {
  const contacts = useContacts();
  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  const handleSearch = (text) => {
    // setFilteredContacts(con)
  };
  useEffect(() => {
    if (!contacts) return;
    setFilteredContacts(contacts);
    return () => {
      setFilteredContacts([]);
    };
  }, [contacts]);
  return (
    <View style={styles.container}>
      <AppHeader title="Send Money" />
      {!contacts && <ActivityIndicator size="large" color={COLORS.primary} />}
      <View style={styles.contactsContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder={"TO:"}
            value={search}
            onChangeText={handleSearch}
            // autoFocus
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
    </View>
  );
};

export default SendMoneyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
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
