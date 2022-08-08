import React, { useEffect } from 'react';
import { Button, Text, View, useColorScheme } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from "@rneui/themed";
import ExpoThreeTest from './ExpoThreeTest';

import CrassCollector from '../home/crassCollector';
import WeekFlag from "../home/weekFlag"
import NowTime from "../home/nowTime"
import TaskLisk from '../home/taskList';
import PostTest from "../test/PostTest"


const LeftDrawer = createDrawerNavigator();
const leftMenuList = [
  {
    name: "Home",
    title: "任务列表",
    // icon: "flag-o",
    component: (props) => <BottomTabScreen {...props}></BottomTabScreen>
  },
  {
    name: "PastGoals",
    title: "历史周目标",
    // icon: "flag-o",
    component: (props) => <PastGoals {...props}></PastGoals>
  },
  {
    name: "CompletedTask",
    title: "已完成时刻",
    // icon: "clock-o",
    component: (props) => <CompletedTask {...props}></CompletedTask>
  },
  {
    name: "QuitTask",
    title: "已取消时刻",
    // icon: "tasks",
    component: (props) => <QuitTask {...props}></QuitTask>
  },
  {
    name: "TrashCanTask",
    title: "集草器垃圾桶",
    // icon: "list-alt",
    component: (props) => <TrashCanTask {...props}></TrashCanTask>
  },
  {
    name: "PostList",
    title: "单核工作法文章",
    // icon: "list-alt",
    component: (props) => <PostList {...props}></PostList>
  },
]
function LeftDrawerScreen () {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      screenOptions={({ route }) => ({
        drawerPosition: 'left',
        drawerActiveTintColor: isDarkMode ? '#ffffff' : '#000000',
        drawerInactiveTintColor: '#374151'
      })}
      drawerStyle={{
        backgroundColor: isDarkMode ? '#000000' : '#ffffff'
      }}
    >
      {
        leftMenuList.map((item, index) => {
          return <LeftDrawer.Screen name={item.name} options={{ title: item.title }} key={index} >
            {(props) => {
              return item.component(props)
            }}
          </LeftDrawer.Screen>
        })
      }
    </LeftDrawer.Navigator>
  );
}
function PastGoals () {
  return <View><Text>历史周目标</Text></View>
}
function CompletedTask () {
  return <View><Text>已完成时刻</Text></View>
}
function QuitTask () {
  return <View><Text>已取消时刻</Text></View>
}
function TrashCanTask () {
  return <View><Text>集草器垃圾桶</Text></View>
}
function PostList () {
  return <PostTest>单核工作法文章</PostTest>
}



const Tab = createMaterialBottomTabNavigator();
const bottomMenuList = [
  {
    name: "WeekFlag",
    title: "本周目标",
    icon: "flag",
    component: (props) => <WeekFlag {...props}></WeekFlag>
  },
  {
    name: "NowTime",
    title: "当前时刻",
    icon: "clock-o",
    component: (props) => <NowTime {...props}></NowTime>
  },
  {
    name: "TaskList",
    title: "快捷清单",
    icon: "tasks",
    component: (props) => <TaskLisk {...props}></TaskLisk>
  },
  {
    name: "GrassCollector",
    title: "集草器",
    icon: "list-alt",
    component: (props) => <CrassCollector {...props}><Text>集草器</Text></CrassCollector>
  },

]
function BottomTabScreen () {

  const isDarkMode = useColorScheme() === 'dark'
  BottomTabList = () => {
    let list = []

    return list;
  }
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          for (let item in bottomMenuList) {
            if (route.name === bottomMenuList[item].name) {
              return <Icon name={bottomMenuList[item].icon} size={size} color={color} type='font-awesome' />;
            }
          }
        },
        tabBarActiveTintColor: isDarkMode ? '#ffffff' : '#000000',
        tabBarInactiveTintColor: '#374151',
      })}
      barStyle={{
        backgroundColor: isDarkMode ? '#000000' : '#ffffff'
      }}
    >
      {
        bottomMenuList.map((item, index) => {
          return <Tab.Screen name={item.name} options={{ title: item.title }} key={index} >
            {(props) => {
              return item.component(props)
            }}
          </Tab.Screen>
        })
      }
    </Tab.Navigator>
  )
}


export default function DrawerNavigationTest () {
  return (
    <NavigationContainer>
      <LeftDrawerScreen />
    </NavigationContainer>
  );
}