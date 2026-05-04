import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useUser } from "../../hooks/UserContext";

import Logo from "../../assets/logo.png";
import { Button } from "../../components/Button";
import { api } from '../../services/api';

import {
    Container,
    Form,
    InputContainer,
    LeftContainer,
    RightContainer,
    Title,
    Link
} from "./styles";

export function Login() {
    const navigate = useNavigate();
    const { putUserData } = useUser();

    const schema = yup
        .object({
            email: yup.string()
                .email('Digite um email valido')
                .required('O email e obrigatorio'),
            password: yup.string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres')
                .required('Digite uma senha'),
        })
        .required();

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    function fillDemoCredentials() {
        setValue('email', 'demo@devburguer26.com');
        setValue('password', '1234567');
    }

    const onSubmit = async (data) => {
        try {
            const { data: userData } = await toast.promise(
                api.post('/sessions', {
                    email: data.email,
                    password: data.password,
                }),
                {
                    pending: 'Verificando seus dados',
                    success: {
                        render() {
                            setTimeout(() => {
                                if (userData?.admin) {
                                    navigate('/admin/pedidos');
                                } else {
                                    navigate('/home'); 
                                }
                            }, 2000);
                            return 'Seja Bem-Vindo(a) 👌';
                        },
                    },
                    error: 'Email ou Senha Incorretos 🤯',
                }
            );

            putUserData(userData);

        } catch (error) {
            console.error(error);
            toast.error('Erro inesperado. Tente novamente mais tarde 😢');
        }
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburguer" />
            </LeftContainer>
            <RightContainer>
                <Title>Olá, seja bem vindo ao <span>Dev Burguer</span>!
                    <br />
                    Acesse com seu <span>Login</span> e senha.
                </Title>

                <div style={{
                    background: '#1f1f1f',
                    backgroundImage: 'linear-gradient(135deg, #1f1f1f 0%, #2c2c2c 100%)',
                    border: '3px solid #fff',
                    borderRadius: '8px',
                    padding: '4px 8px',
                    marginTop: '20px',
                    fontSize: '16px',
                    color: '#fff',
                }}>
                    <strong>✔ Acesso Demo</strong>
                    <p style={{ margin: '5px 0 2px', fontSize: '13px', }}>📧 demo@devburguer26.com</p>
                    <p style={{ margin: '0 0 8px', fontSize: '13px', }}>🔑 1234567</p>
                    <button
                        type="button"
                        onClick={fillDemoCredentials}
                        style={{
                            background: '#9758a6',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '4px',
                            padding: '4px 12px',
                            cursor: 'pointer',
                            fontSize: '25px',
                            fontFamily: 'Road Rage, sans-serif',
                        }}
                    >
                        Preencher automaticamente
                    </button>
                </div>

                <Form onSubmit={handleSubmit(onSubmit)}>
                    <InputContainer>
                        <label>E-mail</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>
                    <Button type="submit">Entrar</Button>
                    <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link></p>
                </Form>
            </RightContainer>
        </Container>
    );
}