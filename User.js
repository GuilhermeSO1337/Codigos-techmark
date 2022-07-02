
import Perfil from "../components/header_perfil/header_perfil";
import Agendas from "../components/AsideLeft/asideLeft";
import Center from "../components/Center/center";
import Anuncio from "../components/AsideRight/asideRight";
function User() {
    return(
        <div>
            <Perfil/>
            <Agendas/>
            <Center/>
            <Anuncio/>
        </div>
    )
    
}
export default User;