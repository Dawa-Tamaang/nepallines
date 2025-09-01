import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

const ChatItems = ({ item }) => {
    const router = useRouter(); 

    const openChatRoom = () => {
        router.push({
            pathname: '/chatRoom',
            params: item
        });
    };

    return (
        <TouchableOpacity 
            onPress={openChatRoom}
            style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 10,
                marginVertical: 5,
                borderWidth: 1,
                borderColor: "gray"
            }}
        >
            {/* Profile Image */}
            <Image 
                source={require('../images/profile.png')} 
                style={{ width: 40, height: 40, borderRadius: 20 }} 
            />

            {/* Text Content */}
            <View style={{ flex: 1, marginLeft: 10 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontSize: 16, fontWeight: '600', color: "#182230" }}>Dawa</Text>
                    <Text style={{ fontSize: 14, fontWeight: "500", color: "#667085" }}>Time</Text>
                </View>
                <Text style={{ fontSize: 14, fontWeight: "500", color: "#667085" }}>Message</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ChatItems;
