import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Camera, Permissions, FileSystem} from 'expo';

let imageName = [];

export default class CameraExample extends React.Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };
    filePath;

    snap = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            console.log(photo.uri);
            console.log(FileSystem.documentDirectory);
            this.filePath = FileSystem.documentDirectory + "photos/";
            await FileSystem.makeDirectoryAsync(
                this.filePath,{
                intermediates: true
                });
            console.log(this.filePath);
            imageName.push(photo.uri);
            console.log(imageName[0]);
            await FileSystem.copyAsync({
                from: photo.uri,
                to: this.filePath,
            });
        }
    };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type}  ref={ref => { this.camera = ref; }}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.snap();
                                }}>
                                <Text
                                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                                    Snap
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}