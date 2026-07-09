import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

import { api } from '../../../services/api';
import { Container, Header, AddButton, CategoryImage, EditButton } from './styles';
import { Pencil, Plus } from '@phosphor-icons/react';

export function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('/categories');

      setCategories(data);
    }

    loadCategories();
  }, []);

  function editCategory(category) {
    navigate('/admin/editar-categoria', { state: { category } });
  }

  return (
    <Container>
      <Header>
        <AddButton onClick={() => navigate('/admin/nova-categoria')}>
          <Plus />
          Adicionar Categoria
        </AddButton>
      </Header>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Imagem</TableCell>
              <TableCell align="center">Editar Categoria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow
                key={category.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {category.name}
                </TableCell>
                <TableCell align="center">
                  {category.path ? (
                    <CategoryImage src={category.path} />
                  ) : (
                    'Sem imagem'
                  )}
                </TableCell>
                <TableCell align="center">
                  <EditButton onClick={() => editCategory(category)}>
                    <Pencil />
                  </EditButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}