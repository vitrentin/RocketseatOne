import { RiShutDownLine } from "react-icons/ri"
import { useAuth } from "../../hooks/auth"
import { api } from "../../../../rocketnotes-back/src/services/api"
import avatarPlaceholder from "../../assets/avatar.svg"
import { Container, Profile, Logout } from "./styles"
import { useNavigate } from "react-router-dom"
export function Header() {
  const { signOut, user } = useAuth()
  const navigation = useNavigate()
  function handleSignOut() {
    navigation("/")
    signOut()
  }
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder
  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={user.name} />
        <div>
          <span>Bem vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine></RiShutDownLine>
      </Logout>
    </Container>
  )
}
