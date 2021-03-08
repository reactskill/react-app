import UserProfile, { UserProfileProps } from './components/UserProfile'

function App() {

  const userInfo: UserProfileProps = {
    name: 'coolguy25',
    occupation: 'tutorial maker'
  }

  return (
    <div>
      <UserProfile { ...userInfo } />
    </div>
  );
}

export default App;
