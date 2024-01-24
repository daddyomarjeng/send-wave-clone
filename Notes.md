# Expo Contacts

- [Docs](https://docs.expo.dev/versions/latest/sdk/contacts/)

## Install

```bash
npx expo install expo-contacts
```

## Configuration in app.json/app.config.js

```json
{
  "expo": {
    "plugins": [
      [
        "expo-contacts",
        {
          "contactsPermission": "Allow $(PRODUCT_NAME) to access your contacts."
        }
      ]
    ]
  }
}
```

- Create a hook to get contacts

```jsx
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
        });
        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();

    return () => {
      setContacts([]);
    };
  }, []);

  return contacts;
}
```

# Instal React Native Big List

- [Docs](https://www.npmjs.com/package/react-native-big-list)
- ## Install

```bash
npm install react-native-big-list
```

- Use it

```jsx
import BigList from "react-native-big-list";
```
