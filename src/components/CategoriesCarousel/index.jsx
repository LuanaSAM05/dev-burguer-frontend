import { api } from "../../services/api.js";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
    Container,
    Title,
    ContainerItems,
    CategoryButton
} from "./styles.js";

import { useNavigate } from "react-router-dom";

export function CategoriesCarousel() {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
        desktop: { breakpoint: { max: 3000, min: 1280 }, items: 4 },
        tablet: { breakpoint: { max: 1280, min: 690 }, items: 3 },
        mobile: { breakpoint: { max: 690, min: 0 }, items: 2 }
    };

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("/categories");
            setCategories(data);
        }

        loadCategories();
    }, []);

    return (
        <Container>
            <Title>Categorias</Title>

            <Carousel
                responsive={responsive}
                infinite
                containerClass="carousel-container"
                itemClass="carousel-item"
            >
                {categories.map((category) => (
                    <ContainerItems
                        key={category.id}
                        imageUrl={category.path}
                        onClick={() => {
                            navigate(`/cardapio?categoria=${category.id}`);
                        }}
                    >
                        <CategoryButton as="div">
                            {category.name}
                        </CategoryButton>
                    </ContainerItems>
                ))}
            </Carousel>
        </Container>
    );
}