import { useState } from 'react'

interface UserProfileProps {
  name: string;
  occupation: string;
}

function UserProfile(props: UserProfileProps) {

  const [ likes, setLikes ] = useState<number | null>(1)
  
  const addLike = () => setLikes(likes + 1)

  return (
    <div>
      <p>{props.name}</p>
      <p>{props.occupation}</p>
      <button onClick={addLike}>Like</button> <span>{likes}</span>
    </div>
  );
}

export default UserProfile;
