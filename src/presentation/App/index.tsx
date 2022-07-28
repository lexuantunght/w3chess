import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Sidebar from '@common/components/Sidebar';
import Titlebar from '@common/components/Titlebar';
import {
    IoExtensionPuzzleOutline,
    IoExtensionPuzzle,
    IoGameControllerOutline,
    IoGameController,
    IoTrophyOutline,
    IoTrophy,
    IoSchoolOutline,
    IoSchool,
} from 'react-icons/io5';
import Home from '../Home';
import Puzzle from '../Puzzle';

const menuItems = [
    {
        name: 'home',
        path: '/',
        title: 'Home',
        icon: <IoGameController size={30} />,
        outlineIcon: <IoGameControllerOutline size={30} />,
    },
    {
        name: 'puzzle',
        path: '/puzzle',
        title: 'Puzzle',
        icon: <IoExtensionPuzzle size={30} />,
        outlineIcon: <IoExtensionPuzzleOutline size={30} />,
    },
    {
        name: 'practice',
        path: '/practice',
        title: 'Practice',
        icon: <IoSchool size={30} />,
        outlineIcon: <IoSchoolOutline size={30} />,
    },
    {
        name: 'rank',
        path: '/rank',
        title: 'Rank',
        icon: <IoTrophy size={30} />,
        outlineIcon: <IoTrophyOutline size={30} />,
    },
];

const App = () => {
    return (
        <div className="app-container">
            <HashRouter>
                <Sidebar items={menuItems} />
                <div className="app-main">
                    <Titlebar />
                    <Switch>
                        <Route path="/puzzle" component={Puzzle} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </HashRouter>
        </div>
    );
};

export default App;
