import {
  TabBarTop,
} from 'react-navigation'
import DrawerItems from '../../components/drawer-items'
import withHide from '../../hocs/with-component-hide'


export const TabNavigationOptions = {
  tabBarPosition: 'bottom', 
  tabBarComponent: withHide(TabBarTop),
}

export const DrawerOptions = {
  contentComponent: DrawerItems,
}
