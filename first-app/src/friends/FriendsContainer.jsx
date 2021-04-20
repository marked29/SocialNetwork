import StoreContext from '../StoreContext';
import Friends from './Friends';



const FriendsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          let state = store.getState();
          return <Friends friendsPage={state.friendsPage}/>;
        }
      }
    </StoreContext.Consumer>
    );
}

export default FriendsContainer;