import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Image } from '@phosphor-icons/react';
import { useState } from 'react';
import { api } from '../../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Container,
  Form,
  InputGroup,
  Label,
  Input,
  LabelUpload,
  SubmitButton,
  ErrorMessage,
} from './styles';

const schema = yup.object({
  name: yup.string().required('Digite o nome da categoria'),
  file: yup
    .mixed()
    .test('required', 'Escolha uma imagem para continuar', (value) => {
      return value && value.length > 0;
    })
    .test('fileSize', 'Carregue arquivos ate 3mb', (value) => {
      return value && value.length > 0 && value[0].size <= 3 * 1024 * 1024;
    })
    .test('type', 'Carregue apenas imagens PNG ou JPEG', (value) => {
      return (
        value &&
        value.length > 0 &&
        (value[0].type === 'image/jpeg' || value[0].type === 'image/png')
      );
    }),
});

export function NewCategory() {
  const [fileName, setFileName] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const categoryFormData = new FormData();

    categoryFormData.append('name', data.name);
    categoryFormData.append('file', data.file[0]);

    await toast.promise(api.post('/categories', categoryFormData), {
      pending: 'Adicionando a categoria...',
      success: 'Categoria criada com sucesso',
      error: 'Falha ao adicionar a categoria, tente novamente',
    });

    setTimeout(() => {
      navigate('/admin/categorias');
    }, 2000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        </InputGroup>

        <InputGroup>
          <LabelUpload>
            <Image />
            <input
              type="file"
              {...register('file')}
              accept="image/png, image/jpeg"
              onChange={(value) => {
                setFileName(value.target.files[0]?.name);
                register('file').onChange(value);
              }}
            />
            {fileName || 'Upload da Categoria'}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <SubmitButton>Adicionar Categoria</SubmitButton>
      </Form>
    </Container>
  );
}