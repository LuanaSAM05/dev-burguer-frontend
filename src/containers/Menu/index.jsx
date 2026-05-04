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

    
    useEffect(() => {
        async function loadData() {
            try {
                const [categoriesRes, productsRes] = await Promise.all([
                    api.get("/categories"),
                    api.get("/products")
                ]);

                const categoriesData = Array.isArray(categoriesRes.data)
                    ? categoriesRes.data
                    : [];

                const productsData = Array.isArray(productsRes.data)
                    ? productsRes.data
                    : [];

                setCategories([
                    { id: 0, name: "Todas" },
                    ...categoriesData
                ]);

                const formattedProducts = productsData.map((product) => ({
                    ...product,
                    currencyValue: formatPrice(product.price),
                }));

                setProducts(formattedProducts);

            } catch (error) {
                console.log("Erro ao carregar menu:", error);

                setCategories([{ id: 0, name: "Todas" }]);
                setProducts([]);
            }
        }

        loadData();
    }, []);

    
    const categoryId = Number(searchParams.get("categoria")) || 0;

    
    useEffect(() => {
        if (!products.length) {
            setFilteredProducts([]);
            return;
        }

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

            <BackButton onClick={handleGoBack}>
                ← Voltar
            </BackButton>

        </Container>
    );
}