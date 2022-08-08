// 快捷清单
import { View, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Card, Text, Button, Icon, Input, Dialog, ListItem, CheckBox, ButtonGroup, FAB } from "@rneui/themed";
import { useState } from 'react';

export default function CrassCollector() {
    const [visible, setVisible] = useState(true)
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {
                    taskList.map((l, i) => (

                        <ListItem.Swipeable
                            key={i} bottomDivider
                            leftContent={(reset) => (
                                <Button
                                    title="快捷清单"
                                    onPress={() => reset()}
                                    icon={{ name: 'play', color: 'white', type: "font-awesome" }}
                                    buttonStyle={{ minHeight: '100%' }}
                                />
                            )}
                            rightContent={(reset) => (
                                <Button
                                    title="移到回收站"
                                    onPress={() => reset()}
                                    icon={{ name: 'delete', color: 'white' }}
                                    buttonStyle={{ minHeight: '100%', backgroundColor: '#DC2626' }}
                                />
                            )}
                        >
                            <ListItem.Content>
                                <ListItem.Title>{l.name}</ListItem.Title>
                                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    ))
                }
                <View style={{
                    margin: 10,
                }}>
                    <View><Text style={{ textAlign: 'left', fontSize: 8, color: '#6B7280' }}>1. 集草器负责收集你的一些灵感和创意, 记录下来, 在合适的时候去实现它们.</Text></View>
                    <View><Text style={{ textAlign: 'left', fontSize: 8, color: '#6B7280' }}>2. 建议每周做一次除草, 集草器的意义在于及时的对一些灵感做出一些反应. 而不是让过时的任务越积越多, 变成我们的负担</Text></View>
                    <View><Text style={{ textAlign: 'left', fontSize: 8, color: '#6B7280' }}>3. 尽量不要记录那些重复性的任务. 比如每天睡前要刷牙, 这件事可能很重要. 但更好的方法还是养成一个好的习惯. 而不是需要一个 App 每天提醒你刷牙.</Text></View>
                </View>
            </ScrollView>
            <FAB
                visible={visible}
                placement="right"
                icon={{ name: 'add', color: 'white' }}
                color="#3B82F6"
            ></FAB>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 0,
    },
})

let taskList = [
    {
        name: "这是任务一",
        subtitle: "这是任务一",
    },
    {
        name: "任务一",
        subtitle: "这是任务一",
    },
]