// 快捷清单
import { useState } from "react"
import { View, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import { Card, Text, Button, Icon, Input, Dialog, ListItem, CheckBox, ButtonGroup, FAB } from "@rneui/themed";

export default function TaskLisk() {
    const [visible, setVisible] = useState(true)
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {
                    taskList.map((l, i) => (
                        // <ListItem key={i} bottomDivider >
                        <ListItem.Swipeable
                            key={i} bottomDivider
                            leftContent={(reset) => (
                                <Button
                                    title="开始任务"
                                    onPress={() => reset()}
                                    icon={{ name: 'play', color: 'white', type: "font-awesome" }}
                                    buttonStyle={{ minHeight: '100%' }}
                                />
                            )}
                            rightContent={(reset) => (
                                <Button
                                    title="移回集草器"
                                    onPress={() => reset()}
                                    icon={{ name: 'delete', color: 'white' }}
                                    buttonStyle={{ minHeight: '100%', backgroundColor: '#D97706' }}
                                />
                            )}
                        >
                            <ListItem.Content>
                                <ListItem.Title>{l.name}</ListItem.Title>
                                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                        // </ListItem>

                    ))
                }
                <View style={{
                    margin: 10,
                }}>
                    <View><Text style={{ textAlign: 'left', fontSize: 8, color: '#6B7280' }}>1. 快捷清单只能待命优先级最高的五个任务, 如果一个任务的优先级排不到前五, 说明这个任务在当下并不是必须要去做的. 这个原则可以帮助你把时间集中在那些更有意义的任务上面</Text></View>
                    <View><Text style={{ textAlign: 'left', fontSize: 8, color: '#6B7280' }}>2. 今天不做的事通通右滑到集草器, 快捷清单只保留今天要做的事.</Text></View>
                </View>
            </ScrollView>

            <FAB
                visible={visible}
                placement="right"
                icon={{ name: 'add', color: 'white' }}
                color="#3B82F6"
            ></FAB>
        </View >
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
    {
        name: "任务一",
        subtitle: "这是任务一",
    },
    {
        name: "任务一",
        subtitle: "这是任务一",
    },
    {
        name: "任务一",
        subtitle: "这是任务一",
    },
]