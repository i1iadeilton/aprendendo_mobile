return (
    <Button
      title="Log Out"
      onPress={() => {
        Alert.alert("Log Out", null, [
          {
            text: "Yes, Log Out",
            style: "destructive",
            onPress: () => {
              navigation.popToTop();
              closeRealm();
              signOut();
            },
          },
          { text: "Cancel", style: "cancel" },
        ]);
      }}
    />
  );