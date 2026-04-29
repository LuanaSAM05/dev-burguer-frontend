import { useEffect, useState } from "react";
import {
    Container,
    Banner,
    CategoryMenu,
    ProductsContainer,
    CategoryButton,
    BackButton
} from "./styles";

import { api } from "../../services/api";
import { formatPrice } from "../../utils/formatPrice";
import { CardProduct } from "../../components/CardProduct";
import { useNavigate, useSearchParams } from "react-router-dom";

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    function handleGoBack() {
        navigate(-1);
    }

    // 🔵 CARREGA DADOS
    useEffect(() => {
        async function loadData() {
            const [categoriesRes, productsRes] = await Promise.all([
                api.get("/categories"),
                api.get("/products")
            ]);

            setCategories([
                { id: 0, name: "Todas" },
                ...categoriesRes.data
            ]);

            const formattedProducts = productsRes.data.map((product) => ({
                ...product,
                currencyValue: formatPrice(product.price)
            }));

            setProducts(formattedProducts);
        }

        loadData();
    }, []);

    // 🔥 CATEGORIA DA URL
    const categoryId = Number(searchParams.get("categoria")) || 0;

    // 🔵 FILTRO
    useEffect(() => {
        if (!products.length) return;

        if (categoryId === 0) {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                products.filter(
                    (product) => product.category_id === categoryId
                )
            );
        }
    }, [products, categoryId]);

    return (
        <Container>

            <Banner>
                <h1>
                    O MELHOR
                    <br />
                    HAMBÚRGUER
                    <br />
                    ESTÁ AQUI!
                    <span>Esse cardápio está irresistível!</span>
                </h1>
            </Banner>

            <CategoryMenu>
                {categories.map((category) => (
                    <CategoryButton
                        key={category.id}
                        $isActiveCategory={category.id === categoryId}
                        onClick={() =>
                            navigate(`/cardapio?categoria=${category.id}`)
                        }
                    >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredProducts.map((product) => (
                    <CardProduct
                        key={product.id}
                        product={product}
                    />
                ))}
            </ProductsContainer>

            {/* 🔥 BOTÃO DE VOLTAR MAIS BONITO */}
            <BackButton onClick={handleGoBack}>
                ← Voltar
            </BackButton>

        </Container>
    );
}