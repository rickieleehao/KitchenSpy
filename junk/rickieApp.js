import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './src/home'
import Playground from './src/playground';
import FileSystemTest from './src/FileSystemTest';

const AppStack = createStackNavigator({
    FileSystemTest: FileSystemTest,
    Home: Home,
    Playground: Playground
});

export default createAppContainer(AppStack);