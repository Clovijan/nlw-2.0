import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList/index';
import Favorites from '../pages/Favorites/index';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return(
    <Navigator>
      <Screen name="TeacherList" component={TeacherList}/>
      <Screen name="Favorites" component={Favorites}/>
    </Navigator>
  );
}

export default StudyTabs;