import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./HomeStack";
import CustomDrawer from "./CustomDrawer/CustomDrawer";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator   
        screenOptions={{ headerShown: false }}
        drawerContent={(props) => (
            <CustomDrawer 
            {...props}/>
        )}
    >
      <Drawer.Screen name="Drawer" component={HomeStack} />
    </Drawer.Navigator>
  );
}

export default DrawerStack;