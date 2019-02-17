/*import React from 'react';
import SwipeableTabs from 'react-swipeable-tabs';

export default class TestTabs extends React.Component {
    componentWillMount() {
        this.setState({
            activeItemIndex: 2,
            items: [
                { title: "Editing" },
                { title: "Camera" },
                { title: "Notes" }, ]

        });
    }

    render() {
        return (
            <SwipeableTabs
                noFirstLeftPadding={false}
                noLastRightPadding={false}
                fitItems={false}
                alignCenter={false}
                borderWidthRatio={1}
                activeItemIndex={this.state.activeItemIndex}
                onItemClick={(item, index) => this.setState({ activeItemIndex: index })}
                items={this.state.items}
                borderPosition="top"
                borderThickness={2}
                borderColor="#4dc4c0"
                activeStyle={{
                    color: '#4dc4c0'
                }}
            />
        );
    }
}*/