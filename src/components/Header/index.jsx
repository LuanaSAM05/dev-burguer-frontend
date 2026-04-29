import {
    Container,
    HeaderLink,
    Navigation,
    Options,
    Profile,
    Logout,
    Content,
    LinkContainer,
    CountBadge
} from "./styles";

import { UserCircle, ShoppingCart } from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";
import { useUser } from "../../hooks/UserContext";
import { useCart } from "../../hooks/CartContext";

export function Header() {

    const navigate = useNavigate();
    const { logout, userInfo } = useUser();
    const { cartQuantity } = useCart();

    const { pathname } = useResolvedPath();

    function logoutUser(){
        logout();
        navigate('/login');
    }

    return (
        <Container>
            <Content>
                <Navigation>
                    <div>
                        <HeaderLink to="/" $isActive={pathname === "/"}>
                            Home
                        </HeaderLink>
                        <hr />
                        <HeaderLink to="/cardapio" $isActive={pathname === "/cardapio"}>
                            Cardápio
                        </HeaderLink>
                    </div>
                </Navigation>

                <Options>
                    <Profile>
                        <UserCircle size={24} color="#fff" />
                        <div>
                            <p>
                                Olá, <span>{userInfo.name}</span>
                            </p>
                            <Logout onClick={logoutUser}>
                                Sair
                            </Logout>
                        </div>
                    </Profile>

                    <LinkContainer onClick={() => navigate('/carrinho')}>
                        <ShoppingCart size={24} color="#fff" />

                        {cartQuantity > 0 && (
                            <CountBadge>
                                {cartQuantity}
                            </CountBadge>
                        )}

                        <HeaderLink to="/carrinho">
                            Carrinho
                        </HeaderLink>
                    </LinkContainer>
                </Options>
            </Content>
        </Container>
    );
}