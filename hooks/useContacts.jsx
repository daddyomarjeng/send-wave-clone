import React, { useEffect, useState } from "react";
import * as Contacts from "expo-contacts";

export default function useContacts() {
  const [contacts, setContacts] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [
            Contacts.Fields.Emails,
            Contacts.Fields.FirstName,
            Contacts.Fields.LastName,
            Contacts.Fields.PhoneNumbers,
          ],
          //   name: "",
        });
        if (data.length > 0) {
          setContacts(data);
          // const contact = data[0];
          // console.log(contact);
          //   data[].
        } else {
          setContacts([]);
        }
      }
    })();
  }, []);
  return contacts;
}
