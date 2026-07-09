import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Image } from '@phosphor-icons/react';
import { useState } from 'react';
import { api } from '../../../services/api';
import { useLocation, useNavigate } from 'react-router-dom';
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
  name: yup.string(),
});

export function EditCategory() {
  const [fileName, setFileName] = useState(null);
  const navigate = useNavigate();

  const {
    state: { category },
  } = useLocation();

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

    if (data.file && data.file.length > 0) {
      categoryFormData.append('file', data.file[0]);
    }

    await toast.promise(
      api.put(`/categories/${category.id}`, categoryFormData),
      {
        pending: 'Editando a categoria...',
        success: 'Categoria editada com sucesso',
        error: 'Falha ao editar a categoria, tente novamente',
      }
    );

    setTimeout(() => {
      navigate('/admin/categorias');
    }, 2000);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Label>Nome</Label>
          <Input
            type="text"
            {...register('name')}
            defaultValue={category.name}
          />
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
            {fileName || 'Trocar imagem da Categoria'}
          </LabelUpload>
          <ErrorMessage>{errors?.file?.message}</ErrorMessage>
        </InputGroup>

        <SubmitButton>Editar Categoria</SubmitButton>
      </Form>
    </Container>
  );
}